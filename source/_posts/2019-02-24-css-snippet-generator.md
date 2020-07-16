---
layout: post
title: CSS Snippet Generator
permalink: css-snippet-generator
date: 2019-02-24T01:13:19.000Z
comments: false
image: /images/CSS.jpg
description: CSS Snippet Generator
keywords: 'css, generator, html, css3, snippet, block, web, javascript, js, custom'
categories: web
tags:
  - css
  - generator
  - html
  - css3
  - snippet
  - block
  - web
  - javascript
  - js
  - custom
---

<style>
  @media only screen and (min-width: 768px) {
    .hr-mobile {
      visibility: hidden;
      margin-bottom: 40px;
    }
  }
</style>


<p style="margin-top: 10px">
  Generate formatted CSS which would otherwise be tedious to code by hand.
</p>

Using variables and a bit of custom logic, you can generate repetitive code snippets with parameters that differ slightly from snippet-to-snippet.

<hr class="hr-mobile">

### Backstory

This tiny tool came about as a result of an issue I had styling a client's WordPress site.
  
I needed to target a number of grid elements in batches. The class names differed only by an appended number, but were not necessarily in predictable order - requiring lots of manual fiddling.  
  
Sometimes it's not worthwhile to write an automation script to handle every edge case possible. Sometimes, all you need is a boost. I wrote CSS Snippet Generator to be that boost.

---

### <a href="https://github.com/ThatChocolateGuy/CSS-Snippet-Generator" target="_blank">Check out the repo</a>

This project utilizes the <a href="https://github.com/google/code-prettify" target="_blank">prettify.js</a> library by Google and <a href="https://github.com/google/code-prettify/blob/master/styles/sunburst.css" target="_blank">Vim Sunburst Theme</a> by David Leibovic.

---

## Try it out!

First, select `Generate Snippets` to cache modified copies of the original snippet, then `Print Snippets` to see the generated set.
  
You can play around with the code by editing on <a href="https://codepen.io/thatchocolateguy/pen/YzKjYpo" target="_blank">CodePen</a>.


<p class="codepen" data-height="607" data-theme-id="light" data-default-tab="result" data-user="thatchocolateguy" data-slug-hash="YzKjYpo" style="height: 607px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="CSS Snippet Generator">
  <span>See the Pen <a href="https://codepen.io/thatchocolateguy/pen/YzKjYpo">
    CSS Snippet Generator</a> by Nem (<a href="https://codepen.io/thatchocolateguy">@thatchocolateguy</a>)
    on <a href="https://codepen.io">CodePen</a>.
  </span>
</p>
<script async src="https://static.codepen.io/assets/embed/ei.js"></script>