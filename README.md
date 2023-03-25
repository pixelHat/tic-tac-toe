# Frontend Mentor - Tic Tac Toe solution

This is a solution to the [Tic Tac Toe challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tic-tac-toe-game-Re7ZF_E2v). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the game depending on their device's screen size
- See hover states for all interactive elements on the page
- Play the game either solo vs the computer or multiplayer against another person
- Computer uses the minimax to find the best move. So you are not going to defeat it.

### Links

- [Solution URL](https://github.com/pixelHat/tic-tc-toe)
- [Live Site URL](https://pixelhat.github.io/tic-tac-toe/)

## My process

The whole application was build using Svelte kit and Lodash.

### What I learned

Using promises to calculate the best move would be a better alternative because it takes around 1 second to find it on Smartphones. So I would not block the UI during this process.

Creating generic components like `Heading` and `Stack` are very verbose because I have to provide a lot of properties. A CSS-in-JS can be helpfull here.

#### Reactivity classes

Svelte allows us to create reactivity classes by default.

```ts
import { writable, type Subscriber, type Writable } from "svelte/store";

class MyReactivityClass {
  private store: Writable<GameStore>;

  constructor() {
    this.store = writable(this);
  }

  subscribe(subscriber: Subscriber<GameStore>) {
    return this.store.subscribe(subscriber);
  }
}
```

This allows us to use the `$` to make the UI reactivity to the object.

### Useful resources

- [Svelte Store: Reactive class property using store](https://www.youtube.com/watch?v=oQY98LZIW2E&list=PLoKaNN3BjQX3fG-XOSwsPHtnV8FUY6lgK&index=19)
- [Svelte Kit](https://kit.svelte.dev/)
- [Deploy Vite app to GitHub Pages using GitHub Actions](https://www.youtube.com/watch?v=MKw-IriprJY)

## Author

- Github - [pixelHat](https://github.com/pixelHat)
- Frontend Mentor - [@pixelHat](https://www.frontendmentor.io/profile/pixelHat)
