import { render, screen } from "@testing-library/react";
import Skills from "./Skills";

describe("skills", () => {
  const skills = ["HTML", "CSS", "JAVASCRIPT"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const listElement = screen.getByRole("list"); //ul
    expect(listElement).toBeInTheDocument();
  });

  test("renders alist of skills", () => {
    render(<Skills skills={skills} />);
    const listItemElements = screen.getAllByRole("listitem"); //li
    expect(listItemElements).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.queryByRole("button", { name: "Login" });
    expect(loginButton).toBeInTheDocument();
  });
  test("start learning button is n't rendered", () => {
    render(<Skills skills={skills} />);
    const startLearningButton = screen.queryByRole("button", {
      name: "start learning",
    });
    expect(startLearningButton).not.toBeInTheDocument();
  });
});