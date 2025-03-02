import React from "react";

export default function PortfolioPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Asset Allocation</h2>
              <select className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-sm">
                <option>All Assets</option>
                <option>Stocks</option>
                <option>ETFs</option>
                <option>Crypto</option>
              </select>
            </div>
            <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center">
              Portfolio Allocation Chart Placeholder
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow h-full">
            <h2 className="text-xl font-semibold mb-6">Portfolio Summary</h2>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Total Value
                </p>
                <p className="text-3xl font-bold">$81,452.63</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Day Change
                  </p>
                  <p className="text-xl font-bold text-green-600">
                    +$1,245.30 (+1.5%)
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Total Return
                  </p>
                  <p className="text-xl font-bold text-green-600">+15.4%</p>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  Asset Breakdown
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span>Stocks</span>
                    <span className="font-medium">65%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: "65%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>ETFs</span>
                    <span className="font-medium">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full"
                      style={{ width: "25%" }}
                    ></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Crypto</span>
                    <span className="font-medium">10%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-600 h-2 rounded-full"
                      style={{ width: "10%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Holdings</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Symbol
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Day Change
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Value
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  AAPL
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Apple Inc.</td>
                <td className="px-6 py-4 whitespace-nowrap">$178.39</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  +1.2%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">$12,450</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mr-4">
                    Buy
                  </button>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200">
                    Sell
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  MSFT
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Microsoft Corp</td>
                <td className="px-6 py-4 whitespace-nowrap">$399.04</td>
                <td className="px-6 py-4 whitespace-nowrap text-green-600">
                  +0.8%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">$9,870</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mr-4">
                    Buy
                  </button>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200">
                    Sell
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap font-medium">
                  GOOGL
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Alphabet Inc.</td>
                <td className="px-6 py-4 whitespace-nowrap">$146.55</td>
                <td className="px-6 py-4 whitespace-nowrap text-red-600">
                  -0.3%
                </td>
                <td className="px-6 py-4 whitespace-nowrap">$8,320</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-200 mr-4">
                    Buy
                  </button>
                  <button className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-200">
                    Sell
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
