# MoveApps `Shiny Module` overview
This documentation describes the basics for developing R-Shiny modules for MoveApps. Further information on Shiny and
Shiny Modules can be found at  https://shiny.rstudio.com/tutorial and https://shiny.rstudio.com/articles/modules.html,
respectively.

Feel free to use these GitHub templates: [Template R Shiny App](https://github.com/movestore/Template_R_Shiny_App ':ignore'), [Template R Shinydashboard App](https://github.com/movestore/Template_R_Shinydashboard_App ':ignore')

## How to write a Shiny Module for MoveApps
In order to be able to develop Shiny Modules for MoveApps, at least the two functions `shinyModuleUserInterface` and `shinyModule` must be provided. These functions must be stored in a file called `ShinyModule.R`.

### User Interface - shinyModuleUserInterface()
Within this function the Shiny User interface (UI) must be defined . All input and output and brush IDs that appear in the function body needs to be wrapped in a call to the namespace function `ns()`.
```
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

```
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


### Server module - shinyModule()
This function contains the module server functions. When `uiOutput`/`renderUI` is used, the IDs of the inputs/outputs also need to be wrapped in the `ns()`.

```
shinyModule <- function(input, output, session) {
  ns <- session$ns
  output$indivUI <- renderUI({
    selectInput(ns("indiv"), "Individuals", namesIndiv(data), multiple = TRUE)
  })
  
}
```

### Input

#### Input from the previous App
In order to use the result of the previous App in your App, the last parameter of the `shinyModule` function must be named `data`, referring to the data input.
```
# With input from previous App
shinyModule <- function(input, output, session, data) {
    # Do something with the data
}
```

!> The data parameter, in turn, is **not** passed on to the `shinyModuleUserInterface` function.


#### Store Settings
A button called `Store settings` will appear automatically on the bottom left side of the Shiny App. Here the user can store the personalized settings for subsequent runs of a workflow. The values stored are those that are entered and modified in the user interface function `shinyModuleUserInterface()`. This is achieved by using the `shiny::bookmarkButton()` embedded in the `ui` function in the moveapps system (see `./src/moveapps.R` in the template for reference).

When `shiny::bookmarkButton()` is used locally, after clicking on the button by default a folder named "shiny_bookmarks" is created which contains a file named "input.rds". This "input.rds" file can be downloaded from the App on Moveapps by downloading the file "Stored Settings", enabeling the use of the same settings also locally.


#### Limitation
!> The name `data` cannot be used as an identifier for a setting, because this name is reserved for the output of the previous App.


## Integrate Shiny Apps into an automatic Workflow
Shiny Apps can also be integrated into an automatic Workflow without the user having to interact with the App directly. This allows the Workflow to run automatically without interruptions. A "`Store settings`" button will always appear on the bottom left side of the Shiny App which the user can use to store the final settings of the Shiny App that should be used in the workflow.

### Input
The same requirements apply to the input as already described above [(Input from the previous App)](copilot-shiny-sdk#input-predecessor-app).

### Output
Shiny Apps can be integrated into an automatic Workflow and the newly calculated data object passed on to subsequent Apps. To do this, the `shinyModule` function must return the data object as reactive output.
```
shinyModule <- function(input, output, session, data) {
    # Do something with the data
    return(reactive({ modifiedData() }))
}
```

If the Shiny App is not modifying the input data (e.g. only visualization), than the input data must be passed on unmodified to the next App. To do this, the `shinyModule` function must return the data object as reactive output. 
```
shinyModule <- function(input, output, session, data) {
  current <- reactiveVal(data)
  # Do something with the data
  return(reactive({ current() }))
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