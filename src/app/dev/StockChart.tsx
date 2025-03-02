import React from "react";
import { CandlestickData, VolumeData } from "./stockDataService";

interface StockChartProps {
  stockSymbol: string;
  chartTitle: string;
  candlestickData: CandlestickData[];
  volumeData: VolumeData[];
  timeframe: string;
}

const StockChart: React.FC<StockChartProps> = ({
  stockSymbol,
  chartTitle,
  candlestickData,
  volumeData,
  timeframe,
}) => {
  // Calculate stats from data
  const lastPrice =
    candlestickData.length > 0
      ? candlestickData[candlestickData.length - 1].close
      : 0;
  const firstPrice = candlestickData.length > 0 ? candlestickData[0].open : 0;
  const priceChange = lastPrice - firstPrice;
  const priceChangePercent =
    firstPrice !== 0 ? (priceChange / firstPrice) * 100 : 0;

  // Find highest and lowest values for scaling
  const highestPrice =
    candlestickData.length > 0
      ? Math.max(...candlestickData.map((d) => d.high))
      : 0;
  const lowestPrice =
    candlestickData.length > 0
      ? Math.min(...candlestickData.map((d) => d.low))
      : 0;
  const priceRange = highestPrice - lowestPrice;

  // Find max volume for scaling
  const maxVolume =
    volumeData.length > 0 ? Math.max(...volumeData.map((d) => d.value)) : 0;

  // Helper to format dates
  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <div className="w-full bg-gray-900 border border-gray-800 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-bold">
          {stockSymbol} - {chartTitle} ({timeframe})
        </h3>
        <div
          className={`text-lg font-bold ${
            priceChange >= 0 ? "text-emerald-400" : "text-red-400"
          }`}
        >
          ${lastPrice.toFixed(2)}
          <span className="ml-2 text-sm">
            {priceChange >= 0 ? "+" : ""}
            {priceChange.toFixed(2)} ({priceChangePercent.toFixed(2)}%)
          </span>
        </div>
      </div>

      <div className="h-[400px] bg-gray-800 rounded-lg p-4 relative">
        {candlestickData.length > 0 ? (
          <>
            {/* Price Chart - Top 70% */}
            <div className="h-[70%] w-full relative mb-2 border-b border-gray-700">
              <div className="absolute left-0 top-0 text-xs text-gray-400">
                ${highestPrice.toFixed(2)}
              </div>
              <div className="absolute left-0 bottom-0 text-xs text-gray-400">
                ${lowestPrice.toFixed(2)}
              </div>

              <div className="flex items-end h-full">
                {candlestickData.map((candle, index) => {
                  const width = `${100 / candlestickData.length}%`;
                  const height =
                    priceRange > 0
                      ? `${((candle.high - candle.low) / priceRange) * 100}%`
                      : "0%";
                  const bottom =
                    priceRange > 0
                      ? `${((candle.low - lowestPrice) / priceRange) * 100}%`
                      : "0%";

                  const bodyHeight =
                    priceRange > 0
                      ? `${
                          (Math.abs(candle.open - candle.close) / priceRange) *
                          100
                        }%`
                      : "0%";
                  const bodyBottom =
                    priceRange > 0
                      ? `${
                          ((Math.min(candle.open, candle.close) - lowestPrice) /
                            priceRange) *
                          100
                        }%`
                      : "0%";

                  const isGreen = candle.close >= candle.open;

                  return (
                    <div
                      key={candle.time}
                      className="relative flex items-center justify-center h-full"
                      style={{ width }}
                    >
                      {/* Wick */}
                      <div
                        className="absolute w-[1px] bg-gray-400"
                        style={{ height, bottom }}
                      ></div>

                      {/* Body */}
                      <div
                        className={`absolute w-[60%] ${
                          isGreen ? "bg-emerald-500" : "bg-red-500"
                        }`}
                        style={{ height: bodyHeight, bottom: bodyBottom }}
                      ></div>

                      {/* Tooltip on hover - simplified for this implementation */}
                      {index % 10 === 0 && (
                        <div className="absolute -bottom-5 text-[8px] text-gray-400 transform -rotate-45">
                          {formatDate(candle.time)}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Volume Chart - Bottom 30% */}
            <div className="h-[30%] w-full relative">
              <div className="absolute left-0 top-0 text-xs text-gray-400">
                {(maxVolume / 1000000).toFixed(1)}M
              </div>

              <div className="flex items-end h-full">
                {volumeData.map((volume, index) => {
                  const width = `${100 / volumeData.length}%`;
                  const height =
                    maxVolume > 0
                      ? `${(volume.value / maxVolume) * 100}%`
                      : "0%";
                  const candle = candlestickData[index];
                  const isGreen = candle && candle.close >= candle.open;

                  return (
                    <div
                      key={volume.time}
                      className={`${
                        isGreen ? "bg-emerald-500/30" : "bg-red-500/30"
                      }`}
                      style={{ width, height }}
                    ></div>
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-400">Loading chart data...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockChart;
