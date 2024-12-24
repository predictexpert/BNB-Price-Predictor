import React from 'react';
import { Check, X } from 'lucide-react';
import { PredictionHistory } from '../types';

interface PredictionHistoryProps {
  predictions: PredictionHistory[];
}

export function PredictionHistoryTable({ predictions }: PredictionHistoryProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <h2 className="p-6 text-xl font-bold text-gray-800 border-b">Previous Predictions</h2>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Time</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Predicted</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actual</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accuracy</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Result</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {predictions.map((item, index) => (
              <tr key={item.prediction.timestamp} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(item.prediction.timestamp).toLocaleTimeString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${item.prediction.predictedPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  ${item.actualPrice.toFixed(2)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {item.prediction.confidence.toFixed(1)}%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {item.wasCorrect ? (
                    <span className="inline-flex items-center text-green-500">
                      <Check className="w-5 h-5 mr-1" />
                      Correct
                    </span>
                  ) : (
                    <span className="inline-flex items-center text-red-500">
                      <X className="w-5 h-5 mr-1" />
                      Incorrect
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}