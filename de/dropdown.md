# Dropdown
Um dem Benutzer die Auswahlmöglichkeit aus verschiedenen vordefinierten Optionen zu geben, kann ein Dropdown verwendet werden. 

## Beispiel

```json
{
  "id": "testDropdown",
  "name": "Test Dropdown",
  "description": "Select an option.",
  "type": "DROPDOWN",
  "defaultValue": null,
  "options": [{
      "value": null,
      "displayText": "Empty Selection"
    },
    {
      "value": "some-value",
      "displayText": "Some Value"
    }]
}
```

!> Falls der Wert `defaultValue` nicht `null` ist, muss der gesetzte Wert als Option verfügbar sein. 