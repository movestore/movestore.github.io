# Manage your MoveApps Apps with GitHub and RStudio

## Create GitHub repository
Either use one of our templates ([see details](create_app.md)) or create a new repository on your personal GitHub dashboard. Specify its name (this can be the name of the App) and provide a short desription. In order for our system to access files from your repository it has to be `public`, also for traceability and collaboration in the platform this openness is beneficial. Furthermore, we recommend to add a README file, which can hold your App Documentation and add a .gitignore file. You can choose a license here, but this will be required of you also later in the process of submitting the App to MoveApps. Make sure that you activate to be notified of all activity in the repository (see Watch/Unwatch after creating the repository), so that any issues that users might report about the App will reach you.

<kbd>![](files/Github_newRepo.png ':size=600')</kbd>

## Clone your GitHub repository
To comfortably work on your local system and develop your code with the [Copilot-R-SDK](copilot-r-sdk.md) or [Copilot-Rshiny-SDK](copilot-shiny-sdk.md), you can clone your GitHub repository. This can be done directly in RStudio or by using GitHub Desktop.

### with RStudio
Open RStudio and Create a new Project from Git Version Control: `File > New Project > Version Control > Git`. Then enter the URL of your GitHub repository (`Code > Local > HTTPS` in GitHub) and select your local project directory name. That's it, you can now use RStudio to develop and test your code locally and push and pull updates to your project via the top right window `Git` which indicates files that have changed and can be pushed and pulled from/to your GitHub respository. Note that before such updates, it is required to commit your changes with a small description of the changes.

<kbd>![](files/Rstudio_Clone.png)</kbd>
<kbd>![](files/Rstudio_GitOverview.png)</kbd>

### with GitHub Desktop
Another way to work on your local system is by using the GitHub Desktop, which is a software programme often used for Version Control with Git and GitHub. It requires the installation of that programme. Once you have opened GitHub Desktop you can clone a GitHub repository under `File > Clone repository`, where you can select your repositories (once your account is connected) and clone them to local folders. New files will then be highlighted to be pushed and pulled whenever you open GitHub Desktop. Also here commits and descriptions thereof are required, very comfortably in a small window below the list of changed files.

<kbd>![](files/GitDesktop_Clone.png)</kbd>
<kbd>![](files/GitDesktop_Overview.png)</kbd>