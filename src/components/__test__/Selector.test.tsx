import React from 'react';
import { render, screen } from "@testing-library/react";

import { Selector } from "components/Selector";

describe("Selector", () => {
  it("has HTML option", () => {
    render(<Selector parseTo={"HTML"} setParseTo={() => {}} />);
    expect((screen.getByText("HTML") as HTMLOptionElement).selected).toBe(true);
    expect((screen.getByText("Markdown") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Org Mode") as HTMLOptionElement).selected).toBe(false);
  });

  it("has Markdown option", () => {
    render(<Selector parseTo={"Markdown"} setParseTo={() => {}} />);
    expect((screen.getByText("HTML") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Markdown") as HTMLOptionElement).selected).toBe(true);
    expect((screen.getByText("Org Mode") as HTMLOptionElement).selected).toBe(false);
  });

  it('has Org Mode option', () => {
    render(<Selector parseTo={"Org Mode"} setParseTo={() => {}} />);
    expect((screen.getByText("HTML") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Markdown") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Org Mode") as HTMLOptionElement).selected).toBe(true);
  });
});
