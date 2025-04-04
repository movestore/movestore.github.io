# MoveApps User Manual

[MoveApps](https://www.moveapps.org/ ':ignore') serves as a platform that allows the exchange and easy use of code for the [**analysis of movement data**](https://www.moveapps.org/imprint#Scope ':ignore').

Code developers (i.e. anyone who creates code to process and analyse movement data) are encouraged to share (a slightly adapted version of) their movement analysis code, which other people can then use *without knowledge of programming*. Users can configure and stitch together analysis Apps (i.e. modules that perform an analysis step) to create a Workflow that imports and analyses their data. MoveApps runs fully online and therefore, users do not need to install any software on their computer. It is possible to directly download and analyse data from the [Movebank database](http://www.movebank.org ':ignore'), or to upload files.

Check out our **[video tutorials](video_tutorials.md)** and the information below to find out how to get started.


## Navigating the MoveApps website

The navigation bar at the top of the MoveApps website contains several buttons. If not all buttons are shown, they can be accessed through the menu on the right.

<kbd>![MoveApps navigation bar](files/MoveApps_navigationbar.png ':size=800x')</kbd>

- **App browser**: here you find an overview of all existing Apps by Categories and other information.
- **News**: important new features and exciting MoveApps news will be presented here.
- **User manual**: the user manual contains all explanation you need to get started on MoveApps.
- **Forum**: this links to the MoveApps GitHub page where you can start or contribute to existing discussions.
- **Get involved**: here you can find information on how you can contribute to MoveApps by creating Workflows or Apps, or by donating.
- **Login**: here you can log in to your account.
- **Register**: if you do not yet have a MoveApps account, you can create one here. It is very easy and it is free.

After logging in, the header also contains buttons to your Dashboard and to your profile.
- **Dashboard**: this is your place to go to start creating Workflows or to submit new Apps.
- **Profile**: here you can change the information in your account.


## Getting started - using existing Apps

If you want to use existing MoveApps Apps to analyse your data, please take a look at the **Workflows** section in the menu of the MoveApps manual.

<kbd>![MoveApps menu Workflows](files/Manual_Menu_Workflows.png ':size=275x')</kbd>

Here, you will find tutorials on how to build a Workflow (i.e. a sequence of Apps to import, process and analyse your data) and explanations on other Workflow features. We recommend starting with [Hello world! - A Workflow example](hello_world_workflow.md) and [How to create a Workflow](create_workflow.md).

To find out which Apps are currently available to be used, take a look at the [App browser](https://www.moveapps.org/apps/browser ':ignore').


## Getting started - creating new Apps
Code developers (i.e. anyone who creates code to process and analyse movement data) are encouraged to upload new Apps. Currently, we support R, R-Shiny and Python Apps. These are meant to be provided in such a way that standard movement data sets of animals or other moving objects can be analysed. If you want to submit a new App, please take a look at the **Apps** section in the menu of the MoveApps manual.

<kbd>![MoveApps menu Apps](files/Manual_Menu_Apps.png ':size=275x')</kbd>

We recommend you to take a look at the [Coding best practises](best_practices_coding.md) and the information on [Input/Output types](IO_types.md). We have created **R Tutorials** for R and R-Shiny Apps, and **Python Tutorials** for Python Apps. When starting to write an App, please carefully follow the steps [to create an R or R-Shiny App](create_app.md), or [to create a Python App](create_py_app.md).
