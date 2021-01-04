# README template for App Documentation

-------------------

# Name of App

MoveApps

Github repository: *github.com/movestore/Name-of-App*

## Description
Enter here the short description of the App that was also filled in when first submitting to MoveApps. This text is directly presented to Users that look through the list of Apps when compiling Workflows.

## Documentation
Enter here a detailed description of your App. What is it intended to be used for. Which steps of analyses are performed and how. Please be explicit about any detail that is important for use and understanding of the App and its outcomes.

### Input data
Which type of input data does the App require? Example: moveStack in Movebank format

### Output data
Which type of output data does the App give to a possible follow up App? Example: moveStack in Movebank format

### Artefacts
If the App creates artefacts, please list them here and describe each.
Example: `rest_overview.csv`: csv-file with Table of all rest site properites

### Parameters 
Please list and define all parameters that the App requires to be set, if necessary including their unit. 
Example: `radius`: Defined radius the animal has to stay in for a given duration of time for it to be considered resting site. Unit: `metres`.

### Null or error handling:
Please indicate for each parameter as well as the input data which behaviour the App is supposed to show in case of errors or NULL values/input. Please also add notes of possible errors that can happen if parameters are improperly set and any other important information that you find the user should be aware of.
Example: **Parameter `radius`:** If no radius AND no duration are given, the input data set is returned with a warning. If no radius is given (NULL), but a duration is defined then a default radius of 1000m = 1km is set. 
