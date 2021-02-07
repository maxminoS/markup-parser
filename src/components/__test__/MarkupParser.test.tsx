import React from 'react';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { MarkupParser } from "components/MarkupParser";

describe('Previews', () => {
  beforeEach(() => {
    render(<MarkupParser />);
  });

  it('previews HTML correctly', () => {
    userEvent.type(screen.getByRole("textbox"), "<h1>Preview this text</h1>");
    expect(screen.getByRole("heading", { name: /preview this text/i })).toBeInTheDocument();
  });

  it('previews Markdown correctly', () => {
    userEvent.click(screen.getByRole("button", { name: /html/i }));
    userEvent.click(screen.getByRole("option", { name: /markdown/i }));

    userEvent.type(screen.getByRole("textbox"), "# Preview this text");
    expect(screen.getByRole("heading", { name: /preview this text/i })).toBeInTheDocument();
  });

  it('previews Org Mode correctly', () => {
    userEvent.click(screen.getByRole("button", { name: /html/i }));
    userEvent.click(screen.getByRole("option", { name: /org mode/i }));

    userEvent.type(screen.getByRole("textbox"), "* Preview this text");
    expect(screen.getByRole("heading", { name: /preview this text/i })).toBeInTheDocument();
  });
});
