import { render, screen, fireEvent } from "@testing-library/react";
import WatchlistButton from "../components/WatchlistButton";

describe("WatchlistButton", () => {
  it("renders 'Add to Watchlist' when not in watchlist", () => {
    render(<WatchlistButton inWatchlist={false} onToggle={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Add to Watchlist");
    expect(button).toHaveClass("text-sm font-semibold text-white px-4 py-2 rounded transition-colors duration-300 bg-blue-700 hover:bg-blue-800");
  });

  it("renders 'Remove from Watchlist' when in watchlist", () => {
    render(<WatchlistButton inWatchlist={true} onToggle={() => {}} />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Remove from Watchlist");
    expect(button).toHaveClass("bg-red-600");
  });

  it("calls onToggle when clicked", () => {
    const onToggleMock = jest.fn();
    render(<WatchlistButton inWatchlist={false} onToggle={onToggleMock} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onToggleMock).toHaveBeenCalledTimes(1);
  });
});