document.addEventListener("DOMContentLoaded", function() {
    const rightSide = document.getElementById('rightSide'); // Get the element with ID 'rightSide'
    const numColumns = 10; // Number of columns in the grid
    const numRows = 7; // Number of rows in the grid

    // Loop to generate tiles
    for (let row = 0; row < numRows; row++) { // Loop through each row
        for (let col = 0; col < numColumns; col++) { // Loop through each column
            const tile = document.createElement('div'); // Create a new <div> element for the tile
            tile.classList.add('tile'); // Add the 'tile' class to the tile
            rightSide.appendChild(tile); // Append the tile to the 'rightSide' container
        }
    }
});