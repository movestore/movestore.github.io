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

!\> Note that the `defaultValue` must always be available as an option for the user to be able to return to the default settings of the App.

!\> If the `defaultValue` argument is removed, the user is obliged to select one of the options, but cannot return to the default setting of no option being selected. This is useful if one option must be selected for the App to work, but the developer does not want to set a default. 