import React from 'react';
import { LineChart, TrendingUp, TrendingDown } from 'lucide-react';
import { PredictionResult } from '../types';

interface PriceChartProps {
  prediction: PredictionResult;
}

export function PriceChart({ prediction }: PriceChartProps) {
  const isPriceUp = prediction.predictedPrice > prediction.currentPrice;
  const priceDiff = ((prediction.predictedPrice - prediction.currentPrice) / prediction.currentPrice * 100).toFixed(2);
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Price Prediction</h2>
        <LineChart className="w-6 h-6 text-blue-500" />
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <p className="text-sm text-gray-500">Current Price</p>
          <p className="text-2xl font-bold">${prediction.currentPrice.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Predicted Price (5m)</p>
          <p className="text-2xl font-bold">${prediction.predictedPrice.toFixed(2)}</p>
        </div>
      </div>
      
      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div className="flex items-center">
          {isPriceUp ? (
            <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
          ) : (
            <TrendingDown className="w-5 h-5 text-red-500 mr-2" />
          )}
          <span className={`font-semibold ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
            {isPriceUp ? '+' : ''}{priceDiff}%
          </span>
        </div>
        <div className="text-sm text-gray-500">
          Confidence: {prediction.confidence.toFixed(1)}%
        </div>
      </div>
    </div>
  );
}