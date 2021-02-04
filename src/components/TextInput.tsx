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
          display: "inline-block",
          width: "90%",
          height: "40vh"
        }}
        value={props.content}
      >
      </textarea>
  );
}
