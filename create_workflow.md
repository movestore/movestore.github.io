# How to compile a Workflow

![](../files/Workflow_example.png)

The existing Apps can be combined in a workflow, one after the other. These workflows can then be used for specific use cases. 

Every workflow starts with an app that loads data into the system (e.g. from Movebank or Dropbox). The data are then passed on to the next App in the appropriate format and analysed by it accordingly. Every App requires a defined input type (presently only Movement data: positions with timestamp and individual) and can pass on output of a defined type (presently Movement) or ends in an interactive UI (R-Shiny). 

Some Apps produce output artefacts which can be downloaded as files. Movement output data can also be downloaded (in R format .rds).

## Create a new workflow
In the menu “Workflows” you can initiate a new workflow with “Create New Workflow”. After providing a name for the workflow you have to select a “Data Source”, now either Movebank download or download from your personal cloud storage on Google Drive or Dropbox. In both Apps you have to provide different parameters and setting. After finishing them, the Workflow area with the inital App appears. By pressing on the "+" behind this first App another download App can be added and the data of this App will be combined with those of the first. Thus, different data sets (e.g. from different Movebank studies) can be analysed together.

![](../files/Workflow_movebank.png)

## Combine Apps to a workflow
By clicking on the “+” behind an App, you can select additional Apps to filter, analyse or visualise the downloaded data. You can also insert an App between two already for the Workflow selected Apps, if they are of the required type (usually input: Movement and output: Movement). In the list of Apps to choose from only those are listed that comply with the required input and output types. In the list of available Apps, you can see the descriptions of each App and can read about additional information by clicking on “Details”. On the top right-hand corner, the list can be filtered by keywords.

![](../files/Workflow_addApp.png)

## Run the workflow
The completed Workflow can be started with “Start Workflow”. By this the Apps are started and executed one after the other. This can be followed by the change in colour of the action point in each App container (bottom right). The Workflow continues running even if the site moveapps.org is left and results can be looked up and downloaded later. With “rerun” or “stop workflow” the run of the Workflow can be restarted or stopped prematurely. Each Workflow that contains only simple R Apps can be scheduled to run (once or regularly) in an automatic mode at a fixed date and time. This option can be selected in the menu next to “Start Workflow”. There, also the export of the workflow can be initialised.

![](../files/Workflow_menu.png)

## Menus, Settings and Error logs
In each App-container of a Workflow there is a menu next to the App name. The R-Apps show the following menu points:

	- Settings:  The parameters of the App can be reselected and changed
	- Show Download: The available data for download (Output, Artefacts, Meta data, Data overview) are listed.
	- Show Logs: The data protocols can be examined. Especially with unexpected results or error messages those are important to consult.
	- Pin to this app: The output of the App is fixed in the Workflow so that at rerunning the Workflow only the Apps further behind are reexecuted. The App at with you pinned and all preceding Apps are underlaid in grey. The "Pin" can be removed any time by clicking on "unpin" below in the greyed out area.
	- Delete: Removes the App from your Workflow.

![](../files/App_menu_R.png)
![](../files/Download_List.png)
![](../files/App_Pin.png)

## Data overview of App output
Each app that returns data creates a short summary of the output data, which can be accessed via the green button that appears at the right side of the App container. Here, the bounding box and time range of the positions is given, as well as the number of different animals, the total number of positions (events) and the number of positions for each individual animal. Finally, the names of all available data variables are listed. This summary can also be downloaded as a file.

![](../files/CargoAgent_Overview.png)

## Shiny R and User Interfaces
For RShiny Apps that return User Interfaces, the UI can be accessed after the run of the Workflow via “Open Results” or via “Shiny UI” in the App menu. There, settings can directly be adapted and data can be examined, depending on the options that the App developer has programmed. There are also R-Shiny Apps that have output data (Movement) and the User Interface is used e.g. to filter the data. Also then it can be accessed via "Shiny UI" in the App menu.

![](../files/App_menu_shiny.png)

## Workflow Instances
Each workflow can be run and saved in several instances. I.e. the same Apps are combined in the same order, but their settings can differ. It is important to note that changes of the components (Apps) of a Workflow Instance affect the other Instances, namely is passed on to them.

Every additional Workflow Instance must be initialised in the Workflow overview (via main menu) of the respective Workflow via “Start new instance”. In the menu of each instance you can adapt the description of the workflow (Edit Workflow Instance Details) and the instance can be deleted. Also the description of the complete Workflow can be changed in the according Workflow and it can be deleted.

![](../files/Workflow_start.png)


