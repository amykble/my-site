---
tag: css
tagCol: bg-blue-200
title: Who Knew Pseudo Elements Were So Great!
date: 2020-01-15
---

**There are a bunch of useful ways to use pseudo elements that are easy to forget about, this pen shows a few ways I commonly use them myself.**

Before I get started, [here's a link to the codepen that goes along with this post](https://codepen.io/amykble/pen/zYxPpOV).

I use pseudo elements in all sorts of ways whilst creating websites. Some ways are pretty common, whilst other times it's easy to forget that a pseudo element would be perfect for keeping code tidy. This dev.to post gives 4 ways to use pseudo elements.

## 1. Make Backgrounds Pretty

Firstly, add a background class, either on the body itself or a div. Depending on your usecase.

```html
<body>
  <div class="background"></div>
</body>
```

Here, I am going to use the **::after** pseudo element to give the background two different colors.

```css
.background {
  background-color: azure;
  height: 100vh;
  width: 100vw;
  z-index: -1;
  position: relative;
}

.background::after {
  position: absolute;
  content: '';
  background-color: cadetblue;
  width: 100vw;
  height: 50vh;
  left: 0;
  bottom: 0;
}
```

So, the background in this case is set to fill the screen size, and the ::after element is set to take up 50% of the view height, and to stay at the bottom of the .background class.

Notice that the position for the background class is set to **relative**. This has to explicitly be stated for pseudo elements, or their positioning will be applied relative to the body element. setting the z-index will put the pseudo element behind other elements on the page.

The pseudo element itself, in this case, ::after, must also have **content:''** and positioning set to **anything other than relative**, or it will not appear on the screen. Leave content empty for now, I will give an example using it later on in this post.

Tip: add `transform: skewY(Xdeg);` to angle the ::after element, it looks pretty cool!

## 2. Text Styling

This one works on any text, from headers to paragraphs and links.

```html
<h2>The first letter of this heading is different</h2>
<p>
  The first line of this paragraph is different. Lorem ipsum dolor sit, amet
  consectetur adipisicing elit. Incidunt pariatur maxime quia ratione dolor est
  soluta possimus minus quis deleniti ipsum vero, quo vitae dicta mollitia rem
  eum ab repellendus?
</p>
```

Using the **::first-letter** and **::first-line** pseudo elements lets us edit specific parts of text on a page, we can get the "newspaper" look with a larger first letter, for example.

```css
h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

h1::first-letter {
  font-size: 1.5em;
}
```

I'm using 'rem's for the original font-size and 'em's for the pseudo element, this way, it will **stay relative** to the text size.

The same rules apply to ::first line:

```css
p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
}

p::first-line {
  font-family: bolder;
  color: midnightblue;
}
```

## 3. Bullet Points

My favourite way to use pseudo elements is for **styling lists**. The following list is styled using a **::before pseudo element** to change the bullets to look colourful.

First step is to create an unordered list and remove the styling.

```html
<ul>
  <li>Practise CSS stlying</li>
  <li>Use more pseudo elements</li>
  <li>Style this list</li>
  <li>Create beautiful websites!</li>
</ul>
```

```css
ul {
  font-size: 1rem;
  list-style: none;
}
```

Removing the standard bullet points means I can add my own and make them look better.

```css
li::before {
  display: inline-block;
  content: '';
  border-radius: 50%;
  height: 0.5em;
  width: 0.5em;
  margin-right: 1em;
  background-color: #ffeb3b;
}
```

The most important part to remember here is to display the pseudo element as an **inline-block**. To make them round, I applied a border-radius of 50%.
Therefore, no matter the size of the block, the border radius will adjust. After that, the margins are used to move the bullets away from the list.

Lists can also be styled using **shapes as bullet points**. My example uses a hex reference, a list which can be found [here](https://www.w3schools.com/charsets/ref_utf_geometric.asp). This is where the content property is used.

```css
li::before {
  display: inline-block;
  content: '\25B8';
  margin-right: 1em;
  color: #ffeb3b;
}
```

## 4. Make Links Fun

Using a ::before or ::after pseudo element to style links can add a nice flare to the hover or focus state. By scaling the X axis from 0 to 1 over a transition, a smooth underline is created. Here's the code.

```css
a {
  text-decoration: none;
  transition-delay: 0.4s;
  position: relative;
}

a::after {
  position: absolute;
  content: '';
  height: 2px;
  width: 100%;
  bottom: -2px;
  background-color: #fafafa;
  transition: transform 0.5s ease-in-out;
  transform: scaleX(0);
}
```

Now all I need to do is tell the pseudo element to scale up when the link is hovered over or focused on.

```css
a:focus::after,
a:hover::after {
  transform: scaleX(1);
  transform-origin: left;
}
```

Transform-origin tells the transform where to start, changing this can create different effects.

**Thank you for reading! I've been using pseudo elements a lot recently and thought I'd share the usecases I have for them. There are more, and if anyone has any interesting or obscure uses for pseudo elements, let me know!**
