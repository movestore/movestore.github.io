# How to create a Workflow

![](../files/Workflow_example.png)

Within MoveApps, existing Apps can be combined into a Workflow, allowing you to define an ordered set of steps to access, process and analyse data. These Workflows can then be saved, edited and used for specific use cases. 

Every Workflow starts with an App that loads data into the system (e.g. from [Movebank](www.movebank.org) or Dropbox/Google Drive). The data are then passed on to the next App (in the appropriate format) and analysed by it accordingly. Every App requires a defined input type data (mostly R move:moveStack, but others are available) and can pass on output of a defined type. Some Apps provide an interactive User Interface (R-Shiny). 

Some Apps produce output products, which can be downloaded as files, in formats such as .pdf or .csv. App output data can also be downloaded as a object of the defined App output type in R format `.rds` or Python format `pickle`.

## Create a new Workflow
From the main menu, select `Workflows` and then `Create New Workflow`. After providing a name for the Workflow, you will be asked to select a Data Source. Now choose to retrieve data from either Movebank, the Movebank Repository or your personal cloud storage on Google Drive or Dropbox. For the latter option the data have to be provided as a R object of class 'move::MoveStacks' saved as in a `.rds` format or as `.csv` in Movebank format ([see Details](https://github.com/movestore/cloud-provider-download/blob/master/README.md). Both Data Sources require that you specify parameters and settings. After providing these, the Workflow area with the initial App appears (see Figure below). Note that additional Data Sources can be downloaded by adding e.g. another instance of the Movebank download App (see below). All data sets will be combined, thus allowing the joined analysis of data from e.g. different Movebank studies.

![](../files/Workflow_movebank.png)

## Add Apps to a Workflow
By clicking on the “+” to the right of an App, you can browse, search and select the next App to add to your Workflow for filtering, analysis or visualisation of the downloaded data. You can also insert Apps within the Workflow if they are compatible with the required input and output (IO) types. The list of Apps to choose from will only include those that comply with the required IO types for the specific position in your Workflow. In the list of available Apps, you can see the descriptions of each App, its IO type and can read additional information by clicking on `Details`. In the top right-hand corner, the list can be filtered by keywords. Find out more about how to use the wide spectrum of available Apps by using [Translator Apps](translator.md).

![](../files/Workflow_addApp.png)

## Run the workflow
Select `Start Workflow` to begin running the Apps within a Workflow in the order that you have arranged them. You can follow the progress of the Workflow by the change in colour of the action point in the bottom right of each App container. On the right side of the Workflow name there is also an action point which will indicate if the workflow instance is `running` or `stopped`. Note that if the workflow contains a Shiny App its status will always be `running`, also after finishing, in order to allow the interaction with the App User Interface.

The Workflow continues running even if you leave the site moveapps.org, and results can be looked up and downloaded later. Select `Rerun` or `Stop workflow` to interrupt the run of the Workflow. Each Workflow can also be [scheduled to run](scheduled_runs.md) regularly in an automatic mode at a fixed date and time. This option (`Schedule Instance`) can be selected in the menu next to `Output`.


![](../files/Workflow_menu.png)

## Menus, Settings and Error logs
There is a menu on the right of each App container in a Workflow. The R- and Python-Apps include the below options. R-Shiny-Apps do not provide Settings in this  menu, but directly in the User Interface. Those settings can be save within the UI.

- Settings: View or change App parameters.
- App Details: View all information and details about the App
- Pin to this App: By pinning the Workflow to an App, you will retain the results of this App and all Apps preceding it in the Workflow, so that only subsequent Apps are re-executed when you re-run the Workflow. The App you pinned and all preceding Apps are underlaid in grey. Note that Shiny-Apps close the running UI if pinned, but retain the output data. The `Pin` can be removed any time by clicking on `unpin` below in the greyed out area.
- Update App: If a new version of the App is available it can be updated here.
- Show Logs: View the data protocols, which can contain important information if you receive errors or unexpected results.
- Delete: Remove the App from your Workflow.

![](../files/App_menu_R.png)
![](../files/App_Pin.png)

!\> Note that there is a small book icon in the left corner of each App, leading directly to the Github App documentation, where the App developer has provided helpful information that describes when and how the App can be used and how common errors can be solved.

## Output download menu
In addition to the direct click-download of files that appear in the App containers after the workflow has run, the `Output` button gives you access to all output files that the Workflow is generating. The .rds data output files of each App can be downloaded separately as well as all the created products by the Apps. In case of one or more .pdf products, it is also possible to download a bundled pdf, unsecured or as encrypted file for sensitive tracking data (see buttons on top right).

Note that it is possible to select products from Apps for inclusion in E-mail attachments (see [scheduling](scheduled_runs.md)). At the top of the page, you can access our [API service](scheduled_runs.md#Access) that allows to create a stable http link to any of the products created by the workflow.

![](../files/output_button.png)
![](../files/output_save_view.png)

## Data overview of App output
Each App that returns data creates a summary of the output data (`cargo agent`), which can be accessed via the green info button that appears on the right side of the App container. This summary includes the bounding box, projection, sensors and time range of the data as well as the total number positions (events). There is one section about the animal details including the animal names and the available attributes associated to the individuals, and another section about the track details including the locations per track and available attributes associated to each location of the tracks. Depending on the output type of an App the summary details can differ. Note the section "Unexpected Results?" at the bottom that provides helpful comments if errors occur.

![](../files/CargoAgent_Overview.png)

## Shiny R and User Interfaces
For R-Shiny Apps that return User Interfaces (UI), the UI can be accessed after the run of the Workflow via `Open App UI`. There, you can examine results and edit settings, depending on the options that the App developer has programmed. On the bottom left corner of each Shiny App the button `Store settings` will store the current settings of the app for future workflow runs. When apps are deleted or added to the workflow, all subsequent apps will reset to the default values. Apps for which settings have been stored will contain in the "App outputs" an item called "Stored Settings".

![](../files/App_storesettings_shiny.png)

## Workflow Instances
Each Workflow can be run and saved in several Instances, allowing you to combine the same Apps in the same order, but with different settings. It is important to note that changes in the selection and order of Apps (not their settings) in one Workflow Instance will be applied to all other Instances of the Workflow.

Every additional Workflow Instance must be initialised in the Workflow overview (via the main menu) of the respective Workflow by clicking `Start new Instance`. In the menu of each Instance you can adapt the description of the Workflow (`Edit Instance`) and the Instance can be deleted. 

Once a Instance of a Workflow is opened, one can switch between all instances of the workflow through the menu on the top left side. To select another Workflow, use the button `Workflows`.

![](../files/Workflow_Instance.png)

## Organizing Workflows
Workflows can be grouped by assigning them a category name. If no category is assigned, they will appear under "Uncategorized". At any time categories, workflows and instances can be edited, and workflows can be shared or published via the Workflow overview page.


![](../files/Workflow_start.png)

