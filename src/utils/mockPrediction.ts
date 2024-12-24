import { PriceData, PredictionResult, PredictionHistory } from '../types';

const BASE_PRICE = 620;

export function generateMockPrice(basePrice: number): number {
  const change = (Math.random() - 0.5) * 4; // Random value between -2 and 2
  return basePrice * (1 + change / 100);
}

export function predictPrice(historicalData: PriceData[]): PredictionResult {
  const currentPrice = historicalData[historicalData.length - 1].price;
  const predictedPrice = generateMockPrice(currentPrice);
  const confidence = 75 + Math.random() * 20; // Random confidence between 75-95%
  
  return {
    currentPrice,
    predictedPrice,
    confidence,
    timestamp: Date.now()
  };
}

export function generateMockHistory(): PredictionHistory[] {
  return Array.from({ length: 10 }, (_, i) => {
    const timestamp = Date.now() - (10 - i) * 300000; // 5 minutes intervals
    const predictedPrice = generateMockPrice(BASE_PRICE);
    const actualPrice = generateMockPrice(BASE_PRICE);
    
    return {
      prediction: {
        currentPrice: BASE_PRICE,
        predictedPrice,
        confidence: 75 + Math.random() * 20,
        timestamp
      },
      actualPrice,
      wasCorrect: i !== 3 // Make the 4th prediction incorrect
    };
  });
}