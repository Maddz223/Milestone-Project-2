import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'; // Needed to test Links
import Watchlist from '../pages/Watchlist';

// Mock the useWatchlist hook
jest.mock('../context/WatchlistContext', () => ({
  useWatchlist: jest.fn(),
}));

import { useWatchlist } from '../context/WatchlistContext';

describe('Watchlist component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('shows empty watchlist message when watchlist is empty', () => {
    useWatchlist.mockReturnValue({
      watchlist: [],
      removeFromWatchlist: jest.fn(),
    });

    render(<Watchlist />);

    expect(screen.getByText(/your watchlist is empty/i)).toBeInTheDocument();
    expect(screen.getByText(/start adding some movies or tv shows/i)).toBeInTheDocument();
  });

  test('renders watchlist items correctly', () => {
    const items = [
      {
        id: 1,
        type: 'movie',
        title: 'Movie Title',
        poster_path: '/poster1.jpg',
      },
      {
        id: 2,
        type: 'tv',
        name: 'TV Show Name',
        poster_path: null,
      },
    ];

    useWatchlist.mockReturnValue({
      watchlist: items,
      removeFromWatchlist: jest.fn(),
    });

    render(
      <BrowserRouter>
        <Watchlist />
      </BrowserRouter>
    );

    // Check title heading
    expect(screen.getByText(/my watchlist/i)).toBeInTheDocument();

    // Check movie title and link
    expect(screen.getByText('Movie Title')).toBeInTheDocument();
    const movieLink = screen.getByRole('link', { name: /movie title/i });
    expect(movieLink).toHaveAttribute('href', '/movie/1');
    expect(screen.getByAltText('Movie Title')).toHaveAttribute(
      'src',
      expect.stringContaining('/poster1.jpg')
    );

    // Check tv show title and link
    expect(screen.getByText('TV Show Name')).toBeInTheDocument();
    const tvLink = screen.getByRole('link', { name: /tv show name/i });
    expect(tvLink).toHaveAttribute('href', '/tv/2');
    expect(screen.getByAltText('TV Show Name')).toHaveAttribute(
      'src',
      'https://via.placeholder.com/500x750?text=No+Image'
    );
  });

  test('clicking remove button calls removeFromWatchlist with correct args', () => {
    const items = [
      {
        id: 10,
        type: 'movie',
        title: 'Movie to Remove',
        poster_path: '/poster.jpg',
      },
    ];

    const mockRemove = jest.fn();

    useWatchlist.mockReturnValue({
      watchlist: items,
      removeFromWatchlist: mockRemove,
    });

    render(
      <BrowserRouter>
        <Watchlist />
      </BrowserRouter>
    );

    const removeButton = screen.getByRole('button', { name: /remove/i });
    fireEvent.click(removeButton);

    expect(mockRemove).toHaveBeenCalledTimes(1);
    expect(mockRemove).toHaveBeenCalledWith(10, 'movie');
  });
});