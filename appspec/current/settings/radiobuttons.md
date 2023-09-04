# Radiobuttons
Radiobuttons allow the user to choose from a list of predefined options.


## Example
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

!> If the `defaultValue` is not zero (`null`), the set value must be available as an option.