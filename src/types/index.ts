export interface PriceData {
  price: number;
  timestamp: number;
}

export interface PredictionResult {
  currentPrice: number;
  predictedPrice: number;
  confidence: number;
  timestamp: number;
  wasCorrect?: boolean;
}

export interface PredictionHistory {
  prediction: PredictionResult;
  actualPrice: number;
  wasCorrect: boolean;
}