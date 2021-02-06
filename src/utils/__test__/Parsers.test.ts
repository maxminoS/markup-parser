import { parseMarkdown, parseOrg } from 'utils/Parsers';

const sampleHTML: string = `<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<blockquote>A quote</blockquote>
This text is <b>bold</b> and <i>italic</i><br />
<img alt='image.png' src='image.png' />
<a href='https://link_href'>A link</a>
&lt;h1&gt;HTML Injection&lt;/h1&gt;`;

const sampleMarkdown: string = `# Header 1
## Header 2
### Header 3
> A quote
This text is **bold** and *italic*

![image.png](image.png)
[A link](https://link_href)
<h1>HTML Injection</h1>`;

const sampleOrg: string = `* Header 1
** Header 2
*** Header 3
#+BEGIN_VERSE
A quote
#+END_VERSE
This text is *bold* and /italic/

[[image.png]]
[[https://link_href][A link]]
<h1>HTML Injection</h1>`;

it('parses Markdown correctly', () => {
  expect(parseMarkdown(sampleMarkdown)).toMatch(sampleHTML);
});

it('parses Org Mode correctly', () => {
  expect(parseOrg(sampleOrg)).toMatch(sampleHTML);
});
