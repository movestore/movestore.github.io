# How to compile a Workflow

![](../files/Workflow_example.png)

Within MoveApps, existing Apps can be combined into a Workflow, allowing you to define an ordered set of steps to access, process and analyse data. These Workflows can then be saved, edited and used for specific use cases. 

Every Workflow starts with an App that loads data into the system (e.g. from [Movebank](www.movebank.org) or Dropbox). The data are then passed on to the next App in the appropriate format and analysed by it accordingly. Every App requires a defined input type (presently only Movement data: positions with date-timestamps and animal ID) and can pass on output of a defined type (presently Movement) or ends in an interactive UI (R-Shiny). 

Some Apps produce output artefacts, which can be downloaded as files, in formats such as .pdf or .csv. Movement output data can also be downloaded (in R format .rds).

## Create a new Workflow
From the main menu, select `Workflows` and then `Create New Workflow`. After providing a name for the Workflow, you will be asked to select a Data Source. Now choose to retreive data from either Movebank or your personal cloud storage on Google Drive or Dropbox. For the latter option the data have to be provided as MoveStacks in `.rds` format for R. Both Data Sources require that you specify parameters and settings. After providing these, the Workflow area with the initial App appears (see Figure below). Note that additional Data Sources can be downloaded by adding e.g. another instance of the Movebank download App (see below). All data sets will be combined, thus allowing the joined analysis of data from e.g. different Movebank studies.

![](../files/Workflow_movebank.png)

## Combine Apps to a Workflow
By clicking on the “+” to the rigth of an App, you can browse and select the next App to add to your Workflow for filtering, analysis or visualisation of the downloaded data. You can also insert Apps within the Workflow if they are compatibe with the required input and output types (usually input: Movement and output: Movement). The list of Apps to choose from will only include those that comply with the required input and output types for the specific position in your Workflow. In the list of available Apps, you can see the descriptions of each App and can read additional information by clicking on “Details”. On the top right-hand corner, the list can be filtered by keywords.

![](../files/Workflow_addApp.png)

## Run the workflow
Select `Start Workflow` to begin running the Apps wihtin a Workflow in the order that you have arranged them. You can follow the progress of the Workflow by the change in colour of the action point in the bottom right of each App container.

The Workflow continues running even if you leave the site moveapps.org, and results can be looked up and downloaded later. Select `Rerun` or `Stop workflow` to interrupt the run of the Workflow. Each Workflow can also be scheduled to run (once or regularly) in an automatic mode at a fixed date and time. This option (`Schedule Instance`) can be selected in the menu next to `Start Workflow`. From there, you can also export or select to [publish your Workflow](publish_workflow).


![](../files/Workflow_menu.png)

## Menus, Settings and Error logs
There is a menu on the right of each App container in a Workflow. The R-Apps include the following options:

	- Settings:  View or change App parameters.
	- Show Downloads: View and download available outputs from teh App (Movement Output, Artefacts, Meta data, Data overview).
	- Pin to this App: By pinning the Workflow to an App, you will retain the results of thie App and all Apps preceding it in the Workflow, so that only subsequent Apps are re-executed when you re-run the Workflow. The App you pinned and all preceding Apps are underlaid in grey. The `Pin` can be removed any time by clicking on `unpin` below in the greyed out area.
	- Show Logs: View the data protocols, which can contain important information if you receive errors or unexpected results.
	- Delete: Remove the App from your Workflow.

![](../files/App_menu_R.png)
![](../files/Download_List.png)
![](../files/App_Pin.png)

## Data overview of App output
Each App that returns data creates a short summary of the output data, which can be accessed via the green info button that appears on the right side of the App container. This summary includes the bounding box and time range of the positions as well as the number of animals, the total number of positions (events) and the number of positions for each individual animal. Finally, the names of all available data variables are listed. This summary can also be downloaded as a file.

![](../files/CargoAgent_Overview.png)

## Shiny R and User Interfaces
For R-Shiny Apps that return User Interfaces (UI), the UI can be accessed after the run of the Workflow via `Open Results` or via `Shiny UI` in the App menu. There, you can examine results and edit settings, depending on the options that the App developer has programmed. There are also R-Shiny Apps that have output data (Movement) and the UI is used e.g. to filter the data. For such Apps, the UI can only be accessed via `Shiny UI` in the App menu.

![](../files/App_menu_shiny.png)

## Workflow Instances
Each Workflow can be run and saved in several Instances, allowing you to combine the same Apps in the same order, but with different settings. It is important to note that changes in the selection and order of Apps (not their settings) in one Workflow Instance will be applied to all other Instances of the Workflow.

Every additional Workflow Instance must be initialised in the Workflow overview (via the main menu) of the respective Workflow by clicking `Start new Instance`. In the menu of each Instance you can adapt the description of the Workflow (`Edit Workflow Instance Details`) and the Instance can be deleted. Additionally, with this menu the description of the Workflow can be changed or Workflows can be deleted.

![](../files/Workflow_start.png)


