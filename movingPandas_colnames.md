## Notes on programming with the I/O type `MovingPandas.TrajectoryCollection`

Currently every Workflow has to start with an App the downloads or reads in data as a `move2::move2_loc` object in R. The Translator App [move2_loc to MovingPandas](https://www.moveapps.org/apps/browser/a81e3046-bc48-4fcb-8d28-4291000c77f9) converts the data into a Python [MovingPandas Trajectory Collection](https://movingpandas.readthedocs.io/en/main/api/trajectorycollection.html). The x- and y-coordinates are always stored in the column `geometry`, but the names of the columns containing the timestamps and track IDs may differ depending on the column names in the original data set. Therefore, the column names for these variables need to be fetched from the MovingPandas Trajectory Collection, see below for an example. 

!\> Note that timestamps are stored as the index 

##### Example
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

##### Example
```
# Create an example data frame
df = pd.DataFrame([
    {'timestamp_utc': "2024-01-01 09:00:00", 'coords_x': 9.103366, 'coords_y': 47.729496, 'track_id': 'ID_1'},
    {'timestamp_utc': "2024-01-02 09:00:00", 'coords_x': 8.108276, 'coords_y': 47.530281, 'track_id': 'ID_1'},
    {'timestamp_utc': "2024-01-03 09:00:00", 'coords_x': 7.191592, 'coords_y': 47.132766, 'track_id': 'ID_1'},
    {'timestamp_utc': "2024-01-04 09:00:00", 'coords_x': 6.244543, 'coords_y': 46.547009, 'track_id': 'ID_1'},
    {'timestamp_utc': "2024-01-05 09:00:00", 'coords_x': 5.828817, 'coords_y': 45.952891, 'track_id': 'ID_1'}
])

# Create a trajectory collection from the example data frame
data = mpd.TrajectoryCollection(
    df,
    traj_id_col='track_id',        # Indicate the column containing the track ID
    t='timestamp_utc',             # Indicate the column containing the timestamps
    crs='epsg:4326',
    x='coords_x', y='coords_y'     # Indicate the columns containing the x and y coordinates
)


# It is also possible to first set the timestamps as index
df = df.set_index('timestamp_utc')

data = mpd.TrajectoryCollection(
    df,
    traj_id_col='track_id',        # Indicate the column containing the track ID
    crs='epsg:4326',
    x='coords_x', y='coords_y'     # Indicate the columns containing the x and y coordinates
)

# Or to create a trajectory collection from a GeoDataFrame
df_g = GeoDataFrame(df, geometry=gpd.points_from_xy(df.coords_x, df.coords_y), crs='epsg:4326')

data = mpd.TrajectoryCollection(
    df_g,
    traj_id='track_id',        # Indicate the column containing the track ID
    t='timestamp_utc',         # Indicate the column containing the timestamps - only necessary if the timestamps are not the index
    crs='epsg:4326'
)

```