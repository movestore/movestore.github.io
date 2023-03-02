# Auxiliary Files for Analysis with Tracks in an App

It is possible to design Apps that require auxiliary files, like e.g. a map with environmental information, that are useful for analysis with the tracking data. The App needs the auxiliary files during its run time. Therefore, they have to be either provided permanently by the App developer or uploaded to MoveApps from a local system by the App user. This leads to three types of auxiliary files:

 1. **Fixed auxiliary files** that the App developer provides in the GitHub repository. These files will be used for all analyses independent of the input data sets. We advice these data to be of global coverage.

 2. **Local upload auxiliary files** that have to be provided by the App user when the workflow is created, i.e. during configuration of the App settings. These files need to be named exactly as the App developer has defined. These files can be overwritten whenever necessary. If the App user has not uploaded the required auxiliary files, the App cannot run correctly.

 3. **Local upload auxiliary files with fixed fallback files** that are a combination of the above. The App developer provides a set of fallback files in the GitHub repository. These files will be used if the App user does not upload the required auxiliary files. However, if the App user does upload the required auxiliary files with correct names from his/her local system, the fallback files are not used, but the uploaded ones. These files can be overwritten whenever necessary.
 
The App developer has the responsibility to decide if auxiliary files are necessary for his/her App and if it can be an advantage to allow the App user to upload such files to the App. We advice the provision of fixed auxiliary files or sensible fallback auxiliary files, so that the App can still run if the App user does not or cannot provide any file(s) during App configuration. Often, it might be possible to provide a global map of lower resolution as fallback, but allow local upload of regional, higher resolution maps for analysis with tracks of that region. As of now it is necessary to give the auxiliary files fixed names that the App users have to provide in line with the instructions of the App developer (please integrate into the Settings definitions in the `appspec.json`) - more flexible solutions are in development.
 
Note that any combination of the three types of auxiliary files can be integrated into an App.


## Fixed auxiliary files

Any auxiliary files that the App developer wants to provide as fixed files have to be saved in the GitHub repository. The names of the files have to fit with the file names as used in the App's function code. For review and container building in MoveApps, the provision of these files has to be communicated in the `appspec.json` specification file via `providedAppFiles`.
 
Please keep the files in (a) seperate folder(s) in the GitHub repository, the folder name is required as input for the `providedAppFiles` specification (`from`). The `settingId` sets the name of the folder in the App container (on MoveApps) into which the content of the `providedAppFiles` folder is bundled and from where it can be called by the App's function code at run time (see example below and details in the [`app-files.R`](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R) of the SDKs.) 

!> Note that local testing of Apps with auxiliary files is possible with the SDK only, if the folder for these files is called `provided-app-files`. 

#### Example

```appspec.json
"providedAppFiles": [
  {
    "settingId": "app_folder1",
    "from": "provided-app-files/app_files1/"
  }
]
```

```App code
paste0(getAppFilePath("app_folder1"),"My_Auxiliary_File.shp")
```

## Local upload auxiliary files

Apps that allow/require the App user to upload (an) auxiliary file(s) during App settings configuration need to specify the `LOCAL_FILE` setting in the `appspec.json`. This setting has to be understood as a kind of directory definition. Depending on how many actions in the App require auxiliary files, it is necessary to define more than one `LOCAL_FILE` setting, i.e. if one action requires a shapefile the related 4 or 5 files should be directed to `LOCAL_FILE` setting _A_ (see example `app_folder1`) and if another action requires a geotiff map this file must be written into another directory `LOCAL__FILE` setting _B_ (See example `app_folder2`). 

All `LOCAL_FILE` settings (with names as given in `id`) have to be provided as parameters in the App's code function (e.g. `rFunction <- function(data, app_folder1=NULL)`). These parameters do not initate the auxiliary files to be passed on, but contain meta data required for file access. Do not use this parameter in your function! Instead, the `id` of each `LOCAL_FILE` setting has to be referenced in the App's function code to access the App user's data for analysis in the App. (see example below and details in the [`app-files.R`](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R) of the SDKs).

#### Example

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

```App code
paste0(getAppFilePath("app_folder1"),"My_Auxiliary_Shapefile.shp")
```

## Local upload auxiliary files with fixed fallback files

For Apps that allow/require the App user to upload (an) auxiliary file(s) during App settings configuration it is advisable that the App developer provides a (set of) fallback file(s) in case no file(s) are/can be uploaded. This allows a correct run of the App at all times. We advice this type for all Apps with local upload possibility. Fallback files should have global coverage, so they work for all tracks. A usual use case can be to provide (a) low resolution fallback file(s), but allow local upload of (a) higher resolution local file(s) that overlap with the analysed tracks and are provided by the App user. 

To set up Apps with this functionality, the above two cases have to be combined (also see example below). The only addition is that the `settingId` of the `providedAppFiles` specification has to match with the `id` of the `LOCAL_FILE` setting. Here, again, multiple such file sets are possible. Use the helper function [`app-files.R`](https://github.com/movestore/Template_R_Function_App/blob/master/src/io/app_files.R) of the SDKs for accessing the App user's (or fallback) data in the App code (see also example below). Note that the option `fallbackToProvidedFiles` in this function allows the App developer to specify if fallback files shall be used or not. See the code of this function for details and also how info messages about file usage are passed on to the App user.

#### Example

```appspec.json
"settings": [
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
],
  
"providedAppFiles": [
  {
    "settingId": "app_folder1",
    "from": "provided-app-files/app_files1/"
  },
    {
    "settingId": "app_folder2",
    "from": "provided-app-files/app_files2/"
  }
]
```

```App code
paste0(getAppFilePath("app_folder1"),"My_Auxiliary_Shapefile.shp")
...
paste0(getAppFilePath("app_folder2"),"My_Auxiliary_Geofile.geotiff")
```