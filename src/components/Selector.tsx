import React from 'react';

type Props = {
  parseTo: string,
  setParseTo: (parseType: string) => void,
}

export const Selector = (props: Props) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => props.setParseTo(e.target.value);

  return(
    <select value={props.parseTo} onChange={handleSelectChange}>
      <option value="HTML">HTML</option>
      <option value="Markdown">Markdown</option>
      <option value="Org Mode">Org Mode</option>
    </select>
  );
}
