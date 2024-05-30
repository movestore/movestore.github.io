# Coding best practices for MoveApps

For the concatenation of Apps in a Workflow to run smoothly, we provide some guidelines to raise awareness on several topics.

### Hard coding
Where possible avoid hard coding. [Here](programing_move2.md) you can find help for coding in R Apps with `move2` objects. And [here](movingPandas_colnames.md) you can find help for coding Python Apps with `MovingPandas Trajectory Collection` objects.

Independently of the I/O type, the column names of the columns referring to timestamps and track IDs will never be constant, but are kept variable on purpose. Further, you can assume that the columns containing the coordinates will not have a fixed name. See in the links above, how to generally address those essential properties of the data.

### Projections
Currently, all data that is uploaded from Movebank into MoveApps will be in `EPSG:4326`. However, different Apps allow to reproject the data, or custom input files can be uploaded by a user. Therefore, when creating an App, it is important to ensure that the App can deal with incoming data in any kind of projection.

If your App only works with data in `EPSG:4326` or if they must be projected, you can always reproject the data for the purposes of your App, and than either pass on the data with the changed or original projection. If the projection of the input and output data will be different we recommend to inform about this in the documentation and also with a message in the logs using e.g. the `logger.info()` function.

In the templates we provide test data (`data/raw/`) in `EPSG:4326` and also projected data to ease testing the Apps. 

### Time zones
All data that is uploaded from Movebank into MoveApps will have timestamps in `UTC`. Sometimes for local studies it makes sense to transform the timestamps into the local timezone to better interpret the results. Feel free to do that for your App if needed. *Please do not pass on data as an output with timestamps in a different timezone than UTC, but reproject it*. Lots of tracking data span across different timezones, which makes "local timezone" non-existent.

### Acknowledgements and references
If your App is based mainly on a single library (that you did not author), we advise to give credit to the authors of this library. The best way to acknowledge them is in the `appspecs.json` file in the [reference](appspec/current/references_appspec.md) section, and in the documentation of the App. 
