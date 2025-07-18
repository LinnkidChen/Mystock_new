# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the my-stock website repository.

## Project Overview

My-Stock is a modern stock analysis and portfolio management platform built with Next.js. The application provides:
- Real-time stock market analysis
- Portfolio tracking and management
- Stock watchlists
- Financial data visualization
- Investment insights and recommendations

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript with strict mode
- **UI Library**: Shadcn/ui components
- **Styling**: Tailwind CSS
- **State Management**: React Server Components + Client state
- **Package Manager**: pnpm
- **React Version**: React 19 RC

## Essential Commands

```bash
# Development
pnpm dev          # Start development server (port 3000)

# Building & Production
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Run ESLint
pnpm prettier     # Format code
pnpm test         # Run tests
pnpm type-check   # TypeScript type checking
```

## Architecture Overview

### Directory Structure

```
/app/                    # Next.js App Router
  /(auth)/              # Authentication routes
    /login/
    /register/
  /(dashboard)/         # Protected dashboard routes
    /dashboard/         # Main dashboard
    /portfolio/         # Portfolio management
    /watchlist/         # Stock watchlists
    /analysis/          # Stock analysis tools
  /api/                 # API routes
    /stocks/            # Stock data endpoints
    /portfolio/         # Portfolio operations
    /auth/              # Authentication endpoints

/components/            # Reusable components
  /ui/                  # Shadcn UI components
  /charts/              # Financial charts
  /stock/               # Stock-specific components
  /portfolio/           # Portfolio components

/lib/                   # Utilities and helpers
  /api/                 # API client functions
  /utils/               # Utility functions
  /hooks/               # Custom React hooks
  /types/               # TypeScript types
  /constants/           # App constants

/services/              # External service integrations
  /stock-data/          # Stock data providers
  /auth/                # Authentication service
```

### Key Features Implementation

#### 1. Stock Data Management
- Real-time price updates using Server-Sent Events or WebSockets
- Historical data caching with ISR (Incremental Static Regeneration)
- API rate limiting considerations
- Data normalization for consistent display

#### 2. Portfolio Management
- CRUD operations for portfolio items
- Real-time portfolio value calculation
- Performance metrics (gain/loss, percentages)
- Transaction history tracking

#### 3. Authentication & Security
- Secure session management
- Protected routes using middleware
- API route protection
- Financial data encryption

## Development Guidelines

### Component Structure

```typescript
// Use this pattern for stock-related components
interface StockCardProps {
  symbol: string;
  showDetails?: boolean;
  onSelect?: (symbol: string) => void;
}

export function StockCard({ 
  symbol, 
  showDetails = false,
  onSelect 
}: StockCardProps) {
  // Component logic
}
```

### API Route Pattern

```typescript
// app/api/stocks/[symbol]/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: string } }
) {
  try {
    // Validate symbol
    // Fetch stock data
    // Return formatted response
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch stock data' },
      { status: 500 }
    );
  }
}
```

### Data Fetching Patterns

```typescript
// Server Component data fetching
async function StockDetails({ symbol }: { symbol: string }) {
  const stockData = await fetchStockData(symbol);
  
  return (
    <div>
      {/* Render stock details */}
    </div>
  );
}

// Client Component with hooks
'use client';

function StockChart({ symbol }: { symbol: string }) {
  const { data, isLoading } = useStockData(symbol);
  
  if (isLoading) return <ChartSkeleton />;
  
  return <Chart data={data} />;
}
```

## Shadcn/UI Integration

### Component Usage
```typescript
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
```

### Customization
- Maintain consistent theming across financial data displays
- Use semantic color variables for gains (green) and losses (red)
- Ensure accessibility for financial data tables

## State Management

### Server State
- Leverage React Server Components for initial data
- Use Suspense boundaries for loading states
- Implement error boundaries for failed requests

### Client State
- Use React hooks for interactive features
- Consider Zustand or Jotai for complex client state
- Implement optimistic updates for better UX

## Performance Optimization

### Data Fetching
- Implement request deduplication
- Use React cache() for server-side caching
- Leverage Next.js Data Cache appropriately

### Rendering
- Use dynamic imports for heavy chart libraries
- Implement virtual scrolling for large lists
- Optimize images with Next.js Image component

## Security Considerations

### API Security
- Validate all user inputs
- Implement rate limiting
- Use environment variables for API keys
- Never expose sensitive financial data in client bundles

### Data Protection
- Encrypt sensitive portfolio data
- Implement proper CORS policies
- Use HTTPS for all external API calls
- Validate stock symbols to prevent injection

## Testing Strategy

```typescript
// Example test structure
describe('StockCard', () => {
  it('displays stock symbol and price', () => {
    // Test implementation
  });
  
  it('shows gain/loss with appropriate styling', () => {
    // Test implementation
  });
});
```

## Error Handling

```typescript
// Consistent error handling pattern
class StockDataError extends Error {
  constructor(
    message: string,
    public code: string,
    public statusCode: number
  ) {
    super(message);
    this.name = 'StockDataError';
  }
}

// Usage
if (!stockData) {
  throw new StockDataError(
    'Stock not found',
    'STOCK_NOT_FOUND',
    404
  );
}
```

## Best Practices

1. **Financial Data Accuracy**
   - Always validate and sanitize financial data
   - Use proper decimal precision for prices
   - Display appropriate disclaimers

2. **Real-time Updates**
   - Implement efficient polling or WebSocket connections
   - Handle connection failures gracefully
   - Provide visual indicators for data freshness

3. **Mobile Responsiveness**
   - Ensure all financial tables are mobile-friendly
   - Use responsive chart libraries
   - Implement touch-friendly interactions

4. **Accessibility**
   - Provide text alternatives for charts
   - Ensure color is not the only indicator
   - Support keyboard navigation

5. **Performance**
   - Lazy load heavy components
   - Implement proper caching strategies
   - Optimize bundle size

## Common Patterns

### Loading States
```typescript
<Suspense fallback={<StockListSkeleton />}>
  <StockList />
</Suspense>
```

### Error Boundaries
```typescript
<ErrorBoundary fallback={<StockErrorFallback />}>
  <StockData symbol={symbol} />
</ErrorBoundary>
```

### Data Validation
```typescript
const stockSymbolSchema = z.string()
  .min(1)
  .max(5)
  .regex(/^[A-Z]+$/);
```

## Development Workflow

1. Always run type checking before commits
2. Ensure proper error handling for financial operations
3. Test with various market conditions (open/closed)
4. Validate UI with real financial data
5. Consider timezone handling for global markets

## Environment Variables

```bash
# .env.local example
NEXT_PUBLIC_API_URL=https://api.mystock.com
STOCK_API_KEY=your_api_key_here
DATABASE_URL=your_database_url
NEXTAUTH_SECRET=your_auth_secret
```

Remember: When working with financial data, accuracy, security, and user trust are paramount. Always double-check calculations and ensure data integrity.