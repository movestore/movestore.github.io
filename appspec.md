# Appspec.json

The `appspec.json` file is used to define an App within MoveApps.
Here, dependencies, settings and documentation properties of the App are defined. Few of the settings are mandatory and have a fixed list of possible values, others are optional.


## Validator

For creation, test and verification of the `appspec.json` there is the [Settings Editor](https://moveapps.org/apps/settingseditor ':ignore'). With its help you can quickly and easily define and visualise your settings. If errors occur, suggestions for improvement are given.

## Settings

In order to give the user the ability to configure an App within MoveApps, the settings (of parameters) for the App must be defined. Once the App is running, the user can thus change settings via the MoveApps interface and the values of parameters are transferred to the App when it is started.

There are different types of settings:
  - [Text](string.md)
  - [Integer numbers](integer.md)
  - [Real numbers](double.md)
  - [Date selection](timestamp.md)
  - [Radiobuttons](radiobuttons.md)
  - [Checkboxes](checkbox.md)
  - [Dropdown](dropdown.md)


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

## Dependencies

In this part of the file, all libraries on which the App depends have to be listed. These are dependencies that the App needs for its construction and / or runtime. For each library, you can optionally define which version of it must be loaded.

!> Special rules apply to certain libraries (such as e.g. shiny); these can only be required in a certain version.

The [Settings Editor](https://moveapps.org/apps/settingseditor) can be used to check the definition of all dependencies before submission.


#### Example

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

#### Example

```json
{
  "settings": [],
  "createsArtifacts": true
}
```

## License
For further use and publication, it is mandatory to specify which license agreement you want to use for your App. At the moment there are five options (see list below), the keys of which have to be entered. Please consult [this website](https://choosealicense.com/) for help with choosing the most appropriate license for your App.

### List of license keys

- `GPL-3.0-or-later`: [The “GNU General Public License” version 3 or later](https://spdx.org/licenses/GPL-3.0-or-later.html#licenseText)
- `MIT`: [The “MIT License”](https://spdx.org/licenses/MIT.html#licenseText)
- `AGPL-3.0-or-later`: [The “GNU Affero General Public License” version 3 or later](https://spdx.org/licenses/AGPL-3.0-or-later.html#licenseText)
- `BSD-3-Clause`: [The “3-clause BSD License”](https://spdx.org/licenses/BSD-3-Clause.html#licenseText)
- `CC-BY-SA-4.0`: [The “Creative Commons Attribution Share Alike 4.0 International License” version 4.0](https://spdx.org/licenses/CC-BY-SA-4.0.html#licenseText)

#### Example

```json
{
  "settings": [],
  "license": {
    "key": "MIT"
  }
}
```

## Language
It is also mandatory to specify the language in which your App Description and Documentation is given. Please select from the Type ISO 639-2 (B) language definition list. Typically, our Apps are developed in english language: `eng`.

#### Example

```json
{
  "settings": [],
  "language": "eng"
}
```

## Keywords
For better accessibility of the Apps, please provide keywords that characterise what the App does. It is mandatory to enter at least one keyword.

#### Example

```json
{
  "settings": [],
  "keywords": [
    "movement",
    "example"
  ]
}
```

## People
For future publication and citability, people involved in the development of the App shall be listed. All people can have one or more `roles` that must be selected from the below list. Note that it is mandatory to provide one person that is `author` of the App and that this person has a valid Email address assigned.

### List of roles

- author
- compiler
- copyright holder
- creator
- contributor
- contractor
- data contributor
- funder
- reviewer
- translator

#### Example

```json
{
  "settings": [],
  "people": [
    {
      "firstName": "Charles",
      "middleInitials": null,
      "lastName": "Darwin",
      "email": "creator@example.com",
      "roles": [
        "author",
        "creator"
      ],
      "orcid": null,
      "affiliation": null,
      "affiliationRor": null
    }
  ]
}
```

## Funding
To acknowledge your funding parties, please add a funding statement. It consists of a `name` and a `comment` slot that can be freely filled in. The funding statement is not mandatory.

#### Example

```json
{
  "settings": [],
  "funding":[
    "name": "Your Funding Agency",
    "comment": "grant 123"
  ]
}
```

## References
References of various types can be added to make background information about your App accessible. Only a certain list of reference types are permitted, please consult the list below. References are not mandatory.

### Referece types
- IsCitedBy/Cites
- IsSupplementTo/IsSupplementedBy
- IsContinuedBy/Continues
- Describes/IsDescribedBy
- HasMetadata/IsMetadataFor
- HasVersion/IsVersionOf
- IsNewVersionOf/IsPreviousVersionOf
- IsPartOf/HasPart
- IsReferencedBy/References
- IsDocumentedBy/Documents
- IsCompiledBy/Compiles
- IsVariantFormOf/IsOriginalFormOf
- IsIdenticalTo
- IsReviewedBy/Reviews
- IsDerivedFrom/IsSourceOf
- IsRequiredBy/Requires
- Obsoletes/IsObsoletedBy

#### Examples

```json
{
  "settings": [],
  "references":[
  {
    "type": "IsReferencedBy"
    "note": "Darwin, C. 1859. The Origin of Species. John Murray, London",
    "url": "www.testpage.org"
  }
 ]
}
```

## Documentation
Each App requires a detailed Documentation of how it works, how it can be configured and what happens in error/null cases. Please provide a link to such a Documentation. By default this should be the README file in the respective github repository. Please include the below listed points:

- Name of the App in MoveApps.
- Name of the github repository containing the source code.
- The App Description as provided in MoveApps.
- Some detailed Documentation text describing the App.
- Input data type
- Output data type
- Artefacts (name and description)
- Parameters (name and description)
- Null or error handling for each parameter and output data

```json
{
  "settings": [],
  "documentation": {
    "url": "https://github.com/example-user/example-app/blob/master/README.md"
  }
}
```
