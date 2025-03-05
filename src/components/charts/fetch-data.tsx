import { UTCTimestamp } from "lightweight-charts";

// These interfaces align with our chart component
export interface CandlestickData {
  time: UTCTimestamp;
  open: number;
  high: number;
  close: number;
  low: number;
}

export interface VolumeData {
  time: UTCTimestamp;
  value: number;
  color?: string;
}

// Sample data fetching function
export const fetchStockData = async (
  symbol: string,
  limit: number = 100
): Promise<{
  candlestickData: CandlestickData[];
  volumeData: VolumeData[];
}> => {
  try {
    // In a real application, you would fetch data from an API
    // Example API call (commented out):
    // const response = await fetch(`https://your-stock-api.com/stocks/${symbol}/candles?timeframe=${timeframe}&limit=${limit}`);
    // const data = await response.json();

    // For demonstration, return synthetic data
    const now = Math.floor(Date.now() / 1000) as UTCTimestamp;
    const oneDaySecs = 24 * 60 * 60;

    const candlestickData: CandlestickData[] = [];
    const volumeData: VolumeData[] = [];

    // Generate sample data
    let lastClose = symbol === "AAPL" ? 170 : symbol === "MSFT" ? 330 : 100;

    for (let i = 0; i < limit; i++) {
      // Calculate time for this candle (going backward from now)
      const time = (now - (limit - i) * oneDaySecs) as UTCTimestamp;

      // Random price movement
      const changePercent = (Math.random() * 2 - 1) * 2; // -2% to +2%
      const open = lastClose;
      const close = Number((open * (1 + changePercent / 100)).toFixed(2));
      const high = Number(
        (Math.max(open, close) * (1 + (Math.random() * 0.5) / 100)).toFixed(2)
      );
      const low = Number(
        (Math.min(open, close) * (1 - (Math.random() * 0.5) / 100)).toFixed(2)
      );

      // Volume data
      const volume = Math.floor(Math.random() * 1000000) + 500000;
      const volumeColor = close >= open ? "#10b981" : "#ef4444";

      candlestickData.push({ time, open, high, low, close });
      volumeData.push({
        time,
        value: volume,
        color: volumeColor,
      });

      // Set this close as the next open
      lastClose = close;
    }

    return { candlestickData, volumeData };
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return { candlestickData: [], volumeData: [] };
  }
};

// Function to get real-time streaming updates (simulated)
export const subscribeToStockUpdates = (
  symbol: string,
  callback: (newCandle: CandlestickData, newVolume: VolumeData) => void
) => {
  // In a real app, this would connect to a WebSocket
  const intervalId = setInterval(() => {
    const now = Math.floor(Date.now() / 1000) as UTCTimestamp;
    const lastPrice = symbol === "AAPL" ? 170 : symbol === "MSFT" ? 330 : 100;

    // Random price movement
    const changePercent = (Math.random() * 2 - 1) * 0.5; // -0.5% to +0.5%
    const open = lastPrice;
    const close = Number((open * (1 + changePercent / 100)).toFixed(2));
    const high = Number(
      (Math.max(open, close) * (1 + (Math.random() * 0.2) / 100)).toFixed(2)
    );
    const low = Number(
      (Math.min(open, close) * (1 - (Math.random() * 0.2) / 100)).toFixed(2)
    );

    // Volume data
    const volume = Math.floor(Math.random() * 100000) + 50000;
    const volumeColor = close >= open ? "#10b981" : "#ef4444";

    const newCandle: CandlestickData = { time: now, open, high, low, close };
    const newVolume: VolumeData = {
      time: now,
      value: volume,
      color: volumeColor,
    };

    callback(newCandle, newVolume);
  }, 5000); // Update every 5 seconds

  // Return a function to unsubscribe
  return () => clearInterval(intervalId);
};
