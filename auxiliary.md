# Auxiliary Files for Analysis with Tracks in an App

It is possible to design Apps that require auxiliary files, e.g. a map with environmental information, that are useful for analysis with the tracking data. The App needs the auxiliary files during its run time. Therefore, they have to be either provided permanently by the App developer or uploaded to MoveApps from a local system by the App user. This leads to three types of auxiliary files:

 1. **Fixed auxiliary file** that the App developer provides in the GitHub repository. This file will be used for all analyses independent of the input data sets. We advice these data to be of global coverage.

 2. **Local upload auxiliary file** that is provided by the App user when the Workflow is created, i.e. during configuration of the App settings. It can be overwritten whenever necessary. If an auxiliary file is required by the App and the user has not uploaded one, the App cannot run correctly.

 3. **Local upload auxiliary file with fixed fallback file** that is a combination of the above. The App developer provides a fallback file in the GitHub repository. This file will be used if the App user does not upload the required auxiliary file. However, if the App user does upload the required auxiliary file with correct extension from their local system, the fallback file is not used, but the uploaded one. This file can be overwritten whenever necessary.
 
Any combination of these three types of auxiliary files can be integrated into an App.

The App developer has the responsibility to decide if an auxiliary file is necessary for their App and if it can be an advantage to allow the App user to upload such a file to the App. We advise developers to provide a fixed auxiliary file or sensible fallback auxiliary files, so that the App can still run if the App user does not or cannot provide any file during App configuration. For example, it might be possible to provide a global map of lower resolution as fallback, but allow local upload of regional, higher resolution maps for analysis with tracks of that region. If the auxiliary file is optional, the code should be tested thoroughly to ensure that the App runs successfully with and without this file.  

In the past, the `LOCAL_FILE` setting required the App developer to define the exact name of the auxiliary file that the App users had to provide in line with the instructions, with the introduction of the `USER_FILE` setting this is not necessary any more. However, only one file can be uploaded per `USER_FILE` setting, else the use of zipping is necessary.

!> Note that local testing of Apps with auxiliary files is possible with the SDK (Software Development Kit, provided in the templates) only if the folder for these files is called `provided-app-files`. This folder is located in `./data/auxiliary/user-files/provided-app-files/` in the R templates and in `./resources/auxiliary/user-files/provided-app-files/` in the Python template.

!> If your fixed or fallback file is larger than 100MB GitHub will not allow it to be uploaded to the repository. At the end of this page you can find the instructions to overcome this issue.

## Fixed auxiliary files

Any auxiliary files that the App developer wants to provide as fixed files have to be saved in the GitHub repository within the folder `auxiliary/user-files/provided-app-files/`. The provision of these files has to be communicated in the [`appspec.json`](appspec.md) specification file via [`providedAppFiles`](appspec/current/settings/user_file.md). Please keep the files in (a) separate folder(s) in the GitHub repository, the folder name is required as input for the `providedAppFiles` specification (`from`). The `settingId` has to be unique for each fixed file and will be used to refer to it in the code via the function `getAuxiliaryFilePath()` in `R` and `MoveAppsIo.get_auxiliary_file_path()` in `Python`. These functions will read in the content of the stated folder in the appspecs.json, therefore only one file should be included in each folder. See examples below.


#### Example
*All App templates also contain a working example of auxiliary files*

###### R Apps

```
*appspec.json*

"providedAppFiles": [
  {
    "settingId": "aux_id_A",
    "from": "data/auxiliary/user-files/provided-app-files/aux_A/"
  },
  {
    "settingId": "aux_id_B",
    "from": "data/auxiliary/user-files/provided-app-files/aux_B/"
  }
]
```

```
*R code*

fileA <- read.csv(getAuxiliaryFilePath("aux_id_A"))
rastB <- rast(getAuxiliaryFilePath("aux_id_B"))
```

###### Python Apps

```
*appspec.json*

"providedAppFiles": [
  {
    "settingId": "aux_id_A",
    "from": "resources/auxiliary/user-files/provided-app-files/aux_A/"
  },
  {
    "settingId": "aux_id_B",
    "from": "resources/auxiliary/user-files/provided-app-files/aux_B/"
  }
]
```

```
*Python code*

import pandas as pd
fileA = pd.read_csv(MoveAppsIo.get_auxiliary_file_path("aux_id_A"))

auxiliary_file_b = MoveAppsIo.get_auxiliary_file_path("aux_id_B")
with open(auxiliary_file_b) as f:
	fileB = [line.rstrip() for line in f]

```

## Local upload auxiliary files

Apps that allow/require the App user to upload an auxiliary file during App settings configuration need to specify the [`USER_FILE`](appspec/current/settings/user_file.md) setting in the `appspec.json`. If multiple files can be uploaded each of them will require a separate `USER_FILE` setting with a different `id`. In the case of shapefiles we recommend to give the instructions to the user to zip all files and upload them as a zipped file.

