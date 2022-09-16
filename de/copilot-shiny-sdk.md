# MoveApps `Shiny Module` Übersicht
Diese Dokumentation beschreibt die Grundlagen um Shiny Module für MoveApps zu entwickeln. Weitere Informationen zu Shiny
und Shiny Modulen finden Sie unter https://shiny.rstudio.com/tutorial
bzw. https://shiny.rstudio.com/articles/modules.html

Für die Entwicklung solcher Shiny Module wird ein R-Projekt zur Verfügung
gestellt [copilot-shiny-sdk.zip](https://www.moveapps.org/documentation/copilot-shiny-sdk.zip ':ignore'). Dieses
R-Projekt können Sie als Ausgangspunkt für die Entwicklung Ihrer App nutzen.

## Wie schreibt man ein Shiny Module für MoveApps?
Um Shiny-Module für MoveApps entwickeln zu können, müssen mindestens die beiden Funktionen `shinyModuleUserInterface` und `shinyModule` bereitgestellt werden. Diese Funktionen müssen in einer Datei namens `ShinyModule.R` abgelegt sein.

### User Interface - shinyModuleUserInterface()
Innerhalb dieser Funktion muss das Shiny-User-Interface definiert werden. Hier ist wichtig, dass die UI-Objekte mittels dem Shiny Namespace `ns` erzeugt werden.
```
shinyModuleUserInterface <- function(id, label) {
  ns <- NS(id)

  fluidPage(
    textInput(ns("my-textinput"), h3("Text input"), value = "Enter text...")
  )
}
```

### Logik - shinyModule()
Diese Funktion beinhaltet die eigene Logik des Shiny Moduls.
```
shinyModule <- function(input, output, session) {}
```

### Input
#### Parameter aus MoveApps
Um Parameter bzw. Einstellungen aus MoveApps im ShinyModul zu erhalten, müssen diese in der [appspec.json](de/appspec.md) definiert sein.

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
 
Beim Aufruf des Shiny Modules werden diese dann als Parameter an das Shiny-Modul übergeben.

```
# with parameters/settings from MoveApps 
shinyModule <- function(input, output, session, username, password) {
    # Do something with the data
}
```

!> Wichtig ist, dass auch alle Parameter an die `shinyModuleUserInterface` Funktion mitübergeben werden. Hier kann z.B. schon das UI mit diesen Parametern initialisiert werden
```
shinyModuleUserInterface <- function(id, label, username, password) {
  ns <- NS(id)
  # Any user interface with username and password 
}
```

#### Limitierung
!> Der Name `data` kann nicht als ID für eine Einstellung benutzt werden, da dieser Name bereits für die Ausgabe der vorherigen App reserviert ist.

#### Input aus vorhergehender App :id=input-predecessor-app
Um das Ergebnis der vorhergehenden App in Ihrer App verwenden zu können, muss der letzte Parameter der `shinyModule` Funktion mit `data` benannt werden.
```
# With input from previous app
shinyModule <- function(input, output, session, data) {
    # Do something with the data
}
```

!> Der Data Parameter wird wiederum **nicht** an die `shinyModuleUserInterface` Funktion weitergegeben.


#### Kombination aus Daten der vorhergehenden App und Einstellungen
```
shinyModuleUserInterface <- function(id, label, username, password) {
  ns <- NS(id)
  # Any user interface with username and password 
}

shinyModule <- function(input, output, session, username, password, data) {
  # Do something with username, password and data
}
```

## Shiny Module in automatischen Workflow integrieren
Shiny Module können auch in einen automatischen Workflow integriert werden, ohne dass der Benutzer hier mit der App interagieren muss. Dadurch kann der Workflow ohne Unterbrechungen automatisch ausgeführt werden. 

## Input
Für den Input gelten hier die gleichen Vorgaben wie bereits weiter oben beschrieben ([Input aus vorhergehender App](/de/copilot-shiny-sdk#input-predecessor-app)).

## Output
Auch Shiny Module können in einen automatisch Workflow integriert werden und das neu berechnete Data-Objekt an nachfolgende Apps weiterreichen. Hierzu muss die `shinyModule` Funktion das Data-Objekt als reaktiven Output zurückgeben.
```
shinyModule <- function(input, output, session, username, password, data) {
    # Do something with username, password and data
    return(reactive({ modifiedData() }))
}
```

## Shiny Module mittels Shiny UI konfigurieren
Shiny-Module können auch mittels Shiny UI konfiguriert werden. Hierzu muss die App, wie auch bei der normalen Konfiguration, diese Parameter in der [appspec.json](de/appspec.md) definieren. Um die Konfiguration nun zurück zu MoveApps übertragen zu können, muss eine neue Funktion `shinyModuleConfiguration` erstellt werden. Innerhalb dieser Funktion müssen die Parameter in eine Liste mit den jeweiligen Namen eingetragen werden. Sobald diese Funktion im ShinyModule definiert ist, erscheint ein Button im Shiny UI, welcher es erlaubt diese neue Konfiguration zurück an MoveApps zu übertragen.
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

