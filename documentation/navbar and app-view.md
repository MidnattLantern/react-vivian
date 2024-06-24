Located inside components directory.
Hardcoded to be a part of the base source of the app.
CSS dimensions in "src" directory, appearance in the default "styles" directory.
Using NavLink, import `import { NavLink } from "react-router-dom";` to navigate around the app.
The responsive change from desktop to phone happen at `max-width:600px`. The dimensions use px, it must be fixed.
Overflow X and Y trap the options inside a scrollable div when window size is too small.
With plenty of horizontal space for desktop, and vertical for phone, the NavBar is kept at the left for desktop and bottom for phone.

Root container
---
Every component and page has a x-container, the navbar and app view use two containers inside one container
Container:
```jsx
<div>
    <div>
    {/* Navbar */}
    </div>
    <div>
    {/* App content */}
    </div>
</div>
```

The first <div> is for the Vivian app itself, the root container.

Use <Nav> from bootstrap. This component shouldn't have a <div> wrapped, as it will mess with the appearance.

css:
`flex: 0 0 auto;`
Prevent items from shrinking in the phone view.

Hide the scroll bar:
---
Vivian is visually designed without scroll bar in mind. To hide the scroll bar, include this in CSS:

```css
.Container {
    /* code for container like usual */
    /* always hide the scroll bar */
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
.Container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, and Opera */
}
```
