# How to create a Python App

Here you find a step-by-step guide on creating a MoveApps Python App. **Please carefully follow the steps below to create an App.** Before starting, we recommend to check out our **[video tutorials](video_tutorials.md)** and to follow along with the example App [Hello World!](hello_world_py_app.md).

All Apps to be submitted must be managed in a public [GitHub](https://github.com ':ignore') repository. When creating Python Apps, the repository should contain the program code for executing the App (in a file named `./app/app.py`), a specification of the App represented by an [`./appspec.json`](appspec.md) file and a documentation file (called `./README.md`), which needs to be the repository README.

For Python Apps we provide a template containing a Software Development Kit (SDK) that allows Apps to run and perform as if in the MoveApps interface. We encourage you to use the [GitHub templates](https://github.com/movestore/Template_Python_App ':ignore'). Please read the `developer_README.md` contained in the template for more information about the usage and the optional tools provided with it. The GitHub template includes all necessary files and example data for testing your App. We recommend using PyCharm or Visual Studio Code (VSC) for local development and Conda for dependency management.

The following image contains an overview of the files in the template and whether they need to be adapted or not.

![](files/TemplateFilesPurpose_py.jpg ':size=800x')

This description is applicable only for Python Apps, see our [R Tutorial](create_app.md) for instructions on how to create an R or R-Shiny App.

#### Notes and recommendations
- Interactive Python Apps are currently not possible in MoveApps. We are working on sketching out the details and soon a new App type `Python GUI` will become available. Please let us know if you are interested to submit such an App.

- Stepwise App review is now implemented! The new trial stage allows you to test your App in MoveApps before it will become available to all users.

- Don’t be afraid to hand in a preliminary App, you can add a warning message that can be seen by all users.

- Make sure that users of your App are enabled to understand what is required of input data, what happens in the App and how the method works, so that they can interpret the results correctly and understand possible issues.


## Steps to create an App

### Step 1: Use a template to initialise an App repository
Login to GitHub and go to the [Template Python App](https://github.com/movestore/Template_Python_App). Click on `Use this template` to copy the template to a new repository within your GitHub account. Name this repository as your App will be named in MoveApps, please adhere to our convention of Title Case (e.g. My New App). Clone this repository to your local system (see [Manage your MoveApps Apps with GitHub and PyCharm](manage_Pyapp_github.md) for instructions on how to do this) or download the template as a .zip file via `Code > Download ZIP`.


### Step 2: Create the Conda environment
The MoveApps system uses Conda as library manager and all required libraries are specified in the file `environment.yml`. To sucessfully use the template and test your App, you need to create the Conda environment. This can be done by running `conda env create -n APP_NAME --file environment.yml` in the terminal and then `conda activate APP_NAME` to activate the Conda environment.

Alternatively, you can click on `Create a conda environment using environment.yml` in the PyCharm window. In case this option does not show up in the PyCharm window, click on `<No interpreter>` at the bottom right of the PyCharm window, followed by `Interpreter settings > Project Structure > Add Content Root`, select the directory of your App and click `OK` twice to go back to the main window. Then, open `sdk.py` (under `Project Files`) and click on `Create a conda environment using environment.yml`. If the bottom right still indicates `<No interpreter>`, click on it and you can select the Conda environment for your App from the list.


### Step 3: Ensure that our template runs properly on your system
The template includes a file `./sdk.py` which can be used for testing the `./app/app.py` file. When running the `sdk.py` file it emulates how MoveApps would behave when running your App (i.e. the `app.py`).

Execute `python sdk.py` in a terminal or run `sdk.py` interactively to ensure that our template runs properly on your system. Make sure that the SDK executes the vanilla template App code (i.e. without alterations and without additional libraries). Everything is set up correctly if no error occurs and you see something like *Welcome to the {'app-name': 'MoveApps Python SDK'}*.

<kbd>![](files/PyCharm_sdk.png ':size=800x')</kbd>

More information on the files in the template and their functions can be found in the [`developer_README.md`](https://github.com/movestore/Template_Python_App/blob/main/developer_README.md ':ignore') in the template.


### Step 4: Develop the App code locally within the template
MoveApps Apps can be developed in your usual compiler/editor (e.g. PyCharm). The App Python code has to be saved in the file `./app/app.py`. MoveApps will call your custom App logic from this file and will instantiate the class `App`. Note that it is possible to add additional `.py` files to `./app/**` from which functions can be imported into the main `app.py` file. We provide instructions on [writing Python App code](copilot-python-sdk.md), including information on input files and parameters.

<kbd>![](files/Appdevel_pycharm.png ':size=650x')</kbd>

!\> The class must be named `App` and the file must be named `./app/app.py`, do not alter it.


### Step 5: Test your App locally
MoveApps Apps should be thoroughly tested locally before submission to MoveApps. All Apps must be tested using all provided data sets in the folder `./resources/raw/`. To test the App locally, use the file `./sdk.py` in combination with `./.env` and `./app-configuration.json` which emulate running behaviour (almost) like on the online MoveApps system. Have a look at [this compilation of edge case data sets](https://github.com/movestore/Movebank_Example_Datasets ':ignore') for more intensive testing and development.

The two files emulating MoveApps interactive behaviour locally are `./.env` (this file is hidden by default), which defines the input and output files path (please only adapt the source file path here), and `./app-configuration.json`, which allows you to adapt the App settings for local testing. Note that the json format is required here. The fourth included file that you must use for development is the `./app/app.py`. This is the entrypoint for your App logic. MoveApps will call the class App in this file during a Workflow execution which includes your App. 


#### Details on the manipulation of the files needed to test the Apps locally

**File `app-configuration.json`**: to adjust the input for the settings of the App. Note that this file needs to be filled in [json format](https://en.wikipedia.org/wiki/JSON).
- Notation of some settings: 
   - If a setting needs a timestamp as an input, this has to be formatted as `yyyy-mm-ddTHH:MM:SSZ`, e.g. `2014-08-14T20:51:07Z`, note the `T` and the `Z`. 
  - If a setting needs a string of words (e.g. attributes) as an input, state all of them comma separated between quotes, e.g. `"tag_voltage,ground_speed"`. If the setting asks for a string of numeric values, also state them the same way, e.g. `"0.25,0.5,0.9"`.
  - `false`, `true` or `null` have to be written in lower-case and without quotes.
  - if a setting should be left empty, use `{}`.

**File`.env`**: the paths to files can be adjusted, but changing names of the settings will lead to an error.
The most common setting that you might want to adjust:
- `SOURCE_FILE=`: indicates which file to use as an input. Test data sets are located in `./resources/samples/`. You can also always use the `app-output.pickle` file created by any App in a Workflow as input data, or any other data set saved as `.pickle`.

*Note:* The `.env` and other files in the template beginning with `.` may be hidden on your computer. Update your PC settings to show hidden files in order to see and open them.
 
**File `sdk.py`**: is the Software Development Kit that will execute the App. Run this script and the App will be executed. The results will be saved in `./resources/output/`.

#### Dealing with passwords
Some Apps require passwords, usernames, personal API keys, etc. that one does not want to share and make public. Especially when developing Apps and making the code public on GitHub, it is important to not accidentally publish these personal passwords. We suggest the following steps to automatically use your personal passwords, without them being visible to anyone by accident:

1. Add the necessary arguments with the value "secret" to the `app-configuration.json` file:

<kbd>![](files/secretpy_appconfig.png ':size=200x')</kbd>

2. Create a `xxx.env` file containing your passwords saved in the folder of the App, e.g. `myPersonalPasswords.env`, which for this example would contain the following:

<kbd>![](files/secret_envfile.png ':size=200x')</kbd>

3. In the file `./sdk/moveapps_execution.py`, in the static method `__load_config()` add the indicated lines corresponding to your created `xxx.env` file and the `app-configuration.json` file:

<kbd>![](files/secretpy_sdkexecution.png ':size=500x')</kbd>

4. Finally, but **very important**, add the created `xxx.env` file to your `.gitignore` file to avoid accidentally publishing it on your repository.

<kbd>![](files/secretpy_gitignore.png ':size=200x')</kbd>

Now you can safely use the passwords as all other variables through `config`.


### Step 6: Unit tests
To ensure correct behavior of the code, we require unit tests to be defined in the `./tests/**` folder. See an [example](https://github.com/movestore/Template_Python_App/blob/main/tests/app/test_app.py ':ignore') in the template.

*more details and examples coming soon*


### Step 7: Write App specifications
App specifications should be written into the file `./appspec.json` to define the App's metadata and the user interface to specify MoveApps App parameters (see [App specifications](appspec.md)). You can test this file for compliance in the [Settings editor](https://www.moveapps.org/apps/settingseditor ':ignore'). Note that for Python Apps no dependencies have to be added to this file.


### Step 8: Store environment dependencies
The MoveApps system uses Conda as library manager and to enable your App to run successfully on our system, all required libraries need to be specified in the file `./environment.yml`. For each library, you can optionally define which version must be loaded.


### Step 9: Write a documentation file
Write about the detailed function and use of the App including possible error cases. We recommend using the [`README.md`](https://github.com/movestore/Template_Python_App/blob/main/README.md ':ignore') that is provided as a template in the App template.


### Step 10: Upload all changes to your GitHub repository
After developing the App code and updating all required files, upload/push all changes to your App's GitHub repository. The following three files are mandatory for running on MoveApps: `./appspec.json`, `./environment.yml`, `./app/app.py` and a documentation file (needs to be `./README.md`). Additional files can be included (see image above), but are not required.


### Step 11: Create a Tag/Release
Create a Tag in your project's GitHub repository by clicking on `Create a new release`. Note: if you have already created a release before, click on `Releases > Draft a new release`.

<kbd>![](files/CreateTag.png ':size=250x')</kbd>

Choose a tag (version name, e.g. v0.1) and choose a release title (e.g. first version). You can choose to add a description to this release, or to attach files (see [auxiliary files](auxiliary.md#adding-large-fixed-or-fallback-files-to-an-app) for a case where this may be desired). Then, click on `Publish release`.

<kbd>![](files/CreateTagForm.png ':size=800x')</kbd>

!\>If you missed something in the release and want to add/adjust this, you can delete the release (under `Releases > Releases`). Note that it is then also **required to delete the associated tag** (under `Releases > Tags`) before creating a new release. If you do not delete the associated tag, MoveApps will use the old (deleted) release.


### Step 12: Initialize the App on MoveApps
After you have successfully written a functioning App, copied it or used the template (together with the [appspec.json](appspec.md)) into your GitHub App repository and described its details in the `README.md` file, you can initiate it on MoveApps. To do this, select `My Apps > Create new app` from the menu in your Dashboard, or click on `Initialize a New App` in your `App Overview` and fill out the form. 

<kbd>![](files/initializeAppDashboard.png ':size=800x')</kbd>

For the **App Title**/name please stick to our convention of Title Case without hyphens (e.g. `My New App`). The **description** should be identical with the short description in your documentation README. You can add a **Warning Note** that will be highlighted to any MoveApps user adding your App to a Workflow. Note that the Title, Description and Warning note can be edited at any time.

<kbd>![](files/initializeApp_sub1.png ':size=600x')</kbd>

The link to your repository (**Repository URL**) has to end with `.git`; please add it manually if necessary (example: `https://github.com/movestore/MorningReport.git`). 

<kbd>![](files/initializeApp_sub2.png ':size=600x')</kbd>

Each App is defined by a **Runtime Environment** and an **Input Type** and **Output Type** (IO types) that have to be specified. Possible environments are R, R-Shiny and Python. Input and output (IO) types for Python are so far restricted to `MovingPandas.TrajectoryCollection`. MovingPandas Trajectory Collections can easily be transformed to GeoPandas objects. However, IO types can now be extended to any other movement related data types. 

After selecting Python as your Runtime Environment, check which IO types are available in the dropdown list. If you need a new IO type for your App, please check out the instructions on how to [request a new IO type](IO_types.md).

<kbd>![](files/initializeApp_sub3.png ':size=600x')</kbd>

Once you have filled the form, click on `Initialize App`. When you have successfully created the App, it will be listed in the overview `My Apps > App Overview`

When you have successfully created the App, it will be listed in the overview `My Apps > App Overview`

!\> Note that the repository link, IO types and runtime environment will be fixed to the App and cannot be changed afterwards. 


### Step 13: Submit a first App version
After initializing the App in MoveApps, you can to submit a first (or later updated) App version to MoveApps. In order to create your first (or any updated new) App version, you must create a `Tag` (via `Release`) of your GitHub repository in its present state (see Step 11). After you have created the `Tag`, go to the MoveApps site and press the `Add Version` button in the detailed view of your App (via `My Apps > App Overview > AppName`). Select the `Tag` from the list of available `Tags` and press `Create Version`. A new App version is only available if your tag creation in GitHub was successful. 

<kbd>![](files/Appdevel_createNewAppVersion.png ':size=900x')</kbd>

To submit the new version, you must include a description detailing the changes and select/update a Category that fits your App. If you want to request an additional Category, please suggest it in the interface (see our instructions on how to [request a new App Category](IO_types.md)). In the bottom panel of this page, you can check, among others, the settings of your App, and the people that were specified in the `appspec.json` file. After entering and checking all information, click `Save and Submit`.

<kbd>![](files/AppSubmission_AddVersion.png ':size=700x')</kbd>

One of the MoveApps administrators will check the App for functionality, performant `appspec.json` and possible issues regarding our Terms of Use. Then, the App will be build into a docker container for intergration into the platform. If the App has built successfully, it will acquire private trial status. You will receive an e-mail.


### Step 14: Test a private trial version on MoveApps
Upon successful review and built, your App version will enter the `TRIAL` stage and you will receive an E-mail from the system, possibly with comments from the administator. In case your App does not pass the review or the building process was unsuccessful, the administrator will reject your App version and you will get an E-mail with details about it. Please address any raised concerns and submit a new App version then.

Once your App is in status `TRIAL`, it becomes possible for only you (and the system administrators) to add this App to a Workflow in your MoveApps account. It appears in the list of Apps possible to add to your Workflow (with fitting IO type) in `TRIAL` design (see figure below). Also when included in a Workflow, the App will be highlighted with colour as a `TRIAL` App.

<kbd>![](files/Trail_AppIntoWF.png)</kbd>
<kbd>![](files/Trail_IsInWF.png)</kbd>

Please, [create some Workflows](create_workflow.md) and test if the App version is working as you expect within the MoveApps platform. Test your App for different data sets and parameter settings, use e.g. the wealth of open data sets on Movebank.  Have a look at [this compilation of edge case data sets](https://github.com/movestore/Movebank_Example_Datasets ':ignore') for more intensive testing and development.


### Step 15: Approve (or retract) your App version
If the App is performing well, please select `APPROVE` in the respective App version of the App in your App Overview (`My Apps > App Overview > *your_app_name*`). The App version will aquire the status `APPROVED`and become visible and usable for all registered MoveApps users. In case the App version does not perform as expected, please `RETRACT` it from the system, adapt your code and submit a new version. In the Workflow where the `TRIAL` App has been included, it will be marked as `Retracted` and give an error if executed.

<kbd>![](files/Trial_AppVersion.png)</kbd>
<kbd>![](files/Trial_RetractedErrorMsg.png)</kbd>

Thank you for submitting an App to the MoveApps platform!
