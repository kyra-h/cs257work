
/* List all of the frogs with the scientific name contains the user's input */
CREATE PROCEDURE frogNames(@name TEXT) 
AS BEGIN

SELECT * FROM frogData WHERE scientificName LIKE NAME ORDER BY occurrenceID DESC;

END