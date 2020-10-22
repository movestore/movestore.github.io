# Wie erstelle ich eine eigene App

Um eine eigene App einzureichen, muss diese in einem [GitHub](https://github.com) Repository verwaltet werden. 
In diesem Repository liegt der Programmcode zur Ausführung der App sowie eine Spezifiation der App. Diese Spezifikation wird durch die Datei [appspec.json](de/appspec.md) repräsentiert.
 
## Entwicklung der App 
MoveApps Apps sollen im normalen Compiler/Editor entwickelt  und dort ausführlich getestet werden bevor sie nach MoveApps eingereicht werden. Für R und R-Shiny Apps werden Software Entwicklungs Kits (SDK) bereitgestellt, die ein R Studio Projekt beinhalten, das es erlaubt, dass App dort so laufen und sich verhalten wie auf dem MoveApps interface. Dies sind das [R SDK Copilot](de/copilot-r-sdk.md) und das [Shiny SDK Copilot](de/copilot-shiny-sdk.md) und sie beinhalten Beispieldateien wie auch die `copilot-*-sdk.R`, welche zum Testen laufen gelassen werden soll.
  
## Erstellung der App
Nachdem Sie die App erfolreich entwickelt und getested haben, sie in einem GitHub Repository abgelegt haben und ein `Tag` (via `Release`) erstellt haben, können Sie die App in MoveApps anlegen. Dafür wählen Sie im Menu `Applications / Create new Application`. Sie sehen ein Formular, welches Sie ausfüllen müssen. Nachdem erfolgreichen Anlegen der App finden Sie ihre neue App in der Übersicht `Applications / Your Applications`.  

## Erstellung einer neuen App Version
Jede App kann in verschiedenen Versionen vorliegen. Um eine neue App Version zu erstellen muss in ihrem Git-Repository ein `Tag` (via `Release`) erstellt werden. 
Nachdem Sie das `Tag` erstellt haben drücken Sie den Button `Add Version` in der Detailansicht ihrer App. (über `Applications / Your Applications / AppName / Details`).

Es wird eine Liste der verfügbaren Tags dargestellt. Wählen Sie den Tag aus und drücken Sie `Create Version`. Um die neue Version einzureichen muss zusätzlich die Beschreibung eingefügt werden, welche die Änderungen dieser neuen Version beinhaltet. Nachdem Sie diese Information eingetragen haben können Sie `Save and Submit` klicken. Die App wird anschließend von einem MoveApps-Administrators überprüft. War diese Überprüfung erfolgreich ändert sich der Status der App-Version von `SUBMITTED` auf `APPROVED`. Ab diesem Moment kann die neue Version der App verwendet werden. 