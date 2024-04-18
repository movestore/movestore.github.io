# Dropdown
A dropdown allows the user to choose one option from a larger number of predefined options. 

## Example
```json
{
  "id": "testDropdown",
  "name": "Test Dropdown",
  "description": "Select an option.",
  "defaultValue": null,
  "type": "DROPDOWN",
  "options": [
    {
      "value": null,
      "displayText": "Empty Selection"
    },
    {
      "value": "some-value",
      "displayText": "Some Value"
    }
  ]
}
```

!\> Note that the `defaultValue` must always be available as an option.