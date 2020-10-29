# How to compile a Workflow

![](../files/Workflow_example.png)

The existing Apps can be combined in a workflow, one after the other. These workflows can then be used for specific use cases. 

Every Workflow starts with an App that loads data into the system (e.g. from Movebank or Dropbox). The data are then passed on to the next App in the appropriate format and analysed by it accordingly. Every App requires a defined input type (presently only Movement data: positions with date-timestamps and animal ID) and can pass on output of a defined type (presently Movement) or ends in an interactive UI (R-Shiny). 

Some Apps produce output artefacts which can be downloaded as files, in formats such as .pdf or .csv. Movement output data can also be downloaded (in R format .rds).

## Create a new workflow
In the menu `Workflows` you can initiate a new Workflow with `Create New Workflow`. After providing a name for the Workflow you can select a Data Source. Now choose either a Movebank download or download from your personal cloud storage on Google Drive or Dropbox. Both Data Sources require taht you specify parameters and settings. After providing these, the Workflow area with the initial App appears (see Figure below). Note that additional Data Sources can be downloaded by adding e.g. another Movebank download App (see below). All data sets will be combined, thus allowing the joined analysis of data from e.g. different Movebank studies.

![](../files/Workflow_movebank.png)

## Combine Apps to a workflow
By clicking on the “+” behind an App, you can select additional Apps to filter, analyse or visualise the downloaded data. You can also insert an App between two already selected Apps, if they are compatibe with the required input and output types (usually input: Movement and output: Movement). In the list of Apps to choose from only those are listed that comply with the required input and output types for the specific position in your Workflow. In the list of available Apps, you can see the descriptions of each App and can read additional information by clicking on “Details”. On the top right-hand corner, the list can be filtered by keywords.

![](../files/Workflow_addApp.png)

## Run the workflow
The completed Workflow can be initiated by clicking `Start Workflow`. The Apps are then executed one after the other. This process is illustrated by a change in colour of the action point in each App container (bottom right). The Workflow continues running even if the site moveapps.org is left and results can be looked up and downloaded later. With `Rerun` or `Stop workflow` the run of the Workflow can be restarted or stopped prematurely. Each Workflow that contains R Apps only can be scheduled to run (once or regularly) in an automatic mode at a fixed date and time. This option (`Schedule Instance`) can be selected in the menu next to `Start Workflow`. From there, you can also export or select to [publish your Workflow](publish_workflow).


![](../files/Workflow_menu.png)

## Menus, Settings and Error logs
In each App-container of a Workflow there is a menu next to the App name. The R Apps show the following menu points:

	- Settings:  The parameters of the App can be reselected and changed
	- Show Downloads: The available data for download (Output, Artefacts, Meta data, Data overview) are listed.
	- Pin to this App: The output of the App is fixed in the Workflow so that when rerunning the Workflow only the Apps further behind are reexecuted. The App you pinned and all preceding Apps are underlaid in grey. The `Pin` can be removed any time by clicking on `unpin` below in the greyed out area.
	- Show Logs: The data protocols can be examined. This is especially useful for troubleshooting unexpected results or error messages.
	- Delete: Removes the App from your Workflow.

![](../files/App_menu_R.png)
![](../files/Download_List.png)
![](../files/App_Pin.png)

## Data overview of App output
Each App that returns data creates a short summary of the output data, which can be accessed via the green button that appears at the right side of the App container. Here, the bounding box and time range of the positions are given, as well as the number of different animals, the total number of positions (events) and the number of positions for each individual animal. Finally, the names of all available data variables are listed. This summary can also be downloaded as a file.

![](../files/CargoAgent_Overview.png)

## Shiny R and User Interfaces
For R-Shiny Apps that return User Interfaces (UI), the UI can be accessed after the run of the Workflow via `Open Results` or via `Shiny UI` in the App menu. There, settings can directly be adapted and data can be examined, depending on the options that the App developer has programmed. There are also R-Shiny Apps that have output data (Movement) and the UI is used e.g. to filter the data. For such Apps, the UI can only be accessed via `Shiny UI` in the App menu.

![](../files/App_menu_shiny.png)

## Workflow Instances
Each workflow can be run and saved in several Instances (i.e. the same Apps are combined in the same order, but their settings differ). It is important to note that changes in the selection and order of components (Apps) in one Workflow Instance affect the other existing Instances, namely the Workflow structure (not the settings) is synchronised.

Every additional Workflow Instance must be initialised in the Workflow overview (via the main menu) of the respective Workflow by clicking `Start new Instance`. In the menu of each Instance you can adapt the description of the Workflow (`Edit Workflow Instance Details`) and the Instance can be deleted. Additionally, with this menu the description of the Workflow can be changed or Workflows can be deleted.

![](../files/Workflow_start.png)


