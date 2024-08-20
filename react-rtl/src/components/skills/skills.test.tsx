import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list"); // ul
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem"); // li
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.queryByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });

  test("start learning button isn't rendered initially", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });

  test("start learning button eventually renders", async () => {
    render(<Skills skills={skills} />);
    const startLearningButton = await screen.findByRole("button", {
      name: "start learning",
    }, { timeout: 5000 });
    expect(startLearningButton).toBeInTheDocument();
  });
});
