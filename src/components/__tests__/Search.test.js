import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantsMock.json";
import { act } from "react-dom/test-utils";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

// We're creating a mock fetch function, as test cases are running on jest-dom
// This will create a mock fetch function
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search restaurant list for burger text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", {name: "Search"});

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, {target: { value: "burger" }});
  
  fireEvent.click(searchBtn);

  const cardsAfterSearch = screen.findAllByTestId("resCard");

  expect(cardsAfterSearch.length).toBe(4);
});
