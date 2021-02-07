# Markup Parser

Parses markup text and previews it.

This project is not concerned about the implementation of parsers but instead the front-end that takes in input and displays the "parsed" output.

*This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).*

## Usage

### Markup

Markup is a format that defines the layout of a text document. In this project, we use Regular Expressions to search the different markup patterns and replace it with HTML, a markup format displayable within the web browser.

HyperText Markup Language, Markdown, and Org Mode are the markup formats that can be previewed in this web application.

### HTML

HTML is the standard markup language for displaying in the web browser. As this app uses "dangerouslySetInnerHTML", most HTML elements are likely to work.

### Markdown

Markdown is a simple markup language for formatting text.

Here are the accepted patterns for Markdown in this app:
```
# Header 1
## Header 2
### Header 3
> Blockquote
**Bold**
*Italic*
![Image title](Link to image)
[Link title](Link)
```


### Org Mode

Org mode is a document editing mode used in Emacs with functions that can read the markup.

Here are the accepted patterns for Org Mode in this app:
```
* Header 1
** Header 2
*** Header 3

#+BEGIN_VERSE
Blockquote
#+END_VERSE

*Bold*
/Italic/
[[Link][Link title]]
[[Image link]]
```

## Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode, reloading on edits.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner.

Uses Jest and React Testing Library for unit and integration testing.
