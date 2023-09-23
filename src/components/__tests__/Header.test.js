import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should load header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const loginButton = screen.getByRole("button", {name: "Login"});
    //Assertion
    expect(loginButton).toBeInTheDocument();
});

it("Should load header component with Cart 0 items", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart - 2 items");
    //Assertion
    expect(cartItems).toBeInTheDocument();
});

it("Should change login text to logout", () => {
    render(
        <BrowserRouter>
            <Provider store={store}>
            <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});

    expect(logoutButton).toBeInTheDocument();
})