import React, { useState } from "react";

import { Preview } from "components/Preview";
import { TextInput } from "components/TextInput";
import { Selector } from "components/Selector";

export const MarkupParser = () => {
  const [content, setContent] = useState("");
  const [parseTo, setParseTo] = useState("HTML");

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
