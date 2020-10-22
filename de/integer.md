# Eingabe einer ganzen Zahl
Um dem Benutzer die Möglichkeit zu geben eine ganze Zahl eingeben zu können, kann der Typ `INTEGER` verwendet werden. Beachte, dass dies effizienter ist als der Typ `FLOAT` für reale Zahlen (Kommazahlen), wenn die Werte kein Komma nötig haben.

## Beispiel

```json
{
  "id": "testNumber",
  "name": "Test Number",
  "description": "Select a number.",
  "type": "INTEGER",
  "defaultValue": null
}
```