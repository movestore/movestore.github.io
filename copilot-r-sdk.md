# MoveApps R Function Overview
This document describes the basics to write your own R functions for the MoveApps

## How to write a R Function for MoveApps
You can use the SDK to write your own R functions for MoveApps. 
At first the r function must be named exactly with the name `rFunction`. 
```
rFunction = function() {}
```

### Input
#### Parameters from MoveApps
You can add parameters or settings to the function. These parameters are going to be set by the users configuration made within MoveApps.
```
# With parameters/settings from the Move Apps 
rFunction = function(username, password) {
   # Do something with the parameters
}
```

##### Limitations
- You can't use the name `data` as parameter. This name is reserved for the result from previous apps.

#### Input from other app
If you want to use the result from an previous app, the last parameter must be named `data`
```
# With input from other apps
rFunction = function(data) {
    # Do something with the data
}
```

### Combined parameters and result from previous apps
```
# With parameters and data from previous apps
rFunction = function(username, password, data) {
    # Do something
}
```

### Output
The result of the function must be returned at the end of the function. This data will be used as input for the next app
```
rFunction = function(username, password) {
    # Do something
    result
}
```