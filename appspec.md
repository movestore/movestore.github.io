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


-------------
## Lisen zu Optionen (aus Trello Ticket)
Hierfür soll als Pflicht gelten: Engabe (1) einer sinnvollen Licence mit URL (auszuwählen aus der Liste siehe unten) und (2) mindestens ein keyword (Freitext).
Desweiteren soll rückkontrolliert werden, dass reference type aus der Data Cite Liste (siehe unten) ist, language vom Typ ISO 639-2 (B) ist und contributor role aus der dritten Liste (siehe unten)

### Lizenz Options:

- The “GNU General Public License” version 3 -https://spdx.org/licenses/GPL-3.0-or-later.html#licenseText
- The “MIT License”-https://spdx.org/licenses/MIT.html#licenseText
- The “GNU Affero General Public License” version 3-https://spdx.org/licenses/AGPL-3.0-or-later.html#licenseText
- The “BSD 3-clause License”-https://spdx.org/licenses/BSD-3-Clause.html#licenseText
- The “Creative Commons Attribution-Share Alike International License” version 4.0-https://spdx.org/licenses/CC-BY-SA-4.0.html#licenseTex

### Data Cite Options:

- *IsCitedBy/Cites
- *IsSupplementTo/IsSupplementedBy
- IsContinuedBy/Continues
- Describes/IsDescribedBy
- HasMetadata/IsMetadataFor
- *HasVersion/IsVersionOf
- *IsNewVersionOf/IsPreviousVersionOf
- IsPartOf/HasPart
- *IsReferencedBy/References
- IsDocumentedBy/Documents
- IsCompiledBy/Compiles
- IsVariantFormOf/IsOriginalFormOf
- IsIdenticalTo
- IsReviewedBy/Reviews
- IsDerivedFrom/IsSourceOf
- IsRequiredBy/Requires
- Obsoletes/IsObsoletedBy

### Contributor Role List (can be more than one, comma separated):

author
compiler
copyright holder
creator
contributor
contractor
data contributor
funder
reviewer
translator
maintainer






















