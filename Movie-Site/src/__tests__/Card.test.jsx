import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Card from "../components/Card";

// Mock the watchlist context
const mockAddToWatchlist = jest.fn();
const mockRemoveFromWatchlist = jest.fn();
const mockIsInWatchlist = jest.fn();

jest.mock("../context/WatchlistContext", () => ({
  useWatchlist: () => ({
    addToWatchlist: mockAddToWatchlist,
    removeFromWatchlist: mockRemoveFromWatchlist,
    isInWatchlist: mockIsInWatchlist,
  }),
}));

const sampleMovie = {
  id: 123,
  title: "Sample Movie",
  poster_path: "/sample.jpg",
};

describe("Card component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders correctly with movie info and Add button when not in watchlist", () => {
    mockIsInWatchlist.mockReturnValue(false);

    render(
      <MemoryRouter>
        <Card movie={sampleMovie} type="movie" />
      </MemoryRouter>
    );

    expect(screen.getByRole("img")).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w300/sample.jpg"
    );
    expect(screen.getByText("Sample Movie")).toBeInTheDocument();

    const button = screen.getByRole("button", { name: /add to watchlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Add to Watchlist");
  });

  test("renders Remove button when movie is in watchlist", () => {
    mockIsInWatchlist.mockReturnValue(true);

    render(
      <MemoryRouter>
        <Card movie={sampleMovie} type="movie" />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /remove from watchlist/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Remove");
  });

  test("calls addToWatchlist when Add button is clicked", () => {
    mockIsInWatchlist.mockReturnValue(false);

    render(
      <MemoryRouter>
        <Card movie={sampleMovie} type="movie" />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /add to watchlist/i });
    fireEvent.click(button);

    expect(mockAddToWatchlist).toHaveBeenCalledWith({ ...sampleMovie, type: "movie" });
    expect(mockRemoveFromWatchlist).not.toHaveBeenCalled();
  });

  test("calls removeFromWatchlist when Remove button is clicked", () => {
    mockIsInWatchlist.mockReturnValue(true);

    render(
      <MemoryRouter>
        <Card movie={sampleMovie} type="movie" />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /remove from watchlist/i });
    fireEvent.click(button);

    expect(mockRemoveFromWatchlist).toHaveBeenCalledWith(sampleMovie.id, "movie");
    expect(mockAddToWatchlist).not.toHaveBeenCalled();
  });

  test("link has correct href and aria-label", () => {
    mockIsInWatchlist.mockReturnValue(false);

    render(
      <MemoryRouter>
        <Card movie={sampleMovie} type="movie" />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", {
      name: /view details of sample movie/i,
    });

    expect(link).toHaveAttribute("href", "/movie/123");
  });
});