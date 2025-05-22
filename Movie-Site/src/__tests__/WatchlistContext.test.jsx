import React from 'react';
import { render, act } from '@testing-library/react';
import { WatchlistProvider, useWatchlist } from '../context/WatchlistContext';

// Test component to consume context
const TestComponent = ({ testFn }) => {
  const context = useWatchlist();
  testFn(context);
  return null;
};

describe('WatchlistContext', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('initializes watchlist from localStorage', () => {
    localStorage.setItem('watchlist', JSON.stringify([{ id: 1, type: 'movie' }]));
    let contextValue;

    render(
      <WatchlistProvider>
        <TestComponent testFn={(ctx) => (contextValue = ctx)} />
      </WatchlistProvider>
    );

    expect(contextValue.watchlist).toEqual([{ id: 1, type: 'movie' }]);
  });

  it('adds items to watchlist', () => {
    let contextValue;
    render(
      <WatchlistProvider>
        <TestComponent testFn={(ctx) => (contextValue = ctx)} />
      </WatchlistProvider>
    );

    act(() => {
      contextValue.addToWatchlist({ id: 2, type: 'tv' });
    });

    expect(contextValue.watchlist).toEqual([{ id: 2, type: 'tv' }]);

    // Adding duplicate item should not change watchlist
    act(() => {
      contextValue.addToWatchlist({ id: 2, type: 'tv' });
    });
    expect(contextValue.watchlist).toHaveLength(1);
  });

  it('removes items from watchlist', () => {
    let contextValue;
    render(
      <WatchlistProvider>
        <TestComponent testFn={(ctx) => (contextValue = ctx)} />
      </WatchlistProvider>
    );

    act(() => {
      contextValue.addToWatchlist({ id: 3, type: 'movie' });
      contextValue.addToWatchlist({ id: 4, type: 'tv' });
    });
    expect(contextValue.watchlist).toHaveLength(2);

    act(() => {
      contextValue.removeFromWatchlist(3, 'movie');
    });
    expect(contextValue.watchlist).toEqual([{ id: 4, type: 'tv' }]);
  });

  it('correctly reports if item is in watchlist', () => {
    let contextValue;
    render(
      <WatchlistProvider>
        <TestComponent testFn={(ctx) => (contextValue = ctx)} />
      </WatchlistProvider>
    );

    act(() => {
      contextValue.addToWatchlist({ id: 5, type: 'movie' });
    });

    expect(contextValue.isInWatchlist(5, 'movie')).toBe(true);
    expect(contextValue.isInWatchlist(999, 'movie')).toBe(false);
  });
});