# Writing the Python App code
This document describes the basics to write your own Python App code for MoveApps.

Please use this GitHub [Template Python App](https://github.com/movestore/Template_Python_App ':ignore') and follow the [instructions to create an App](create_py_app.md).

#### Notes and recommendations
- While writing your Python App code, keep in mind the [coding best practises](best_practices_coding.md).

- It is possible to use parallel computing within MoveApps, please check out [this page](parallelcomp.md).


## Creating the function
After having defined and loaded the libraries that your code will require, a Python function must be created in your `app.py` file. This is the entrypoint for your App logic. The class must be named `App` and the file must be named `./app/app.py` (i.e. `app.py` in the folder `app`). Note that it is possible to add additional `.py` files to `./app/` from which functions can be imported into the main `app.py` file. The MoveApps system calls so called `hook`s. These hooks must be implemented by the App. Currently, there is only the following [hook specified](https://github.com/movestore/Template_Python_App/blob/main/sdk/moveapps_spec.py). A proper implementation of this hook specification is shown in the example below.

##### Example
```
*Python code *

from sdk.moveapps_spec import hook_impl
from sdk.moveapps_io import MoveAppsIo
from movingpandas import TrajectoryCollection
import logging

class App(object):

    def __init__(self, moveapps_io):
		self.moveapps_io = moveapps_io

    @hook_impl
    def execute(self):
		# Do something
```

Please keep the number of libraries as low as possible.


## App Input

#### Input from previous App
In order to use the result of the previous App in the Workflow, one of the parameters of the Python function must be named `data`. Note that the data type (IO type) of `data` is defining your App's input type that you need to specify at App initialization. Currently, the only available IO type for Python is `MovingPandas.TrajectoryCollection`. [This page](IO_types.md) contains an overview of all available IO types and instructions on how to request a new IO type.

##### Example
```
*Python code*

class App(object):

    def __init__(self, moveapps_io):
		self.moveapps_io = moveapps_io

    @hook_impl
    def execute(self, data: TrajectoryCollection):
		# Do something
}
```


#### MoveApps parameters
You can receive parameters or settings for your Python function from the MoveApps interface. These parameters/settings must be defined in the [appspec.json](appspec.md) file (also see [settings](appspec/current/settings/README.md)) and are configured by the user within MoveApps. When the function is called, the parameters are passed on to it. You can use the MoveApps [Settings Editor](https://www.moveapps.org/apps/settingseditor ':ignore') to generate the App configuration for the `appspec.json` file.

##### Example
<kbd>![](files/sdk_settings_example.png)</kbd>

```
*appspec.json*

"settings": [
 {
   "id": "line_width",
   "name": "Line width",
   "description": "The width of the lines in the plot.",
   "defaultValue": 2,
   "type": "INTEGER"
 },
 {
   "id": "legend",
   "name": "Include legend?",
   "description": "Should the plot contain a legend?",
   "defaultValue": false,
   "type": "CHECKBOX"
 }
],
```

```
*Python code*

@dataclass
class AppConfig:
    line_width: int
    with_legend: bool

class App(object):
   @staticmethod
    def map_config(config: dict):
        return AppConfig(
            line_width=config['line_width'] if 'line_width' in config else 5,
            with_legend=config['legend'] if 'legend' in config else False
        )
   
    @hook_impl
    def execute(self, data: TrajectoryCollection, config: dict):
        app_config = self.map_config(config=config)
        # Do something with the data and parameters
```

```
*app-configuration.json*

{
  "line_width": 2,
  "legend": true
}
```

Note: the `app-configuration.json` file is only needed during the App development to simulate an App run locally.

!\>  **Limitation**: you cannot use `data` as a parameter name. This is reserved for the input that is passed on from the previous App (see above).


#### Auxiliary input files
It is possible to design Apps that require auxiliary files as input, e.g. a map with environmental information, that are useful for analysis with the tracking data. There are three types of auxiliary files (see below). For more details and to integrate the full functionality into an App see the [detailed description](auxiliary.md).

 1. **Fixed auxiliary files** that the App developer provides in the GitHub repository. These files will be used for all analysis independent of the input data sets. We advice these data to be of global coverage.

 2. **Local upload auxiliary files** that have to be provided by the App user when the Workflow is created, i.e. during configuration of the App settings. If the App user has not uploaded the required auxiliary files, the App cannot run correctly.

 3. **Local upload auxiliary files with fixed fallback files** that are a combination of the above. The App developer provides a set of fallback files in the GitHub repository. These files will be used if the App user does not upload the required auxiliary files. However, if the App user does upload the required auxiliary files from their local system, the uploaded files are used instead of the fallback files.


## App Output
The result of the function must be defined as a return value at the end of the function code. Then, this object can be processed accordingly as input in the next App of the Workflow. Note that the data type (IO type) of `result` is defining your App's output type that you need to specify at App initialization. Currently, the only available IO type for Python is `MovingPandas.TrajectoryCollection`. [This page](IO_types.md) contains an overview of all available IO types and instructions on how to request a new IO type.

##### Example
```
*Python code*

class App(object):

    def __init__(self, moveapps_io):
        self.moveapps_io = moveapps_io

    @hook_impl
    def execute(self, data: TrajectoryCollection) -> TrajectoryCollection:
        # Do something with the data
        return data
```

#### Producing artifacts
MoveApps allows the creation and saving of different files directly through the Python function (e.g. csv, pdf, png), so called `artifacts`. Those artifacts can be created by the usual Python command for saving the specific type of file. To get a valid path for the artifact use the SDK function `create_artifacts_file(*.***)` (`*.***` is the name of the file, see example for png below). After running the App, the artifacts can then be downloaded by the user from the Workflow `Output` overview.

##### Example
```
*Python code*

plot = data.plot(
   column="speed",
   linewidth=app_config.line_width,
   capstyle='round',
   legend=app_config.with_legend
)
plot.figure.savefig(self.moveapps_io.create_artifacts_file('plot.png'))
```

!\> **Note**: Only files are permitted to act as MoveApps App artifact! If your app produces a directory as an App artifact you have to bundle it eg. by zipping it. In other words: at the moment your App completes its work there must be only files (i.e. no folders) present in APP_ARTIFACTS_DIR.

##### Example for zipping
```
*Python code*

import tempfile
import zipfile
import glob

# create a temporary directory
with tempfile.TemporaryDirectory(dir=".") as tempdir:
    
    # add any files to tempdir. The files below act as an example
    with open(str(tempdir) + "/file1.txt", 'w') as f:
        f.write("This is example file 1.")
    data.to_csv(str(tempdir) + "/file2.csv")
    
    # get a list of all files
    files = glob.glob(str(tempdir) + "/*")

    # create a zip file
    zip_file = "./resources/output/outputfiles.zip"
    with zipfile.ZipFile(zip_file, 'w', zipfile.ZIP_DEFLATED) as myzip:
        for f in files:
            myzip.write(f)
```
