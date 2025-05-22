import { render, screen, fireEvent } from "@testing-library/react";
import WatchProviders from "../components/WatchProviders";

// Mock the getCountryCode util to return a fixed country code for testing
jest.mock("../utils/location", () => jest.fn());

import getCountryCode from "../utils/location";

describe("WatchProviders", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders heading with user country code", () => {
    getCountryCode.mockReturnValue("US");

    render(<WatchProviders providers={{ US: { flatrate: [] } }} />);

    expect(screen.getByText(/Where to Watch \(US\)/i)).toBeInTheDocument();
  });

  it("renders provider logos and names when available", () => {
    getCountryCode.mockReturnValue("US");

    const providers = {
      US: {
        flatrate: [
          {
            provider_id: 1,
            provider_name: "Netflix",
            logo_path: "/netflix.png",
          },
          {
            provider_id: 2,
            provider_name: "Hulu",
            logo_path: "/hulu.png",
          },
        ],
      },
    };

    render(<WatchProviders providers={providers} />);

    // Check for provider names
    expect(screen.getByText("Netflix")).toBeInTheDocument();
    expect(screen.getByText("Hulu")).toBeInTheDocument();

    // Check images have correct src and alt
    const netflixImg = screen.getByAltText("Netflix");
    expect(netflixImg).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w92/netflix.png"
    );
    expect(netflixImg).toHaveClass("w-10", "h-10");

    const huluImg = screen.getByAltText("Hulu");
    expect(huluImg).toHaveAttribute(
      "src",
      "https://image.tmdb.org/t/p/w92/hulu.png"
    );
  });

  it("shows fallback message if no providers for user country", () => {
    getCountryCode.mockReturnValue("FR"); // Different country

    const providers = {
      US: {
        flatrate: [
          {
            provider_id: 1,
            provider_name: "Netflix",
            logo_path: "/netflix.png",
          },
        ],
      },
    };

    render(<WatchProviders providers={providers} />);

    expect(
      screen.getByText(/No streaming providers available in your region/i)
    ).toBeInTheDocument();
  });

  it("replaces image src with placeholder on error", () => {
    getCountryCode.mockReturnValue("US");

    const providers = {
      US: [
        {
          provider_id: 1,
          provider_name: "Netflix",
          logo_path: "/netflix.png",
        },
      ],
    };

    // Fix providers shape to match flatrate array
    const providersData = {
      US: {
        flatrate: [
          {
            provider_id: 1,
            provider_name: "Netflix",
            logo_path: "/netflix.png",
          },
        ],
      },
    };

    render(<WatchProviders providers={providersData} />);

    const img = screen.getByAltText("Netflix");

    // Simulate image error event
    fireEvent.error(img);

    // The src should be replaced with placeholder url
    expect(img.src).toContain("https://placehold.co/40x40?text=N/A");
  });

  it("always renders JustWatch footer link", () => {
    getCountryCode.mockReturnValue("US");

    render(<WatchProviders providers={{}} />);

    const link = screen.getByRole("link", { name: /JustWatch/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://www.justwatch.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });
});