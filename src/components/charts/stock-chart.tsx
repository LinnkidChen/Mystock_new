"use client";
import React, { useEffect, useRef } from "react";
import {
  createChart,
  ColorType,
  UTCTimestamp,
  LineSeries,
  HistogramSeries,
} from "lightweight-charts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Define the data structure for our chart
interface CandlestickData {
  time: UTCTimestamp;
  open: number;
  high: number;
  close: number;
  low: number;
}

interface VolumeData {
  time: UTCTimestamp;
  value: number;
  color?: string;
}

interface StockChartProps {
  stockSymbol: string;
  chartTitle?: string;
  candlestickData: CandlestickData[];
  volumeData?: VolumeData[];
  timeframe?: string;
  className?: string;
}

const StockChart: React.FC<StockChartProps> = ({
  stockSymbol,
  chartTitle = "Price Chart",
  candlestickData,
  volumeData,
  timeframe = "1D",
  className,
}) => {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<ReturnType<typeof createChart> | null>(null);

  useEffect(() => {
    if (
      !chartContainerRef.current ||
      !candlestickData ||
      candlestickData.length === 0
    )
      return;

    // Clean up previous chart instance if it exists
    if (chartRef.current) {
      chartRef.current.remove();
      chartRef.current = null;
    }

    // Initialize the chart with theme consistent with your app
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "#111111" },
        textColor: "#d1d5db",
      },
      grid: {
        vertLines: { color: "#222222" },
        horzLines: { color: "#222222" },
      },
      rightPriceScale: {
        borderColor: "#333333",
      },
      timeScale: {
        borderColor: "#333333",
        timeVisible: true,
      },
      crosshair: {
        vertLine: {
          color: "#10b981", // emerald-500
          width: 1,
          style: 3,
        },
        horzLine: {
          color: "#10b981", // emerald-500
          width: 1,
          style: 3,
        },
      },
      handleScroll: {
        vertTouchDrag: false,
      },
    });

    // Make chart responsive
    const handleResize = () => {
      if (chartContainerRef.current && chart) {
        chart.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    // Create series for candlestick data
    const candlestickSeries = chart.addSeries(LineSeries, {
      color: "#10b981", // emerald-500 for bullish candles
      lineWidth: 2,
      lineStyle: 0,
    });

    candlestickSeries.setData(candlestickData);

    // Add volume series if volume data is provided
    if (volumeData && volumeData.length > 0) {
      const volumeSeries = chart.addSeries(HistogramSeries, {
        color: "#10b981",
      });

      volumeSeries.setData(volumeData);
    }

    // Fit content and add event listeners
    chart.timeScale().fitContent();
    window.addEventListener("resize", handleResize);

    // Save chart instance to ref
    chartRef.current = chart;

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
        chartRef.current = null;
      }
    };
  }, [candlestickData, volumeData]);

  return (
    <Card className={`bg-gray-900 border-gray-800 ${className}`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CardTitle className="text-white">
              {stockSymbol}{" "}
              <span className="text-emerald-400">{chartTitle}</span>
            </CardTitle>
            <Badge
              variant="outline"
              className="text-emerald-400 border-emerald-800"
            >
              {timeframe}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div ref={chartContainerRef} className="w-full h-[400px]" />
      </CardContent>
    </Card>
  );
};

export default StockChart;
