# Passwords
To allow the user to input passwords, keys or other sensitive information that should be encoded, you can use the type `SECRET`. 

Note that `null` and `""` (empty number) are handled equivalently and are passed on as `null` to the App code.

## Example

```json
{
  "id": "testSecret",
  "name": "Test Secret",
  "description": "Select a Secret",
  "defaultValue": null,
  "type": "SECRET"
}
```