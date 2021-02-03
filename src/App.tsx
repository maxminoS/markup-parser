import React from 'react';

import { parseMarkdown, parseOrg } from 'parsers';


export const App = () => {
  const [content, setContent] = React.useState("");
  const [parseTo, setParseTo] = React.useState("HTML");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => setParseTo(e.target.value);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Markup Parser</h1>
      <select value={parseTo} onChange={handleSelectChange}>
        <option value="HTML">HTML</option>
        <option value="Markdown">Markdown</option>
        <option value="Org Mode">Org Mode</option>
      </select>
      <br />
      <textarea
        onChange={handleChange}
        style={{
          display: "inline-block",
          width: "90%",
          height: "40vh"
        }}
        value={content}
      >
      </textarea>
      <br />
      <div style={{
            border: "1px solid black",
            display: "inline-block",
            width: "90%",
            height: "40vh",
            overflowY: "auto"
          }}
           dangerouslySetInnerHTML={{
             __html: parseTo === "Markdown" ? parseMarkdown(content) :
                     parseTo === "Org Mode" ? parseOrg(content) : content
           }}
      >
      </div>
    </>
  );
}
