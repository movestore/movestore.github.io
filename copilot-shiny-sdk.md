# MoveApps `Shiny Module` overview
This documentation describes the basics for developing R-Shiny modules for MoveApps. Further information on Shiny and
Shiny Modules can be found at  https://shiny.rstudio.com/tutorial and https://shiny.rstudio.com/articles/modules.html,
respectively.

An R Project is provided for the development of Shiny
Modules [copilot-shiny-sdk.zip](https://www.moveapps.org/documentation/copilot-shiny-sdk.zip ':ignore'). This R Project
can and should be used as a starting point for the development of your R-Shiny App.

## How to write a Shiny Module for MoveApps
In order to be able to develop Shiny Modules for MoveApps, at least the two functions `shinyModuleUserInterface` and `shinyModule` must be provided. These functions must be stored in a file called `ShinyModule.R`.

### User Interface - shinyModuleUserInterface()
Within this function the Shiny User interface (UI) must be defined . It is important that the UI objects are created using the Shiny namespace `ns`.
```
shinyModuleUserInterface <- function(id, label) {
  ns <- NS(id)

  fluidPage(
    textInput(ns("my-textinput"), h3("Text input"), value = "Enter text...")
  )
}
```

### Logic - shinyModule()
This function contains the own logic of the Shiny Module.
```
shinyModule <- function(input, output, session) {}
```

### Input

#### MoveApps parameters
In order to receive parameters or settings from MoveApps in the Shiny Module, they must be defined in the [appspec.json](appspec.md) file.

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
 
When the Shiny Module is called, these settings are transferred to the Shiny Module as parameters.

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

#### Limitation
!> The name `data` cannot be used as an identifier for a setting, because this name is reserved for the output of the previous App.

#### Input from the previous App
In order to use the result of the previous App in your App, the last parameter of the `shinyModule` function must be named `data`, referring to the data input.
```
# With input from previous App
shinyModule <- function(input, output, session, data) {
    # Do something with the data
}
```

!> The data parameter, in turn, is **not** passed on to the `shinyModuleUserInterface` function.


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

## Integrate Shiny Modules into an automatic Workflow
Shiny Modules can also be integrated into an automatic Workflow without the user having to interact with the App directly. This allows the Workflow to run automatically without interruptions.

## Input
The same requirements apply to the input as already described above [(Input from the previous App)](copilot-shiny-sdk#input-predecessor-app).

## Output
Shiny Modules can be integrated into an automatic Workflow and the newly calculated data object passed on to subsequent Apps. To do this, the `shinyModule` function must return the data object as reactive output.
```
shinyModule <- function(input, output, session, username, password, data) {
    # Do something with username, password and data
    return(reactive({ modifiedData() }))
}
```

## Configure Shiny Modules using the Shiny UI
Shiny Modules can also be configured using the Shiny UI. To do this, as with the normal configuration via the MoveApps interface, the App must define these parameters in [appspec.json](appspec.md). To be able to transfer the configuration back to MoveApps, a new `shinyModuleConfiguration` function must be created. Within this function, the parameters must be entered in a list with the respective names. As soon as this function is defined in the `ShinyModule`, a button appears in the Shiny UI, which allows this new configuration to be transferred back to MoveApps.

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

