// Define types for our stock data
export interface CandlestickData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
}

export interface VolumeData {
  time: number;
  value: number;
}

// Generate mock data for testing
const generateMockCandlestickData = (
  symbol: string,
  timeframe: string,
  count: number = 100
): CandlestickData[] => {
  const now = new Date().getTime();
  const data: CandlestickData[] = [];

  // Determine time increment based on timeframe
  let timeIncrement = 60 * 60 * 1000; // 1 hour in milliseconds

  switch (timeframe) {
    case "1H":
      timeIncrement = 60 * 1000; // 1 minute
      break;
    case "1D":
      timeIncrement = 15 * 60 * 1000; // 15 minutes
      break;
    case "1W":
      timeIncrement = 4 * 60 * 60 * 1000; // 4 hours
      break;
    case "1M":
      timeIncrement = 24 * 60 * 60 * 1000; // 1 day
      break;
    case "1Y":
      timeIncrement = 7 * 24 * 60 * 60 * 1000; // 1 week
      break;
  }

  // Base price varies by symbol
  let basePrice = 150;
  if (symbol === "AAPL") basePrice = 180;
  if (symbol === "MSFT") basePrice = 350;
  if (symbol === "GOOGL") basePrice = 140;
  if (symbol === "AMZN") basePrice = 120;

  // Generate random candlesticks
  for (let i = 0; i < count; i++) {
    const time = now - (count - i) * timeIncrement;
    const volatility = basePrice * 0.02; // 2% volatility

    const open = basePrice + (Math.random() - 0.5) * volatility;
    const close = open + (Math.random() - 0.5) * volatility;
    const high = Math.max(open, close) + Math.random() * volatility * 0.5;
    const low = Math.min(open, close) - Math.random() * volatility * 0.5;

    data.push({ time, open, high, low, close });

    // Update base price for next candle
    basePrice = close;
  }

  return data;
};

// Generate mock volume data
const generateMockVolumeData = (
  candlestickData: CandlestickData[]
): VolumeData[] => {
  return candlestickData.map((candle) => ({
    time: candle.time,
    value: Math.floor(Math.random() * 1000000) + 500000, // Random volume between 500K and 1.5M
  }));
};

// Fetch initial stock data
export const fetchStockData = async (symbol: string, timeframe: string) => {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 800));

  const candlestickData = generateMockCandlestickData(symbol, timeframe);
  const volumeData = generateMockVolumeData(candlestickData);

  return { candlestickData, volumeData };
};

// Subscribe to real-time updates
export const subscribeToStockUpdates = (
  symbol: string,
  callback: (newCandle: CandlestickData, newVolume: VolumeData) => void
) => {
  // Simulation of websocket connection
  const interval = setInterval(() => {
    const lastTime = new Date().getTime();
    const volatility =
      symbol === "AAPL"
        ? 180
        : symbol === "MSFT"
        ? 350
        : symbol === "GOOGL"
        ? 140
        : 120;
    const volatilityFactor = volatility * 0.005; // 0.5% volatility for real-time updates

    const open = Math.random() * volatilityFactor + volatility;
    const close = open + (Math.random() - 0.5) * volatilityFactor;
    const high = Math.max(open, close) + Math.random() * volatilityFactor * 0.5;
    const low = Math.min(open, close) - Math.random() * volatilityFactor * 0.5;

    const newCandle: CandlestickData = {
      time: lastTime,
      open,
      high,
      low,
      close,
    };
    const newVolume: VolumeData = {
      time: lastTime,
      value: Math.floor(Math.random() * 100000) + 50000,
    };

    callback(newCandle, newVolume);
  }, 5000); // Update every 5 seconds

  // Return function to unsubscribe
  return () => clearInterval(interval);
};
