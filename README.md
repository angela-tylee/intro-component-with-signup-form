# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Frontend Mentor - Intro component with sign up form solution](#frontend-mentor---intro-component-with-sign-up-form-solution)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

<img width="1370" alt="image" src="https://github.com/angela-tylee/intro-component-with-signup-form/assets/145020731/9364d4f0-92dd-431c-bd5f-1aa4435ed1ca">
<img width="385" alt="image" src="https://github.com/angela-tylee/intro-component-with-signup-form/assets/145020731/98a439bf-513f-4692-b128-2e89d04417cc">


### Links

- Solution URL: https://github.com/angela-tylee/intro-component-with-signup-form
- Live Site URL: https://angela-tylee.github.io/intro-component-with-signup-form/

## My process

### Built with

- HTML / CSS / JavaScript

### What I learned

- Create a decent form with `<form>`,  `<input>`, `<button>` tags
  - understand `action` attribute of `<form>`
  - understand the usage of `<button type="submit">` and `<input type="submit">`
  - know different input types and its usage or variations
- Create form validation with JavaScript
  - validate email with Regular Expression and `test()` method
  - show error message with CSS / JavaScript accordingly.
- CSS
  - `<input>` is default with `box-sizing: content-box`. To avoid its overflow over the padding of parent element `<form>`, it should be assigned a `box-sizing: border-box` style.(`<button>` doesn't share the same problem>)

### Continued development

- To not show the error when users fill out the form for the first time.
- To select show or hide password.
