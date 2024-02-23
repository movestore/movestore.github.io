# Text variable
To allow the user to define a text variable input you can use the type `STRING`. 

Note that `null` and `""` (empty number) are handled equivalently and are passed on as `null` to the App code.

## Example

```json
{
  "id": "testString",
  "name": "Test String",
  "description": "Select a String.",
  "type": "STRING",
  "defaultValue": null
}
```