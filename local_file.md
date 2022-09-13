# Local File

**WIP**

- local files are files that
    - are needed by the app to work during run time
    - gets uploaded by the user of this app during configuration time
    - es ist nicht garantiert dass die angeforderten Dateien zur Laufzeit verfügbar sind (bspw. wenn kein Fallback vom App-Developer zur Verfügung gestellt wurde und der Workflow-Nutzer die Datein nicht hochgeladen hat)
    - can also be provided by the app developer and gets bundled into the app during build time (the fallback)

Fragen aus Sicht des App Developers:

1. ist es sinnvoll dass meine App mit Dateien vom Workflow-Nutzer konfiguriert wird?
1. kann ich einen sinnvollen Default in der App bereitstellen damit die App auch ohne Dateien vom Workflow-Nutzer funktioniert?
1. wie müssen die Dateien heißen, die vom Workflow-Nutzer bereitgestellt werden müssen?

Planung für die App-Entwicklung:

- pro File-Set eine `LOCAL_FILE`-Setting definieren. Ein `LOCAL_FILE`-Setting ist als Directory zu sehen. Wenn ich für die Aktion A 3 Dateien benötige ist das die `LOCAL-FILE`-Setting _A_ und für die Aktion B mit 5 Dateien die `LOCAL_FILE`-Setting _B_
- die `id` der `LOCAL_FILE`-Setting wird in der `RFunction.R` referenziert um an die Workflow-Nutzer-Dateien zu gelangen
- falls ich die Default-Dateien als Fallback bereitstellen kann müssen diese im GIT Repository bereitgestellt werden und in der `appspec.json` per `providedAppFiles` kommuniziert werden (für Review, Build-Prozess).
- in meinem App-Code (`RFunction.R`) kann ich die Workflow-Nutzer-Dateien bzw. mein bereitgestellten Fallback laden per `paste0(getAppFilePath("road_files"),"GRIP_roads_NASAY2Y.shp")` (Details siehe `app-files.R` im _SDK_s)

## Example

### `LOCAL_FILE` setting

```json
{
  "id": "road_files",
  "name": "Road files",
  "description": "Files for running the road intersection analysis. The app expects: 1. `GRIP_roads_NASAY2Y.cpg`, 2. `GRIP_roads_NASAY2Y.dbf`, 3. `GRIP_roads_NASAY2Y.prj`, 4. `GRIP_roads_NASAY2Y.shp`, 5. `GRIP_roads_NASAY2Y.shx`",
  "type": "LOCAL_FILE"
}
```

### `providedAppFiles` configuration


- `settingId`: Referenz auf die `id` der korrespondierenden `LOCAL_FILE` setting `id`
- `from`: ein Ordner aus Sicht des GIT Repsitories. Der Inhalt dieses Ordners wird in die App gebundled.

```json
"providedAppFiles": [
  {
    "settingId": "road_files",
    "from": "provided-app-files/road_files/"
  }
]
```
