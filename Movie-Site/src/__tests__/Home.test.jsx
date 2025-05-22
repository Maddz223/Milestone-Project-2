// This module provides functions to manage a watchlist in local storage.
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

// Mock child components so we don’t test them here
jest.mock("../components/PopularTV", () => () => <div data-testid="popular-tv" />);
jest.mock("../components/PopularMovies", () => () => <div data-testid="popular-movies" />);
jest.mock("../components/LatestTrailers", () => () => <div data-testid="latest-trailers" />);

describe("Home", () => {
  it("renders main heading and description", () => {
    render(<Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Welcome to What2Watch");
    expect(screen.getByText(/Your ultimate destination for all things movies and TV!/i)).toBeInTheDocument();
  });

  it("renders LatestTrailers, PopularMovies, and PopularTV components", () => {
    render(<Home />);
    expect(screen.getByTestId("latest-trailers")).toBeInTheDocument();
    expect(screen.getByTestId("popular-movies")).toBeInTheDocument();
    expect(screen.getByTestId("popular-tv")).toBeInTheDocument();
  });
});