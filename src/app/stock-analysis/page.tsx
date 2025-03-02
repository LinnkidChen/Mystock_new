import React from "react";

export default function StockAnalysisPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Analysis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Market Overview</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            View current market trends and indices performance.
          </p>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
            Chart Placeholder
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Stock Comparison</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Compare performance metrics between multiple stocks.
          </p>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
            Comparison Tool Placeholder
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Technical Analysis</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Advanced technical indicators and pattern recognition.
          </p>
          <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
            Technical Tools Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
