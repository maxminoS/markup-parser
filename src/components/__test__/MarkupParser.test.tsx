import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MarkupParser } from "components/MarkupParser";

describe('Previews', () => {
  beforeEach(() => {
    render(<MarkupParser />);
  });

  it('previews HTML correctly', () => {
    expect((screen.getByText("HTML") as HTMLOptionElement).selected).toBe(true);
    expect((screen.getByText("Markdown") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Org Mode") as HTMLOptionElement).selected).toBe(false);

    userEvent.type(screen.getByRole("textbox"), "<h1>Preview this text</h1>");
    expect(screen.getByRole("heading", { name: /preview this text/i })).toBeInTheDocument();
  });

  it('previews Markdown correctly', () => {
    userEvent.selectOptions(screen.getByRole("combobox"), "Markdown");
    expect((screen.getByText("HTML") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Markdown") as HTMLOptionElement).selected).toBe(true);
    expect((screen.getByText("Org Mode") as HTMLOptionElement).selected).toBe(false);

    userEvent.type(screen.getByRole("textbox"), "# Preview this text");
    expect(screen.getByRole("heading", { name: /preview this text/i })).toBeInTheDocument();
  });

  it('previews Org Mode correctly', () => {
    userEvent.selectOptions(screen.getByRole("combobox"), "Org Mode");
    expect((screen.getByText("HTML") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Markdown") as HTMLOptionElement).selected).toBe(false);
    expect((screen.getByText("Org Mode") as HTMLOptionElement).selected).toBe(true);

    userEvent.type(screen.getByRole("textbox"), "* Preview this text");
    expect(screen.getByRole("heading", { name: /preview this text/i })).toBeInTheDocument();
  });
});
