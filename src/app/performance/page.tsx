import React from "react";

export default function PerformancePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Performance</h1>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Portfolio Performance Overview
        </h2>
        <div className="h-80 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center mb-4">
          Performance Chart Placeholder
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Total Return
            </p>
            <p className="text-2xl font-bold text-green-600">+15.4%</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              YTD Return
            </p>
            <p className="text-2xl font-bold text-green-600">+8.2%</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              1Y Return
            </p>
            <p className="text-2xl font-bold text-green-600">+12.7%</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Volatility
            </p>
            <p className="text-2xl font-bold">14.3%</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">
          Individual Assets Performance
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Asset
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Return
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Allocation
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              {/* Sample rows - would be populated from data in a real app */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">AAPL</td>
                <td className="px-6 py-4 whitespace-nowrap">$12,450</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  +23.5%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">15.3%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">MSFT</td>
                <td className="px-6 py-4 whitespace-nowrap">$9,870</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  +18.2%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">12.1%</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">GOOGL</td>
                <td className="px-6 py-4 whitespace-nowrap">$8,320</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-600">
                  -3.1%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">10.2%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
