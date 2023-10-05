# Hello world! An App example

Please follow the instructions below and run an example App locally in the R Software Development Kit. This is meant to be an example for future Apps that can be submitted to and then run on MoveApps.

## Use SDK template and run the App locally

Please register or login to your GitHub account and press "Use this template" in GitHub [Template 'R Function App'](https://github.com/movestore/Template_R_Function_App ':ignore'). Start the R project `Template_R_Function_App.Rproj` in RStudio. The included file `sdk.R` is a local MoveApps substitute that behaves (almost) like the online system. Therefore, this file should not be adapted. The two files emulating MoveApps interactive behaviour locally are `.env` which defines the input and output files path (please only adapt the input file path here) and `app-configuration.json` which allows you to adapt the App settings for local testing. Note that the json format is required here The fourth included file that you must use for development is the `RFunction.R`. It is the file into which all your App code is supposed to go and the only R file that is actually integrated into MoveApps when your App is built.

Here, an example selecting all data points of a given calender year is given. Please try it out with the example data set `input3.rds` (see line 4 in `.env`). The settings are given in the file `app-configuration.json`, make sure that the year is included in the data set. In the MoveApps platform this parameter is provided by an interactive input window. Finally, you can run the file `sdk.R`, which is calling several supportive code that is emulating MoveApps behaviour as well as the `RFunction.R`. Explore the results that are saved in the folder `./data/output`, as specified in `.env`. Note that we have provided additional example code in the `RFunction.R` for e.g. the use of auxiliary files as settings. For more details see the file `developer_README.md` in the template or [on Github directly](https://github.com/movestore/Template_R_Function_App/blob/master/developer_README.md).


app-configuration.json
```
{
    "sdk": "MoveApps R SDK",
    "year": 2006
}
```

RFunction.R
```
library('move2')
library('lubridate')

## The parameter "data" is reserved for the data object passed on from the previous app

# to display messages to the user in the log file of the App in MoveApps
# one can use the function from the logger.R file:
# logger.fatal(), logger.error(), logger.warn(), logger.info(), logger.debug(), logger.trace()

# Showcase injecting app setting (parameter `year`)
rFunction = function(data, sdk, year, ...) {
  logger.info(paste("Welcome to the", sdk))
  result <- if (any(lubridate::year(mt_time(data)) == year)) { 
    data[lubridate::year(mt_time(data)) == year,]
  } else {
    NULL
  }
  if (!is.null(result)) {
    # Showcase creating an app artifact. 
    # This artifact can be downloaded by the workflow user on Moveapps.
    artifact <- appArtifactPath("plot.png")
    logger.info(paste("plotting to artifact:", artifact))
    png(artifact)
    plot(result)
    dev.off()
  } else {
    logger.warn("nothing to plot")
  }
  # Showcase to access a file ('auxiliary files') that is 
  # a) provided by the app-developer and 
  # b) can be overridden by the workflow user.
  fileName <- paste0(getAppFilePath("yourLocalFileSettingId"), "sample.txt")
  logger.info(readChar(fileName, file.info(fileName)$size))

  # provide my result to the next app in the MoveApps workflow
  return(result)
}
```

There you go with a first running MoveApps App that can select all locations of a given calender year and even returns a pdf plot of those locations. Try adapting the `RFunction.R` to your needs and run it locally on RStudio before submitting to MoveApps.

![](../files/hello_world_pdf.png)


## Further steps

Before submission of your first App to the MoveApps platform, you need to thoroughly test your App, add an [appspec.json](appspec.md) file to your Git repository and write a [README documentation](README_file_description.md). See our more detailed tutorial [How to create an App](create_app.md).