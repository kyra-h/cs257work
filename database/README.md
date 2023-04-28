# cs257 database

A directory for database SQL things

**Created on:** Thursday, April 27, 2023

My table has columns representing dataGeneralizations, occurrenceID, eventID, decimalLatitude, decimalLongitude, scientificName, eventDate, eventTime, coordinateUncertaintyInMeters, geoprivacy, recordedBy, and stateProvince. 

I decided to represent the data as a table because that seemed like the most effective option. I decided to use 1 table, as there was little repetition in my data and I didn't need to clean up much. I did not include certain IDs because I did not think they would be useful to users, but I kept eventIDs and occurrence IDs in case I wanted an easier way to sort by date or get information on who was doing the recording. I also kept information on the locations (with uncertainties, in case users might want only very precise information), privacy of the recordings (in case users want to only look at private/public data), and what device was used to record the frogs in case users might have biases toward certain devices. 

My queries represent audience actions, as they represent searching by a specific species (Litoria rheocola), searching by latitude (-30 through -40), and searching by date (11/30/2017). My queries are all filter functions, and they might help fulful the audience's wants of getting more information about smaller groupings of frogs. 

### Contents:
- This README file
- createtable.sql (will make a table with columns representing categories of data)
- frogData.csv (the data we will use for our project)
- quakeQueries.sql (Example queries by Amy Czismar-Dalal)
- sampleQueries.sql (Some sample queries that I used to get a table of specific frogs)
