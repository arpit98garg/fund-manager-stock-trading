# Setup Guide

## Prerequisites
- Node.js 18+
- Python 3.8+
- PostgreSQL 13+
- Docker & Docker Compose (optional)
- Git

## Manual Setup

### 1. Clone Repository
```bash
git clone https://github.com/arpit98garg/fund-manager-stock-trading.git
cd fund-manager-stock-trading
```

### 2. Backend Setup
```bash
cd backend

# Copy environment file
cp .env.example .env

# Install dependencies
npm install

# Start development server
npm run dev
```
Backend runs on http://localhost:5000

### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start
```
Frontend runs on http://localhost:3000

### 4. ML Service Setup
```bash
cd ../ml-service

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start ML service
python app.py
```
ML Service runs on http://localhost:5001

### 5. Database Setup
```bash
# Create database
psql -U postgres -c "CREATE DATABASE fund_manager;"

# Run migrations
psql -U postgres fund_manager < database/init.sql
```

## Docker Setup (Recommended)

```bash
# Build and start all services
docker-compose up -d

# Check status
docker-compose ps

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Environment Variables

Update `.env` file with your configuration:

```bash
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/fund_manager

# JWT
JWT_SECRET=your-secret-key

# API Keys
FINNHUB_API_KEY=your-finnhub-key
NSE_API_KEY=your-nse-key

# Demat Integration
DEMAT_BROKER_API_KEY=your-demat-key
```

## Verification

Check if all services are running:

```bash
# Backend
curl http://localhost:5000/health

# Frontend
curl http://localhost:3000

# ML Service
curl http://localhost:5001/health
```

## Troubleshooting

### Database Connection Error
```bash
# Check PostgreSQL is running
psql -U postgres -c "SELECT version();"

# Verify connection string in .env
```

### Port Already in Use
```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 <PID>
```

### Python Virtual Environment Issues
```bash
# Deactivate current environment
deactivate

# Create new environment
rm -rf venv
python -m venv venv
```

## Next Steps

1. Configure market data API keys
2. Set up demat broker integration
3. Train ML models with historical data
4. Customize recommendation parameters
5. Deploy to production
