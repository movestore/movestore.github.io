# Run an App locally
Any App on MoveApps can be downloaded from GitHub and run locally. This can be useful to help the developer in debugging the App or suggest additional features or improvements. We highly appreciate the community effort to improve the Apps.

### Getting the code
We provide direct access to the source code in the details overview of each App. This overview can be accessed via the `App Browser` by clicking on the name of the App, or within a Workflow in the menu on the right corner of each App container under `App Details`. In the details there is a link to the `Source Code` which will take you directly to the GitHub repository of the App.

<kbd>![](files/app_details.png ':size=600x')</kbd>

You can directly download the code as a `.zip` (`Code > Download ZIP`) file from the repository of the App. If you have suggestions to fix/improve/enhance an App, the easiest will be if you `Fork` the repository, do changes and make a pull request to the original repository. 

<kbd>![](files/fork_app.png ':size=600x')</kbd>

### Running the App locally
Once you have the code on your local system (details on how to clone your GitHub repository locally for R Apps [here](manage_Rapp_github.md) and for Python Apps [here](manage_Pyapp_github.md)), you can run the App emulating (almost) the online MoveApps system. You will need the following files:

- `app.configuration.json` to adjust the settings of the App. Note that this file needs to be filled in [json format](https://en.wikipedia.org/wiki/JSON). In case of an App based on R-Shiny this file does not exist, the settings can be adjusted once the UI opens.
- `.env` to indicate which file to use as an input (`SOURCE_FILE=`). You can always use the `app-output.rds` file created by any App in a Workflow as input data.
- `sdk.R`/`sdk.py` is the Software Development Kit that will execute the App. Run this script and the App will be executed. The results will be saved under the path stated in `OUTPUT_FILE=` in the `.env` file and in case of a Shiny App the UI will open.
