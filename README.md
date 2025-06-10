# skip-selector

React UI for selecting skip sizes with dynamic pricing and slider display

## How to run

npm install (to install the dependencies)
npm start (To run the project)

## Tech Stack

- React
- react-slick (for slider)-
- slick-carousel (slider CSS)
- CSS Modules (custom styling)
- JSON file for skip data

## How I Built This App

The goal was to display a set of skip sizes that users can browse and select, with pricing and details shown clearly. To mke it completely different from the original project, I used slider display by using slick-carousel.

## Component Structure

1. App.js – Main Logic & State Handler
   -Holds the skip data, imported from skipData.json.
   -Maintains the state of the selected skip using hook useState.
   -Renders a list of SkipCard components in a horizontal slider.
   -Shows the footer section displaying selected skip details and final price.

2. SkipCard.js – Individual Skip Cards
   Each skip card shows:
   -An image of the skip (container.jpg)
   -Size in yards
   -Hire period
   -Price (with VAT calculated)
   -A warning if not allowed on road
   -Button to select (which toggle between selected and select this skip, which was possible by handle click function using conditional rendering)

3. Footer
   -I calculated the footer with the price before vat + vat and optional rendering if the skip is selected.

## How the Slider Was Implemented

I used the react-slick library, a popular and flexible React component for carousels.
In slider setting, slidestoshow :3 or 4 as per requirement, it is responsible for how many grid image can be shown at once.
slidesToScroll : 1 or 3 as per requirement, it can show and change the slide while sliding, how many you want to change on the screen.
