# Input of auxiliary/local files

!> Note that this setting is about to be deprecated. We recommend the new [`USER_FILE`](appspec/current/settings/user_file.md) setting that allows upload of a file with any name (see limitation below). Upload of multiple files is only possible as .zip files there.

---

It is possible to design Apps that require auxiliary files, like e.g. a map with environmental information, that are useful for analysis with the tracking data. The App needs the auxiliary files during its run time. Therefore, they have to be either provided permanently by the App developer or uploaded to MoveApps from a local system by the App user. This leads to three types of auxiliary files that are described in more details in the section about [Auxiliary Files](auxiliary.md).

In the `appspec.json`, these auxiliary files are adressed by a setting named `LOCAL_FILE` that defines a folder where the user can upload single or sets of own auxiliary/local files in the future process of workflow setup. The settings window has to be defined as specified in the below example. Note that the names of the file(s) have to exactly match those that are expected by the user, which is useful to provide to the users.

```appspec.json
{
  "id": "app_folder1",
  "name": "My auxiliary shapefiles",
  "description": "Files for running the XY analysis. The App expects files with the exact names: 1. `My_Auxiliary_Shapefile.cpg`, 2. `My_Auxiliary_Shapefile.dbf`, 3. `My_Auxiliary_Shapefile.prj`, 4. `My_Auxiliary_Shapefile.shp`, 5. `My_Auxiliary_Shapefile.shx`.",
  "type": "LOCAL_FILE"
},
{
  "id": "app_folder2",
  "name": "My auxiliary geotiff",
  "description": "File for running the YZ analysis. The App expects a file with the exact name: `My_Auxiliary_Geofile.geotiff`.",
  "type": "LOCAL_FILE"
}
```

If the App developer can/wants to provide fallback auxiliary files, these files must be defined as `providedAppFiles`. This category of the `appspec.json` defines the ID by which the auxiliary/local file can be adressed and its location in the App file bundle.


```appspec.json
"providedAppFiles": [
  {
    "settingId": "app_folder1",
    "from": "provided-app-files/app_files1/"
  }
]
```

For more detailed explanations and examples please see the section [Auxiliary Files](auxiliary.md).