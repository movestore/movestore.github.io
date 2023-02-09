# Tips and tricks for the `move::moveStack` object


## The `MoveStack`
In the R package `move` there are two object classes for tracking data, for single individuals class `Move` and for several individuals class `MoveStack`. The vignette of the `move` package can be found [here.](https://bartk.gitlab.io/move/articles/move.html)

Currently MoveApps only accepts input data (and produces output data) that are of class `MoveStack`. Therefore make sure that your code will always output a `MoveStack`, even when it only contains one individual (details below).


## Handeling of `MoveStack` for MoveApps
#### - Working on each individual separatly
Using the functions `move::split()` and `moveStack()`:

- `move::split(myMoveStackObject)`: this function creates a list of move objects upon which calculations per individuals can be done. More details [here.](https://bartk.gitlab.io/move/reference/split.html)

- `moveStack(X, forceTz="UTC")`: this function creates a `MoveStack`. "X" can be a list of `Move` objects, a list of `MoveStack` objects or a list of `Move` and `MoveStack` objects. Use the argument `forceTz` to ensure to maintain the time zone of the data, if this argument is left empty, the local time zone of the PC will be taken. More details [here.](https://bartk.gitlab.io/move/reference/moveStack.html)

#### - Ensuring that all `Move` objects contain data before creating the `MoveStack` 
Some calculations (e.g. filtering) can return 0 locations for an individual, the element of the list that contained this individual will be than `NA`, which currently cannot be handled by the `moveStack()` function. This can be accounted for like this:

```r
myMoveList <- myMoveList[unlist(lapply(myMoveList, is.na)==FALSE)] # take out NA animals
myMoveStack <- moveStack(myMoveList,forceTz="UTC") # create a moveStack
```

#### - Ensuring that the output of an App is always of class `MoveStack` 
If the app has output data that will be available for other apps, it has to be made sure that is output is always an object of class `MoveStack` even when containing only one individual. To ensure this, we recommend using the following line of code as a last step when creating output data that should be available for other Apps.

```r
moveStack(myOutput, forceTz="UTC")
```

`myOutput` can either be already a object of class `MoveStack`, in this case nothing will change, or it can be an object of class `Move`, in this case it will be transformed into a object of class `MoveStack`.


## Extracting information from a `MoveStack`
The move package contains some handy function to extract information form the `MoveStack` (more details [here](https://bartk.gitlab.io/move/articles/move.html#extracting-information-from-move-objects)):

- `coordinates()`: returns the coordinates from the track(s)
- `timestamps()`: returns the timestamps from the track(s)
- `idData()`: returns the table containing the information associated to the animals
- `trackId()`: returns a vector of the animal name associated to each location
- `namesIndiv()`: returns the names of the individuals
- `n.indiv()`: returns the number of the individuals
- `n.locs()`: returns the number of locations per individual
- `sensor()`: returns the sensor used to record the tracking data


## Transforming `Movestack` into other clases
The `MoveStack` can be easily transformed into other classes (more details [here](https://bartk.gitlab.io/move/articles/move.html#storing-loading-and-exporting-move-objects)):

- `as.data.frame()`: creates a `data.frame` including all information contained in the `MoveStack`. (See section *"Choosing the wrong columns!"* below)
- `as(myMoveStackObject,"SpatialPointsDataFrame")`: transforms the `MoveStack` to a `SpatialPointsDataFrame`
- `as(myMoveStackObject,"ltraj")`: transforms the `MoveStack` to a `ltraj` object from the R package `adehabitatLT`.


## Transforming other clases to a `MoveStack`
Other packages work with movement data in other classes. The following classes can be transformed using the `move()` function into a `Move/MoveStack` object (more details [here](https://bartk.gitlab.io/move/reference/move.html) and [here](https://bartk.gitlab.io/move/articles/move.html#import-movement-objects-of-other-packages)):

- `ltraj` from the library `adehabitatLT`
- `telemetry` or a list of telemetry objects from the library `ctmm`
- `track` from the library `bcpa`
- `track_xyt` from the library `amt`
- `binClstPath` or `binClstStck` from the library `EMbC`
- `data.frame` containing data downloaded from Movebank, i.e. with Movebank column names. The mandatory columns are: "timestamp", "location.long", "location.lat", "individual.local.identifier", "sensor.type" (column names can be either with "." or "_"). The assumptions is that the coordinates are in lat/long; timestamp format is \"%Y-%m-%d %H:%M:%S\"; timezone is UTC. 


## Handy functions
- `move::split()`: split `MoveStack` into a list of `Move` objects
- `projection()`,`crs()`: get the projection of the data
- `spTransform()`: to reproject the `MoveStack` into a different projection
- `equalProj()`: check if all `Move/MoveStack` objects have the same projection
- `plot()`,`points()`,`lines()`: for plotting the tracks
- example for plotting tracks with leaflet [here](https://bartk.gitlab.io/move/articles/leafletPlot.html)
- for plotting with `ggplot` transform the `MoveStack` into a `data.frame`, or create own data.frame by extracting the needed elements

All function of the move packages are described [here.](https://bartk.gitlab.io/move/reference/index.html)


## Structure of the `MoveStack`
To get an overview of all elements of a `MoveStack` use `str()`. The different slots can be accessed via `myMoveStackObject@SlotName`, e.g. `myMoveStackObject@bbox`

To access elements/columns within each slot use `myMoveStackObject@SlotName$columnName`, e.g. `myMoveStackObject@idData$tag.local.identifier`

The `@data` slot elements can be accessed directly via `myMoveStackObject$columnName`, e.g `myMoveStackObject$height.above.ellipsoid`

[Here](https://bartk.gitlab.io/move/reference/MoveStack-class.html) detailed explanations of each slot can be found.

## :warning: Choosing the wrong columns!
There are some misleading similarities among columns that can accidentally lead to choosing the wrong ones. Here the most common mistakes:

1. retrieving the **timestamps** from a `moveStack`:

- `myMoveStackObject$timestamp` mostly exists, but these timestamps are **not** the ones that are used by the `moveStack`, they may not be formatted as `POSIXct`, and/or be in another timezone.
- <u>always use</u> `timestamps(myMoveStackObject)` to access the timestamps
- when the `moveStack` is converted into a `data.frame`, the column corresponding to date and time is **`timestamps`**, and not *timestamp*

2. retrieving **coordinates** from a `moveStack`:

- `myMoveStackObject$location.long` & `myMoveStackObject$location.lat` mostly exist, but these coordinates are **not** the ones used by the `moveStack` and might be in another projection than 'projection(myMoveStackObject)' / 'crs(myMoveStackObject)'
- <u>always use</u> `coordinates(myMoveStackObject)` to access the coordinates
- when the `moveStack` is converted into a `data.frame`, the columns corresponding to the coordinates of the moveStack will mostly be `coords.x1`/`coords.x2`, but under circumstances they can also be `location.lat`/`location.long`. When both are present, always use `coords.x1/coords.x2`.

**NOTE**: these inconsistencies, and misleading similarities are being dealt with in the soon to come `move2` library  
