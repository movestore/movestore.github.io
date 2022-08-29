# Appspec.json

The `appspec.json` file is used to define an App within MoveApps.
Here, dependencies, settings and documentation properties of the App are defined. Some of the settings are mandatory and have a fixed list of possible values, others are optional.


## Validator

For creation, test and verification of the `appspec.json` there is
the [Settings Editor](https://www.moveapps.org/apps/settingseditor ':ignore'). With its help you can quickly and easily
define and visualise your settings. If errors occur, suggestions for improvement are given.

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

The [Settings Editor](https://www.moveapps.org/apps/settingseditor) can be used to check the definition of all
dependencies before submission.


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
For further use and publication, it is mandatory to specify which license agreement you want to use for your App. At the moment there are five options (see list below), the keys of which have to be entered. Please see our [License documentation](license.md) and consult [this website](https://choosealicense.com/) for help with choosing the most appropriate license for your App.

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
It is also mandatory to specify the language in which your App Description and Documentation are given. Please select from the Type ISO 639-2 (B) language definition list. Typically, our Apps are developed in English language: `eng`.

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
For future publication and citability, people involved in the development of the App shall be listed. All people can have one or more `roles` that must be selected from the below list. Note that it is mandatory to provide one person that is `author` of the App and that this person has a valid Email address assigned. The same roles can be assigned to people involved in a published workflow.

### List of roles

- **author** e.g. the developer of an App or the creator of a workflow. Use this role for the main people responsible for an App/workflow. (A person, family, or organization responsible for creating a work that is primarily textual in content, regardless of media type. Use also for persons, etc., creating a new work by paraphrasing, rewriting, or adapting works by another creator such that the modification has substantially changed the nature and content of the original or changed the medium of expression.)
- **copyright holder** e.g. the person that holds intellectual property rights for an App/ a workflow. (A person or organization to whom copy and legal rights have been granted or transferred for the intellectual content of a work.)
- **creator** e.g. the developer of an App or the creator of a workflow. Semantically synonymous to author. Use author instead. (A person or organization responsible for the intellectual or artistic content of a resource.)
- **contributor** e.g. a person that contributed code to an App or helped with creating a workflow, but is not the main person responsible. (A person, family or organization responsible for making contributions to the resource. If a more specific role is available, prefer that, e.g. author, compiler.)
- **data contributor** e.g. a person that owns/published the data sets an analysis workflow runs on.(A person or organization that submits data for inclusion in a database or other collection of data.)
- **funder** e.g. a single person responsible for funding of an App or workflow. Please use the funding fields (below) for funding by organisations. (A person or organization that furnished financial support for the production of the work.)
- **reviewer** e.g. a  person that reviewed the App/workflow or executed quality control.(A person or organization responsible for the review of a book, motion picture, performance, etc.)
- **translator** e.g. a person that translates documentation and supplementary material for an App or workflow from one language to another. (A person or organization who renders a text from one language into another, or from an older form of a language into the modern form.)

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
References of various types can be added to make background information about your App accessible. Only a certain list of reference types are permitted, please consult the list below. In the descriptions `A` refers to the App or the workflow and `B` is another digital resource that is referenced. References are not mandatory. The same types of references can be assigned to a published workflow.

If your App heavily depends on a specific package/library to function, adding this reference as `Requires` is highly appreciated. It might motivate e.g. R-package developers helping to improve the App.


### Reference types
Please consider including a reference to e.g. an R-package if your App depends heavily on (a) specific function(s) from it. Use the **Requires** reference type (see below). Also indicating papers that describe the developed methods is highly recommended, e.g. using the reference type **IsDescribedBy**.

- **IsCitedBy/Cites** use this relation if you know of another resource that uses the App/workflow or if the App/workflow is based on another piece of software/work and you want to credit. (indicates that B includes A in a citation/indicates that A includes B in a citation)
- **IsSupplementTo/IsSupplementedBy** use this relation if the App/workflow can be used as supplementary material to another resource or publication. The App/workflow can also be supplemental material to a publication if it supports it, but isn't essential for its understanding. (indicates that A is a supplement to B/indicates that B is a supplement  to A)
- **IsContinuedBy/Continues** use this relation to link to a resource that continues ideas of the App/workflow in another resource (e.g. a new App). For new versions of the same App/workflow please use the relations 'IsNewVersionOf/IsPreviousVersionOf'. (indicates A is continued by the work B/indicates A is a continuation of the work B)
- **Describes/IsDescribedBy** use this relation to link to a publication in which the App/workflow is described, e.g. as a method used in your research. (indicates A describes B/indicates A is described by B)
- **HasMetadata/IsMetadataFor** use this relation to link to a resource that includes additional meta information about the App/workflow. To reference a documentation please use the relation 'IsDocumentedBy' instead.(indicates resource A has additional metadata B/indicates additional metadata A for a resource B)
- **HasVersion/IsVersionOf** use this relation to link to another version of the App/workflow. To indicate a specific relation between the versions, please use the relation 'IsNewVersionOf/IsPreviousVersionOf'. (indicates A has a version (B)/ indicates A is a version of B)
- **IsNewVersionOf/IsPreviousVersionOf** use this relation to link to another version of the App/workflow. If you know the type of the version relation (e.g. if another App is a newer version) please use this relation as it is more specific than the general 'VersionOf' relation. App versions in MoveApps are automatically linked to your App.(indicates A is a new edition of B, where the new edition has been modified or updated/indicates A is a previous edition of B)
- **IsPartOf/HasPart** use this relation if the App/workflow is a part of a bigger collection and you want to link to it. If on the other hand there are specific smaller parts of the App/worklfow published elswhere, you can indicate this by using the 'IsPartOf' relation. (indicates A is a portion of B/indicates A includes the part B)
- **IsDocumentedBy/Documents** use this relation to link to another document that serves as a documentation for the App/workflow. This is an addition to the App documentation that you submit for an App via Git. (indicates B is documentation about/explaining A; e.g.points to software documentation/indicates A is documentation about B; e.g. points to software documentation)
- **IsVariantFormOf/IsOriginalFormOf** use this if the App/workflow is a result of a variation of another App/workflow or if other Apps/workflows are created with your resource as a base. (indicates A is a variant or different form of B/indicates A is the original form of B)
- **IsIdenticalTo** use this relation to link to other locations where you might have published the App/workflow additionally in the exact same form. (indicates that A is identical to B)
- **IsReviewedBy/Reviews** use this relation to link to a document that functions as a review for the App/workflow. This could be the assesment of a peer reviewer or colleague that thoroughly evaluated the App/workflow and published the result. (indicates that A is reviewed by B/indicates that A is a review of B)
- **IsRequiredBy/Requires** use this relation to link to a resource that the App/workflow requires to be used. This might be a specific package or library that you want to highlight. It is not necessary to add this information as the metadata for each App automatically includes all used software packages, but if your App depends heavily on a specific package to function, adding this reference is highly appreciated. (indicates A is required by B/indicates A requires B)
- **Obsoletes/IsObsoletedBy** use this to signal that the App/workflow makes another resource obsolete. This makes it a special relation of a version. Use this if you want to signal that the related resource should not be used anymore in the future. (indicates A replaces B/indicates A is replaced by B)

#### Examples

```json
{
  "settings": [],
  "references":[
  {
    "type": "IsReferencedBy",
    "note": "Darwin, C. 1859. The Origin of Species. John Murray, London",
    "url": "www.testpage.org"
  }
 ]
}
```

## Documentation
Each App requires a detailed Documentation of how it works, how it can be configured and what happens in error/null cases. Please provide a link to such Documentation. By default this should be the README file in the respective github repository. Please include the below listed points or use the [README template](files/README_template.md)

- Name of the App in MoveApps
- Name of the github repository containing the source code
- The App Description as provided in MoveApps
- Some detailed Documentation text describing the App
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
