import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact";

// describe is used to group multiple test cases
describe("Contact us test cases", () => {
    it("Should load contact us component", () => {
        render(<Contact />); // We'll try to render this component on jsdom
        // Now we'll check weather that rendered component has heading or not
        const heading = screen.getByRole("heading"); // This will find all the heading elements(components)
        // Assertion
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside contact us component", () => {
        render(<Contact />); // We'll try to render this component on jsdom
        // Now we'll check weather that rendered component has heading or not
        const button = screen.getByText("Contact Us Page"); // This will find all the heading elements(components)
        // Assertion
        expect(button).toBeInTheDocument();
    });
});