# Input of integer numbers
To allow the user to enter integer numbers, the input type `INTEGER` can be used. Note that this is more efficient than the use of the type `DOUBLE` (for [real numbers](appspec/current/settings/double.md)), if the value does not need the possibility of numbers with decimals.

## Example

```json
{
  "id": "testNumber",
  "name": "Test Number",
  "description": "Select a number.",
  "defaultValue": null,
  "type": "INTEGER"
}
```