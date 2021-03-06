# Hello World! - create your first App

Please follow the instructions below and create your first App that runs in the R Copilot Software Development Kit ([R SDK](copilot-r-sdk.md)) in RStudio. This is meant to be an example for future Apps that can be submittd to and then run on MoveApps.

## Download SDK example

Please download the [R Copilot SDK](https://www.moveapps.org/documentation/copilot-r-sdk.zip ':ignore'), unzip and save
it to your computer. Start the R project `copilot-sdk.Rproj` in RStudio. The included file `copilot-sdk.R` is a local
MoveApps substitute that behaves (almost) like the online system. The second included R-file `RFunction.R`is the file
into which all your App code is supposed to go.

Here an example selecting all data points of a given calender year is given. Please try it out with the example data
set `input2.rds`: Let the file `copilot-sdk.R` run which is then calling upon the function rFunction() that is defined
in `RFunction.R`. An `output.rds` file is created with all locations of the input data set of the selectet year. Note
that the year selection is specified in line 20 of `copilot-sdk.R` and can be adapted there. In the MoveApps platform
this parameter is provided by an interactive input window.

```
args[["year"]] = 2014
```

## Adapt and run the App

Adapt the code in `RFunction.R` to add a pdf artefact function that plots your positions with the appropriate heading. See the complete file code below. Note that for plotting we must overwrite `data` in the first line and return it explicitely at the end. The file path `("hello_world.pdf")` is your local project folder; for later submission to the MoveApps platform this needs to be changed to `(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"hello_world.pdf"))`.

```
library('move')
library('lubridate')

rFunction = function(year, data) {
  data <- data[year(data@timestamps) == year]
  
  pdf("hello_world.pdf")
  plot(data,main="Hello World!")
  dev.off()
  
  return(data)
}
```

There you go with a first running MoveApps App that can select all locations of a given calender year and even returns a pdf plot of those locations. Congratulations!

![](../files/hello_world_pdf.png)


## Further steps

Before submission of your first App to the MoveApps platform, please add an [appspec.json](appspec.md) file to your GitHub repository and write a [README documentation](files/README_template.md). See also our more detailed tutorial [How to create your own App](create_app.md).