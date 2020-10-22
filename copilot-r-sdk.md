# MoveApps `R Function` Overview
This document describes the basics to write your own R functions for MoveApps.

We provide an R Project (copilot-r-sdk.zip.) that can be used as a starting point for the development of your App.

## How to write an R Function for MoveApps
It is highly advisory to use the SDK to write your R functions for MoveApps, as many errors can already be solved before submitting the App to the MoveApps platform.

First, an R function called `rFunction` must be created. 
```
rFunction = function() {}
```

### Input
#### MoveApps parameters
You can receive parameters or settings to your R function from the MoveApps interface. These parameters must be defined in the [appspec.json](de/appspec.md) and are configured by the user within MoveApps. When the function is called, the parameters are passed on to it.
```
# With parameters/settings from MoveApps 
rFunction = function(username, password) {
   # Do something with the parameters
}
```

##### Limitations
- You cannot use  `data` as parameter name. This is reserved for the input that is passed on from the previous App.

#### Input from previous App
In order to be able to use the result of the previous App in the Workflow, the last parameter of the R function must be named `data`.
```
# With input from other apps
rFunction = function(data) {
    # Do something with the data
}
```

### Combination of data from the previous app and settings
```
# With parameters and data from previous apps
rFunction = function(username, password, data) {
    # Do something
}
```

### Output
The result of the function must be defined as a return value at the end of the function code. Then, this objecct (`data`) can be processed accordingly as input in the next App of the Workflow.
```
rFunction = function(username, password) {
    # Do something
    result
}
```

### Artefacts
MoveApps allows the creation and saving of different files directly by the R function, like e.g. csv, pdf, png, ..., so called `artefacts`. Those can be created by the usual R command for writing of the specific type of file. It is important to set the path for saving as `paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"*.***")` (`*.***` is the name of the file, see example for csv and png below) and add the row `"createsArtifacts": true` in the [appspec.json](appspec.md). After running the App, the artefacts can then be downloaded from the `Show Downloads` list.
```
rFunction = function(username, password, data) {
    # Do something
    write.csv(artefact, file = paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"artefact.csv")
	png(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"artefact.png"))
	# Plot your image
	dev.off()
}
```
