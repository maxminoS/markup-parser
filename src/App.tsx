import React from 'react';

export const App = () => {
  const [content, setContent] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { setContent(e.target.value); }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Markup Parser</h1>
      <textarea onChange={handleChange} style={{ display: "inline-block", width: "90%", height: "40vh" }} value={content}>
      </textarea>
      <br />
      <div style={{ border: "1px solid black", display: "inline-block", width: "90%", height: "40vh" }} dangerouslySetInnerHTML={{ __html: content }}>
      </div>
    </>
  );
}
