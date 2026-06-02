# Personal Fund Manager & Stock Trading App

A comprehensive stock trading and portfolio management application with AI-powered recommendations, real-time market data, and performance analytics.

## 🎯 Features

### Core Features
- **Daily Recommendations**: AI-powered stock buy/sell recommendations based on real-time market data
- **Portfolio Management**: Upload portfolio via CSV or connect directly to demat accounts
- **Performance Analytics**: Track recommendation accuracy and missed opportunities
- **Risk-Based Strategy**: Recommendations align with user's financial goals, timeline, and risk appetite

### User Features
- Real-time market data and price tracking
- Portfolio evaluation and analysis
- Historical recommendation tracking (daily, weekly, monthly, yearly)
- Performance gap analysis
- Opportunity cost calculation
- Demat account integration (optional)

## 🏗️ Project Structure

```
fund-manager-stock-trading/
├── backend/                    # Node.js Express API
├── frontend/                   # React + TypeScript
├── ml-service/                 # Python ML/Recommendation Engine
├── database/                   # Database migrations & schemas
├── docs/                       # API documentation & guides
└── docker-compose.yml          # Docker orchestration
```

## 🚀 Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | React, TypeScript, Tailwind CSS |
| Backend | Node.js, Express.js, PostgreSQL |
| ML/Recommendations | Python, scikit-learn, pandas |
| Real-time | WebSockets, Socket.io |
| Market Data | NSE/BSE APIs, Finnhub |
| Deployment | Docker, Docker Compose |
| Auth | JWT, bcrypt |

## 📋 User Journey

1. **User Opens App** → Dashboard with portfolio overview
2. **View Recommendations** → AI-powered buy/sell signals aligned with risk profile
3. **Portfolio Management** → Import via CSV or connect demat account
4. **Performance Analysis** → Track recommendation accuracy and missed opportunities
5. **Execute Trades** → Optional demat integration for order placement

## 🔧 Getting Started

### Prerequisites
- Node.js 18+
- Python 3.8+
- PostgreSQL 13+
- Docker & Docker Compose

### Installation

```bash
# Clone repository
git clone https://github.com/arpit98garg/fund-manager-stock-trading.git
cd fund-manager-stock-trading

# Using Docker (recommended)
docker-compose up -d

# Manual setup
# Backend
cd backend && npm install && npm run dev

# Frontend (new terminal)
cd frontend && npm install && npm start

# ML Service (new terminal)
cd ml-service && pip install -r requirements.txt && python app.py
```

## 📚 API Documentation

See `docs/API.md` for detailed endpoint specifications.

## 🤖 Recommendation Engine

- Technical Analysis (RSI, MACD, Moving Averages)
- Sentiment Analysis (Market sentiment scoring)
- Portfolio Optimization (Risk-adjusted recommendations)
- User Profiling (Personalized recommendations)

## 🔐 Security

- JWT authentication
- Rate limiting
- Encrypted credentials
- Input validation

## 📝 License

MIT License
