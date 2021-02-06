import React from 'react';
import { render, screen } from "@testing-library/react";

import { TextInput } from "components/TextInput";

it('renders TextInput component correctly', () => {
  render(<TextInput content={"Preview this text"} setContent={() => {}} />)
  expect(screen.getByText(/preview this text/i)).toBeInTheDocument();
});
