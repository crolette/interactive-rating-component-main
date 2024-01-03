# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.mp4)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JS Vanilla

### What I learned

Style radio buttons:
To see how you can add code snippets, see below:

```css
input {
  cursor: pointer;
  position: absolute;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  z-index: 0;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--blue);

  &:hover {
    background-color: var(--grey-light);
  }

  &:checked {
    background-color: var(--orange);
  }
}
```

Use the :has selector

```css
&:has(> input:checked),
&:has(> input:hover) {
  color: var(--white);
}
```

Use toggle for the classlist:

```js
function togglePopup() {
  for (let item of cards) {
    item.classList.toggle("invisible");
  }
}
```

## Author

- Website - [Crolweb](https://www.your-site.com)
- Github - [Crolweb](https://github.com/crolette)
- Frontend Mentor - [@crolette](https://www.frontendmentor.io/profile/crolette)
