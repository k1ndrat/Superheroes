import React from "react";
import {
    render,
    screen,
    fireEvent,
    waitFor,
    act,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, useNavigate } from "react-router-dom";
import FormHero from "../components/FormHero";

// Mock the usePostNewSuperHeroMutation hook
jest.mock("../features/superheroes/superHeroSlice", () => ({
    usePostNewSuperHeroMutation: () => [jest.fn(), { isLoading: false }],
}));

// Mock the useNavigate function
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"), // Use the actual implementation for other functions
    useNavigate: jest.fn(), // Mock useNavigate
}));

describe("FormHero Component", () => {
    it("Renders without errors", () => {
        render(
            <MemoryRouter>
                <FormHero />
            </MemoryRouter>
        );
    });

    it("Displays validation error for empty form submission", async () => {
        const { getByText, getByLabelText } = render(
            <MemoryRouter>
                <FormHero />
            </MemoryRouter>
        );

        // Attempt to submit the form without filling in any fields
        fireEvent.click(getByText("Post"));

        // Ensure that the validation error message is displayed
        await waitFor(() => {
            expect(getByText("All fields are required!")).toBeInTheDocument();
        });
    });

    it("Submits form with valid data", async () => {
        useNavigate.mockReturnValue(jest.fn()); // Mock the return value of useNavigate

        render(
            <MemoryRouter>
                <FormHero />
            </MemoryRouter>
        );

        // Fill in form fields
        fireEvent.change(screen.getByLabelText("Nickname:"), {
            target: { value: "Superhero" },
        });
        fireEvent.change(screen.getByLabelText("Real Name:"), {
            target: { value: "John Doe" },
        });
        fireEvent.change(screen.getByLabelText("Origin Description:"), {
            target: { value: "From Planet X" },
        });
        fireEvent.change(screen.getByLabelText("Superpowers:"), {
            target: { value: "Flight, Super Strength" },
        });
        fireEvent.change(screen.getByLabelText("Catch Phrase:"), {
            target: { value: "Up, up, and away!" },
        });

        // Submit the form
        fireEvent.click(screen.getByText("Post"));

        // Wait for the form submission to complete
        await act(async () => {
            expect(useNavigate).toHaveBeenCalledWith();
        });
    });
});
