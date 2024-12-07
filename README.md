# React + TypeScript + Vite

How to start:

1. `npm i`
2. `npm run dev`

## Features Implemented
##Home page:##



![Alt text](./public/home.jpg)

###Edit dialog:###
- Toggle Sidebar: The sidebar can be opened or closed, and is rendered conditionally based on an isOpen prop.
- Header Buttons (Single Select): Two header buttons ("Autofill" and "Return") can be toggled, ensuring only one is active at a time.
- Multiple Select Ovals: The oval-shaped variable buttons can be selected or deselected independently, allowing multiple simultaneous selections.
- Delayed Tooltip on Hover: Hovering over the "Co2 Distribution" oval button for 1.5 seconds triggers description section. Removing the cursor before the delay elapses prevents the tooltip from showing.

###Technical Decisions and Trade-offs:###
- State Management with Hooks: Used React’s useState hook to manage the selected state of both the header buttons and the oval buttons. (Decided on an array-based approach (selectedOvals) for oval selections to allow multiple selections efficiently).
- Styling with CSS: Used a combination of static CSS classes and inline styles for quick adjustments. Classes define the overall look and feel, while inline styles handle small layout tweaks.


![Alt text](./public/edit.jpg)
