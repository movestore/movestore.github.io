# Settings

In order to give the user the ability to configure an App within MoveApps, the settings (of parameters) for the App must be defined. Once the App is running, the user can thus change settings via the MoveApps interface and the values of parameters are transferred to the App when it is started.

There are different types of settings:
  - [Text](string.md)
  - [Integer numbers](integer.md)
  - [Real numbers](double.md)
  - [Date selection](timestamp.md)
  - [Radiobuttons](radiobuttons.md)
  - [Checkboxes](checkbox.md)
  - [Dropdown](dropdown.md)
  - [Auxiliary](auxiliary.md)


#### Example
```json
{
  "settings": [
    {
        "id": "testTimestamp",
        "name": "Test Timestamp",
        "description": "Select a date.",
        "type": "INSTANT",
        "defaultValue": null
    },
    {
        "id": "testNumber",
        "name": "Test Number",
        "description": "Select a number.",
        "type": "INTEGER",
        "defaultValue": null
    }
  ]
}
```