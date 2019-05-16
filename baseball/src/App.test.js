import React from "react";
import { render, fireEvent } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import Display from "./components/Display";
import Dashboard from "./components/Dashboard";
import App from "./App";

it("render fine", () => {
  render(<App />);
});

it("should reset ball if there is 4", () => {
  const { getByTestId } = render(<Display />);
});
