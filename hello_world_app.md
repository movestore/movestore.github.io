# Hello world! An App example

Please follow the instructions below and create your first App that runs in the Copilot R Software Development Kit. This is meant to be an example for future Apps that can be submitted to and then run on MoveApps.

## Download SDK example

Please download the [Template R Function App](https://github.com/movestore/Template_R_Function_App ':ignore'), as a zip file ( via "Code" -> "Download ZIP"), unzip and save it to your computer. Start the R project `Template_R_Function_App.Rproj` in RStudio. The included file `copilot-sdk.R` is a local MoveApps substitute that behaves (almost) like the online system. Therefore, this file should not be adapted. The second included R-file `RFunction.R` is the file into which all your App code is supposed to go.

Here, an example selecting all data points of a given calender year is given. Please try it out with the example data set `input2_geese.rds`: Change the 8th line of the file `copilot-sdk.R` to `inputFileName = "input2_geese.rds"` and run it locally. The running code is then calling upon the function `rFunction()` that is defined in `RFunction.R`. An `output.rds` file is created with all locations of the input data set of the selected year. Note that the year selection is specified in line 24 of `copilot-sdk.R` and can be adapted there. In the MoveApps platform this parameter is provided by an interactive input window.

```
args[["year"]] = 2014
```

## Adapt and run the App

Adapt the code in `RFunction.R` to add a pdf product function that plots your positions with the appropriate heading. See the complete file code below. To pass on data from this App to a next App, the modified data object (i.e. `data_red`) or the original `data` object, must be explicitly returned at the end of the function using `return()`. The file path `(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"hello_world.pdf"))` flexibly writes the pdf product to your `tmp` folder if run locally, or to the appropriate folder within the MoveApps platform. The latter must be kept for proper functionality in the platform.


```
library('move')
library('lubridate')

rFunction = function(year, data) {
  data_red <- data[year(data@timestamps) == year]
  
  pdf(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"hello_world.pdf"))
  plot(data_red, main="Hello World!")
  dev.off()
  
  return(data_red)
}
```

There you go with a first running MoveApps App that can select all locations of a given calender year and even returns a pdf plot of those locations. Congratulations!

![](../files/hello_world_pdf.png)


## Further steps

Before submission of your first App to the MoveApps platform, you need to thoroughly test your App, add an [appspec.json](appspec.md) file to your Git repository and write a [README documentation](README_file_description.md). See our more detailed tutorial [How to create an App](create_app.md).