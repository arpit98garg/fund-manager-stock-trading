# Fund Manager API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

## Endpoints

### Authentication

#### POST /auth/register
Register a new user
```json
{
  "email": "user@example.com",
  "password": "password123",
  "firstName": "John",
  "lastName": "Doe"
}
```

#### POST /auth/login
Login user
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

### Portfolio

#### GET /portfolio
Fetch user portfolio

#### POST /portfolio/upload-csv
Upload portfolio via CSV file

#### POST /portfolio/connect-demat
Connect demat account

#### GET /portfolio/holdings
Get current holdings

### Recommendations

#### GET /recommendations/today
Get today's recommendations

#### GET /recommendations/personalized
Get personalized recommendations based on user profile

#### GET /recommendations/history?period=daily|weekly|monthly|yearly
Get historical recommendations

### Performance

#### GET /performance/metrics?period=daily|weekly|monthly|yearly
Get performance metrics

#### GET /performance/accuracy
Get recommendation accuracy

#### GET /performance/missed-opportunities
Get missed trading opportunities

#### GET /performance/performance-gaps
Get performance gaps and analysis

### Market Data

#### GET /market/stock/:symbol
Get stock data for a symbol

#### GET /market/indices
Get NSE/BSE indices data

#### GET /market/trending
Get trending stocks

#### GET /market/search?query=symbol
Search for stocks

---

## WebSocket Events

### Subscribe to Market Data
```javascript
socket.emit('subscribe-market-data', ['INFY', 'TCS', 'WIPRO']);
```

### Market Data Update
```javascript
socket.on('market-data-update', (data) => {
  // Real-time market data
});
```
