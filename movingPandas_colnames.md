## Notes on programming with the I/O type `MovingPandas.TrajectoryCollection`

Currently every Workflow has to start with an App the downloads or reads in data as a `move2::move2_loc` object in R. The Translator App [move2_loc to MovingPandas](https://www.moveapps.org/apps/browser/a81e3046-bc48-4fcb-8d28-4291000c77f9) converts the data into a Python [MovingPandas Trajectory Collection](https://movingpandas.readthedocs.io/en/main/trajectorycollection.html). The x- and y-coordinates are always stored in the column `geometry`, but the names of the columns containing the timestamps and track IDs may differ depending on the column names in the original data set. Therefore, the column names for these variables need to be fetched from the MovingPandas Trajectory Collection, see below for an example. 

!\> Note that timestamps are stored as the index 

#### Example
```
# Fetch the name of the column containing the timestamps
time_col_name = data.to_point_gdf().index.name

# Fetch the name of the column containing the track ID
track_id_col_name = data.get_traj_id_col()

# Select one track based on the track ID
data_filtered = data.filter(track_id_col_name, 'X000..deploy_id.01234567.')
data_traj = data_filtered.trajectories[0].copy()
```

When manipulating the data in the App, it is crucial to ensure that the data that is passed on, contains the timestamp and track IDs information in the same manner as the incoming object, so that the subsequent App is able to fetch this information in the same way.

##### Exampe
```
## comming soon
```