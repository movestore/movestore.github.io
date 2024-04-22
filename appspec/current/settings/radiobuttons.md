# Radiobuttons
Radiobuttons allow the user to choose one option from a list of predefined options. See [Dropdown](appspec/current/settings/dropdown.md) for including a larger number of predefined options.

## Example
```json
{
  "id": "testRadioButtons",
  "name": "Test Radiobuttons",
  "description": "Select an option.",
  "defaultValue": "some-value",
  "type": "RADIOBUTTONS",
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

!\> Note that the `defaultValue` must always be available as an option.