# Artefacts

!> This attribute is deprecated / not required in the appspec.json any more. It was dropped at `appspec.json` version `1.2`. Note that artefacts can still be used, they are now shown without this setting to be activated.

If the App creates [Artefacts](copilot-r-sdk.md#Artefacts) this must be stated in the `appspec.json`. The type and amount of artefacts do not have to be defined. Note that also with this setting, it is possible that (e.g. if there are no data for an animal) no artefact are returned without inducing an error.

#### Example

```json
{
  "settings": [],
  "createsArtifacts": true
}
```