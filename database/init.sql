-- Create users table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    risk_appetite VARCHAR(50), -- low, moderate, high
    financial_goal VARCHAR(255),
    timeline_years INTEGER,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create portfolio table
CREATE TABLE IF NOT EXISTS portfolio (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    stock_symbol VARCHAR(20),
    quantity INTEGER,
    purchase_price DECIMAL(10, 2),
    current_price DECIMAL(10, 2),
    purchase_date DATE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, stock_symbol)
);

-- Create recommendations table
CREATE TABLE IF NOT EXISTS recommendations (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    stock_symbol VARCHAR(20),
    action VARCHAR(10), -- BUY, SELL
    confidence_score DECIMAL(3, 2),
    target_price DECIMAL(10, 2),
    reasoning TEXT,
    period VARCHAR(20), -- daily, weekly, monthly, yearly
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    executed BOOLEAN DEFAULT FALSE
);

-- Create recommendation_tracking table
CREATE TABLE IF NOT EXISTS recommendation_tracking (
    id SERIAL PRIMARY KEY,
    recommendation_id INTEGER NOT NULL REFERENCES recommendations(id),
    executed_price DECIMAL(10, 2),
    executed_at TIMESTAMP,
    profit_loss DECIMAL(10, 2),
    status VARCHAR(20), -- pending, executed, missed
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create performance_metrics table
CREATE TABLE IF NOT EXISTS performance_metrics (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL REFERENCES users(id),
    period VARCHAR(20), -- daily, weekly, monthly, yearly
    total_recommendations INTEGER,
    executed_recommendations INTEGER,
    accuracy_rate DECIMAL(5, 2),
    avg_return DECIMAL(10, 2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create market_data table
CREATE TABLE IF NOT EXISTS market_data (
    id SERIAL PRIMARY KEY,
    stock_symbol VARCHAR(20),
    current_price DECIMAL(10, 2),
    previous_close DECIMAL(10, 2),
    high DECIMAL(10, 2),
    low DECIMAL(10, 2),
    volume BIGINT,
    timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create indices
CREATE INDEX idx_user_id ON portfolio(user_id);
CREATE INDEX idx_recommendation_user ON recommendations(user_id);
CREATE INDEX idx_stock_symbol ON market_data(stock_symbol);
CREATE INDEX idx_created_at ON recommendations(created_at);
