# Appspec.json

The `appspec.json` file is used to define an App within MoveApps. 
Here, dependencies and settings of the App are defined. Few of the settings are mandatory and have a fixed list of possible values, others are optional.


## Settings/parameters 

In order to give the user the ability to configure an App within MoveApps, the settings for the App must be defined. The user can change these settings in the MoveApps interface and the values are transferred as parameters to the App when it is started.


## Validator

For creation, test and verification of the `appspec.json` there is the [Settings Editor](https://moveapps.org/apps/settingseditor ':ignore'). With its help you can quickly and easily define and visualise your settings.

### Settings types
There are different types of settings:
  - [Text](de/string.md)
  - [Integer numbers](de/integer.md)
  - [Real numbers](de/double.md)
  - [Date selection](de/timestamp.md)
  - [Radiobuttons](de/radiobuttons.md)
  - [Checkboxes](de/checkbox.md)
  - [Dropdown](de/dropdown.md) 


### Example of settings in appspec.json

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
## Dependencies

In this part of the file, all libraries on which the App depends have to be listed. These are dependencies that the App needs for its construction and / or runtime. For each library, you can optionally define which version of it must be loaded.

!> Special rules apply to certain libraries (such as e.g. shiny); these can only be required in a certain version.

The [Settings Editor](https://moveapps.org/apps/settingseditor) can be used to check the definition of all dependencies before submission.


### Example 

Following is an example of the dependencies of an R App that requires libraries (packages) `prettyunits` and `futile.logger`:

```json
{
  "settings": [],
  "dependencies": {
    "R": [
      {
        "name": "prettyunits",
        "version": "1.1.1" 
      },
      {
        "name": "futile.logger"
      }
    ]
  }
}
```

## Artefacts
If the App creates [Artefacts](copilot-r-sdk.md#Artefacts) this must be stated in the `appspec.json`. The type and amount of artefacts do not have to be defined. Note that also with this setting, it is possible that (e.g. if there are no data for an animal) no artefact are returned without inducing an error.
```json
{
  "settings": [],
  "dependencies": {
  "R": []
  },
  "createsArtifacts": true
}
```

## License
For further use and publication, please specify which license agreement you want to use for your App.

## Language


## Keywords


## Contributor


## Funding


## References


























