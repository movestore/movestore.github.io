# How to create an R or RShiny App

Apps to be submitted must be managed in a public [GitHub](https://github.com) repository. The repository should contain the program code for executing the App (named `RFunction.R` for R-Apps or `ShinyModule.R` for R-Shiny-Apps), a specification of the App represented by an [appspec.json](appspec.md) file and a [documentation file](README_file_description.md), which can be the repository README. 

Feel free to use these GitHub templates: [Template R Function App](https://github.com/movestore/Template_R_Function_App ':ignore'), [Template R Shiny App](https://github.com/movestore/Template_R_Shiny_App ':ignore'), [Template R Shinydashboard App](https://github.com/movestore/Template_R_Shinydashboard_App ':ignore') . Please read the `developer_README` contained in each template for more information about the usage and the optional tools provided with it.
     

![](../files/Appdevel_github.png)


## Overview of necessary steps to develop an App
*(details below)*

1. **Develop the App code** locally (in RStudio) and save it to a file called `RFunction.R` or `ShinyModule.R`. (this is applicable only for R and Rshiny Apps, see our [Python Tutorial](create_py_app.md) for the recently integrated an alternative)

2. **Test your App** locally using the file `copilot-*-sdk.R` which behaves (almost) like the online MoveApps system. Note that before submission to MoveApps, all Apps must be tested locally to run for the [four provided data sets](https://docs.moveapps.org/files/inputs_MoveApps_SmokeTesting_Nov2022.zip) (smoke testing, these are also provided in the GitHub templates). Furthermore, we strongly suggest automatic unit tests (e.g. using the R package `testthat`) that will soon become mandatory and integrated into the App submission process.  

3. **Write App specifications** into the file `appspec.json` to define the App's metadata and the user interface for MoveApps users to specify App parameters. Test this file for compliance in the [Settings editor](https://www.moveapps.org/apps/settingseditor ':ignore').

4. **Write a documentation file** about the detailed function and use of the App, incl. possible error cases. Usually use [`README.md`](README_file_description.md) for it.

5. **Create a new GitHub repository** where the following three files need to be copied to: `appspec.json`, `RFunction.R` (for R-files) or `ShinyModule.R` (for R-Shiny-Apps) and a documentation file (mostly the `Readme.md` was used for this purpose). Additional files can be included (see image above), but are not necessary.

6. **Create a Tag** (`Release`) of your GitHub repository

7. **Initiate the App** on MoveApps (`Create new Application`)

8. **Submit a first App version** to MoveApps (`Add version`). Once the MoveApps administrator has checked it and built it into a Docker container, it becomes available to all users on the platform. Please test it there.


## Writing the App
MoveApps Apps should be developed in your usual compiler/editor and thoroughly tested before submission to MoveApps. For R and R-Shiny Apps we provide Software Development Kits (SDK) with an R Studio Project that allows Apps to run and perform as if in the MoveApps interface. The GitHub templates [Template R Function App](https://github.com/movestore/Template_R_Function_App ':ignore'), [Template R Shiny App](https://github.com/movestore/Template_R_Shiny_App ':ignore') & [Template R Shinydashboard App](https://github.com/movestore/Template_R_Shinydashboard_App ':ignore'), include all necessary files and example data for testing your app. These templates can either be used as a template to create a repository on your GitHub account, or can be downloaded as a .zip file via "Code" -> "Download ZIP". 
The App R code has to be saved in one file either named `RFunction.R` ([R-App](copilot-r-sdk.md)) or `ShinyModule.R` ([R-Shiny-App](copilot-shiny-sdk.md)) and will be accessed by `copilot-*-sdk.R` during your developing and tests. Please keep the number of packages (libraries) as low as possible (*advice*: use `list.functions.in.file("RFunction.R")` from R package `NCmisc` to check which libraries are used by your code).

Note that currently there is only one possible input and output object type: `move::moveStack` in `rds` file format. You can use the 4 example data sets (`input1_greylgeese.rds`, `input2_whitefgeese.rds`, `input3_stork.rds`, `input4_goat.rds`) provided in the GitHub templates or [to be download here](https://docs.moveapps.org/files/inputs_MoveApps_SmokeTesting_Nov2022.zip). The `logger.R` file is included in the SDKs for communication functionality functions in MoveApps. In this file, functions are defined that can be used by the App developer to give information messages, warnings, errors, etc. to the user in MoveApps. Please use these functions in your Apps.

![](../files/Appdevel_rstudio.png)

## Testing the App
Before submission to MoveApps, all App must be thoroughly tested locally using the file `copilot-*-sdk.R`, which behaves (almost) like the online MoveApps system. So far, manual testing has worked fine for us, however we require that all Apps must be tested to run for the four data sets provided in the GitHub templates or [to be download here](https://docs.moveapps.org/files/inputs_MoveApps_SmokeTesting_Nov2022.zip) (smoke testing). The datasets are (1) local movements of greylag geese, (2) migration tracks of white-fronted geese, (3) a multiyear track of a white stork and (4) a high-resolution track of local movement of a goat on Mount Etna. 

Furthermore, we strongly suggest automatic unit tests (e.g. using the R package `testthat`) that will soon become mandatory and integrated into the App submission process.  

## Initialization/Creation of the App
After you have successfully written a functioning App, loaded it (together with the [appspec.json](appspec.md)) into a GitHub repository and described its details in the `README.md` file, you can initiate it on MoveApps.

To do this, select `Applications / Initialize a new Application` from the menu and fill out the form. For the App name please stick to our convention of Title Case without hyphens (e.g. `My New App`). The description should be identical with the short description in yor documentation README. You can add a Warning Note that will be highlighted to any MoveApps user adding your App to a workflow. Note that both Title, Description and Warning note can be edited at any time.

The link to your repository has to end with `.git`; please add it manually if necessary (example: `https://github.com/movestore/MorningReport.git`). 
Each App is defined by an input and output type (IO types) and runtime environment that have to be specified. Possible environmentas are R, R-shiny and Python (very soon!). 

![](../files/initializeApp.png)
![](../files/InitApp_IOtype.png)

Input and output types have long been restricted to move::moveStack, but can now be extended to any other movement related data types. After selecting R or R-Shiny as your Runtime Environment, check which types are available in the dropdown list. If you need a new IO type for your App, please go to "request a new IO type". Please describe your request to us, link to the documentation of the new IO type and adapt our [cargo agent repository](https://github.com/movestore/cargo-agent-r) accordingly, with creating and linking to a pull request. See the [README](https://github.com/movestore/cargo-agent-r#readme) there for details. Once an administrator has approved your IO type request, it will be available on the platform. Make sure to also provide transforamtion Apps to/from other IO types to widen the usability of your App on MoveApps. For portability to Python Apps also provide code to transfer your data object to one or several csv-files.

![](../files/ReqNewIOtype.png)
![](../files/ReqNewIOtype2.png)

Note that repository link, IO types and runtime environment will be fixed to the App and cannot be changed afterwards. When you have successfully created the App, it will be listed in the overview `Applications / Your Applications`


## Creation of a new App version
In order to create your first (or any updated new) App version, you must create a `Tag` (via `Release`) of your GitHub repository in its present state. After you have created the `Tag`, go to the MoveApps site and press the `Add Version` button in the detailed view of your App (via `Applications / Your Applications / AppName / Details`).

Select the `Tag` from the list of available `Tags` and press `Create Version`. A new App version is only available if your tag creation in GitHub was successful. To submit the new version, you must include a description detailing the changes and select/update a Category that fits your App. If you want to request an additional Category, please contact info@moveapps.org. After entering this information, click `Save and Submit`.

The App is then checked by a MoveApps administrator for functionality, performant `appspec.json` and possible issues regarding our Terms of Use and a docker container for the App is built. After the check and built process were successful, the status of the App version becomes `APPROVED`. From this moment on, the new version of the App becomes accessible to all platform users. Please test it directly, fix any issues and submit a new App version if necessary.

![](../files/Appdevel_createNewAppVersion.png)
