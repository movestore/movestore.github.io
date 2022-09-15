# MoveApps `R-Function` Übersicht
Diese Dokumentation beschreibt die Grundlagen um eigene R-Funktionen für MoveApps zu entwickeln.


## Wie schreibt man R-Funktionen für MoveApps?
Um eine R-Funktion aufrufen zu können, muss das SDK verwendet werden. 
Hierfür muss zuerst eine Funktion mit dem Namen `rFunction` erstellt werden.
```
rFunction = function() {}
```

### Input

#### Parameter aus MoveApps
Um Parameter bzw. Einstellungen aus MoveApps in der R-Funktion zu erhalten, müssen diese in der [appspec.json](de/appspec.md) definiert werden. Beim Aufruf der Funktion werden diese als Parameter an die R-Funktion übergeben.
```
# Mit Parametern/Einstellungen aus MoveApps 
rFunction = function(username, department) {
   # Do something with the parameters
}
```

##### Limitierung
!> Der Name `data` kann nicht als ID für eine Einstellung benutzt werden, da dieser Name bereits für die Ausgabe der vorherigen App reserviert ist.


#### Input aus vorhergehender App
Um das Ergebnis der vorhergehenden App im Workflow verwenden zu können, muss der letzte Parameter der R-Funktion mit `data` benannt werden.
```
# Mit Ergebnis der vorhergehenden App
rFunction = function(data) {
    # Do something with the data
}
```

### Kombination aus Daten der vorhergehenden App und Einstellungen
```
# Mit Parametern und den Daten der vorhergehenden App
rFunction = function(username, department, data) {
    # Do something
}
```

### Output
Um das Ergebnis an MoveApps zurückzugeben, muss das Ergebnis entsprechend am Ende der R-Funktion als Rückgabewert definiert werden.
Dieses Objekt kann entsprechend in der nächsten App innerhalb des Workflows verarbeitet werden. 
```
rFunction = function(username, department) {
    # Do something
    result
}
```

### Artefakte
MoveApps erlaubt das Erzeugen und Speichern von verschiedensten Dateien in der R-Function, wie z.B. csv, pdf, png, ..., sogenannten `Artefakten`. Diese werden mit dem normalen R-Befehl zum Schreiben der spezifischen Datei erzeugt. Wichtig ist es, den Speicherpfad als `paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"*.***")` festzulegen (`*.***` ist der Dateiname, siehe Beispiel für csv und png unten) und in der [appspec.json](de/appspec.md) die Zeile `"createsArtifacts": true` einzufügen.  Die Artefakte können nach dem Laufen der App unter `Show Downloads` heruntergeladen werden.
```
rFunction = function(username, department, data) {
    # Do something
    write.csv(artefact, file = paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"artefact.csv")
	png(paste0(Sys.getenv(x = "APP_ARTIFACTS_DIR", "/tmp/"),"artefact.png"))
	# Plot your image
	dev.off()
}
```


