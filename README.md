# Game Analytics Dashboard

Mini Dashboard cho Game Analytics với real-time data và CRUD operations.

## 📋 Mục lục

- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Project Structure](#project-structure)
- [Technology Stack](#technology-stack)

## Prerequisites

Trước khi bắt đầu, đảm bảo bạn đã cài đặt:

- **Node.js**: >= 16.x (khuyến nghị 18.x hoặc cao hơn)
- **npm**: >= 8.x (hoặc yarn/pnpm)
- **Git**: Để clone repository

Kiểm tra phiên bản:
```bash
node --version
npm --version
```

## Setup

### 1. Clone Repository

```bash
git clone <repository-url>
cd interview-web
```

### 2. Setup Backend

```bash
cd backend
npm install
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

## Running the Application

### Backend

Chạy backend server:

```bash
cd backend
npm run start:dev
```

Backend sẽ chạy tại: **http://localhost:5001**

**Các lệnh khác:**
- `npm run start` - Chạy production mode
- `npm run build` - Build project
- `npm run test` - Chạy unit tests
- `npm run test:e2e` - Chạy e2e tests

### Frontend

Chạy frontend development server:

```bash
cd frontend
npm start
```

Frontend sẽ tự động mở tại: **http://localhost:3000**

**Các lệnh khác:**
- `npm run build` - Build production
- `npm test` - Chạy tests

### Chạy cả Backend và Frontend

Mở 2 terminal windows:

**Terminal 1 - Backend:**
```bash
cd backend
npm run start:dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

## API Endpoints

Base URL: `http://localhost:5001`

### Analytics Endpoints

#### 1. Get All Analytics
```http
GET /analytics
```

**Query Parameters (Optional):**
- `gameId` (string): Filter by game ID
- `playerId` (string): Filter by player ID
- `minScore` (number): Minimum score
- `maxScore` (number): Maximum score
- `startDate` (string): Start date (ISO format)
- `endDate` (string): End date (ISO format)

**Example:**
```bash
GET /analytics?gameId=game1&minScore=100
```

**Response:**
```json
[
  {
    "id": 1,
    "gameId": "game1",
    "playerId": "player1",
    "score": 150,
    "timestamp": "2024-01-15T10:30:00.000Z"
  }
]
```

#### 2. Get Analytics by ID
```http
GET /analytics/:id
```

**Example:**
```bash
GET /analytics/1
```

**Response:**
```json
{
  "id": 1,
  "gameId": "game1",
  "playerId": "player1",
  "score": 150,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

#### 3. Create Analytics Entry
```http
POST /analytics
```

**Request Body:**
```json
{
  "gameId": "game1",
  "playerId": "player1",
  "score": 150,
  "timestamp": "2024-01-15T10:30:00.000Z" // Optional, auto-generated if not provided
}
```

**Response:**
```json
{
  "id": 1,
  "gameId": "game1",
  "playerId": "player1",
  "score": 150,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

#### 4. Update Analytics Entry
```http
PUT /analytics
```

**Request Body:**
```json
{
  "id": 1,
  "gameId": "game1",
  "playerId": "player1",
  "score": 200,
  "timestamp": "2024-01-15T10:30:00.000Z"
}
```

#### 5. Delete Analytics Entry
```http
DELETE /analytics/:id
```

**Example:**
```bash
DELETE /analytics/1
```

#### 6. Get Summary Statistics
```http
GET /analytics/summary
```

**Query Parameters (Optional):**
- Same as Get All Analytics

**Example:**
```bash
GET /analytics/summary?gameId=game1
```

**Response:**
```json
{
  "total": 100,
  "averageScore": 150.5,
  "maxScore": 500,
  "minScore": 10,
  "totalGames": 100,
  "uniquePlayers": 25,
  "uniqueGames": 5
}
```

### Error Responses

**400 Bad Request:**
```json
{
  "statusCode": 400,
  "message": "Score must be a positive number",
  "error": "Bad Request"
}
```

**400 Bad Request (Missing Fields):**
```json
{
  "statusCode": 400,
  "message": "gameId and playerId are required",
  "error": "Bad Request"
}
```

## Project Structure

```
interview-web/
├── backend/                 # NestJS Backend
│   ├── src/
│   │   ├── analytics/      # Analytics feature module
│   │   │   ├── base/       # Use case & Interop layers
│   │   │   ├── in-mem-analytics/  # Repository implementation
│   │   │   └── analytics.controller.ts
│   │   ├── domain/         # Domain layer (interfaces & entities)
│   │   ├── utils/          # Utilities
│   │   └── main.ts         # Application entry point
│   ├── test/               # E2E tests
│   └── package.json
│
├── frontend/                # React Frontend
│   ├── src/
│   │   ├── components/     # React components
│   │   │   ├── analytics/  # Analytics components
│   │   │   ├── dashboard/  # Dashboard components
│   │   │   └── layout/     # Layout components
│   │   ├── store/          # Redux store
│   │   │   ├── slices/     # Redux slices
│   │   │   └── thunks/     # Async thunks
│   │   ├── services/       # API services
│   │   ├── types/          # TypeScript types
│   │   └── App.tsx
│   └── package.json
│
├── ARCHITECTURE.md         # Architecture documentation
├── PROCESS.md              # Development process documentation
└── README.md               # This file
```

## Technology Stack

### Backend
- **Framework**: NestJS 10.x
- **Language**: TypeScript 5.x
- **Architecture**: Clean Architecture
- **Storage**: In-memory (có thể thay bằng database)

### Frontend
- **Framework**: React 19.x
- **Language**: TypeScript 4.x
- **State Management**: Redux Toolkit 2.x
- **UI Libraries**: Material-UI 7.x, Ant Design 6.x
- **HTTP Client**: Axios 1.x

## Environment Variables

### Backend
Tạo file `.env` trong thư mục `backend/` (optional):
```
PORT=5001
```

### Frontend
Tạo file `.env` trong thư mục `frontend/` (optional):
```
REACT_APP_API_URL=http://localhost:5001
```

Mặc định:
- Backend: `http://localhost:5001`
- Frontend: `http://localhost:3000`

## Troubleshooting

### Backend không chạy được
- Kiểm tra port 5001 có đang được sử dụng không
- Đảm bảo đã cài đặt dependencies: `npm install`
- Kiểm tra Node.js version >= 16.x

### Frontend không kết nối được Backend
- Đảm bảo backend đang chạy tại `http://localhost:5001`
- Kiểm tra CORS settings trong backend
- Kiểm tra biến môi trường `REACT_APP_API_URL`

### Port conflicts
- Backend: Thay đổi PORT trong `.env` hoặc `main.ts`
- Frontend: Sử dụng `PORT=3001 npm start` để chạy trên port khác

## Testing

### Backend Tests
```bash
cd backend
npm run test          # Unit tests
npm run test:e2e      # E2E tests
npm run test:cov      # Coverage report
```

### Frontend Tests
```bash
cd frontend
npm test
```

## Build for Production

### Backend
```bash
cd backend
npm run build
npm run start:prod
```

### Frontend
```bash
cd frontend
npm run build
```

Build output sẽ nằm trong thư mục `frontend/build/`

## Documentation

- [ARCHITECTURE.md](./ARCHITECTURE.md) - Chi tiết về kiến trúc hệ thống
- [PROCESS.md](./PROCESS.md) - Quá trình phát triển và sử dụng AI tools

## License

UNLICENSED
