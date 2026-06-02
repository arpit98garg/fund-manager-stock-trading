# Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   Client (React Web)                    │
└─────────────────────────────────────────────────────────┘
                           │
                           ↓
┌─────────────────────────────────────────────────────────┐
│           API Gateway (Express.js Backend)              │
│  ├── Authentication (JWT)                               │
│  ├── Portfolio Management                               │
│  ├── Recommendation Routing                             │
│  └── WebSocket (Real-time Market Data)                  │
└─────────────────────────────────────────────────────────┘
            │              │              │
            ↓              ↓              ↓
    ┌──────────────┐ ┌──────────────┐ ┌──────────────┐
    │ PostgreSQL   │ │ Redis Cache  │ │ ML Service   │
    │ (Database)   │ │              │ │ (Python)     │
    └──────────────┘ └──────────────┘ └──────────────┘
            │                                 │
            │                                 ↓
            │                         ┌──────────────────┐
            │                         │ Market Data APIs │
            │                         │ (NSE/BSE/Yahoo)  │
            │                         └──────────────────┘
            ↓
    ┌──────────────────┐
    │ Demat Brokers    │
    │ (Optional)       │
    └──────────────────┘
```

## Data Flow

### 1. User Authentication
- User registers/logs in
- Backend generates JWT token
- Frontend stores token in localStorage

### 2. Portfolio Management
- User uploads CSV or connects demat account
- Backend parses and stores holdings
- Frontend displays portfolio summary

### 3. Recommendation Generation
- Scheduled job runs ML service
- ML service fetches market data
- Generates recommendations based on:
  - Technical Analysis
  - Sentiment Analysis
  - User Risk Profile
  - Portfolio Composition
- Recommendations stored in database

### 4. Real-time Market Data
- Client connects via WebSocket
- Server pushes updates on price changes
- Frontend updates UI in real-time

### 5. Performance Tracking
- System tracks recommendation execution
- Calculates accuracy metrics
- Identifies missed opportunities

## Key Components

### Backend (Node.js/Express)
- API endpoints for all user actions
- JWT authentication middleware
- WebSocket server for real-time updates
- Recommendation engine interface
- Market data aggregation

### Frontend (React)
- Responsive dashboard
- Portfolio management UI
- Real-time charts and analytics
- Recommendation display
- Performance metrics visualization

### ML Service (Python)
- Stock technical analysis
- Sentiment analysis models
- Portfolio optimization algorithms
- Risk profiling engine
- Recommendation scoring system

### Database (PostgreSQL)
- User profiles and authentication
- Portfolio holdings
- Historical recommendations
- Performance metrics
- Market data cache

## Scalability Considerations

1. **Caching**: Redis for frequently accessed data
2. **Async Jobs**: Celery for background ML tasks
3. **API Rate Limiting**: Prevent abuse
4. **Database Indexing**: Optimized queries
5. **Microservices**: Separate ML service for horizontal scaling
