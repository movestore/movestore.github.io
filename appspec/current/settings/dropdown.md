# Dropdown
A dropdown allows the user to choose from a larger number of predefined options. 

## Example

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

!> If the `defaultValue` is not `null`, the set value must be available as an option.