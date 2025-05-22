import { render, screen, fireEvent } from "@testing-library/react";
import TrailerGallery from "../components/TrailerGallery";

describe("TrailerGallery", () => {
  const trailers = [
    { id: "1", key: "abc123", name: "Trailer One" },
    { id: "2", key: "xyz789", name: "Trailer Two" },
  ];

  it("renders trailer thumbnails and names", () => {
    render(<TrailerGallery trailers={trailers} onSelect={() => {}} />);

    // Check if trailer names are rendered
    expect(screen.getByText("Trailer One")).toBeInTheDocument();
    expect(screen.getByText("Trailer Two")).toBeInTheDocument();

    // Check if images have correct src (youtube thumbnails)
    expect(screen.getByAltText("Trailer One").src).toContain("abc123");
    expect(screen.getByAltText("Trailer Two").src).toContain("xyz789");
  });

  it("calls onSelect with correct trailer when clicked", () => {
    const onSelect = jest.fn();
    render(<TrailerGallery trailers={trailers} onSelect={onSelect} />);

    fireEvent.click(screen.getByText("Trailer One"));
    expect(onSelect).toHaveBeenCalledWith(trailers[0]);
  });

  it("renders fallback message when no trailers", () => {
    render(<TrailerGallery trailers={[]} onSelect={() => {}} />);
    expect(screen.getByText(/no trailers available/i)).toBeInTheDocument();
  });
});