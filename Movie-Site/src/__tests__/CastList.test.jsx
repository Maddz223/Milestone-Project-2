import React from 'react';
import { render, screen } from '@testing-library/react';
import CastList from '../components/CastList';

const mockCast = [
  {
    id: 1,
    name: 'Actor One',
    character: 'Character One',
    profile_path: '/profile1.jpg',
  },
  {
    id: 2,
    name: 'Actor Two',
    character: 'Character Two',
    profile_path: null,
  },
  {
    id: 3,
    name: 'Actor Three',
    character: 'Character Three',
    profile_path: '/profile3.jpg',
  },
];

describe('CastList', () => {
  test('renders null when cast is empty or undefined', () => {
    const { container: emptyContainer } = render(<CastList cast={[]} />);
    expect(emptyContainer.firstChild).toBeNull();

    const { container: undefinedContainer } = render(<CastList />);
    expect(undefinedContainer.firstChild).toBeNull();
  });

  test('renders up to 8 cast members with correct data', () => {
    render(<CastList cast={mockCast} />);

    // Header text
    expect(screen.getByText(/Cast Members/i)).toBeInTheDocument();

    // Actor names and characters
    mockCast.forEach(({ name, character }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(character)).toBeInTheDocument();
    });

    // Images - profile_path present uses tmdb url, else placeholder
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(mockCast.length);

    // Check first actor's image src includes tmdb url
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('https://image.tmdb.org/t/p/w185'));

    // Check second actor's image src is placeholder
    expect(images[1]).toHaveAttribute('src', expect.stringContaining('https://placehold.co/185x278'));
  });
});