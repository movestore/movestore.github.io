# Writing the `Shiny Module` App code

This documentation describes the basics for developing R-Shiny modules for MoveApps. Further information on Shiny and Shiny Modules can be found at https://shiny.rstudio.com/tutorial and https://shiny.rstudio.com/articles/modules.html, respectively.

Please use one of these GitHub templates: [Template R Shiny App](https://github.com/movestore/Template_R_Shiny_App ':ignore'), [Template R Shinydashboard App](https://github.com/movestore/Template_R_Shinydashboard_App ':ignore') and follow the [instructions to create an App](create_app.md).


#### Notes and recommendations
- While writing your App code, keep in mind the [coding best practises](best_practices_coding.md).

- Check out the [notes on programming with the object of class `move2`](programing_move2.md) if you are using the `move2` R package to write your App code.

- It is possible to use parallel computing within MoveApps, please check out [this page](parallelcomp.md).


## Creating the functions
In order to develop Shiny Modules for MoveApps, at least the two functions `shinyModuleUserInterface` and `shinyModule` must be provided. These functions must be stored in a file called `ShinyModule.R`.

Please keep the number of packages (libraries) as low as possible. Advice: use list.functions.in.file("ShinyModule.R") from R package NCmisc to check which libraries are used by your code.

#### shinyModuleUserInterface() - defining the User Interface
Within this function the Shiny User Interface (UI) must be defined . All input and output and brush IDs that appear in the function body need to be wrapped in a call to the namespace function `ns()`.

##### Example
```
*R code*

shinyModuleUserInterface <- function(id, label) {
  ns <- NS(id)

  fluidPage(
    textInput(ns("my-textinput"), h3("Text input"), value = "Enter text...")
    uiOutput(ns("indivUI"))
  )
}
```

When using `shinydashboard`, the `dashboardPage()` has to be wrapped in a `tagList()`, and all IDs of the inputs/outputs need to be wrapped in the `ns()` function. 

*NOTE: if you know a better way of modularizing a shinydashboard app, please get in touch with ascharf@ab.mpg.de, thanks!*

##### Example
```
*R code*

shinyModuleUserInterface <- function(id, label) {
  ns <- NS(id) ## all IDs of UI functions need to be wrapped in ns()
  tagList(
    dashboardPage(
      dashboardHeader(title = "my app title"),
      dashboardSidebar(uiOutput(ns("Sidebar"))), 
      dashboardBody(uiOutput(ns("TabUI")))
    )
  )
}
```

#### shinyModule() - defining the module server functions
This function contains the module server functions. When `uiOutput`/`renderUI` is used, the IDs of the inputs/outputs also need to be wrapped in the `ns()` function.

##### Example
```
*R code*

shinyModule <- function(input, output, session) {
  ns <- session$ns
  output$indivUI <- renderUI({
    selectInput(ns("indiv"), "Individuals", namesIndiv(data), multiple = TRUE)
  })
  
}
```


### App Input

#### Input from previous App
In order to use the result of the previous App in the Workflow, one of the parameters of the `shinyModule` function must be named `data`. Note that the data type (IO type) of `data` is defining your App's input type that you need to specify at App initialization. Currently, the most widely used IO type is `move2::move2_loc`. [This page](IO_types.md) contains an overview of all available IO types and instructions on how to request a new IO type.

##### Example
```
*R code*

# With input from previous App
shinyModule <- function(input, output, session, data) {
    # Do something with the data
}
```

!\> The data parameter, in turn, is **not** passed on to the `shinyModuleUserInterface` function.


#### MoveApps parameters
You can receive parameters or settings for your `Shiny Module` function from the App's User Interface. These parameters/settings can be configured by the user within MoveApps.

A button called `Store settings` will appear automatically on the bottom left side of the Shiny App. Here the user can store the personalized settings for subsequent runs of an (automatic) Workflow. The values stored are those that are entered and modified in the user interface function `shinyModuleUserInterface()`. This is achieved by using the `shiny::bookmarkButton()` embedded in the `ui` function in the MoveApps system (see [`./src/moveapps.R`](https://github.com/movestore/Template_R_Shiny_App/blob/master/src/moveapps.R) in the template for reference).

When `shiny::bookmarkButton()` is used locally, after clicking on the button by default a folder named `shiny_bookmarks` is created which contains a file named `input.rds`. This `input.rds` file can be downloaded from the App on MoveApps by downloading the file `Stored Settings`, enabeling the use of the same settings also locally.

##### Example from [`Simple Map`](https://github.com/movestore/simple-map/blob/master/ShinyModule.R)
```
*R code*

shinyModuleUserInterface <- function(id, label) {
	ns <- NS(id)
  
	tagList(
		titlePanel("Simple map with coastlines"),
		sliderInput(inputId = ns("num"), 
			label = "Choose edge size", 
			value = 0, min = 0, max = 30),
		withSpinner(plotOutput(ns("map"),height="90vh"))
	)
}

shinyModule <- function(input, output, session, data) {

	plotInput <- reactive({
		map("world",xlim=c(min(lon())-input$num,max(lon())+input$num),ylim=c(min(lat())-input$num,max(lat())+input$num))
	})
	
	
}
```

!\>  **Limitation** You cannot use `data` as a parameter name. This is reserved for the input that is passed on from the previous App.


#### Auxiliary input files
It is possible to design Apps that require auxiliary files as input, e.g. a map with environmental information, that are useful for analysis with the tracking data. There are three types of auxiliary files (see below). For more details and to integrate the full functionality into an App see the [detailed description](auxiliary.md).

1. **Fixed auxiliary files** that the App developer provides in the GitHub repository. These files will be used for all analysis independent of the input data sets. We advice these data to be of global coverage.

2. **Local upload auxiliary files** that have to be provided by the App user when the Workflow is created, i.e. during configuration of the App settings. If the App user has not uploaded the required auxiliary files, the App cannot run correctly.

3. **Local upload auxiliary files with fixed fallback files** that are a combination of the above. The App developer provides a set of fallback files in the GitHub repository. These files will be used if the App user does not upload the required auxiliary files. However, if the App user does upload the required auxiliary files from their local system, the uploaded files are used instead of the fallback files.


### App Output
Shiny Apps can be integrated into an Workflows and the newly calculated data object passed on to subsequent Apps. To do this, the `shinyModule` function must return the data object as reactive output.

##### Example
```
*R code*

shinyModule <- function(input, output, session, data) {
    # Do something with the data
    return(reactive({ modifiedData() }))
}
```

If the Shiny App is not modifying the input data (e.g. only visualisation), then the input data must be passed on unmodified to the next App. To do this, the `shinyModule` function must return the data object as reactive output. 

##### Example
```
*R code*

shinyModule <- function(input, output, session, data) {
  current <- reactiveVal(data)
  # Do something with the data
  return(reactive({ current() }))
}
```

#### Producing artifacts
MoveApps allows the creation and saving of different files directly through the `shinyModule` function (e.g. csv, pdf, png), so called `artifacts`. Those artifacts can be created by the usual R command for saving the specific type of file. To get a valid path for the artifact use the SDK function `appArtifactPath(*.***)` (`*.***` is the name of the file, see example for csv and png below). After running the App, the artifacts can then be downloaded from the `App Outputs` list.

##### Example
```
*R code*

shinyModule <- function(input, output, session, data) {
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
