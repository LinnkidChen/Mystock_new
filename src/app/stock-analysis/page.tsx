import React from "react";
import StockChart from "@/components/charts/stock-chart";
export default function StockAnalysisPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Analysis</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Stock Chart</h2>
            </div>
            <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
              <StockChart
                stockSymbol="AAPL"
                chartTitle="Apple Stock Chart"
                candlestickData={[]}
                volumeData={[]}
                timeframe="1D"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
