Located inside components directory.
Hardcoded to be a part of the base source of the app.
CSS dimensions in "src" directory, appearance in the default "styles" directory.
Using NavLink, import `import { NavLink } from "react-router-dom";` to navigate around the app.
The responsive change from desktop to phone happen at `max-width:600px`. The dimensions use px, it must be fixed.
Overflow X and Y trap the options inside a scrollable div when window size is too small.
With plenty of horizontal space for desktop, and vertical for phone, the NavBar is kept at the left for desktop and bottom for phone.

Every component and page has a x-container, the navbar and app view use two containers inside one container
Container:
<div>
    <div>
    (Navbar)
    </div>
    <div>
    (App content)
    </div>
</div>

The first <div> is for the Vivian app itself, the root container.