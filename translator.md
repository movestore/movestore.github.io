# Connect Apps of different types with `Translator` Apps

!\>  **Caution!**  Unexpected difficulties with the Translator App `move2_loc to MovingPandas` might lead to errors in new workflows that contain Python Apps. Many of the Python Apps currently give errors, the developers of these Apps are working on new versions to get these Apps working again. Meanwhile, please continue using your old Workflows (with the deprecated `Movebank Location move1` starting App). Please bear with us, we will inform you when the updates are completed. *(20 Dec 2023)*

## Input and output types in MoveApps

The Apps on MoveApps are based on different programming languages (currently R and Python), and each App uses functions that require a specific input type and provide a specific output type. Thus, each App is characterised by those two input/output (IO) types.

In the general overview of all the Apps (`APP BROWSER` tab in the header menu) these IO types are specified in the rightmost column "Input/Output".

<kbd>![](files/Input_Output.png ':size=200x')</kbd>

Before you start a Workflow, it is advisable to use the `APP BROWSER` to find the Apps that you would like to use for your analysis. Some IO types can be translated into each other and Apps of those types can therefore be used in the same Workflow. For connecting Apps of different IO types, use the `Translator` Apps.

## Connecting Apps of different types

When adding a new App to the Workflow by clicking on the `+` only those Apps that match the input/output type(s) of the adjacent App(s) will appear in the list.

Note the message above the list of Apps: In our example, it is informing that only Apps that have an input and output type `move::moveStack` are listed. 

<kbd>![](files/FilteredApps_WF.png ':size=1000x')</kbd>

There are a series of Apps in the category `Translator` within the class `Helper` to enable the usage of the wide spectrum of available Apps. These Apps translate data types so Apps that have different IO types can be used in one Workflow. After adding a `Translator` App to the Workflow, Apps with another IO type can be added.

In the "Input/Output" column of a `Translator` App you can quickly see what output/input types are being translated.

<kbd>![](files/TranslatorExample.png ':size=500x')</kbd>

!\> Be aware that not all input/output types can be translated into all other types. These have to be equivalent. E.g. `ctmm::telemetry.list` cannot be translated into a `move2::move2_nonloc` as the first contains location data (e.g. GPS) and the second contains non-location data (e.g. acceleration).

