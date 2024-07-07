# Run an App locally
The source code of any App on MoveApps can be downloaded from GitHub and run locally. This allows you to develop your own Apps (see "Steps to create an App" in the tutorials), or contribute to existing Apps by debugging or suggesting additional features or improvements. We highly appreciate the community effort to improve the Apps. When running the App locally, you will run the code across an input file and obtain the logs and outputs using software on your computer such as R, RStudio or Anaconda. Developers can further test their Apps on the MoveApps interface, as described under "Test a private trial version of your App" in the "How to create an App" tutorials.

### Getting the code
We provide direct access to the source code in the details overview of each App. This overview can be accessed via the `App Browser` by clicking on the name of the App, or within a Workflow in the menu on the right corner of each App container under `App Details`. In the details there is a link to the `Source Code` which will take you directly to the GitHub repository of the App.

<kbd>![](files/app_details.png ':size=600x')</kbd>

You can directly download the code as a `.zip` (`Code > Download ZIP`) file from the repository of the App. If you have suggestions to fix/improve/enhance an App, the easiest will be if you `Fork` the repository, do changes and make a [pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests) to the original repository. 

<kbd>![](files/fork_app.png ':size=800x')</kbd>

### Running the App locally
Once you have the code on your local system (details on how to clone your GitHub repository locally for R Apps [here](manage_Rapp_github.md) and for Python Apps [here](manage_Pyapp_github.md)), you can run the App emulating (almost) the online MoveApps system. To do this, you will need to use the following files from the App code:

- `app-configuration.json` to adjust the settings of the App. Note that this file needs to be filled in [json format](https://en.wikipedia.org/wiki/JSON). To enter or modify settings you have used previously in MoveApps, you can find them printed in json format in the App logs. In case of an App based on R-Shiny this file does not exist, the settings can be adjusted once the UI opens.
- `.env` to indicate which file to use as an input (`SOURCE_FILE=`) and where to find [auxiliary](https://docs.moveapps.org/#/auxiliary) files (`USER_APP_FILE_HOME_DIR=`), if used by the App. You can always use the `app-output.rds` or `app-output.pickle` file created by any App in a Workflow as input data. *Note:* The `.env` and other files in the code beginning with `.` may be hidden on your computer. Update your PC settings to show hidden files in order to see and open them.
- `sdk.R`/`sdk.py` is the Software Development Kit that will execute the App. Run this script and the App will be executed. The results will be saved under the path stated in `OUTPUT_FILE=` in the `.env` file, and in case of a Shiny App, the UI will open.
