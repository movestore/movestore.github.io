# Data in MoveApps

In MoveApps, every [Workflow starts](create_workflow.md) with an App that loads data into the system. Data from different sources can be used, e.g. from Movebank or the user's local system.

## Data from Movebank

[Movebank](https://www.movebank.org) is a free, online database of animal tracking data and other data collected by sensors on animals. Even if you don't have own tracking data, you can use Movebank to view tracks and download public data. To be able to use data from Movebank in MoveApps, you need to [create a free account in Movebank](https://www.movebank.org/cms/movebank-registration). After connecting your Movebank account to MoveApps (see the [documentation of the Movebank Location App](https://github.com/movestore/Movebank-Loc-move2)) you can access your own Movebank data, and any other public data sets.

We have compiled a [list of example data sets](https://github.com/movestore/Movebank_Example_Datasets) that can be used for more intensive testing and development of Apps. These data sets are publicly available and can therefore also be used to build and run Workflows.

Make sure that you comply with the license terms under which the data are made publicly available in case you what to use the data for a scientific publication or any other type publication of the results. The first time you download a study, if they have license terms these will be prompted and you will have to accept them to proceed. But they can be checked any time on the overview page of the study on Movebank. Please check them before publishing any results or distributing the data.

## Data in csv or rds format

It is also possible to upload data sets in csv or rds format. In these cases, you will be asked to provide the column names that indicate, among others, timestamps and latitude and longitude.