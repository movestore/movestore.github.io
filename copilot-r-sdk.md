# MoveApps `R Function` Overview
This document describes the basics to write your own R functions for MoveApps.

Please use this GitHub [Template for R Function Apps](https://github.com/movestore/Template_R_Function_App ':ignore')

## How to write an R Function for MoveApps
It is highly advisable to extensively use the SDK within the template to write your R functions for MoveApps, as many errors can be solved when testing in e.g. R-studio before submitting the App to the MoveApps platform.

The template includes a file `sdk.R` which can be used for testing after the below RFunction.R file has been completed. When running this file in the R-studio project it emulates how MoveApps would behave when running your App (i.e. the RFunction.R)


After having defined and loaded the packages that your code will require, in your RFunction.R file, an R function called `rFunction` must be created.
```
rFunction = function(data) {}
```

### Input
#### MoveApps parameters
You can receive parameters or settings to your R function from the MoveApps interface. These parameters must be defined in the [appspec.json](de/appspec.md) and are configured by the user within MoveApps. When the function is called, the parameters are passed on to it.
```
# With parameters/settings from MoveApps 
rFunction = function(data, year) {
   # Do something with the parameters
}
```

##### Limitation
- You cannot use  `data` as a parameter name. This is reserved for the input that is passed on from the previous App, see below.


#### Input from previous App
In order to be able to use the result of the previous App in the Workflow, the last parameter of the R function must be named `data`. Note that the data type (IO type) of `data` is defining your App's input type that you need to specify at App initialization.
```
# With input from other apps
rFunction = function(data) {
    # Do something with the data
}
```


### Output
The result of the function must be defined as a return value at the end of the function code. Then, this object (`data`) can be processed accordingly as input in the next App of the Workflow. Note that the data type (IO type) of `result` is defining your App's output type that you need to specify at App initialization.
```
rFunction = function(year) {
    # Do something
    return(result)
}
```

### Artefacts
MoveApps allows the creation and saving of different files directly through the R function (e.g. csv, pdf, png), so called `artefacts`. Those artefacts can be created by the usual R command for saving the specific type of file. To get a valid path for the artefact use the SDK function `appArtifactPath(*.***)` (`*.***` is the name of the file, see example for csv and png below) and add the row `"createsArtifacts": true` in the [appspec.json](appspec.md). After running the App, the artefacts can then be downloaded from the `Show Downloads` list.
```
rFunction = function(year, data) {
    # Do something
    write.csv(artefact, file = appArtifactPath("artefact.csv"))
	png(appArtifactPath("artefact.png"))
	# Plot your image
	dev.off()
}
```

### Auxiliary files

It is possible to design Apps that require auxiliary files, like e.g. a map with environmental information, that are useful for analysis with the tracking data. There are three types of auxiliary files (see below). For more details and how do integrate the full functionality into an App see the [detailed description](auxiliary.md).

 1. **Fixed auxiliary files** that the App developer provides in the GitHub repository. These files will be used for all analysis independent of the input data sets. We advice these data to be of global coverage.

 2. **Local upload auxiliary files** that have to be provided by the App user when the workflow is created, i.e. during configuration of the App settings. If the App user has not uploaded the required auxiliary files, the App cannot run correctly.

 3. **Local upload auxiliary files with fixed fallback files** that are a combination of the above. The App developer provides a set of fallback files in the GitHub repository. These files will be used if the App user does not upload the required auxiliary files. However, if the App user does upload the required auxiliary files with correct names from his/her local system, the fallback files are not used, but the uploaded ones.