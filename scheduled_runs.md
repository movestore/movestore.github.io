# Scheduled Workflow Runs

Each Workflow instance can be scheduled to run regularely in an automatic mode at a fixed interval. We presently support daily, weekly and monthly intervals. Results of the scheduled runs have to be accessed in the MoveApps output overview. In the description field of your Workflow instance view an indication of the next scheduled run is provided.

![](../files/Schedule_WFI.png)

## How to Schedule Workflow Runs

Next to the "Start Workflow" button, you can select `Schedule Instance` from the drop down menu. Once this is selected, a window to select the run frequency opens. There you can select the time and day that your Workflow instance shall be run. Note that the times need to be provided in your local time zone, which is indicated in the yellow panel. To prevent our system from too many automatic runs, each Schedule is allowed to run up to 12 times before the user has to return to MoveApps and renew the quota. The already used times are indicated in the lower panel.

!> Note that pins to your Workflow instance are affecting the scheduled runs. So, if you want an automated new data download, unpin any Apps in your Workflow.

![](../files/schedule_button.png)

![](../files/Schedule_quota.png)