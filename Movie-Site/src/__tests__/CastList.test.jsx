import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CastList from "../components/CastList";

const castSample = [
  {
    id: 1,
    name: "Actor One",
    character: "Character A",
    profile_path: "/actor1.jpg",
  },
  {
    id: 2,
    name: "Actor Two",
    character: "Character B",
    profile_path: null, // no image
  },
  {
    id: 3,
    name: "Actor Three",
    character: "Character C",
    profile_path: "/actor3.jpg",
  },
];

describe("CastList", () => {
  test("renders nothing when cast is undefined or empty", () => {
    const { container: c1 } = render(<CastList />);
    expect(c1.firstChild).toBeNull();

    const { container: c2 } = render(<CastList cast={[]} />);
    expect(c2.firstChild).toBeNull();
  });

  test("renders cast members up to 8", () => {
    // Provide 10 members, only 8 should render
    const bigCast = Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      name: `Actor ${i + 1}`,
      character: `Character ${i + 1}`,
      profile_path: `/actor${i + 1}.jpg`,
    }));

    render(<CastList cast={bigCast} />);

    // Should show the title
    expect(screen.getByRole("heading", { name: /cast members/i })).toBeInTheDocument();

    // Only 8 cast members rendered
    expect(screen.getAllByRole("img")).toHaveLength(8);

    // Check first and last rendered actor names
    expect(screen.getByText("Actor 1")).toBeInTheDocument();
    expect(screen.getByText("Actor 8")).toBeInTheDocument();
    expect(screen.queryByText("Actor 9")).not.toBeInTheDocument();
  });

  test("shows actor info and handles missing profile_path", () => {
    render(<CastList cast={castSample} />);

    // Actor with profile_path should have correct src
    const actorOneImg = screen.getByRole("img", { name: /actor one/i });
    expect(actorOneImg).toHaveAttribute("src", "https://image.tmdb.org/t/p/w185/actor1.jpg");

    // Actor without profile_path uses placeholder
    const actorTwoImg = screen.getByRole("img", { name: /actor two/i });
    expect(actorTwoImg).toHaveAttribute("src", "https://placehold.co/185x278?text=No+Image&font=roboto");

    // Names and characters present
    expect(screen.getByText("Actor One")).toBeInTheDocument();
    expect(screen.getByText("Character A")).toBeInTheDocument();
    expect(screen.getByText("Actor Two")).toBeInTheDocument();
    expect(screen.getByText("Character B")).toBeInTheDocument();
  });

  test("image fallback on error sets placeholder image", () => {
    render(<CastList cast={[castSample[0]]} />);

    const img = screen.getByRole("img", { name: /actor one/i });

    // Simulate image error event (onError)
    fireEvent.error(img);

    expect(img).toHaveAttribute("src", "https://placehold.co/185x278?text=No+Image&font=roboto");
  });
});