# Input of an auxiliary user file

!> Note that this setting has been created to replace the deprecated [`LOCAL_FILE`](appspec/current/settings/local_file.md) setting. 

This setting type enables the user to upload an auxiliary file to the App via the Settings menu. Each `USER_FILE` setting defines a single auxiliary file that the user can upload. If multiple files are needed, each of them need their own `USER_FILE` setting. But they can also be bundled as a .zip (e.g. files of a shapefile, [see example](auxiliary.md#local-upload-auxiliary-files)), or e.g. a raster stack, etc.

The name of the file is unconstrained. Provide in the settings description the file type/extension that is expected to be uploaded by the user.

!> NOTE for Apps in `R`: ensure to add `...` at the end of the `rFunction` list of arguments, or the `id` of the setting, as this will enable reading in the uploaded file (e.g `rFunction <-  function(data, argument1, argument2, ...)`)

```
*appspec.json*

{
  "id": "aux_A",
  "name": "My auxiliary shapefile zip",
  "description": "File for running the XY analysis. The App expects a zipped set of files with the extensions: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
},
{
  "id": "aux_B",
  "name": "My auxiliary geotiff",
  "description": "File for running the YZ analysis. The App expects a geotiff file with the extension: `.geotiff`.",
  "type": "USER_FILE"
}
```

!> Note that file extensions do not matter for the transmission process, but can be part of a message that the App developer gives to the App user, so that the correct files are uploaded.


For more detailed explanations, examples and local testing instructions please see the section [Auxiliary Files](auxiliary.md).

To provide either fixed or fallback auxiliary files see [`providedAppFiles`](appspec/current/providedAppFiles_appspec.md).

