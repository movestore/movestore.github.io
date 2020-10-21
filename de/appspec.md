# Appspec.json

Die Datei `appspec.json` dient dazu eine App innerhalb von MoveApps zu definieren. Hierbei werden Abhängigkeiten und auch Einstellungen der App definiert. 


## Einstellungen/Parameter 

Um dem Benutzer die Möglichkeit zu geben innerhalb von MoveApps eine App zu konfigurieren, können für eine App Einstellungen definiert werden.
Der Benutzer kann in der Oberfläche diese Einstellungen verändern und die Werte werden beim Aufruf der App entsprechend als Paramter übergeben. 

## Validator

Um eine `appspec.json` zu erstellen, zu testen und auch zu verifizieren gibt es einen [Settings Editor](/apps/settingseditor ':ignore'). Mithilfe diesem Tool ist es einfach und schnell möglich die Settings zu definieren und auch visuell darzustellen.

### Einstellungs-Typen
Es gibt verschiedene Einstellungs-Typen: 
- [Zahlen Eingabe](de/integer.md)
- [Gleitkommazahl Eingabe](de/double.md)
- [Text Eingabe](de/string.md)
- [Datumsauswahl](de/instant.md)
- [Dropdown](de/dropdown.md)
- [Radiobuttons](de/radiobuttons.md)
- [Checkbox](de/checkbox.md)


### Beispiel der Einstellungen in appspec.json

```json
{
  "settings": [
    {
        "id": "testTimestamp",
        "name": "Test Timestamp",
        "description": "Select a date.",
        "type": "INSTANT",
        "defaultValue": null
    },
    {
        "id": "testNumber",
        "name": "Test Number",
        "description": "Select a number.",
        "type": "INTEGER",
        "defaultValue": null
    }
  ]
}
```
## Abhängigkeiten

In diesem Abschnitt müssen alle Abhängigkeiten zu Bibliotheken der App definiert werden. Dies sind Abhängigkeiten welche die App zur Bau- und / oder zur Laufzeitzeit benötigt. Zu jeder Bibliothek kann (optional) definiert werden in welcher Version diese geladen werden muss.

!> Für bestimmte Bibliotheken (etwa `shiny`) gelten besondere Regeln; diese können etwa nur in einer bestimmten Version verlangt werden.

Um die Definition aller Abhängigkeiten bereits vor der Einreichung zu prüfen kann der [Settings Editor](apps/settingseditor) genutzt werden.

### Beispiel 

Im folgenden beispielhaft die Abhängigkeiten einer R-App, welche die Bibliothek `prettyunits` und `futile.logger` benötigt:

```json
{
  "settings": [],
  "dependencies": {
    "R": [
      {
        "name": "prettyunits",
        "version": "1.1.1" 
      },
      {
        "name": "futile.logger"
      }
    ]
  }
}
```

