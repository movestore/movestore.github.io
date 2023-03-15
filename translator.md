# Connecting Apps with `Translator` apps

## How MoveApps works

The Apps are based on different languages (`R` and `Python`), and within each language each App uses functions that require a specific input type and provide a specific output type.

In the general overview of all the Apps (`APPS` tab at the top right corner) these specific input and output types are specified in the column "Input/Output".
![](../files/Input_Output.png)

Before you start a Workflow, it is advisable to use the general overview of the Apps (`APPS` tab at the top right corner) to find the Apps that you would like to use for your analysis, and than use the `Translator` Apps accordingly if needed (more details below).

## Connecting the Apps

When adding a new App to the Workflow by clicking on the `+` only those Apps that match the input/output type will appear in the list.

Note the message above the list of Apps: It is informing that only Apps that have an input and output type `move::movestack` are listed. ![](../files/FilteredApps_WF.png)

There are a series of Apps in the category `Translator` within the class `Helper` to enable the usage of the wide spectrum of available Apps. These Apps translate data types so Apps that have different input/output types can be used in one workflow. After adding a `Translator` App to the Workflow, Apps with another output/input type can be added.

In the "Input/Output" column of a `Translator` App one can quickly see what output/input types are being translated.
![](../files/TranslatorExample.png)

!\> Be aware that not all input/output types can be translated into all other types. These have to be equivalent. E.g. `ctmm::telemetry.list` cannot be translated into a `move2::move2_nonloc` as the first contains location data (e.g. GPS) and the second contains non-location data (e.g. acceleration data).
