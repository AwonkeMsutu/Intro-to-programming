// --- Games Array Section ---
document.write("<strong>-------Current Games List-------</strong><br>");
var games = ["Chess", "Sudoku", "Monopoly", "Ludo"];
document.write("1. Initial list: " + games + "<br><br>");

// Changing the first element
games[0] = "Checkers";
document.write("2. After swapping Chess for Checkers: " + games + "<br>");

// Updating the HTML element (Make sure you have an id="myCollection" in your HTML)
var collectionEl = document.getElementById("myCollection");
if(collectionEl) {
    collectionEl.innerHTML = games.valueOf();
}

document.write("<br><strong>-------Digital Games List-------</strong><br>");
var digitalGames = ["Minecraft", "Tetris", "Solitaire", "Minecraft", "Halo"];
document.write("3. Digital library: " + digitalGames + "<br>");

document.write("<br><strong>-------Ultimate Library-------</strong><br>");

// 1. Concat (Merging two lists)
var allGames = games.concat(digitalGames);
document.write("1. Merged Library: " + allGames + "<br><br>");

// 2. IndexOf (Find where a specific item is)
var position = games.indexOf("Sudoku");
document.write("2. Position of Sudoku: " + position + "<br><br>");

// 3. Join (Turning an array into a styled string)
var styledGames = games.join(" | ");
document.write("3. Styled list: " + styledGames + "<br><br>");

// 4. LastIndexOf (Find the LAST time an item appears - great for duplicates!)
var lastMinecraft = digitalGames.lastIndexOf("Minecraft");
document.write("4. Last 'Minecraft' entry is at index: " + lastMinecraft + "<br><br>");

// 5. Pop (Remove the very last item)
var removedGame = games.pop();
document.write("5. Sold the last game: " + removedGame + "<br>");
document.write("List after sale: " + games + "<br><br>");

// 6. Push (Add a new item to the end)
games.push("Scrabble");
document.write("6. Added Scrabble to the collection: " + games + "<br><br>");