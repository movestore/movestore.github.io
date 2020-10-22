# Publication of Apps

For recognition, tracability and documentation, Apps that are running on MoveApps can be published with a DOI. This will be supported by our library and is an automatised process.

## How to publish your Apps
NOT YET


## Information required for Publication
To have your App offically published, a standard list of information about the App, its contributors and other properties is required.

### Properties that are automatically extracted
At creation of a new App, you are required to enter a name, description, Runtime Environement, inputType and outputType of your App. Those are used for publication. Furthermore, MoveApps is automatically saving the date of App creation, the date of App publication and the github-Link of the App files.

### Properties entered in the appspec.json
Most properties that can change by App version have to be entered in the [appspec.json](appspec.md). These are dependencies, language, license, contributor details, funding details, keywords and references. Of those, the provision of a language, license and at least one keyword is mandatory. Please see the [appspec.json](appspec.md) documentation for details of possible values for language, license and reference type. If mandatory fields are not provided or values for language, license and reference type are are not as listed, an error will be thrown at App submission.

### Properties entered in the interface at publication
A few properties have to be added by hand into a web mask at publiation of the App. Those include a final description and ... (?)

TBC