The `id` in the `USER_FILE` setting in the `appspec.json` has to be unique for each upload file option, and will be used to refer to it in the code via the function `getAuxiliaryFilePath()` in `R` and `MoveAppsIo.get_auxiliary_file_path()` in `Python`. These functions will read in the uploaded file. Ensure that the `rFunction` contains `...` at the end of the list of arguments, as this will enable reading in the uploaded files(s) (e.g. `rFunction <- function(data, ...)`. See examples below.

#### Example
*All App templates also contain a working example of auxiliary files*

```
*appspec.json*

settings:[{
  "id": "aux_id_A",
  "name": "My auxiliary zipfile",
  "description": "Files for running the XY analysis. The App expects a zipped file set with the extension: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
},
{
  "id": "aux_id_B",
  "name": "My auxiliary csv",
  "description": "File for running the YZ analysis. The App expects a file with the extension: `.csv`.",
  "type": "USER_FILE"
}]
```

```
*R code*

shpA_path <- getAuxiliaryFilePath("aux_id_A")
dir.create(targetDirFiles <- tempdir())
unzip(shpA_path, exdir = targetDirFiles)
shpA <- sf::st_read(list.files(targetDirFiles,pattern=".shp",recursive=T))

tableB <- read.csv(getAuxiliaryFilePath("aux_id_B"))

```

```
*Python code*

import tempfile
import zipfile
import glob
import geopandas

shpA_path = zipfile.ZipFile(MoveAppsIo.get_auxiliary_file_path("aux_id_A"))

with tempfile.TemporaryDirectory(dir=".") as tempdir:

    with shpA_path as zip_ref:
        zip_ref.extractall(tempdir)
    files = glob.glob(str(tempdir)+"/**/*.shp")
    shpA = []
    for file in files:
        shpA.append(geopandas.read_file(file))


import pandas as pd
tableB = pd.read_csv(MoveAppsIo.get_auxiliary_file_path("aux_id_B"))
```

## Local upload auxiliary files with fixed fallback files

For Apps that allow/require the App user to upload an auxiliary file during App settings configuration it is advisable that the App developer provides a fallback file in case no file is/can be uploaded. This allows a correct run of the App at all times. We advice this type for all Apps with user file upload possibility. Fallback files should have global coverage, so they work for all tracks. A usual use case can be to provide a low resolution fallback file, but allow local upload of a higher resolution local file that overlaps with the analysed tracks and is provided by the App user. 

To set up Apps with this functionality, the above two cases have to be combined (also see example below). The only addition is that in the [`appspecs.json`](appspec/current/settings/user_file.md) the `settingId` of the `providedAppFiles` specification has to match with the `id` of the `USER_FILE` setting. Here, again, multiple such files are possible. Also ensure that the `rFunction` contains `...` at the end of the list of arguments, as this will enable reading in the uploaded files(s) (e.g. `rFunction <- function(data, ...)`. See examples below.


#### Example
*All App templates also contain a working example of auxiliary files*

###### R Apps

```
*appspec.json*

settings:[{
  "id": "aux_id_A",
  "name": "My auxiliary zipfile",
  "description": "Files for running the XY analysis. The App expects a zipped file set with the extension: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
},
{
  "id": "aux_id_B",
  "name": "My auxiliary csv",
  "description": "File for running the YZ analysis. The App expects a file with the extension: `.csv`.",
  "type": "USER_FILE"
}]

"providedAppFiles": [
  {
    "settingId": "aux_id_A",
    "from": "data/auxiliary/user-files/provided-app-files/aux_A/"
  },
  {
    "settingId": "aux_id_B",
    "from": "data/auxiliary/user-files/provided-app-files/aux_B/"
  }
]
```

```
*R code*

shpA_path <- getAuxiliaryFilePath("aux_id_A")
dir.create(targetDirFiles <- tempdir())
unzip(shpA_path, exdir = targetDirFiles)
shpA <- sf::st_read(list.files(targetDirFiles,pattern=".shp",recursive=T))

tableB <- read.csv(getAuxiliaryFilePath("aux_id_B"))

```
###### Python Apps

```
*appspec.json*

settings:[{
  "id": "aux_id_A",
  "name": "My auxiliary zipfile",
  "description": "Files for running the XY analysis. The App expects a zipped file set with the extension: 1. `.cpg`, 2. `.dbf`, 3. `.prj`, 4. `.shp`, 5. `.shx`.",
  "type": "USER_FILE"
},
{
  "id": "aux_id_B",
  "name": "My auxiliary csv",
  "description": "File for running the YZ analysis. The App expects a file with the extension: `.csv`.",
  "type": "USER_FILE"
}]

"providedAppFiles": [
  {
    "settingId": "aux_id_A",
    "from": "resources/auxiliary/user-files/provided-app-files/aux_A/"
  },
  {
    "settingId": "aux_id_B",
    "from": "resources/auxiliary/user-files/provided-app-files/aux_B/"
  }
]
```
```
*Python code*

import tempfile
import zipfile
import glob
import geopandas

shpA_path = zipfile.ZipFile(MoveAppsIo.get_auxiliary_file_path("aux_id_A"))

with tempfile.TemporaryDirectory(dir=".") as tempdir:

    with shpA_path as zip_ref:
        zip_ref.extractall(tempdir)
    files = glob.glob(str(tempdir)+"/**/*.shp")
    shpA = []
    for file in files:
        shpA.append(geopandas.read_file(file))


import pandas as pd
tableB = pd.read_csv(MoveAppsIo.get_auxiliary_file_path("aux_id_B"))
```

## Adding large fixed or fallback files to an App

If your files are larger than 100MB [GitHub blocks them](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-large-files-on-github). Please do not include these into your repository via SCM or GitLFS, but add the files to your release. To do this go to `Releases > Create a new release` in your GitHub repository and add your files.

After submitting your App on MoveApps, please inform us (support@moveapps.org) about the addition of the large file(s) to the release so we can perform the necessary adjustments while building your App. The addition of the large files only has to be done once, new versions of the App can be created without having to add the large files to each release. If these files should change, please inform us when submitting this new version, with the newly added files, so we can update the path to fetch these data.
