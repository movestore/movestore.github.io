# Scheduled Workflow Runs and E-mail Notification

Each Workflow Instance can be scheduled to run regularly in an automatic mode at a fixed time interval. MoveApps currently supports daily, weekly and monthly intervals. Results (products) of the scheduled runs can be accessed in the Workflow's `Output` overview, can be sent as e-mail attachments or can be accessed via secure Application Programming Interfaces (APIs), providing https links. In the description field of your Workflow Instance view an indication of the time of the next scheduled run is provided.

<kbd>![](files/Schedule_WFI.png 'size=300x')</kbd>

## How to Schedule Workflow Runs

In the Workflow drop-down menu (next to the `Output` button) you can select `Schedule Instance`. Once this is selected, a window to select the run frequency opens. There you can select the time and day that your Workflow Instance shall be run. Note that the times need to be provided in your local time zone, which is indicated in the yellow panel. To prevent our system from too many automatic runs, each Scheduled Instance is allowed to run up to 30 (if daily) or 12 (if weekly or monthly) times before the user has to return to MoveApps and renew the quota. The already used times are indicated in the lower panel.

!> Note that pins to your Workflow Instance are affecting the scheduled runs. So, if you want an automated new data download, unpin any Apps in your Workflow.

<kbd>![](files/schedule_button.png 'size=300x')</kbd>

<kbd>![](files/Schedule_quota.png 'size=700x')</kbd>

## Sending Links and Attachments via E-mail
It is possible to have an e-mail sent to the user's e-mail address after each of the automated Workflow runs. Indicate this by ticking `Notify by E-mail` in the scheduling interface. It is possible to receive e-mails with links to the output window in MoveApps, so that the files can be downloaded from the platform directly. If the data and/or results are not very sensitive, you can also select to have one or more output products attached to the e-mail. Indicate the products in the right column of the `Output` overview screen and select the second option in the "Notify by E-mail" options in the scheduling interface. Note that only artifacts (for example, ".csv", ".png", ".pdf" and ".mp4" files) will be attached to e-mails.

!\>  Note that products will be attached to the e-mail by default. If the data and/or results are very sensitive, please deselect the products in the `Output` overview screen.

<kbd>![](files/schedule_email.png 'size=700x')</kbd>

<kbd>![](files/output_email_api.png 'size=700x')</kbd>

Note that there is an App that has been developed to modify the e-mail message of the scheduled runs based on results from the Workflow: the ["Email Alert"](https://www.moveapps.org/apps/browser/362b42c7-d7a2-4fa6-8d08-b3ddae002f9e) App. It creates a text file called `email_alert_text.txt` that will be automatically added to the text of the e-mail message. It allows, e.g. an alert message to be sent if a certain condition is fulfilled in the analysed data set.