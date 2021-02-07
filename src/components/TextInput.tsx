import React from 'react';

type Props = {
  content: string,
  setContent: (content: string) => void,
}

export const TextInput = (props: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => props.setContent(e.target.value);

  return(
    <textarea
          onChange={handleChange}
          style={{
              width: "98%",
              height: "85vh"
          }}
          value={props.content}
    />
  );
}
