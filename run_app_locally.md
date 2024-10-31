# Run an App locally
The source code of any App on MoveApps can be downloaded from GitHub and run locally. This allows you to develop your own Apps (see "Steps to create an App" in the tutorials), or contribute to existing Apps by debugging or suggesting additional features or improvements. We highly appreciate the community effort to improve the Apps. When running the App locally, you will run the code across an input file and obtain the logs and outputs using software on your computer such as R, RStudio or Anaconda. Developers can further test their Apps on the MoveApps interface, as described under "Test a private trial version of your App" in the "How to create an App" tutorials.

### Getting the code
We provide direct access to the source code in the details overview of each App. This overview can be accessed via the `App Browser` by clicking on the name of the App, or within a Workflow in the menu on the right corner of each App container under `App Details`. In the details there is a link to the `Source Code` which will take you directly to the GitHub repository of the App.

<kbd>![](files/app_details.png ':size=600x')</kbd>

You can directly download the code as a `.zip` (`Code > Download ZIP`) file from the repository of the App. If you have suggestions to fix/improve/enhance an App, the easiest will be if you `Fork` the repository, do changes and make a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository. 

<kbd>![](files/fork_app.png ':size=800x')</kbd>

### Running the App locally
Once you have the code on your local system (details on how to clone your GitHub repository locally for R Apps [here](manage_Rapp_github.md) and for Python Apps [here](manage_Pyapp_github.md)), you can run the App emulating (almost) the online MoveApps system. To do this, you will need to use the following files from the App code:

#### 1. File `app-configuration.json` 

to adjust the settings of the App. Note that this file needs to be filled in [json format](https://en.wikipedia.org/wiki/JSON). To enter or modify settings you have used previously in MoveApps, you can find them printed in json format in the App logs. In case of an App based on R-Shiny this file does not exist, the settings can be adjusted once the UI opens. 
- Notation of some settings: 
   - If a setting needs a timestamp as an input, this has to be formatted as `yyyy-mm-ddTHH:MM:SSZ`, e.g. `2014-08-14T20:51:07Z`, note the `T` and the `Z`. 
  - If setting needs a string of words (e.g. attributes) as an input, state all of them coma separated between quotes, e.g. `"tag_voltage,ground_speed"`. If the settings allows for a string of numeric values, also state them the same way, e.g. `"0.25,0.5,0.9"`.
  - `false`, `true` or `null` have to be written in lower-case.
  - if a setting should be left empty, use as a value `{}`.

#### 2. File`.env` 

The setting names in this file are fixed, the paths can be adjusted, but changing names of the settings will lead to an error.

Here the list of the most common ones that one might want to adjust:
- `SOURCE_FILE=`: indicate which file to use as an input. Test data sets are located in `./data/raw/` for `R` Apps and `./resources/samples/` for `Python` Apps. You can also always use the `app-output.rds` or `app-output.pickle` file created by any App in a Workflow as input data, or any other data set saved as `.rds` for `R` or `.pickle` for `Python` Apps.
- `USER_APP_FILE_HOME_DIR=`: where to find [auxiliary](https://docs.moveapps.org/#/auxiliary) files if used by the App. 

 *Note:* The `.env` and other files in the code beginning with `.` may be hidden on your computer. Update your PC settings to show hidden files in order to see and open them.
 
#### 3. File `sdk.R`/`sdk.py` 

is the Software Development Kit that will execute the App. Run/Source this script and the App will be executed. The results will be saved under the path stated in `OUTPUT_FILE=` in the `.env` file, and in case of a Shiny App, the UI will open.
