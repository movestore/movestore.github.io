# Auxiliary Files for Analysis with Tracks in an App

It is possible to design Apps that require auxiliary files, like e.g. a map with environmental information, that are useful for analysis with the tracking data. The App needs the auxiliary files during its run time. Therefore, they have to be either provided permanently by the App developer or uploaded to MoveApps from a local system by the App user. This leads to three types of auxiliary files:

 1. **Fixed auxiliary file** that the App developer provides in the GitHub repository. This file will be used for all analyses independent of the input data sets. We advice these data to be of global coverage.

 2. **Local upload auxiliary file** that is provided by the App user when the workflow is created, i.e. during configuration of the App settings. It can be overwritten whenever necessary. If an auxiliary file is required by the App and the user has not uploaded one, the App cannot run correctly.

 3. **Local upload auxiliary file with fixed fallback file** that is a combination of the above. The App developer provides a fallback file in the GitHub repository. This file will be used if the App user does not upload the required auxiliary file. However, if the App user does upload the required auxiliary file with correct extension from their local system, the fallback file is not used, but the uploaded one. This file can be overwritten whenever necessary.
 
Any combination of these three types of auxiliary files can be integrated into an App.

The App developer has the responsibility to decide if an auxiliary file is necessary for their App and if it can be an advantage to allow the App user to upload such a file to the App. We advise developers to provide a fixed auxiliary file or sensible fallback auxiliary files, so that the App can still run if the App user does not or cannot provide any file during App configuration. For example, it might be possible to provide a global map of lower resolution as fallback, but allow local upload of regional, higher resolution maps for analysis with tracks of that region. If the auxiliary file is optional, the code should be tested thoroughly to ensure that the App runs successfully with and without this file.  

In the past, the `LOCAL_FILE` setting required the App developer to define the exact name of the auxiliary file that the App users had to provide in line with the instructions, with the introduction of the `USER_FILE` setting this is not necessary any more. However, only one file can be uploaded per `USER_FILE` setting, else the use of zipping is necessary.

!> Note that local testing of Apps with auxiliary files is possible with the SDK (Software Development Kit) only if the folder for these files is called `provided-app-files`. 

!> If your fixed or fallback file is larger than 100MB GitHub will not allow it to be uploaded to the repository. At the end of this page you can find the instructions to overcome this issue.

## Fixed auxiliary files

Any auxiliary files that the App developer wants to provide as fixed files have to be saved in the GitHub repository. The names of the files have to fit with the file names as used in the App's function code. For review and container building in MoveApps, the provision of these files has to be communicated in the [`appspec.json`](appspec.md) specification file via `providedAppFiles`.
 
Please keep the files in (a) separate folder(s) in the GitHub repository, the folder name is required as input for the `providedAppFiles` specification (`from`). The `settingId` sets the name of the folder in the App container (on MoveApps) into which the content of the `providedAppFiles` folder is bundled and from where it can be called by the App's function code at run time (see example below and details in the Templates for [R](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R), [R Shiny](https://github.com/movestore/Template_R_Shiny_App/blob/master/src/io/app_files.R), [R Shinydashboard](https://github.com/movestore/Template_R_Shinydashboard_App/blob/master/src/io/app_files.R), and [Python](https://github.com/movestore/Template_Python_App/blob/main/sdk/moveapps_io.py) Apps).

#### Example

```
appspec.json

"providedAppFiles": [
  {
    "settingId": "app_file1",
    "from": "provided-app-files/app_file1/"
  }
]
```

```
App code example

read.csv(getAuxiliaryFilePath("app_file1"))
```

## Local upload auxiliary files

Apps that allow/require the App user to upload an auxiliary file during App settings configuration need to specify the `USER_FILE` setting in the `appspec.json`. This setting has to be understood as a kind of file definition. Depending on how many actions in the App require auxiliary files, it may be necessary to define more than one `USER_FILE` setting, i.e. if one action requires a zipped shapefile, the related 4 or 5 files should be directed to `USER_FILE` setting _A_ (see example `app_file1`) and if another action requires a csv table this file must be written into another directory `USER_FILE` setting _B_ (see example `app_file2`). 

