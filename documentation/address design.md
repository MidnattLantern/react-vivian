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