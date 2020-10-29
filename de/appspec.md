# Appspec.json

Die Datei `appspec.json` dient dazu eine App innerhalb von MoveApps zu definieren. Hierbei werden Abhängigkeiten und auch Einstellungen der App definiert. Einige der Einstellungen sind obligatorisch und haben eine festgelegte Liste möglicher Werte, andere sind optional.


## Einstellungen/Parameter 

Um dem Benutzer die Möglichkeit zu geben innerhalb von MoveApps eine App zu konfigurieren, können für eine App bestimmte Einstellungen definiert werden.
Der Benutzer kann in der Oberfläche diese Einstellungen verändern und die Werte werden beim Aufruf der App entsprechend als Parameter übergeben. Andere Einstellungen in der `appspec.json`sind zur möglichen Publikation und Nachverfolgbarkeit der App gedacht.

## Validator

Um eine `appspec.json` zu erstellen, zu testen und auch zu verifizieren gibt es einen [Settings Editor](/apps/settingseditor ':ignore'). Mithilfe dieses Tools ist es einfach und schnell möglich die Settings zu definieren, visuell darzustellen und auf Validität zu testen.

### Einstellungs-Typen
Es gibt verschiedene Einstellungs-Typen: 
- [Texteingabe](de/string.md)
- [Eingabe ganzer Zahlen](de/integer.md)
- [Eingabe reeller Zahlen](de/double.md)
- [Datumsauswahl](de/instant.md)
- [Radiobuttons](de/radiobuttons.md)
- [Checkboxes](de/checkbox.md)
- [Dropdown](de/dropdown.md)


### Beispiel

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

In diesem Abschnitt müssen alle Abhängigkeiten zu Bibliotheken der App definiert werden. Dies sind Abhängigkeiten welche die App zur Bau- und / oder zur Laufzeit benötigt. Zu jeder Bibliothek kann (optional) definiert werden, in welcher Version diese geladen werden muss.

!> Für bestimmte Bibliotheken (etwa `shiny`) gelten besondere Regeln; diese können etwa nur in einer bestimmten Version verlangt werden.

Um die Definition aller Abhängigkeiten bereits vor der Einreichung zu prüfen kann der [Settings Editor](apps/settingseditor) genutzt werden.

### Beispiel 

Im Folgenden beispielhaft die Abhängigkeiten einer R-App, welche die Bibliothek `prettyunits` und `futile.logger` benötigt:

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

## Artefakte
Falls eine App [Artefakte](de/copilot-r-sdk.md#Artefakte) erzeugt, muss dies in der `appspec.json` angegeben werden. Der Typ und die Menge der Artefakte sind hierbei nicht zu definieren. Es ist sogar ohne Fehler möglich, dass unter bestimmten Bedingungen (z.B. keine Daten für ein best. Individuum) kein Artefakt ausgegeben wird.
```json
{
  "settings": [],
  "dependencies": {
  "R": []
  },
  "createsArtifacts": true
}
```

## Lizenz
Geben Sie zur weiteren Verwendung und Veröffentlichung an, welche Lizenzvereinbarung Sie für Ihre App verwenden möchten.

## Sprache


## Schlüsselwörter


## Autoren


## Finanzierung


## Referenzen



