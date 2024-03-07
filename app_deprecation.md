# App deprecation

An App that has been replaced by an improved, different App or that cannot be maintained any more, can be deprecated by the App developer. That means that the App cannot be added any more to new Workflows, but still runs in already existing Workflows.

![](../files/deprecate_button.png)

To deprecate an App, the App developer must go to the App management site under `My Apps`. At the top, to the left of the buttons `Add Version` and `Edit Details`, you see the yellow button `Deprecate App`. Clicking it, the deprecation dialog opens and promts (i) to provide a small message that will be shown in the App details to any user of the App and (ii) to select one of the available Apps that can be advised to the user as replacement. For quick recognition, the titles of deprecated Apps appear stroke through in any appearance on the platform. Beware that App deprecation is permanent and that Apps cannot be reactivated.

![](../files/deprecate_dialog1.png)
![](../files/deprecate_dialog2.png)
![](../files/appdetails_deprec.png)

The deprecated Apps will appear in the App browser upon request; see the slider down below in the list. In the My Apps overview of the App developer, the deprecated Apps are included, but can be excluded, also by a slider down below the list.

![](../files/browserWdeprecatedApps.png)

Public workflows that contain at least one deprecated App are marked as `deprecated` in the list. That does NOT mean that they are non-functional. They can still be copied/added to your Dashboard and executed. This is the only way that deprecated Apps can be used anew, which we must provide for reproducibility reasons. Most deprecated Apps will still be running as expected, but if they interact with outside ressources (e.g. Movebank), functionality cannot be guaranteed. Therefore, for new, independent analyses we recommend to replace the deprecated Apps in the Workflow. Note that such replacement might not be easily possible due to App compatibility problems if IO types of Apps differ. Consider the usage of [translator Apps](translator.md) or build a new workflow from scratch.

![](../files/deprec_publicWFs.png)



