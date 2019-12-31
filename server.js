var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
const sudoku = require("sudoku-umd");

// Required for CRA deployment
app.use(express.static(path.join(__dirname, "build")));

/**
 * bodyParser middleware automatically parses the request body of POSTs and places
 * the result in request.body of each route. (Assumes Content-Type: application/json is sent.)
 */
app.use(bodyParser.json());

app.get("/g/:sudokuGame", function(req, res) {
    // Then you can use the value of the id with req.params.id
    // So you use it to get the data from your database:
    console.log(req.params.sudokuGame);
    console.log({ res });
    res.redirect("/bar");
});

app.get("/sudoku", (request, response, next) => {
    const validDifficultyLevels = ["easy", "medium", "hard", "very-hard", "insane", "inhuman"];

    const difficultyLevel = request.query.difficulty;
    if (!validDifficultyLevels.includes(difficultyLevel)) {
        throw new Error(`Invalid difficulty level provided. Received '${difficultyLevel}'`);
    }

    const sudokuPuzzle = sudoku.generate(difficultyLevel);
    const normalizedSudoku = normalizeSudoku(sudokuPuzzle);
    response.json(normalizedSudoku);
});

app.post("/sudoku", (request, response) => {
    // TODO: error handling for malformed requests
    const unsolvedSudoku = denormalizeSudoku(request.body.unsolvedSudoku);
    const solvedSudoku = sudoku.solve(unsolvedSudoku);
    response.json(normalizeSudoku(solvedSudoku));
});

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(process.env.PORT || 4000);

/**
 *
 * string to array of strings
 */
function normalizeSudoku(sudoku) {
    const normalizedSudoku = [...sudoku].map(val => {
        if (val === ".") {
            return "";
        }

        return val;
    });

    return normalizedSudoku;
}

/**
 *
 * array of strings to string
 */
function denormalizeSudoku(sudoku) {
    const denormalizedSudoku = sudoku
        .map(val => {
            if (val === "") {
                return ".";
            }

            return val;
        })
        .join("");

    return denormalizedSudoku;
}
