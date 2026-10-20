## Input and output types in MoveApps

The Apps on MoveApps are based on different programming languages (currently R and Python), and each App uses functions that require a specific input type and provide a specific output type. Thus, each App is characterised by those two input/output (IO) types. Find more details in the section [Input/Output types and App Categories](IO_types.md).

In the general overview of all the Apps (the [App Browser](https://www.moveapps.org/apps/browser ':ignore')) these IO types are specified in the rightmost column "Input/Output".

<kbd>![](files/Input_Output.png ':size=200x')</kbd>

## Connecting Apps of different types

Some IO types can be translated into each other and Apps of those types can therefore be used in the same Workflow. The translation happens automatically and Apps can just be added as any other. The Apps that can be added alongside a translator can also be identified in the App browser when clicking on the `+` in Workflow (see [How to Create a Workflow](create_workflow.md) for instructions on how to build a Workflow). Below the install button it will indicate if translator Apps are added automatically (see image below). This does not affect your Workflow, it is for the purpose of transparency.

<kbd>![](files/translator_browser.png ':size=100x')</kbd>

When a translation happens you will see a icon on the left side of your App container (see top image below). When you click on the icon the translators become visible (see bottom image below). We keep them visible, even though automatically added, as among other things these translator Apps can also run into errors.

<kbd>![](files/translator_icon.png ':size=900x')</kbd>

<kbd>![](files/translator_icon_expand.png ':size=900x')</kbd>


## Not all Apps can be connected

Not all input/output types can be translated into other types. For a translation to happen, the first and the translated-into App have to contain the same information, e.g. location data. Some Apps have one input type and transform the data into a output type that contains totally different information, e.g. input location data and output space use model. When activating the slider `Include incompatible Apps`in the App browser accessed from a Workflow, also Apps will be shown that exist, but cannot be used, because the input type does not match, and no translator exists. To find out which App is needed to link to one of these incompatible Apps, go to the documentation of the App and/or search for an example workflow in the `Public Workflows` section.

