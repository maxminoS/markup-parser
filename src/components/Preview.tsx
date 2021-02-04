import React from 'react';
import { parseMarkdown, parseOrg } from "utils/Parsers";

type Props = {
  parseTo: string,
  content: string,
}

export const Preview = (props: Props) => {
  return(
      <div style={{
            border: "1px solid black",
            display: "inline-block",
            width: "90%",
            height: "40vh",
            overflowY: "auto"
          }}
           dangerouslySetInnerHTML={{
             __html: props.parseTo === "Markdown" ? parseMarkdown(props.content) :
                     props.parseTo === "Org Mode" ? parseOrg(props.content) : props.content
           }}
      >
      </div>
  );
}
