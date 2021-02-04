import React from 'react';
import { Preview } from "components/Preview";
import { TextInput } from "components/TextInput";
import { Selector } from "components/Selector";

export const App = () => {
  const [content, setContent] = React.useState("");
  const [parseTo, setParseTo] = React.useState("HTML");

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Markup Parser</h1>
      <Selector parseTo={parseTo} setParseTo={setParseTo} />
      <br />
      <TextInput content={content} setContent={setContent} />
      <Preview parseTo={parseTo} content={content} />
    </>
  );
}
