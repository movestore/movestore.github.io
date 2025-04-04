# How to create a Workflow

Within MoveApps, existing Apps can be combined into a Workflow, allowing you to define an ordered set of steps to access, process and analyse data. These Workflows can then be saved, edited and used for specific use cases. Before starting, we recommend to check out our **[video tutorials](video_tutorials.md)** and to follow along with the example Workflow [Hello world!](hello_world_workflow.md).

Every Workflow starts with an App that loads data into the system (e.g. from [Movebank](https://www.movebank.org), the user's local system, Dropbox/Google Drive or an output from another MoveApps workflow). The data are then passed on to the next App and analysed by it accordingly. Every App requires data of a defined input type (mostly `move2::move2_loc`, but others are available and the numbers are growing) and can pass on output of a defined type. See [Translator Apps](translator.md) for instructions on how to connect Apps with different output and input types.

Some Apps provide an interactive User Interface (R-Shiny). Many Apps produce output products or artifacts, which can be downloaded as files, in formats such as .pdf, .csv, .png, .html among others. App output data can also be downloaded as an object of the defined App output type in R format `app-output.rds` or Python format `app-output.pickle`. Any App artifacts or outputs are also available via our [API](API.md).

<kbd>![](files/WF_example_MigMapper_2023.png ':size=1200x')</kbd>

## Create a new Workflow

From the main menu, select `Workflows` and then `Create New Workflow`. After providing a name for the Workflow (also consider adding a Workflow Category), you will be asked to `Select A Data Source`. Now choose to retrieve location or non-location data from Movebank or another MoveApps workflow (`Workflow Product Retriever`), or location data (!) from your local system or your personal cloud storage on Google Drive or Dropbox. For the latter option the data have to be provided as an R object of class 'move2::move2' saved in `.rds` format or as `.csv` containing information about timestamp, x, y coordinates and track ID, preferably in a Movebank format ([see Details](https://github.com/movestore/Upload-File-from-Local/blob/master/README.md)). All Data Sources require that you specify parameters and settings. After providing these, the Workflow area with the initial App appears . Note that additional Data Sources can be downloaded by adding e.g. another Movebank Location App (see below for instructions on adding Apps). All data sets will be combined, thus allowing the joined analysis of data from e.g. different Movebank studies.

<kbd>![](files/DataSource_view_Mar2024.png ':size=700x')</kbd>

<kbd>![](files/Workflow_movebankLoc.png ':size=400x')</kbd>

#### Non-location Apps

Note that recently, we have added the option to download non-location data from Movebank. These are e.g. accelerometer, accessory measurement, heart rate or geolocation raw data. In the Movebank Non-Location App, beware of the option to select only studies that contain non-location data. Furthermore, it is only allowed to download one type of non-location data at a time. Look out for Apps that work with those data types in the App Browser; they should have the Input/Output type "move2::move2_nonloc".

<kbd>![](files/NonLoc_App_view.png ':size=600x')</kbd>

<kbd>![](files/NonLoc_Download_selectStudy.png ':size=900x')</kbd>

<kbd>![](files/NonLoc_Download_selectSensor.png ':size=900x')</kbd>

## Add Apps to a Workflow

By clicking on the `+` to the right of an App container, you can browse, search and select the next App to add to your Workflow for filtering, analysis or visualisation of the downloaded data. You can only insert Apps within the Workflow if they are compatible with the required input and output (IO) types. The list of Apps to choose from will only include those that comply with the required IO types for the specific position in your Workflow. To see also incompatible Apps activate the `Include incompatible Apps` switch. Use the [Translator Apps](translator.md) to transform IO types enabling to connect Apps with different IO types.
By clicking on the App name you are directed to the App Details that also contain links to the documentation, code and issues.

<kbd>![](files/Workflow_addApp_Apr25.png ':size=900x')</kbd>

!\> Note that [depredated Apps](app_deprecation.md) do not appear in this list by default. Deprecated Apps cannot be added to new Workflows any more, because the App developer has stopped maintenance.

## Run the Workflow

Select `Start Workflow` to begin running the Apps within a Workflow in the order that you have arranged them. You can follow the progress of the Workflow by the change in colour of the action point in the top right of each App container. On the right side of the Workflow name there is also an action point which will indicate if the Workflow Instance is "running" or "stopped". Note that if the Workflow contains a Shiny App its status will be "running" for a few hours, also after finishing, in order to allow the interaction with the App User Interface.

The Workflow continues running and results are stored even if you leave the site moveapps.org. Any results or artefacts/products files can be looked up and downloaded later. Select `Rerun` or `Stop Workflow` to interrupt the run of the Workflow. Each Workflow can also be [scheduled to run](scheduled_runs.md) regularly in an automatic mode at a fixed date and time. This option (`Schedule Instance`) can be selected in the menu next to `Output`.

<kbd>![](files/Workflow_menu_2023.png ':size=400x')</kbd>

## Solving potential errors

When running a Workflow, Apps may give an error and subsequent Apps will not run.

<kbd>![](files/error0.png ':size=400x')</kbd>

We recommend trying out the following actions to try to solve the error.

#### Consult error details and App logs
Take a look at the error message by clicking on `Error details`. The error message may already indicate the problem. 

<kbd>![](files/error2.png ':size=600x')</kbd>

In some cases, the `Error details` do not provide helpful information. In these cases, the `app logs` may contain more information about the error. The App Logs can be accessed by clicking on `app logs` in the window with error details, or through the App Menu (see [Menu, Settings and Logs](#menu--settings-and-logs)).

<kbd>![](files/error1.png ':size=700x')</kbd>

In the App documentation (App Menu (see [Menu, Settings and Logs](#menu--settings-and-logs) > `App Details > Documentation`, or click on the book icon in the App container), there is a section covering the most common errors. Your error may be covered here together with a potential solution.

#### Revise App settings

In some cases, the error details or App logs indicate a problem with the App settings. In these cases, and also generally when encountering an error, we recommend to revise the App settings. App settings can be accessed through the App Menu (see [Menu, Settings and Logs](#menu--settings-and-logs)), or for Shiny Apps throught the User Interface.

#### Check out issues in the App repository

Lastly, App users can create an "issue" in the App's GitHub repository to notify the App developer about problems with their App. You can access the issue site by clicking on `issue at the App repository` in the window with error details.

<kbd>![](files/error1.png ':size=700x')</kbd>

Alternatively, you can reach the issue site through the App documentation in the App's GitHub repository. Click on the book icon in the App container and then in the GitHub repository on `Issues`, or on `App Details > Issues` in the App Menu (see [Menu, Settings and Logs](#menu--settings-and-logs)).

On the issue site, you can check whether others have had the same problem. If you cannot understand and/or solve the errors, and there are no exisiting issues indicating the same problem, please create a `New issue` in GitHub in the App repositoriy (you need a [GitHub](https://github.com/) account for this). 

<kbd>![](files/GitHubIssue.png ':size=700x')</kbd>


## Menus, Settings and Logs

There is a menu on the right of each App container in a Workflow. The R and Python apps include the below options. R-Shiny-Apps do not provide Settings in this menu, but directly in the User Interface (UI). Those settings can be stored on MoveApps from within the UI (bookmark feature).

- `Settings`: View or change App parameters.
- `App Details`: View all information and details about the App.
- `Pin to this app`: By pinning the Workflow to an App, you will retain the results of this App and all Apps preceding it in the Workflow, so that only subsequent Apps are re-executed when you re-run the Workflow. The App you pinned and all preceding Apps are underlaid in grey. Note that Shiny-Apps close the running UI if pinned, but retain the output data. The `Pin` can be removed any time by clicking on `Remove pin` below in the greyed out area.
- `Show Logs`: View the data protocols, which can contain important information if you receive errors or unexpected results.
- `Update App`: If a new version of the App is available it can be updated here. A warning icon in the App container will notify of available App updates.
- `Delete`: Remove the App from your Workflow.

<kbd>![](files/App_menu_Pin_R.png ':size=700x')</kbd>

!\> Note that there is a small book icon in the top left corner of each App container, leading directly to the Github App documentation, where the App developer has provided helpful information that describes when and how the App can be used and how common errors can be solved.

## Data overview of App output

Each App that returns data creates a summary of the output data (`Cargo Agent`), which can be accessed via the green info button that appears on the right side of the App container. This summary depends on the output type of the App. For example, for `move2::move2_loc` it includes, among others, animal attributes (see [Movebank](https://www.movebank.org/cms/movebank-content/movebank-attribute-dictionary) for definitions) the bounding box, projection, sensor types and time range of the data, as well as the total number positions (positions_total_number). Depending on the output type of an App the summary details can differ. Note the section "Unexpected Results?" at the bottom that provides helpful comments if errors occur.

<kbd>![](files/CargoAgent_Overview.png ':size=700x')</kbd>

## Shiny R and User Interfaces

For R-Shiny Apps that return User Interfaces (UI), the UI can be accessed after the run of the Workflow via `Open App UI`. There, you can examine results and edit settings, depending on the options that the App developer has programmed. On the bottom left corner of each Shiny App the button `Store settings` will store the current settings of the App for future workflow runs. When Apps are deleted or added to the workflow, all subsequent Apps will reset to the default values. Apps for which settings have been stored will contain an item called `Stored Settings` in the App Outputs.

<kbd>![](files/App_storesettings_shiny.png ':size=500x')</kbd>

## Download Workflow output

In addition to the direct click-download of files that appear in the App containers after the workflow has run, the `Output` button gives you access to all output files that the Workflow is generating. Each output file of the Apps can be downloaded locally or uploaded to a cloud storage provider. A selection of files can be bundled and downloaded as a zip file. In case of one or more .pdf products, it is also possible to download a bundled pdf, unsecured or as encrypted file for sensitive tracking data (see buttons on top right).

At the top of the page, you can access our [API service](scheduled_runs.md) that allows to create a stable http link to any of the products created by the workflow.

<kbd>![](files/output_button2.png ':size=300x')</kbd>

<kbd>![](files/output_save_view2.png ':size=600x')</kbd>

## Workflow Instances

Each Workflow can be run and saved in several Instances, allowing you to combine the same Apps in the same order, but with different settings. It is important to note that changes in the selection and order of Apps (not their settings) in one Workflow Instance will be applied to all other Instances of the Workflow.

Every additional Workflow Instance must be initialised in the `Workflows` overview (via the main menu in your `Dashboard`). Navigate to the respective Workflow and click on `Start new instance`. 

<kbd>![](files/Add_WorkflowInstance.png ':size=600x')</kbd>

In the menu of each Instance (three dots next to the `Output` button), it is possible to `Edit Instance Details`, `Edit Workflow Details` and `Schedule Instance` (see [scheduling](scheduled_runs.md)) or to `Delete Workflow Instance`. If not empty, the description/details of the Workflow and/or Workflow Instance will be shown on the top of the page.

Once an Instance of a Workflow is opened, you can switch between all Instances of the Workflow through the main menu on the top left side. To select another Workflow, use the button `Workflows`.

<kbd>![](files/Workflow_Instance.png ':size=600x')</kbd>

## Organizing Workflows

Workflows can be grouped by assigning them a Workflow Category name. If no Category is assigned, they will appear under "Uncategorized". At any time Categories, Workflows and Instances can be edited, and workflows can be shared or published via the `Workflows` overview page. When adding Workflows that have been privately shared with you, they appear in the Category "Imported Privately Shared Workflows". Added public Workflows are initially stored in the Category "Imported Public Shared Workflows". Any added Workflows are only copies, they can be changed and reworked in any way and the Workflow Category adapted.

<kbd>![](files/Workflow_start.png ':size=800x')</kbd>
