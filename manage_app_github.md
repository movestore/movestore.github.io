# Manage your MoveApps Apps with GitHub and RStudio

## Create GitHub repository
On your personal GitHub dashboard create a new repository. Specify its name and provide a short desription. If you have connected your GitHub account in MoveApps, you can use `public`as well as `private` repositories, we recommend `public` for tracability and collaboration in the platform. Furthermore, we recommend to add a README file, which can hold your App Documentation and add a .gitignore file. You can choose a license here, but this will be required of you also later in the process of submitting the App to MoveApps.

![](../files/Github_newRepo.png)

## Clone your GitHub repository
To comfortably work on your local system and develop your code with the [Copilot-R-SDK](copilot-r-sdk.md) or [Copilot-Rshiny-SDK](copilot-shiny-sdk.md), you can clone your GitHub repository. This can be done directly in R Studio or using the GitHub Desktop.

### with R Studio
Open RStudio and Create a new Project from Git Version Control: `File > New Project > Version Control > Git`. Then enter the URL of your GitHub repository and select your local project directory name. That's it, you can now use RStudio to develop and test your code locally and push and pull updates to your project via the top right window `Git` which indicates files that have changed and can be pushed and pulled from/to your GitHub respository. Note that before such updates, it is required to commit your changes with a small description of the changes.

![](../files/Rstudio_Clone.png)
![](../files/Rstudio_GitOverview.png)

### with GitHub Desktop
Another way to work this is using the GitHub Desktop, which is a software programme often used for Version Control with Git and GitHub. It requires the installation of that programme. Once you have opened GitHub Desktop you can clone a GitHub repository under `File > Clone repository`, where you can select your repositories (once your account is connected) and clone them to local paths. New files will then be highlighted to be pushed and pulled whenever you open GitHub repository. Also here commits and descriptions thereof are required, very comfortably in a small window below the list of changed files.

![](../files/GitDesktop_Clone.png)
![](../files/GitDesktop_Overview.png)