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


#### MoveApps parameters
There is the possibility to ask the user to define parameters/settings before initializing a Shiny App. These parameters have to be defined in the [appspec.json](appspec.md) file.

```
# appsec.json
{
  "settings": [
    {
        "id": "username",
        "name": "Username",
        "description": "Enter username...",
        "type": "STRING",
        "defaultValue": null
    },
    {
        "id": "password",
        "name": "Password",
        "description": "Enter password...",
        "type": "STRING",
        "defaultValue": null
    },
  ]
}
```
 
When the Shiny App is called, these settings are transferred to the Shiny Module as parameters.

```
#with parameters/settings from MoveApps 
shinyModule <- function(input, output, session, username, password) {
    # Do something with the data
}
```

!> It is important that all parameters are also transferred to the `shinyModuleUserInterface` function. Here, the UI can be initialized with these parameters.

```
shinyModuleUserInterface <- function(id, label, username, password) {
  ns <- NS(id)
  # Any user interface with username and password 
}
```
##### Linkage of App settings and the Shiny UI
The Shiny UI and the App settings can be linked, i.e. when values are changed in the UI of the App, the initial values in the App settings are also changed accordingly. To do this, as with the normal configuration via the MoveApps interface, the App must define these parameters in [appspec.json](appspec.md). To be able to transfer the configuration back to MoveApps, a new `shinyModuleConfiguration` function must be created. Within this function, the parameters must be entered in a list with the respective names. When the button "`Store configuration`" is clicked the new configuration is transferred back to the App settings.

```
shinyModuleConfiguration <- function(id, input) {
  ns <- NS(id)
  configuration <- list()
  configuration["username"] <- input[[ns('username')]]
  configuration["password"] <- input[[ns('password')]]
  configuration
}

shinyModuleUserInterface <- function(id, label, username, password) {
  ns <- NS(id)
  # Any user interface with username and password 
}

shinyModule <- function(input, output, session, username, password, data) {
  # Do something with username, password and data
  return(reactive({ modifiedData() }))
}
```


#### Limitation
!> The name `data` cannot be used as an identifier for a setting, because this name is reserved for the output of the previous App.


#### Combination of data from the previous App and settings
```
shinyModuleUserInterface <- function(id, label, username, password) {
  ns <- NS(id)
  # Any user interface with username and password 
}

shinyModule <- function(input, output, session, username, password, data) {
  # Do something with username, password and data
}
```

## Integrate Shiny Apps into an automatic Workflow
Shiny Apps can also be integrated into an automatic Workflow without the user having to interact with the App directly. This allows the Workflow to run automatically without interruptions. A "`Store configuration`" button will always appear on the bottom left side of the Shiny App which the user can use to store the final settings of the Shiny App that should be used in the workflow. **NOTE: currently the `Store configuration` option is not available or working for all Shiny Apps. If parameters are not set through the `appspec` and `shinyModuleConfiguration` (see above), the configuration cannot be currently stored for future runs of the workflow. We are working on fixing this issue.**

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

If the Shiny App is not modifying the input data (e.g. only visualization), than the input data can be passed on unmodified to the next App. To do this, the `shinyModule` function must return the data object as reactive output. If no data is passed on, the app is the endpoint of a workflow.
```
shinyModule <- function(input, output, session, data) {
  current <- reactiveVal(data)
  # Do something with the data
  return(reactive({ current() }))
}
```
