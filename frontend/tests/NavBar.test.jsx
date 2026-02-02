import { render, screen } from '@testing-library/react';
import NavBar from '../src/components/NavBar';
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Tests rendering", () => {
    it('Should render all the buttom in the nav bar', () => {
        render(
        <MemoryRouter>
            <NavBar />
        </MemoryRouter>
        );
        expect(screen.getByRole("button", { name: "Home" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Explore" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "About Us" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Contact" })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "FAQ" })).toBeInTheDocument();
    });
});

describe("Tests navigation", () => {
  it("Navigates to the 'Home' page when the 'Home' button is clicked", async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const aboutButton = screen.getByRole("button", { name: "Home" });
    await userEvent.click(aboutButton);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("Navigates to the 'Explore' page when the 'Explore' button is clicked", async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const exploreButton = screen.getByRole("button", { name: "Explore" });
    await userEvent.click(exploreButton);
    expect(screen.getByText("Explore")).toBeInTheDocument();
  });

  it("Navigates to the 'About Us' page when the 'About Us' button is clicked", async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const aboutButton = screen.getByRole("button", { name: "About Us" });
    await userEvent.click(aboutButton);
    expect(screen.getByText("About Us")).toBeInTheDocument();
  });

  it("Navigates to the 'Contanct' page when the 'Contanct' button is clicked", async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const contanctButton = screen.getByRole("button", { name: "Contact" });
    await userEvent.click(contanctButton);
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("Navigates to the 'FAQ' page when the 'FAQ' button is clicked", async () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const faqButton = screen.getByRole("button", { name: "FAQ" });
    await userEvent.click(faqButton);
    expect(screen.getByText("FAQ")).toBeInTheDocument();
  });
});