All `USER_FILE` settings (with names as given in `id`) have to be provided as parameters in the App's code function (e.g. `rFunction <- function(data, app_file1=NULL)`). These parameters do not initiate the auxiliary files to be passed on, but contain meta data required for file access. Do not use this parameter in your function! Instead, the `id` of each `USER_FILE` setting has to be referenced in the App's function code to access the App user's data for analysis in the App. (see example below and details in the Templates for [R](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R), [R Shiny](https://github.com/movestore/Template_R_Shiny_App/blob/master/src/io/app_files.R), [R Shinydashboard](https://github.com/movestore/Template_R_Shinydashboard_App/blob/master/src/io/app_files.R), and [Python](https://github.com/movestore/Template_Python_App/blob/main/sdk/moveapps_io.py) Apps).

#### Example

```
appspec.json

{
  "id": "app_file1",
  "name": "My auxiliary zipfile",
  "description": "Files for running the XY analysis. The App expects a zipped file set with the extension: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
},
{
  "id": "app_file2",
  "name": "My auxiliary csv",
  "description": "File for running the YZ analysis. The App expects a file with the extension: `.csv`.",
  "type": "USER_FILE"
}
```

```
App code example

read.csv(getAuxiliaryFilePath("app_file2"))
```

## Local upload auxiliary files with fixed fallback files

For Apps that allow/require the App user to upload an auxiliary file during App settings configuration it is advisable that the App developer provides a fallback file in case no file is/can be uploaded. This allows a correct run of the App at all times. We advice this type for all Apps with user upload possibility. Fallback files should have global coverage, so they work for all tracks. A usual use case can be to provide a low resolution fallback file, but allow local upload of a higher resolution local file that overlaps with the analysed tracks and is provided by the App user. 

To set up Apps with this functionality, the above two cases have to be combined (also see example below). The only addition is that the `settingId` of the `providedAppFiles` specification has to match with the `id` of the `USER_FILE` setting. Here, again, multiple such files are possible. Use the helper function from the Templates for [R](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R), [R Shiny](https://github.com/movestore/Template_R_Shiny_App/blob/master/src/io/app_files.R), [R Shinydashboard](https://github.com/movestore/Template_R_Shinydashboard_App/blob/master/src/io/app_files.R), and [Python](https://github.com/movestore/Template_Python_App/blob/main/sdk/moveapps_io.py) Apps[`app-files.R`](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R) for accessing the App user's (or fallback) data in the App code (see also example below). Note that the option `fallbackToProvidedFiles` in this function allows the App developer to specify if fallback files shall be used or not. See the code of this function for details and also how info messages about file usage are passed on to the App user.

#### Example

```
appspec.json

"settings": [
  {
  "id": "app_file1",
  "name": "My auxiliary zipfile",
  "description": "Files for running the XY analysis. The App expects a zipped file set with the extension: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
  },
  {
  "id": "app_folder2",
  "name": "My auxiliary csv table",
  "description": "File for running the YZ analysis. The App expects a file with the extension: `.csv`.",
  "type": "USER_FILE"
  }
],
  
"providedAppFiles": [
  {
    "settingId": "app_file1",
    "from": "provided-app-files/app_file1/"
  },
    {
    "settingId": "app_file2",
    "from": "provided-app-files/app_file2/"
  }
]
```

```
App code example

getAuxiliaryFilePath("app_file1")
...
getAuxiliaryFilePath("app_file2")
```

## Adding large fixed or fallback files to an App

You cannot add files larger than 100MB to your repository as [GitHub blocks larger them](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github). The solution is to add the files to your release. To do this go to `Releases > Draft a new release` in your GitHub repository and add your files.

After submitting your App on MoveApps, please inform about us (support@moveapps.org) about the addition of the large files to the release so we can do the necessary adjustments while building your App.
