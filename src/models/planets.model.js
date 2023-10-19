// Import required Node.js modules.
const csv = require('csv-parse');
const fs = require('fs');
const util = require('util');
const path = require('path');

// kepler_data.csv Path
const filePath = path.join(__dirname, '..', 'data', 'kepler_data.csv');

// Promisify fs.readFile to make it asynchronous
const readFile = util.promisify(fs.readFile);

// Initialize an empty array to store information about habitable planets.
let Habitable = [];

// Define a function to check if a planet is habitable based on criteria.
function isHabitable(planet) {
    return planet['koi_disposition'] === 'CONFIRMED'
        && planet['koi_insol'] > 0.36 && planet['koi_insol'] < 1.11
        && planet['koi_prad'] < 1.6;
};

// [x] Open a readable stream to 'kepler_data.csv' and process it. 
// Read the CSV file asynchronously and process it.
(async () => {
    try {
        const fileContent = await readFile(filePath, 'utf-8')

        // Process the CSV data.
        csv.parse(fileContent, {
            comment: '#', // Ignore lines starting with '#'.
            columns: true, // Treat the first row as column headers
        })
            .on('data', (data) => {
                // When a data row is processed, check if it's habitable.
                if (isHabitable(data)) {
                    // If habitable, add it to the Habitable array.
                    Habitable.push(data);
                }
            })
            .on('error', (err) => {
                // Log an error message if any error occurs during processing.
                console.log(`Error: ${err}`)
            })
            .on('end', () => {
                // When all data is processed, log the following information:
                console.log(`${Habitable.length} Habitable Planets Found!`);
            });
    } catch (err) {
        // Handle any errors that occur during file reading.
        console.error(`File read error ${err}`)
    }
})()

function getAllPlanets() {
    return Habitable;
}

module.exports = {
    getAllPlanets,
}
