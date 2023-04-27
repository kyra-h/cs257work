/* List all of the frogs with the scientific name Litoria rheocola */
SELECT * FROM frogData WHERE scientificName = 'Litoria rheocola' ORDER BY occurrenceID DESC;


/* List all of the frogs within latitidues -30 & -40 */
SELECT * FROM frogData WHERE decimalLatitude <= -30 AND decimalLatitude >= -40 ORDER BY decimalLatitude DESC;

/* List all of the frog sightings on 11/30/2017 */
SELECT * FROM frogData WHERE eventDate LIKE '11/30/2017' ORDER BY eventDate DESC;

