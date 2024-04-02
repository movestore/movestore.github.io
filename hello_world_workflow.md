# Hello world! - A Workflow example

Please follow the instructions below and create your first running Workflow on MoveApps. Once you have [registered](https://www.moveapps.org/register) in MoveApps, log in and you can start.
In the instructions below, buttons on the website are shown in `orange`.

## Download your data from Movebank
From the main menu in your `Dashboard`, select `Workflows` and then `Create New Workflow`. After providing a name for the Workflow, you will be asked to `Select A Data Source`. Choose `Movebank Location` and provide your [Movebank](https://www.movebank.org) login details.

![](files/HelloWorld_selectDataSource_reduced_withLine2.png ':size=60%')

In a succession of settings windows you can select a study from which you have access to download data, individual animals, and an option to set a time window of required data.
For this example let us select the public study `Migration timing in white-fronted geese (data from Kölzsch et al. 2016)`, note that you can search for studies. 

![](files/HelloWorld_selectStudy.png ':size=60%')

For shorter run times in this example let us select data of only two animals, say 700 and 712. As the data sets are not very dense, for now a time range selection is not necessary. Select `Finish` in the final Overview window. Your first Workflow, made up of one App, is now available for running.

If you like, go ahead and click on `Start Workflow` on the top right and, after the run is finished, explore the downloaded data (Output Details) in the `Cargo Agent`, which can be accessed via the small green circle appearing on the right side of the App Container (red arrow) once the run is finished. Explore the coloured dots (by hovering over them) that indicate the status of each App's performance (blue arrow). On the right side of the Workflow name there is also a action point which will indicate if the workflow instance is "running" or "stopped" (yellow arrow). Note that if the workflow contains a Shiny App its status will always be "running", also after finishing, in order to allow the interaction with the App UI.

![](files/HelloWorld_MoveApps_CargoAgent.png ':size=80%')

## Plot your positions in a Shiny User Interface
Now you add an App to visualise the downloaded data. Let us stay simple and use the visualisation App `Static Map`. From the main menu in your `Dashboard`, select `App Browser` and search for the App. This App requires the input data type `moveStack`. 

![](files/HelloWorld_AppBrowser.png ':size=80%')

Now go back to the Workflow and click on the `+` next to the first App Container to select an App that would analyse or visualise the downloaded data. The `Movebank Location` App (our first App) has the output data type `move2_loc`, meaning that a `Translator` App is required. `Install` the App move2_loc to moveStack.

![](files/HelloWorld_TranslatorApp.png ':size=80%')

Now click on the `+` next to the Translator App Container and `Install` the App Static Map. Now you can `Start Workflow` and `Open App UI` once everything has finished. To reduce run time you can use `Pin to this App` in the Movebank Location App or in the Translator App, which will block it from running again, in case you have let it run before.

![](files/HelloWorld_OpenAppUI.png ':size=60%')

`Open App UI` opens a Shiny User Interface that provides you with a visualisation of the downloaded locations, different colours per ID and coastlines around for orientation. This is a very simple, but quick way of having a look at your data.

![](files/HelloWorld_SimpleMap.png ':size=80%')

Congratulations, this is your first Workflow. Hello World! Go ahead and also explore what you can download and access from the App Container Menu or the Workflow Menu (just next to the `Output` button). See the [How to create a Workflow](create_workflow.md) for more details.
