# Share Workflows with other Users

For replication, collaboration or other joint work, it is possible to share your Workflow with other users.  A Workflow can be shared globally with all MoveApps users or specific users can be invited by their nickname. The recipients can load the privately shared or any public Workflow into their account and edit it there independently of the original Workflow and its creator. The Workflow will be available with all Apps in the same versions as shared by the creator originally, they can be updated by the receiving user (however, without the option to go back). Note that users have 30 days to accept a privately shared Workflow. Public Workflows stay available permanently untill the creator deletes them (note that public Workflows that are [published with a DOI](publish_workflow.md) cannot be deleted). 

## How to share your Workflow

To share one of your Workflows, you need to select `Share` in the Workflow menu at the `Your Workflows` overview, or in the menu in the Workflow instance next to the `Output` button.

<kbd>![](files/Share_WF_overview.png ':size=800x')</kbd>
<kbd>![](files/Workflow_menu.png ':size=200x')</kbd>


In the Share Workflow dialog you then have fill in several details.  

First, add a description to the Workflow.

Second, define with whom you want to share your Workflow. You can select to `Share with all users on MoveApps` (*Public share with all users*) and/or select one or more specific MoveApps users by searching for their nicknames (*Direct share with users*), that you should personally ask of the person(s) beforehand (users can find their nickname in their user `Profile`). Only users that have agreed that their nicknames can be used for this option during the registration process can be found here. It is possible to update this setting in the user `Profile`. When specific users are invited to receive a shared Workflow, they will receive an e-mail about the invitation.
When sharing with one or more specific MoveApps users remember to add a message that accompanies your invitation to point out why you are sharing it.

<kbd>![](files/allow_profile_discov.png ':size=800x')<kbd/>

Third, you can select which of the Workflow Instances you want to share. The selection of at least one of them is mandatory.

Fourth, the Datasource Message is by default filled in with the settings of the data source selection App of all selected Workflow instances. This allows the new user to download the same data from e.g. Movebank as the original user, but with their own private account. The data message appears during the configuration of the Data Source App once the Workflow has been loaded/accepted (see below), so that the user can easily adapt it. Note that the data source details can be edited, replaced or deleted before sharing.

Finally, it is possible to add a url to a Workflow (`Add Reference`), which can, for example, point towards a description of the Workflow, a paper that is using it or a more thorough methods description.

Once finished, please press `Save & Share Workflow`. You will receive an email containing the information of the shared Workflow, this way you can keep track which Workflows you have shared with which user.

<kbd>![](files/Share_WF_1_25.png ':size=1200x')
![](files/Share_WF_2_25.png ':size=1200x')</kbd>

!\> Note that as the original owner of a public Workflow, you can edit the title and description of the Workflow and all shared Workflow Instances, the shared message and Workflow references/urls at any time under `Details` in the public Workflow table (use the `Edit` button at the top). Note that the shared Workflow itself cannot be changed after sharing it, and that changes to the Workflow in the owner's private Workflow overview will not be incorporated in the shared Workflow.

!\> When publicly sharing a Workflow that is based on data that is not publicly available, please add an additional Workflow Instance that runs with publicly available data. This will enable other users to make optimal use of your public Workflow.


## How to accept a shared Workflow

If a Workflow has been shared with you by another MoveApps user it will appear in the Workflow overview. It states the nickname of the user that invited you, the names of the Workflow and Workflow Instances as well as both messages. You can decline or accept the invitation. At acceptance the Workflow will be added to your account's list. Note that at the bottom of the Workflow invitation it is indicated for how long it will stay available for you to accept. When accepting the invitation, it appears in the Category `Imported Directly Shared Workflows`. The Category can be adapted afterwards. Each Workflow Instance will contain also the personal message of the user sharing the Workflow with you. This message can be removed at any time, be aware that if you remove it from one instance, it will be removed from all instances of that workflow. 


<kbd>![](files/Share_invite_23.png ':size=600x')</kbd>

## How to find and add public Workflows

All available public Workflows are listed under "Public Workflows" in the Workflow overview. They are sorted by category and can be searched for by the Workflow title and description. They can be filtered by category and by the nickname of the user that shared the Workflow. By clicking on the WOrkflow name you are directed to the details overview (title, description, included Apps, shared by and publish date ) and press `Add` if you want to add it to your list of Workflows. This will create a local copy of the Workflow that you can independently edit. The added public Workflow will initially be stored in the Category `Imported Public Shared Workflows`, which can be adapted afterwards. All public Workflow details pages have stable links that can be used for communication.

<kbd>![](files/PWF_overview_25.png ':size=1000x')</kbd>

!\> Note that public Workflows that contain at least one [deprecated App](app_deprecation.md) are marked as "deprecated", but can still be added to your Dashboard and used (for ensuring reproducibility).


## Configuration of data source Apps in added Workflows

If accepting a public or privately shared Workflow into your dashboard, it is important to understand that any data source Apps (e.g. Movebank Location, Upload File from Local System or Workflow Product Retriever) need to be configured, before the Workflow can be run. This is important to keep data integrity and security. A pop-up message is pointing this out when adding the Workflow to your dashboard.

In the Workflow Instance view, all data source Apps show a blue message that the data source settings have to be configured. If a red dot is attached to it, the App has not been configured at all. When clicking the message, you are directed to the settings of the App and can configure them according to the data source message that is presented on the left of the window. Once all data source Apps of all Instances of the accepted Workflow have been configured, you can delete the data source message and the blue message indication will disappear from the Apps in the Workflow Instance view.

<kbd>![](files/Share_datasource_msg.png ':size=800x')</kbd>

<kbd>![](files/Share_datasource_1.png ':size=1000x')</kbd>