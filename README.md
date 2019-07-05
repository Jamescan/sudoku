This project renders an interactive Sudoku grid for solving puzzles.

## Features

### Current

-   Easily input numbers by moving your mouse inside of each cell
    -   The numbers 1 through 9 will appear as you move your mouse from the upper left to the lower right of a cell
-   Pencil-marking notation (little numbers in cells)

### Planned

-   Input Validation
    -   For Obvious Mistakes
    -   For Any Mistakes (using the puzzle's solution)
-   Clear all pencil marks via a button
-   Accessibility improvements
    -   Navigation and input using only a keyboard

## Installation and Use

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so getting up and running is the standard:

`npm install`

`npm start`

## Linting

We use the `airbnb` [eslint configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as our baseline linting setup, with some minor rule modifications (see the `package.json` file). Our eslint setup is run as a precommit hook [using](https://medium.com/@bartwijnants/using-prettier-and-husky-to-make-your-commits-save-2960f55cd351) `husky` and `lint-staged`

## Styling

We make use of Create React App's [built-in support](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) for CSS Modules by naming our stylesheets as `stylesheetName.module.css`.

**TODO**: Sass :)

## Testing

We use `react-testing-library` to test the app since RTL [encourages](https://github.com/testing-library/react-testing-library#the-problem) good quality, maintainable tests that don't focus on implementation details.

The standard `npm test` will run the app's test suite. To get a coverage report, you can run `npm test -- --coverage` or use the coverage script via `npm run coverage` (defined in the `package.json` file).
