# How do I create my own App?

Apps to be submitted must be managed in a public [GitHub](https://github.com) repository. The repository should contain the program code for executing the App (named `RFunction.R` for R-Apps or `ShinyModule.R` for R-Shiny-Apps), a specification of the App represented by an [appspec.json](appspec.md) file and a [documentation file](files/README_template.md), which can be the repository README.

![](../files/Appdevel_github.png)


## Overview of necessary steps to develop an App
*(details below)*

1. **Develop the App code** locally (in RStudio) and save it to a file called `RFunction.R` or `ShinyModule.R`. (currently only R Apps possible, more to come)

2. **Test your App** locally using the file `copilot-*-sdk.R` which behaves (almost) like the online MoveApps system.

3. **Write App specifications** into the file `appspec.json` to define the App's metadata and the user interface for MoveApps users to specify App parameters. Test this file for compliance in the [Settings editor](https://www.moveapps.org/apps/settingseditor ':ignore').

4. **Write a documentation file** about the detailed function and use of the App, incl. possible error cases. Usually use `README.md` for it ([see template](files/README_template.md)).

5. **Create a new GitHub repository** where the following three files need to be copied to: `appspec.json`, `RFunction.R` (for R-files) or `ShinyModule.R` (for R-Shiny-Apps) and a documentation file (mostly the Readme.md was used for this purpose). Additional files can be included (see image above), but are not necessary.

6. **Create a Tag** (`Release`) of your GitHub repository

7. **Initiate the App** on MoveApps (`Create new Application`)

8. **Submit a first App version** to MoveApps (`Add version`). Once the MoveApps administrator has checked it and built it into a Docker container, it becomes available to all users on the platform. Please test it there.


## Writing the App
MoveApps Apps should be developed in your usual compiler/editor and thoroughly tested before submission to MoveApps. For R and R-Shiny Apps we provide Software Development Kits (SDK) with an R Studio Project that allows Apps to run and perform as if in the MoveApps interface. The [Copilot R SDK](copilot-r-sdk.md) and [Copilot Shiny SDK](copilot-shiny-sdk.md) contain example files including the file `copilot-*-sdk.R` that must be executed for testing. The actual App code has to be saved in one file either named `RFunction.R` (R-App) or `ShinyModule.R` (R-Shiny-App) and will be accessed by `copilot-*-sdk.R` during your developing and tests. Please keep the number of packages (libraries) as low as possible (advice: list.functions.in.file() in package NCmisc).

Note that there is only one possible input and output object type: move::moveStack in `rds` file format. You can use the `input.rds`and `input2.rds` files from the SDK as examples. The `logger.R` file is included in the SDKs for communication functionality functions in MoveApps. In the file, functions are defined that can be used by the App developer to give information messages, warnings, errors, etc. to the user in MoveApps. Please use these functions in your Apps.

![](../files/Appdevel_rstudio.png)

## Initiation/Creation of the App
After you have successfully written a functioning App, loaded it (together with the [appspec.json](appspec.md)) into a GitHub repository and described its details in the `README.md` file, you can initiate it on MoveApps. To do this, select `Applications / Create new Application` from the menu and fill out the form. For the App name please stick to our convention of Title Case without hyphens (e.g. `My New App`). The link to your repository has to end with `.git`; please add it manually if necessary. One example is `https://github.com/movestore/MorningReport.git`. The input type is usually MOVEMENT (i.e. R move:moveStack) and output types can be MOVEMENT or USERUI. Note that an App with USERUI output always ends the workflow. For intermediatry R-Shiny Apps that shall transfer data to a next App in a workflow, output type MOVEMENT has to be selected. When you have successfully created the App, it will be listed in the overview `Applications / Your Applications`
![](../files/Appdevel_createNewApp.png)

## Creation of a new App version
In order to create your first (or any updated new) App version, you must create a `Tag` (via `Release`) of your GitHub repository in its present state. After you have created the `Tag`, go to te MoveApps site and press the `Add Version` button in the detailed view of your App (via `Applications / Your Applications / AppName / Details`).

Select the `Tag` from the list of available `Tags` and press `Create Version`. A new App version is only available if your tag creation in GitHub was successfull. To submit the new version, you must include a description detailing the changes. After entering this information, click `Save and Submit`. The App is then checked by a MoveApps administrator for functionality, performant `appspec.json` and possible issues regarding our Terms of Use and a docker container for the App is built.  AFter the check and built process were successful, the status of the App version becomes `APPROVED`. From this moment on, the new version of the App becomes accessible to all platform users. Please test is directly, fix any issues and submit a new App version if necessary.

![](../files/Appdevel_createNewAppVersion.png)
