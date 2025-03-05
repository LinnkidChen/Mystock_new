"use client";
import React, { useState, useEffect } from "react";
import StockChart from "./StockChart";
import { fetchStockData, subscribeToStockUpdates } from "./stockDataService";
import { CandlestickData, VolumeData } from "./stockDataService";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StockAnalysisPage() {
  const [activeSymbol, setActiveSymbol] = useState<string>("AAPL");
  const [timeframe, setTimeframe] = useState<string>("1D");
  const [candlestickData, setCandlestickData] = useState<CandlestickData[]>([]);
  const [volumeData, setVolumeData] = useState<VolumeData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const stockList = ["AAPL", "MSFT", "GOOGL", "AMZN"];

  useEffect(() => {
    // Fetch initial data
    const loadData = async () => {
      setIsLoading(true);
      const { candlestickData, volumeData } = await fetchStockData(
        activeSymbol,
        timeframe
      );
      setCandlestickData(candlestickData);
      setVolumeData(volumeData);
      setIsLoading(false);
    };

    loadData();

    // Subscribe to real-time updates
    const unsubscribe = subscribeToStockUpdates(
      activeSymbol,
      (newCandle: CandlestickData, newVolume: VolumeData) => {
        // Update the chart with new data
        setCandlestickData((prev) => [...prev.slice(-99), newCandle]);
        setVolumeData((prev) => [...prev.slice(-99), newVolume]);
      }
    );

    // Clean up subscription
    return () => unsubscribe();
  }, [activeSymbol, timeframe]);

  // Change active stock
  const handleSymbolChange = (symbol: string) => {
    setActiveSymbol(symbol);
  };

  // Change timeframe
  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Stock Dashboard</h1>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Dashboard Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Chart Section */}
          <div className="col-span-12 lg:col-span-9 space-y-6">
            {/* Timeframe Selection */}
            <Tabs
              defaultValue="1D"
              value={timeframe}
              onValueChange={handleTimeframeChange}
              className="w-full"
            >
              <TabsList className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <TabsTrigger
                  value="1H"
                  className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-emerald-500"
                >
                  1H
                </TabsTrigger>
                <TabsTrigger
                  value="1D"
                  className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-emerald-500"
                >
                  1D
                </TabsTrigger>
                <TabsTrigger
                  value="1W"
                  className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-emerald-500"
                >
                  1W
                </TabsTrigger>
                <TabsTrigger
                  value="1M"
                  className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-emerald-500"
                >
                  1M
                </TabsTrigger>
                <TabsTrigger
                  value="1Y"
                  className="data-[state=active]:bg-gray-100 dark:data-[state=active]:bg-gray-700 data-[state=active]:text-emerald-500"
                >
                  1Y
                </TabsTrigger>
              </TabsList>

              {/* Chart for each timeframe */}
              {["1H", "1D", "1W", "1M", "1Y"].map((tf) => (
                <TabsContent key={tf} value={tf} className="mt-4">
                  {isLoading ? (
                    <div className="w-full h-[400px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg flex items-center justify-center">
                      <p className="text-emerald-500">
                        Loading {activeSymbol} data...
                      </p>
                    </div>
                  ) : (
                    <StockChart
                      stockSymbol={activeSymbol}
                      chartTitle="Price Chart"
                      candlestickData={candlestickData}
                      volumeData={volumeData}
                      timeframe={tf}
                    />
                  )}
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Stock selection - Adding a sidebar */}
          <div className="col-span-12 lg:col-span-3 space-y-4">
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
              <h2 className="text-xl font-semibold mb-4">Stocks</h2>
              <div className="space-y-2">
                {stockList.map((stock) => (
                  <Button
                    key={stock}
                    variant={activeSymbol === stock ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => handleSymbolChange(stock)}
                  >
                    {stock}
                    {activeSymbol === stock && (
                      <Badge className="ml-auto" variant="secondary">
                        Active
                      </Badge>
                    )}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
