import React from 'react';
import { render, screen } from "@testing-library/react";

import { Selector } from "components/Selector";

describe("Selector", () => {
  it("has HTML option", () => {
    render(<Selector parseTo={"HTML"} setParseTo={() => {}} />);
    expect(screen.getByRole("button", { name: /html/i })).toBeInTheDocument();
  });

  it("has Markdown option", () => {
    render(<Selector parseTo={"Markdown"} setParseTo={() => {}} />);
    expect(screen.getByRole("button", { name: /markdown/i })).toBeInTheDocument();
  });

  it('has Org Mode option', () => {
    render(<Selector parseTo={"Org Mode"} setParseTo={() => {}} />);
    expect(screen.getByRole("button", { name: /org mode/i })).toBeInTheDocument();
  });
});
