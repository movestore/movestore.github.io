# Settings

In order to give the user the ability to configure an App within MoveApps, the settings (or parameters) for the App must be defined in the [appspec.json](appspec.md) file. Once the App is running, the user can thus change settings via the MoveApps interface and the values of parameters are transferred to the App when it is started.

There are different types of settings:
  - [Text](appspec/current/settings/string.md)
  - [Integer numbers](appspec/current/settings/integer.md)
  - [Real numbers](appspec/current/settings/double.md)
  - [Date selection](appspec/current/settings/timestamp.md)
  - [Radiobuttons](appspec/current/settings/radiobuttons.md)
  - [Checkboxes](appspec/current/settings/checkbox.md)
  - [Dropdown](appspec/current/settings/dropdown.md)
  - [Auxiliary/user files](appspec/current/settings/user_file.md)
  
  The [Settings Editor](https://www.moveapps.org/apps/settingseditor) can be used to create and check the definition of all settings in the [appspec.json](appspec.md) file before submission of the App.

#### Example
```json
{
  "settings": [
    {
        "id": "testTimestamp",
        "name": "Test Timestamp",
        "description": "Select a date.",
        "defaultValue": null,
		"type": "INSTANT"
    },
    {
        "id": "testNumber",
        "name": "Test Number",
        "description": "Select a number.",
        "defaultValue": null,
		"type": "INTEGER"
    }
  ]
}
```