# Datumsauswahl
Um dem Benutzer die Möglichkeit zu geben ein Datum auszuwählen, kann eine Einstellung vom Typ `INSTANT` verwendet werden.

## Beispiel
```json
{
  "id": "testTimestamp",
  "name": "Test Timestamp",
  "description": "Select a date.",
  "type": "INSTANT",
  "defaultValue": null
}
```

!> Bei der Auswahl des Datums handelt es sich immer um ein Datum in der Zeitzone **UTC**.