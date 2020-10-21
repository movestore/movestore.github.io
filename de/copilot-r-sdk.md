# MoveApps `R-Function` Übersicht
Diese Dokumentation beschreibt die Grundlagen um eigene R-Funktionen für den MoveApps zu entwickeln.

Für die Entwicklung solcher R Funktionen wird ein R-Projekt zur Verfügung gestellt [copilot-r-sdk.zip](https://develop.movestore.org/documentation/copilot-r-sdk.zip ':ignore'). Dieses R-Projekt kann als Ausgangspunkt für die Entwicklung deiner App genutzt werden.
``
## Wie schreibt man R-Funktionen für MoveApps?
Um eine R-Funktion aufrufen zu können, muss das SDK verwendet werden.
Hierfür muss zuerst eine Funktion mit dem Namen `rFunction` erstellt werden.
```
rFunction = function() {}
```

### Input
#### Parameter aus MoveApps
Um Parameter bzw. Einstellungnen aus MoveApps in der R-Funktion zu erhalten, müssen diese in der [appspec.json](de/appspec.md) definiert werden.
Beim Aufruf der Funktion werden diese als Parameter an die R-Funktion übergeben.
```
# Mit Parametern/Einstellungen aus MoveApps
rFunction = function(username, password) {
   # Do something with the parameters
}
```

##### Limitierungen
!> Der Name `data` kann nicht als ID für eine Einstellung benutzt werden, da dieser Name bereits für die Ausgabe der vorherigen App reserviert ist.

#### Input aus vorhergehender App
Um das Ergebnis der vorhergehenden App im Workflow verwenden zu können, muss der letzte Parameter der R-Funktion `data` benannt werden.
```
# Mit Ergebnis der vorhergehenden App
rFunction = function(data) {
    # Do something with the data
}
```

### Kombination aus Daten der vorhergehenden App und Einstellungen
```
# Mit Parametern und den Daten der vorhergehenden App
rFunction = function(username, password, data) {
    # Do something
}
```

### Output
Um das Ergebnis an MoveApps zurückzugeben, muss das Ergebnis entsprechend am Ende der R-Funktion als Rückgabewert definiert werden.
Dieses Objekt kann entsprechend in der nächsten App innerhalb des Workflows verarbeitet werden.
```
rFunction = function(username, password) {
    # Do something
    result
}
```
