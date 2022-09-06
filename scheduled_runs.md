# Scheduled Workflow Runs and E-mail Notification

Each Workflow instance can be scheduled to run regularely in an automatic mode at a fixed interval. We presently support daily, weekly and monthly intervals. Results (products) of the scheduled runs have to be accessed in the MoveApps output overview, can be sent as E-mail attachments or can be accessed via secure Application Programming Interfaces (APIs), providing http links. In the description field of your Workflow instance view an indication of the next scheduled run is provided.

![](../files/Schedule_WFI.png)

## How to Schedule Workflow Runs

Next to the "Start Workflow" button, you can select `Schedule Instance` from the drop down menu. Once this is selected, a window to select the run frequency opens. There you can select the time and day that your Workflow instance shall be run. Note that the times need to be provided in your local time zone, which is indicated in the yellow panel. To prevent our system from too many automatic runs, each Schedule is allowed to run up to 30 (if daily) or 12 (if weekly or monthly) times before the user has to return to MoveApps and renew the quota. The already used times are indicated in the lower panel.

!> Note that pins to your Workflow instance are affecting the scheduled runs. So, if you want an automated new data download, unpin any Apps in your Workflow.

![](../files/schedule_button.png)

![](../files/Schedule_quota.png)

## Sending Links and Attachments via E-mail
It is possible to have an E-mail sent to the user's E-mail address after each of the automated workflow runs. Indicate this by ticking "Notify by E-mail" in the schedulig interface. It is possible to recieve E-mails with links to the output window in MoveApps, so that the files can be downloaded from the platform directly. If the data and/or results are not very sensitive, one can also select to have one or more output products attached to the E-mail. Indicate the products in the right column of the output overview screen and select the second option in the "Notify by E-mail" options in the scheduling interface.

Note that there is an App that has been developed to modify the E-mail message of the scheduled runs based on results from the workflow: the Email Alert App. It creates a text file called `email_alert_text.txt` that will be automatically added to the text of the E-mail message. It allows, e.g. an alert message to be sent if a certain condition is fulfilled in the analysed data set.

![](../files/schedule_email.png)

![](../files/output_email_api.png)