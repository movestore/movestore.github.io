# Starting Apps Update

![DataSource_Screenshot](data_source_move2_cut.jpg)

  
**Note** Updates of the Translator Apps moveStack to MovingPandas have been finalised.

Related to the deprecation of `rgdal`, `rgeos` and `maptools` within R, we are updating R Apps to work with the quicker and more flexible package `move2`. Many Apps will receive more functionality and become more stable in the course of this update. However, it may take some time until all necessary Apps are updated.

We have finished updates and extensions of the [Data Source Apps](https://docs.moveapps.org/#/create_workflow?id=create-a-new-workflow), with which workflows can be started. Note that it is now possible to upload data from Movebank, Cloud storage, your local system and other MoveApps workflows. All those Apps create move2 output, that cannot yet be received by all other Apps. Therefore, until all Apps are updated, the use of [Translator Apps](https://docs.moveapps.org/#/translator?id=connecting-apps-of-different-types) will be necessary for being able to harvest the full functionality of MoveApps. 

For a full list of all available Apps please see the [App Browser](https://www.moveapps.org/apps/browser). There, it is indicated which input and output types each App has and how they can be linked with each other. Please use Translator Apps where necessary, but beware that their use can lead to unexpected behaviour in some cases. Contact [us](mailto:support@moveapps.org), if you need help.
