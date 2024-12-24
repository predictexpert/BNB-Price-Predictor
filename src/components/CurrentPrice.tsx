import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface CurrentPriceProps {
  price: number;
  previousPrice: number;
}

export function CurrentPrice({ price, previousPrice }: CurrentPriceProps) {
  const priceChange = price - previousPrice;
  const isPriceUp = priceChange >= 0;
  const changePercent = ((priceChange / previousPrice) * 100).toFixed(2);

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-600 mb-2">Current BNB Price</h2>
      <div className="flex items-center justify-between">
        <span className="text-4xl font-bold text-gray-800">${price.toFixed(2)}</span>
        <div className={`flex items-center ${isPriceUp ? 'text-green-500' : 'text-red-500'}`}>
          {isPriceUp ? (
            <TrendingUp className="w-6 h-6 mr-2" />
          ) : (
            <TrendingDown className="w-6 h-6 mr-2" />
          )}
          <span className="text-lg font-semibold">
            {isPriceUp ? '+' : ''}{changePercent}%
          </span>
        </div>
      </div>
    </div>
  );
}