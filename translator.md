# Connect Apps of different types with `Translator` Apps

!\>  **Caution!**  Unexpected difficulties with the Translator App moveStack to MovingPandas might lead to errors in new workflows that contain Python Apps. We try to solve this asap, but might only be able to finalise changes in January. Meanwhile, please use your old Workflows (with Movebank move1 starting App). Please bear with us, we will inform you when the updates are completed. *(20 Dec 2023)*

## How MoveApps works

The Apps on MoveApps are based on different programming languages (`R` and `Python`), and within each language each App uses functions that require a specific input type and provide a specific output type. Thus, each App is characterised by those two input/output (IO) types.

In the general overview of all the Apps (`APP BROWSER` tab at the top right corner) these IO types are specified in the rightmost column "Input/Output".

![](../files/Input_Output.png)

Before you start a Workflow, it is advisable to use the general overview of the Apps (`APP BROWSER` tab at the top right corner) to find the Apps that you would like to use for your analysis. Some IO types can be translated into each other and Apps of those types can therefore be used in the same workflow. For translations between IO types use the `Translator` Apps (more details below).

## Connecting Apps of different types

When adding a new App to the Workflow by clicking on the `+` only those Apps that match the input/output type(s) of the adjacent App(s) will appear in the list.

Note the message above the list of Apps: In our example, it is informing that only Apps that have an input and output type `move::movestack` are listed. ![](../files/FilteredApps_WF.png)

There are a series of Apps in the category `Translator` within the class `Helper` to enable the usage of the wide spectrum of available Apps. These Apps translate data types so Apps that have different IO types can be used in one workflow. After adding a `Translator` App to the Workflow, Apps with another IO type can be added.

In the "Input/Output" column of a `Translator` App one can quickly see what output/input types are being translated.
![](../files/TranslatorExample.png)

!\> Be aware that not all input/output types can be translated into all other types. These have to be equivalent. E.g. `ctmm::telemetry.list` cannot be translated into a `move2::move2_nonloc` as the first contains location data (e.g. GPS) and the second contains non-location data (e.g. acceleration).

