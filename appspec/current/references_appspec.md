# References
References of various types can be added in the [appspec.json](appspec.md) file to make background information about your App or Workflow accessible. Only certain reference types can be used, please consult the list below. In the descriptions `A` refers to the App or the Workflow and `B` is another digital resource that is referenced.

If your App heavily depends on a specific package/library to function, adding this reference as `Requires` is highly appreciated. It might motivate e.g. R-package developers helping to improve the App.


### Reference types
Please consider including a reference to e.g. an R-package if your App depends heavily on (a) specific function(s) from it. Use the **Requires** reference type (see below). Also indicating papers that describe the developed methods is highly recommended, e.g. using the reference type **IsDescribedBy**.

- **IsCitedBy/Cites** indicates that B includes A in a citation/indicates that A includes B in a citation. Use this relation if you know of another resource that uses the App/Workflow or if the App/Workflow is based on another piece of software/work that you want to credit.
- **IsSupplementTo/IsSupplementedBy** indicates that A is a supplement to B/indicates that B is a supplement to A. Use this relation if the App/Workflow can be used as supplementary material to another resource or publication. The App/Workflow can also be supplemental material to a publication if it supports it, but isn't essential for its understanding.
- **IsContinuedBy/Continues** indicates A is continued by the work B/indicates A is a continuation of the work B. Use this relation to link to a resource that continues ideas of the App/Workflow in another resource (e.g. a new App). For new versions of the same App/Workflow please use the relations 'IsNewVersionOf/IsPreviousVersionOf'.
- **Describes/IsDescribedBy** indicates A describes B/indicates A is described by B. Use this relation to link to a publication in which the App/Workflow is described, e.g. as a method used in your research.
- **HasMetadata/IsMetadataFor** indicates resource A has additional metadata B/indicates additional metadata A for a resource B. Use this relation to link to a resource that includes additional meta information about the App/Workflow. To reference a documentation please use the relation 'IsDocumentedBy' instead.
- **HasVersion/IsVersionOf** indicates A has a version B/indicates A is a version of B. Use this relation to link to another version of the App/Workflow. To indicate a specific relation between the versions, please use the relation 'IsNewVersionOf/IsPreviousVersionOf'.
- **IsNewVersionOf/IsPreviousVersionOf** indicates A is a new edition of B, where the new edition has been modified or updated/indicates A is a previous edition of B. Use this relation to link to another version of the App/Workflow. If you know the type of the version relation (e.g. if another App is a newer version) please use this relation as it is more specific than the general 'VersionOf' relation. App versions in MoveApps are automatically linked to your App.
- **IsPartOf/HasPart** indicates A is a portion of B/indicates A includes the part B. Use this relation if the App/Workflow is a part of a bigger collection and you want to link to it. If on the other hand there are specific smaller parts of the App/Workflow published elswhere, you can indicate this by using the 'IsPartOf' relation.
- **IsReferencedBy/References** indicates that A is referenced by B/indicates that A references B.
- **IsDocumentedBy/Documents** indicates B is documentation about or explaining A (e.g. software documentation)/indicates A is documentation about B (e.g. software documentation). Use this relation to link to another document that serves as a documentation for the App/Workflow. This is an addition to the App documentation that you submit for an App via Git.
- **IsCompiledBy/Compiles** indicates that A is compiled by B/indicates that A compiles B.
- **IsVariantFormOf/IsOriginalFormOf** indicates A is a variant or different form of B/indicates A is the original form of B. Use this if the App/Workflow is a result of a variation of another App/Workflow or if other Apps/Workflows are created with your App/Workflow as a base.
- **IsIdenticalTo** indicates that A is identical to B. Use this relation to link to other locations where you might have published the App/Workflow additionally in the exact same form.
- **IsReviewedBy/Reviews** indicates that A is reviewed by B/indicates that A is a review of B. Use this relation to link to a document that functions as a review for the App/Workflow. This could be the assesment of a peer reviewer or colleague that thoroughly evaluated the App/Workflow and published the result.
- **IsDerivedFrom/IsSourceOf** indicates that A is derived from B/indicates that A is a source of B.
- **IsRequiredBy/Requires** indicates A is required by B/indicates A requires B. Use this relation to link to a resource that the App/Workflow requires to be used. This might be a specific package or library that you want to highlight. It is not necessary to add this information as the metadata for each App automatically includes all used software packages, but if your App depends heavily on a specific package to function, adding this reference is highly appreciated.
- **Obsoletes/IsObsoletedBy** indicates A replaces B/indicates A is replaced by B. Use this to signal that the App/Workflow makes another resource obsolete. This makes it a special relation of a version. Use this if you want to signal that the related resource should not be used anymore in the future.

#### Examples

```json
{
  "settings": [],
  "references":[
  {
    "type": "IsReferencedBy",
    "note": "Darwin, C. 1859. The Origin of Species. John Murray, London",
    "url": "http://www.testpage.org"
  }
 ]
}
```

!\> Note that it is important to include `http(s)://` in the url. The [Settings Editor](https://www.moveapps.org/apps/settingseditor) can be used to test whether your reference statements are consider to be valid. 