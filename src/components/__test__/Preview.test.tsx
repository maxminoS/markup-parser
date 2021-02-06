import React from 'react';
import { render, screen } from "@testing-library/react";

import { Preview } from "components/Preview";

describe('Preview', () => {
  it('renders HTML correctly', () => {
    render(<Preview parseTo={"HTML"} content={"<h1>Preview this text</h1>"} />);
    expect(screen.getByRole('heading', { name: /Preview this text/i })).toBeInTheDocument();
  });

  it('renders Markdown correctly', () => {
    render(<Preview parseTo={"Markdown"} content={"# Preview this text"} />);
    expect(screen.getByRole('heading', { name: /Preview this text/i })).toBeInTheDocument();
  });

  it('renders Org Mode correctly', () => {
    render(<Preview parseTo={"Org Mode"} content={"* Preview this text"} />);
    expect(screen.getByRole('heading', { name: /Preview this text/i })).toBeInTheDocument();
  });
});
