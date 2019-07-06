This project renders an interactive Sudoku grid UI for solving puzzles.

- [Features](#Features)
  - [Current](#Current)
  - [Planned](#Planned)
- [Installation and Use](#Installation-and-Use)
- [Development Notes](#Development-Notes)
  - [Linting](#Linting)
  - [Styling](#Styling)
    - [CSS Modules](#CSS-Modules)
    - [Sass](#Sass)
  - [Testing](#Testing)
- [Acknowledgements](#Acknowledgements)

## Features

### Current

-   'Entry' and 'Solve' modes
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

## Development Notes

### Linting

We use the `airbnb` [eslint configuration](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb) as our baseline linting setup, with some minor rule modifications (see the `package.json` file). We also use the [standard stylelint-config](https://github.com/stylelint/stylelint-config-standard) for linting our CSS. Our eslint + stylelint setup is run as a precommit hook [using](https://medium.com/@bartwijnants/using-prettier-and-husky-to-make-your-commits-save-2960f55cd351) `husky` and `lint-staged`.

### Styling

#### CSS Modules

We make use of Create React App's [built-in support](https://facebook.github.io/create-react-app/docs/adding-a-css-modules-stylesheet) (as of v2) for CSS Modules which scopes styles to avoid `className` collisions. This requires importing and using our stylesheets like so:

```js
import styles from "styleSheetName.module.css"

// ...
render() {
    return <div className={styles.foo}></div>
}
```

as opposed to:

```js
import "styleSheetName.css"

// ...
render() {
    return <div className={"foo"}></div>
}
```

#### Sass

**TODO** :)

### Testing

We use `react-testing-library` to test the app since RTL [encourages](https://github.com/testing-library/react-testing-library#the-problem) good quality, maintainable tests that don't focus on implementation details.

The standard `npm test` will run the app's test suite. To get a coverage report, you can run `npm test -- --coverage` or use the coverage script via `npm run coverage` (defined in the `package.json` file).

## Acknowledgements

The UI and features for this app take heavy inspiration from Duncan's SuDoku Solver, an execellent Sudoku solver available for Windows [here](http://www.littlegogs.com/).
