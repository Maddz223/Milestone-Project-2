import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Card from "../components/Card";

// Mock react-router-dom Link to render children directly
jest.mock("react-router-dom", () => ({
  Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
}));

// Move mock functions inside jest.mock factory function
jest.mock("../context/WatchlistContext", () => {
  // Define mocks inside here
  const addToWatchlist = jest.fn();
  const removeFromWatchlist = jest.fn();
  const isInWatchlist = jest.fn();

  return {
    useWatchlist: () => ({
      addToWatchlist,
      removeFromWatchlist,
      isInWatchlist,
    }),
    // Export the mocks for tests to access later if needed
    __mocks: {
      addToWatchlist,
      removeFromWatchlist,
      isInWatchlist,
    },
  };
});

const { __mocks } = require("../context/WatchlistContext");

const movie = {
  id: 123,
  title: "Test Movie",
  poster_path: "/test.jpg",
};

describe("Card component", () => {
  beforeEach(() => {
    __mocks.addToWatchlist.mockClear();
    __mocks.removeFromWatchlist.mockClear();
    __mocks.isInWatchlist.mockClear();
  });

  test("renders movie info and link", () => {
    __mocks.isInWatchlist.mockReturnValue(false);

    render(<Card movie={movie} type="movie" />);

    const img = screen.getByRole("img", { name: /test movie/i });
    expect(img).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/test.jpg"
    );

    expect(screen.getByText(/test movie/i)).toBeInTheDocument();

    expect(screen.getByRole("link")).toHaveAttribute("href", "/movie/123");

    const button = screen.getByRole("button", { name: /add to watchlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add to Watchlist");
  });

  test("button calls addToWatchlist when not in watchlist", () => {
    __mocks.isInWatchlist.mockReturnValue(false);

    render(<Card movie={movie} type="movie" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(__mocks.addToWatchlist).toHaveBeenCalledWith({ ...movie, type: "movie" });
    expect(__mocks.removeFromWatchlist).not.toHaveBeenCalled();
  });

  test("button calls removeFromWatchlist when in watchlist", () => {
    __mocks.isInWatchlist.mockReturnValue(true);

    render(<Card movie={movie} type="movie" />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(__mocks.removeFromWatchlist).toHaveBeenCalledWith(movie.id, "movie");
    expect(__mocks.addToWatchlist).not.toHaveBeenCalled();
  });

  test("uses placeholder image when no poster_path", () => {
    __mocks.isInWatchlist.mockReturnValue(false);

    const movieNoImage = { id: 456, title: "No Image Movie" };

    render(<Card movie={movieNoImage} type="movie" />);

    const img = screen.getByRole("img", { name: /no image movie/i });
    expect(img).toHaveAttribute(
      "src",
      "https://placehold.co/300x450?text=No+Image&font=roboto"
    );
  });
});