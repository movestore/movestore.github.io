# How do I create my own App?

Apps to be submitted must be managed in a [GitHub](https://github.com) repository. The repository should contain the program code for executing the App and a specification of the App represented by an [appspec.json](appspec.md) file.

## Writing the App
MoveApps Apps should be developed in your usual compiler/editor and thoroughly tested before submission to MoveApps. For R and R-Shiny Apps we provide Software Development Kits (SDK) with an R Studio Project that allows Apps to run and perform as if in the MoveApps interface. The [Copilot R SDK](copilot-r-sdk.md) and [Copilot Shiny SDK](copilot-shiny-sdk.md) contain example files including the file `copilot-*-sdk.R` that must be executed for testing.

## Creation of the App
After you have successfully written a functioning App, loaded it (together with the [appspec.json](appspec.md)) into a GitHub repository and created a `Tag` (via `Release`) you can add it to MoveApps. To do this, select `Applications / Create new Application` from the menu and fill out the form. When you have successfully created the App, it will be listed in the overview `Applications / Your Applications`.

## Creation of a new App version
In order to create a new App version, you must create a ´Tag´ (via `Release`) in your GitHub repository. After you have created the ´Tag´, press the `Add Version` button in the detailed view of your App (via `Applications / Your Applications / AppName / Details`).

Select the `Tag` from the list of available `Tags` and press `Create Version`. To submit the new version, you must include a description detailing the changes. After entering this information, click `Save and Submit`. The App is then checked by a MoveApps administrator for functionality, performant `appspec.json` and possible issues regarding our Terms of Use and security.  If this check is successful, the status of the App version changes from `SUBMITTED` to `APPROVED`. From this moment on, the new version of the App can be used.
