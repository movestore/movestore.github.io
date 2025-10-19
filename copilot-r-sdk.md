# Writing the `R Function` App code
This document describes the basics to write your own `R Function` App code for MoveApps.

Please use this GitHub [Template R Function App](https://github.com/movestore/Template_R_Function_App ':ignore') and follow the [instructions to create an App](create_app.md).

#### Notes and recommendations
- While writing your `R Function` App code, keep in mind the [coding best practises](best_practices_coding.md).

- Check out the [notes on programming with the object of class `move2`](programing_move2.md) if you are using the `move2` R package to write your App code.

- It is possible to use parallel computing within MoveApps, please check out [this page](parallelcomp.md).


## Creating the function
After having defined and loaded the packages that your code will require, an R function called `rFunction` must be created in your `RFunction.R` file.

##### Example
```
*R code*

library("move2")

rFunction <- function() {
    # Do something
}
```

Please keep the number of packages (libraries) as low as possible. *Advice*: use `list.functions.in.file("RFunction.R")` from R package `NCmisc` to check which libraries are used by your code.

#### Source aditional R scripts

If you rather divide the code of your App into several files, you can do this by following these steps:

- Create the folders `src/app` within your repository
- Place all your additional scripts in the folder `app`
- Ensure to source your additional scripts in the `RFunction.R` file from home (`./`) so it can be read in while testing and on MoveApps e.g. `source(./src/app/myHelperFunction.R)`


## App Input

#### Input from previous App
In order to use the result of the previous App in the Workflow, the first parameter of the R function must be named `data`. Note that the data type (IO type) of `data` is defining your App's input type that you need to specify at App initialization. Currently, the most widely used IO type is `move2::move2_loc`. [This page](IO_types.md) contains an overview of all available IO types and instructions on how to request a new IO type.

##### Example
```
*R code*

# With input from other apps
rFunction <- function(data) {
    # Do something with the data
}
```


#### MoveApps parameters
You can receive parameters or settings for your R function from the MoveApps interface. These parameters/settings must be defined in the [appspec.json](appspec.md) file (also see [settings](appspec/current/settings/README.md)) and are configured by the user within MoveApps. When the function is called, the parameters are passed on to it. You can use the MoveApps [Settings Editor](https://www.moveapps.org/apps/settingseditor ':ignore') to generate the App configuration for the `appspec.json` file.

##### Example
<kbd>![](files/sdk_settings_example.png)</kbd>

```
*appspec.json*

"settings": [
 {
   "id": "line_width",
   "name": "Line width",
   "description": "The width of the lines in the plot.",
   "defaultValue": 2,
   "type": "INTEGER"
 },
 {
   "id": "legend",
   "name": "Include legend?",
   "description": "Should the plot contain a legend?",
   "defaultValue": false,
   "type": "CHECKBOX"
 }
],
```

```
*R code*

# With parameters/settings from MoveApps 
rFunction <- function(data, line_width, legend) {
   # Do something with the data and parameters
}
```

```
*app-configuration.json*

{
  "line_width": 2,
  "legend": true
}

```
Note: the `app-configuration.json` file is only needed during the App development to simulate an App run locally.

!\>  **Limitation**: you cannot use `data` as a parameter name. This is reserved for the input that is passed on from the previous App (see above).


#### Auxiliary input files
It is possible to design Apps that require auxiliary files as input, e.g. a map with environmental information, that are useful for analysis with the tracking data. There are three types of auxiliary files (see below). For more details and to integrate the full functionality into an App see the [detailed description](auxiliary.md).

1. **Fixed auxiliary files** that the App developer provides in the GitHub repository. These files will be used for all analysis independent of the input data sets. We advice these data to be of global coverage.

2. **Local upload auxiliary files** that have to be provided by the App user when the Workflow is created, i.e. during configuration of the App settings. If the App user has not uploaded the required auxiliary files, the App cannot run correctly.

3. **Local upload auxiliary files with fixed fallback files** that are a combination of the above. The App developer provides a set of fallback files in the GitHub repository. These files will be used if the App user does not upload the required auxiliary files. However, if the App user does upload the required auxiliary files from their local system, the uploaded files are used instead of the fallback files.


## App Output
The result of the function must be defined as a return value at the end of the function code. Then, this object can be processed accordingly as input in the next App of the Workflow. Note that the data type (IO type) of `result` is defining your App's output type that you need to specify at App initialization. Currently, the most widely used IO type is `move2::move2_loc`. [This page](IO_types.md) contains an overview of all available IO types and instructions on how to request a new IO type.

##### Example
```
*R code*

rFunction <- function(data) {
    # Do something with the data
    return(result)
}
```

#### Producing artifacts
MoveApps allows the creation and saving of different files directly through the R function (e.g. csv, pdf, png), so called `artifacts`. Those artifacts can be created by the usual R command for saving the specific type of file. To get a valid path for the artifact use the SDK function `appArtifactPath(*.***)` (`*.***` is the name of the file, see example for csv and png below). After running the App, the artifacts can then be downloaded by the user from the Workflow `Output` overview.

##### Example
```
*R code*

rFunction <- function(data) {
    # Do something
    write.csv(artifact, file = appArtifactPath("artifact.csv"))
	
    png(appArtifactPath("artifact.png"))
    # Plot your image
    dev.off()
}
```

!\> **Note**: Only files are permitted to act as MoveApps App artifact! If your app produces a directory as an App artifact you have to bundle it eg. by zipping it. In other words: at the moment your App completes its work there must be only files (i.e. no folders) present in APP_ARTIFACTS_DIR.

##### Example for zipping
```
*R code*

library('zip')
dir.create(targetDirFiles <- tempdir())

# add any files to targetDirFiles

zip_file <- appArtifactPath(paste0("myfiles.zip"))
zip::zip(zip_file, 
    files = list.files(targetDirFiles, full.names = TRUE),
    mode = "cherry-pick")
```

