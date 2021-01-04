# Checkbox
A checkbox is used to configure true / false values. This option is presented to the user in the form of a checkbox.

## Example

```json
{
  "id": "testCheckbox",
  "name": "Test Checkbox",
  "description": "Select an option.",
  "type": "CHECKBOX",
  "defaultValue": true
}
```

!> The `defaultValue` must be either `null`, `true` or `false`. It cannot be a string, such as `"False"`.