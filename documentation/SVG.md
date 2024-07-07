make sure any references to xmlns are deleted in the .svg files

The SVG file may have any dimensions. Keeping either widht or height set to auto can make the SVG responsive to any scale.
```css
.SVGContainer{
    border: 1px hidden rgb(255,0,0);
    width: 200pt;
    height: auto;
}
```