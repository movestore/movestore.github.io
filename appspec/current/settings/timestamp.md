# Seletion of a date and time
To select a date and time (timestamp), please use the setting of type `INSTANT`.

## Example
```json
{
  "id": "testTimestamp",
  "name": "Test Timestamp",
  "description": "Select a date.",
  "defaultValue": null,
  "type": "INSTANT"
}
```

!\> Note that the selected timestamp is always passed on as a date time string in **ISO 8601** format with time zone **UTC**, e.g. `"2017-04-01T11:00:00.000Z"`. Make sure to specify the format when including this variable in your App code (in R e.g. by: `format="%Y-%m-%dT%H:%M:%OSZ"`)