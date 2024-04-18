# Input of an auxiliary/user file

!\> Note that this setting has been created to replace the [`LOCAL_FILE`](appspec/current/settings/local_file.md) setting. 

---

It is possible to design Apps that require auxiliary files, like e.g. a map with environmental information, that are useful for analysis with the tracking data. The App needs the auxiliary files during its run time. Therefore, they have to be either provided permanently by the App developer or uploaded to MoveApps from a local system by the App user. This leads to three types of auxiliary files that are described in more details in the section about [Auxiliary Files](auxiliary.md).

In the `appspec.json`, these auxiliary files can be adressed by a setting named `USER_FILE` that defines a single own auxiliary file that the user can upload in the process of workflow setup. The settings window has to be defined as specified in the below example. Note that (different from the  soon dto be deprecated `LOCAL_FILE` setting) the name of the file does not have to exactly match any name, but the file type/extension only, which the App developer should provide to the users in the settings description. That way we overcome the problem that wrong file names have led to App errors in the past. However, this improvement comes at the price that upload of multiple files is only possible as .zip files or by adding several `USER_FILE` settings.


```appspec.json
{
  "id": "app_folder1",
  "name": "My auxiliary shapefile zip",
  "description": "File for running the XY analysis. The App expects a zipped set of files with the extensions: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
},
{
  "id": "app_folder2",
  "name": "My auxiliary geotiff",
  "description": "File for running the YZ analysis. The App expects a geotiff file with the extension: `.geotiff`.",
  "type": "USER_FILE"
}
```

If the App developer can/wants to provide fallback auxiliary files, these files must be defined as `providedAppFiles`. This category of the `appspec.json` defines the ID by which the auxiliary/user file can be adressed and its location in the App file bundle.


```appspec.json
"providedAppFiles": [
  {
    "settingId": "app_folder1",
    "from": "provided-app-files/app_file1/"
  }
]
```

For more detailed explanations and examples please see the section [Auxiliary Files](auxiliary.md).