const tiles = {
    dirt: {
        name: 'Dirt',
        sprite: 'Resources/icons/dirt.png',
        tool: 'Shovel'
    },
    rock: {
        name: 'Rock',
        sprite: 'Resources/icons/rock.png',
        tool: 'Pickaxe'
    },
    wood: {
        name: 'Wood',
        sprite: 'Resources/icons/wood.png',
        tool: 'Axe'
    }
};

document.addEventListener("DOMContentLoaded", function() {
    const rightSide = document.getElementById('rightSide'); // Get the element with ID 'rightSide'
    const numColumns = 10; // Number of columns in the grid
    const numRows = 7; // Number of rows in the grid

    // Loop to generate tiles
    for (let row = 0; row < numRows; row++) { // Loop through each row
        for (let col = 0; col < numColumns; col++) { // Loop through each column
            const tile = document.createElement('div'); // Create a new <div> element for the tile
            tile.classList.add('tile'); // Add the 'tile' class to the tile

            // Determine the type of tile based on its position
            let tileType;
            if (row >= numRows - 2) {
                tileType = 'dirt'; // Bottom two rows are dirt
            } else if (row >= numRows - 4) {
                tileType = 'rock'; // Two rows above the bottom two are rock
            } else {
                tileType = 'wood'; // All other rows are wood
            }

            // Assign properties to the tile based on its type
            tile.dataset.name = tiles[tileType].name;
            tile.dataset.sprite = tiles[tileType].sprite;
            tile.dataset.tool = tiles[tileType].tool;

            // Set the background image of the tile based on its sprite
            tile.style.backgroundImage = `url('${tiles[tileType].sprite}')`;

            //TODO
            // alert(tileName); // Display the tile name (you can change this to any other way of displaying the name)

            rightSide.appendChild(tile); // Append the tile to the 'rightSide' container
        }
    }
});