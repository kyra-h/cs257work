/* List all of the frogs with the scientific name Litoria rheocola */

SELECT * FROM frogData WHERE scientificName = 'Litoria rheocola' ORDER BY occurrenceID DESC;

SELECT * FROM frogData WHERE decimalLatitude < -30 AND decimalLatitude > -40 ORDER BY decimalLatitude DESC;

SELECT * FROM frogData WHERE eventDate LIKE '2017' ORDER BY eventDate DESC;

