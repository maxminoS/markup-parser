import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";

type Props = {
  parseTo: string,
  setParseTo: (parseType: string) => void,
}

export const Selector = (props: Props) => {
  const handleSelectChange = (e: React.ChangeEvent<{ value: unknown }>) => props.setParseTo(e.target.value as string);

  return (
    <FormControl variant="outlined">
      <InputLabel>Markup</InputLabel>
      <Select
        value={props.parseTo}
        onChange={handleSelectChange}
        label="Markup"
      >
        <MenuItem value="HTML">HTML</MenuItem>
        <MenuItem value="Markdown">Markdown</MenuItem>
        <MenuItem value="Org Mode">Org Mode</MenuItem>
      </Select>
    </FormControl>
  );
}
