import React from "react";
import { describe, expect, it, vitest, vi, beforeEach } from "vitest";

import { render, screen, waitFor } from "@testing-library/react";
import University from "./index";
import UniversityService from "./services";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { selectUniversity, selectSearchData } from "./reducers";
import * as ReactRedux from "react-redux";

vitest.mock("./services");

const mockUniversityData = [
  {
    name: "Test University 1",
    alpha_two_code: "US",
    web_pages: ["https://www.testuni1.edu"],
    domains: ["testuni1.edu"],
    country: "United States",
  },
  {
    name: "Test University 2",
    alpha_two_code: "CA",
    web_pages: ["https://www.testuni2.edu"],
    domains: ["testuni2.edu"],
    country: "Canada",
  },
];

describe("University component", () => {
  const mockStore = configureStore();
  let store: any;

  beforeEach(() => {
    store = mockStore({
      universityReducer: { university: null, searchData: null },
    });
  });

  it("component render correctly", async () => {
    const { getByText } = await render(
      <Provider store={store}>
        <University />{" "}
      </Provider>
    );
    expect(getByText(/Resultat de la Recherche/i)).toBeInTheDocument();
  });
  it("renders loading spinner when data is loading", async () => {
    const { getByTestId, queryAllByTestId } = await render(
      <Provider store={store}>
        <University />
      </Provider>
    );
    expect(queryAllByTestId("spinner")).toBeTruthy();
  });

  //   it("renders empty message when no university data is found", () => {
  //     const searchData = "Some search query";
  //     const myStore = mockStore({
  //       universityReducer: { university: null, searchData },
  //     });
  //     const useSelectorMock = vitest.spyOn(ReactRedux, "useSelector");
  //     useSelectorMock.mockReturnValueOnce([]);
  //     useSelectorMock.mockReturnValueOnce(searchData);

  //     const { getByText } = render(
  //       <Provider store={store}>
  //         <University />
  //       </Provider>
  //     );

  //     expect(
  //       getByText("Aucun université Trouvé pour Some search query")
  //     ).toBeInTheDocument();
  //   });
});
