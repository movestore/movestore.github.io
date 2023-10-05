# How to create a Python App

Apps to be submitted must be managed in a public [GitHub](https://github.com) repository. Python Apps must be developed using the [Python-SDK template](https://github.com/movestore/python-sdk) that we ask you to add to your personal GitHub space (login and click `Use this Template`). As described there in the [develop_README.md](https://github.com/movestore/python-sdk/blob/main/developer_README.md), there are some files and folders that you need to adapt to make your App and some that help you emulate how your App would run on MoveApps locally. We recommend using PyCharm or Visual Studio Code (VSC) for local development and Conda for dependency management.


## Steps to create an App
*(details in [MoveApps Python App SDK documentation](python-sdk.md) and below)*

1. **Open your forked Python SDK project** in your local system, e.g. using Pycharm with Conda.

2. **Create the conda environment** by `conda env create -n APP_NAME --file environment.yml` or clicking on the top left option in the PyCharm window.

3. **Execute `python sdk.py`** or run `sdk.py` interactively to ensure that our template runs properly on your system. Ensure the SDK executes the vanilla template App code. Everything is set up correctly if no error occurs and you see something like _Welcome to the MoveApps Python SDK._

4. **Develop your App code** locally in our forked template (in Pycharm) in `./app/app.py`. MoveApps will call your custom App business logic and will instantiate the class `App`.

5. **Test your App** locally using the file `./sdk.py` which emulates the online MoveApps system. Note that before submission to MoveApps, we require unit tests to be defined in the `./tests/**` folder. See an example in the template.

3. **Write App specifications** into the file `appspec.json` to define the App's metadata and the user interface for MoveApps users to specify App parameters. Test this file for compliance in the [Settings editor](https://www.moveapps.org/apps/settingseditor ':ignore'). Note that for Python Apps no dependencies have to be added to this file.

3. **Store/Update environment dependencies** into the file `./environment.yml`.

4. **Write a documentation file** about the detailed function and use of the App, incl. possible error cases. Usually use [`README.md`](README_file_description.md) for it.

6. **Create a Tag** (`Release`) of your project's GitHub repository

7. **Initiate the App** on MoveApps (`Create new Application`)

8. **Submit a first App version** to MoveApps (`Add version`). Once the MoveApps administrator has checked it and built it into a Docker container, it becomes available to all users on the platform. Please test it there.


## Notes and recommendations
- Interactive Python Apps are presently not possible to integrate into MoveApps. We are working on sketching out the details and soon a new App type `Python GUI` will become available. Please let us know if you are interested to submit such an App.

- Stepwise App review is on the way, which will allow you to test your App in MoveApps before it will become available to all users.

- Don’t be afraid to hand in a preliminary App, a warning message can be applied, and most Apps take time to become used.

- Make sure that users of your App are enabled to understand what is required of input data, what happens in the App and how the method works, that they can interpret the results correctly and understand possible issues.

## Writing the App
For details about how to write the App, please consult the `developer_README.md` in the template or [here](https://github.com/movestore/python-sdk/blob/main/developer_README.md).

## Testing the App
Before submission to MoveApps, all App must be thoroughly tested locally using the file `sdk.py`, which behaves (almost) like the online MoveApps system. Please also add some unit tests, similar to those provided in the folder `tests` in the template. 

## Initialization/Creation of the App

Initiate your App on MoveApps by selecting `Applications / Initialize a new Application` from the menu and fill out the form. For the App name please stick to our convention of Title Case without hyphens (e.g. `My New App`). The description should be identical with the short description in yor documentation README. You can add a Warning Note that will be highlighted to any MoveApps user adding your App to a workflow. Note that both Title, Description and Warning note can be edited at any time.

The link to your repository has to end with `.git`; please add it manually if necessary (example: `https://github.com/movestore/MorningReport.git`). 
Each App is defined by an input and output type (IO types) and runtime environment that have to be specified. Possible environmentas are R, R-shiny and Python. 

![](../files/initializeApp.png)
![](../files/InitApp_IOtype2.png)

### IO types
Input and output types for Python are so far restricted to MovingPandas Trajectory Collections. Those can easily be transformed to geopandas objects. However, IO types can now be extended to any other movement related data types. After selecting Python as your Runtime Environment, check which types are available in the dropdown list. If you need a new IO type for your App, please go to "request a new IO type". Please describe your request to us, link to the documentation of the new IO type and adapt our [cargo agent repository](https://github.com/movestore/cargo-agent-python) accordingly, with creating and linking to a pull request. See the [README](https://github.com/movestore/cargo-agent-python#readme) there for details. Once an administrator has approved your IO type request, it will be available on the platform. Make sure to also provide transforamtion Apps to/from other IO types to widen the usability of your App on MoveApps. For portability to R and R-shiny Apps also provide code to transfer your data object to one or several csv-files.

![](../files/ReqNewIOtype3.png)
![](../files/ReqNewIOtype2.png)

Note that repository link, runtime environment and IO types will be fixed to the App and cannot be changed afterwards. When you have successfully created the App, it will be listed in the overview `Applications / Your Applications`


## Creation of a new App version
In order to create your first (or any updated new) App version, you must create a `Tag` (via `Release`) of your GitHub repository in its present state. After you have created the `Tag`, go to the MoveApps site and press the `Add Version` button in the detailed view of your App (via `Applications / Your Applications / AppName / Details`).

Select the `Tag` from the list of available `Tags` and press `Create Version`. A new App version is only available if your tag creation in GitHub was successful. To submit the new version, you must include a description detailing the changes and select/update a Category that fits your App. If you want to request an additional Category, please suggest it in the interface. A system administrator will integrate it into the system for you or contact you for possible feedback. After entering this information, click `Save and Submit`.

The App is then checked by a MoveApps administrator for functionality, performant `appspec.json` and possible issues regarding our Terms of Use and a docker container for the App is built. After the check and built process were successful, the status of the App version becomes `APPROVED`. From this moment on, the new version of the App becomes accessible to all platform users. Please test it directly, fix any issues and submit a new App version if necessary.

![](../files/Appdevel_createNewAppVersion.png)
