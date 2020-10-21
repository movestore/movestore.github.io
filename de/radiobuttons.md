# Radiobuttons
Um dem Benutzer die Auswahlmöglichkeit aus verschiedenen vordefinierten Optionen zu geben, können Radiobuttons verwendet werden. 

## Beispiel
```json
{
  "id": "testRadioButtons",
  "name": "Test Radiobuttons",
  "description": "Select an option.",
  "type": "RADIOBUTTONS",
  "defaultValue": null,
  "options": [{
      "value": "some-value",
      "displayText": "Some Value"
    },
    {
      "value": "another-value",
      "displayText": "Another Value"
    }]
}
```

!> Falls der Wert `defaultValue` nicht `null` ist, muss der gesetzte Wert als Option verfügbar sein. 