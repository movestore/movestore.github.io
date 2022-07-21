# Hello world! An App example

Please follow the instructions below and create your first App that runs in the Copilot R Software Development Kit ([Copilot R SDK](copilot-r-sdk.md)) in RStudio. This is meant to be an example for future Apps that can be submittd to and then run on MoveApps.

## Download SDK example

Please download the [Copilot R SDK](https://www.moveapps.org/documentation/copilot-r-sdk.zip ':ignore'), unzip and save
it to your computer. Start the R project `copilot-sdk.Rproj` in RStudio. The included file `copilot-sdk.R` is a local
MoveApps substitute that behaves (almost) like the online system. Therefore, this file should not be adapted. The second included R-file `RFunction.R`is the file into which all your App code is supposed to go.

Here, an example selecting all data points of a given calender year is given. Please try it out with the example data
set `input2.rds`: Change the 4th line of the file `copilot-sdk.R` to `inputFileName = "input2.rds"` and run it locally. The running code is then calling upon the function rFunction() that is defined
in `RFunction.R`. An `output.rds` file is created with all locations of the input data set of the selectet year. Note
that the year selection is specified in line 20 of `copilot-sdk.R` and can be adapted there. In the MoveApps platform
this parameter is provided by an interactive input window.

```
args[["year"]] = 2014
```

## Adapt and run the App

Adapt the code in `RFunction.R` to add a pdf product function that plots your positions with the appropriate heading. See the complete file code below. Note that for plotting we must overwrite `data` in the first line and return it explicitely at the end. The file path `(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"hello_world.pdf"))` flexibly writes the pdf product to your `tmp` folder if run locally, or to the appropriate folder within the MoveApps platform. The latter must be kept for proper functionality in the platform.


```
library('move')
library('lubridate')

rFunction = function(year, data) {
  data <- data[year(data@timestamps) == year]
  
  pdf(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"hello_world.pdf"))
  plot(data,main="Hello World!")
  dev.off()
  
  return(data)
}
```

There you go with a first running MoveApps App that can select all locations of a given calender year and even returns a pdf plot of those locations. Congratulations!

![](../files/hello_world_pdf.png)


## Further steps

Before submission of your first App to the MoveApps platform, you need to thoroughly test your App, add an [appspec.json](appspec.md) file to your Git repository and write a [README documentation](files/README_template.md). See our more detailed tutorial [How to create an App](create_app.md).