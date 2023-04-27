DROP TABLE IF EXISTS frogData;
CREATE TABLE frogData (
  dataGeneralizations text,
  occurrenceID int,
  eventID int,
  decimalLatitude float,
  decimalLongitude float,
  scientificName text,
  eventDate text,
  eventTime text,
  coordinateUncertaintyInMeters float,
  geoprivacy text,
  recordedBy int,
  stateProvince text
);
