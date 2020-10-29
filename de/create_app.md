# Wie erstelle ich eine eigene App

Um eine eigene App einzureichen, muss diese in einem [GitHub](https://github.com) - Repository verwaltet werden. In diesem Repository liegt der Programmcode zur Ausführung der App sowie eine Spezifikation der App. Diese Spezifikation wird durch die Datei [appspec.json](de/appspec.md) repräsentiert.
 
## Entwicklung der App 
MoveApps-Apps sollen im normalen Compiler/Editor entwickelt  und dort ausführlich getestet werden bevor sie bei MoveApps eingereicht werden. Für R- und R-Shiny-Apps werden Softwareentwicklungs-Kits (SDK) bereitgestellt. Die SDKs beinhalten ein R-Studio-Projekt, das es erlaubt, dass Apps dort so laufen und sich verhalten wie auf dem MoveApps-Interface. Das [Copilot R SDK ](de/copilot-r-sdk.md) und das [Copilot Shiny SDK](de/copilot-shiny-sdk.md) beinhalten Beispieldateien sowie die Datei `copilot-*-sdk.R`, welche zum Testen laufen gelassen werden soll.
  
## Erstellung der App
Nachdem Sie Ihre App erfolgreich entwickelt und getestet, in einem GitHub Repository abgelegt und ein `Tag` (via `Release`) erstellt haben, können Sie die App in MoveApps anlegen. Dafür wählen Sie im Menu `Applications / Create new Application`. Sie sehen dort ein Formular, welches Sie ausfüllen müssen. Nachdem erfolgreichen Anlegen der App finden Sie Ihre neue App in der Übersicht `Applications / Your Applications`.  

## Erstellung einer neuen App-Version
Jede App kann in verschiedenen Versionen vorliegen. Um eine neue App-Version zu erstellen muss in Ihrem Git-Repository zunächst ein `Tag` (via `Release`) erstellt werden. Nachdem Sie das `Tag` erstellt haben, drücken Sie den Button `Add Version` in der Detailansicht Ihrer App. (via `Applications / Your Applications / AppName / Details`).

Es wird nun eine Liste der verfügbaren Tags dargestellt. Wählen Sie den entsprechenden `Tag` aus und drücken Sie `Create Version`. Um die neue Version einzureichen muss zusätzlich eine Beschreibung eingefügt werden, welche die konkreten Änderungen dieser neuen Version beschreibt. Nachdem Sie diese Information eingetragen haben, können Sie `Save and Submit` klicken. Die App wird anschließend von einem MoveApps-Administrator überprüft. War diese Überprüfung erfolgreich ändert sich der Status der App-Version von `SUBMITTED` auf `APPROVED`. Ab diesem Moment kann die neue Version der App verwendet werden. 