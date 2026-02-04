export interface Analytics {
  id: number;
  gameId: string;
  playerId: string;
  score: number;
  timestamp: string; // ISO string from API
}

export interface AnalyticsFilter {
  gameId?: string;
  playerId?: string;
  minScore?: number;
  maxScore?: number;
  startDate?: string; // ISO string
  endDate?: string; // ISO string
}

export interface AnalyticsSummary {
  total: number;
  averageScore: number;
  maxScore: number;
  minScore: number;
  totalGames: number;
  uniquePlayers: number;
  uniqueGames: number;
}

export interface CreateAnalyticsRequest {
  gameId: string;
  playerId: string;
  score: number;
  timestamp?: string; // Optional, will be set by backend if not provided
}
