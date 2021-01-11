# Hello World! Create your first Workflow

Please follow the instructions below and create your first running Workflow on MoveApps. Once you have registered in MoveApps, you can start.

## Download your data from Movebank
From the main menu, select `Workflows` and then `Create New Workflow`. After providing a name for the Workflow, you will be asked to select a Data Source. Choose Movebank and provide your Movebank login details. In a succession of settings windows you can select a study from which you have access to download data, select individual animals, a time window of required data and an option how to deal with duplicate loations. 

![](../files/HelloWorld_selectDataSource.png)

For this example let us select the public study `Migration timing in white-fronted geese (data from Kölzsch et al. 2016)`, note that you can search for studies. For shorter run times in this example let us select data of only two animals, say 700 and 712. As the data sets are not very dense, for now a time window selection is not necessary. Select `Finish` in the final `Overview` window. Your first Workflow made up of one App is available for running.

![](../files/HelloWorld_selectStudy.png)

If you like, go ahead and click on `Start Workflow` on the top right and, after the run is finished, explore the downloaded data in the `Cargo Agent`, which can be accessed via the small green circle appearing on the right side of the App Container once the run is finished. Explore the coloured dots (by hovering over them) that indicate the status of each App's performance.

![](../files/HelloWorld_MoveApps_CargoAgent.png)

## Plot your positions in a Shiny User Interface
Now click on the `+` next to the first App Container to select an App that would analyse or visualise the downloaded data. Let us stay simple and select the visualisaiton App `Simple Map`. There is a single variable that has to be configured, namely the edge size of area surrounding the locations on the map. Select `1` for now, this parameter can also be adapted in the UI directly. Now you can `Start Workflow` and `Open Results` once everything has finished. To reduce run time you can `Pin to this App` in the Movebank App, which will block it from running again, in case you have let it run before.

![](../files/HelloWorld_addMap.png)
![](../files/HelloWorld_OpenResults.png)

`Open Results` opens a Shiny User Interface that provides you with a visulisation of the downloaded locations, different colours per ID and coastlines around for orientation. This is a very simple, but quick way if having a look at your data. Congratulations, this is your first Workflow. Hello World!

![](../files/HelloWorld_SimpleMap.png)

Go ahead and also explore what you can download and access from the App Container Menu or the Workflow Menu (just next to the `Run Workflow` button). See the [Create a Workflow tutorial](create_workflow.md) for more details.
