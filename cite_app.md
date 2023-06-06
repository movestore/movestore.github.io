# Citation of Apps

For recognition, traceability and documentation, Apps that are running on MoveApps can be cited. A formatted suggestion of such a citation is provided at the Application Details view for App developers and at the "App Details" point provided in the menu of all Apps of a Workflow. The same details are also available in the interface when adding new Apps to a Workflow. The citation consists of the App authors, the date of access, the App name and its version number and finally the GitHub link to the App repository.

![](../files/app_cite.png)

## Information required for Citation provision
To have your App  cited properly, information about the App, its authors and other properties are required. For being able to properly publish Workflows that contain your App, additional properties to the ones above are required.

### Properties that are required at submission
At creation of a new App, you are required to enter a name, description, Runtime Environment, inputType and outputType of your App. This information is used for running the App and its citation. Furthermore, MoveApps automatically saves the date of App creation and the GitHub link of the App files.

### Properties entered in the appspec.json
Most properties that can change depending on App version have to be entered in the [appspec.json](appspec.md). These are dependencies, language, license, author details, funding specifics, keywords and references. Of these, the provision of a language, a license, an author and at least one keyword is mandatory. Please see the [appspec.json](appspec.md) documentation for details of possible values for language, license and reference type. If mandatory fields are not provided or values for language, license and reference type are not as listed, an error will be thrown at App submission.