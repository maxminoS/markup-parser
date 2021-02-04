export const parseMarkdown = (content: string): string => {
  let htmlText: string = content
    // Prevent HTML injection
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headers
    .replace(/^### (.*$)/gim, "<h3>$1</h3>")
    .replace(/^## (.*$)/gim, "<h2>$1</h2>")
    .replace(/^# (.*$)/gim, "<h1>$1</h1>")
    // Blockquote
    .replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>")
    // Text Format
    .replace(/\*\*(.+)\*\*/gim, "<b>$1</b>")
    .replace(/\*(.+)\*/gim, "<i>$1</i>")
    .replace(/\n$/gim, "<br />")
    // Links
    .replace(/!\[(.*?)\]\((.*?)\)/gim, "<img alt='$1' src='$2' />")
    .replace(/\[(.*?)\]\((.*?)\)/gim, "<a href='$2'>$1</a>");

  return htmlText.trim()
}

export const parseOrg = (content: string): string => {
  let htmlText: string = content
    // Prevent HTML injection
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    // Headers
    .replace(/^\*\*\* (.*$)/gim, "<h3>$1</h3>")
    .replace(/^\*\* (.*$)/gim, "<h2>$1</h2>")
    .replace(/^\* (.*$)/gim, "<h1>$1</h1>")
    // Blockquote
    .replace(/^#\+BEGIN_VERSE\n((.|\n)*)\n#\+END_VERSE$/gim, "<blockquote>$1</blockquote>")
    // Text Format
    .replace(/\*(.+)\*/gim, "<b>$1</b>")
    .replace(/\/(.+)\//gim, "<i>$1</i>")
    .replace(/\n$/gim, "<br />")
    // Links
    .replace(/\[\[(.*?)\]\[(.*?)\]\]/gim, "<a href='$1'>$2</a>")
    .replace(/\[\[(.*?)\]\]/gim, "<img src='$1' />");

  return htmlText.trim()
}
