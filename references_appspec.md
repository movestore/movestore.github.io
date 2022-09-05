# References
References of various types can be added to make background information about your App accessible. Only a certain list of reference types are permitted, please consult the list below. In the descriptions `A` refers to the App or the workflow and `B` is another digital resource that is referenced. References are not mandatory. The same types of references can be assigned to a published workflow.

If your App heavily depends on a specific package/library to function, adding this reference as `Requires` is highly appreciated. It might motivate e.g. R-package developers helping to improve the App.


### Reference types
Please consider including a reference to e.g. an R-package if your App depends heavily on (a) specific function(s) from it. Use the **Requires** reference type (see below). Also indicating papers that describe the developed methods is highly recommended, e.g. using the reference type **IsDescribedBy**.

- **IsCitedBy/Cites** use this relation if you know of another resource that uses the App/workflow or if the App/workflow is based on another piece of software/work and you want to credit. (indicates that B includes A in a citation/indicates that A includes B in a citation)
- **IsSupplementTo/IsSupplementedBy** use this relation if the App/workflow can be used as supplementary material to another resource or publication. The App/workflow can also be supplemental material to a publication if it supports it, but isn't essential for its understanding. (indicates that A is a supplement to B/indicates that B is a supplement  to A)
- **IsContinuedBy/Continues** use this relation to link to a resource that continues ideas of the App/workflow in another resource (e.g. a new App). For new versions of the same App/workflow please use the relations 'IsNewVersionOf/IsPreviousVersionOf'. (indicates A is continued by the work B/indicates A is a continuation of the work B)
- **Describes/IsDescribedBy** use this relation to link to a publication in which the App/workflow is described, e.g. as a method used in your research. (indicates A describes B/indicates A is described by B)
- **HasMetadata/IsMetadataFor** use this relation to link to a resource that includes additional meta information about the App/workflow. To reference a documentation please use the relation 'IsDocumentedBy' instead.(indicates resource A has additional metadata B/indicates additional metadata A for a resource B)
- **HasVersion/IsVersionOf** use this relation to link to another version of the App/workflow. To indicate a specific relation between the versions, please use the relation 'IsNewVersionOf/IsPreviousVersionOf'. (indicates A has a version (B)/ indicates A is a version of B)
- **IsNewVersionOf/IsPreviousVersionOf** use this relation to link to another version of the App/workflow. If you know the type of the version relation (e.g. if another App is a newer version) please use this relation as it is more specific than the general 'VersionOf' relation. App versions in MoveApps are automatically linked to your App.(indicates A is a new edition of B, where the new edition has been modified or updated/indicates A is a previous edition of B)
- **IsPartOf/HasPart** use this relation if the App/workflow is a part of a bigger collection and you want to link to it. If on the other hand there are specific smaller parts of the App/worklfow published elswhere, you can indicate this by using the 'IsPartOf' relation. (indicates A is a portion of B/indicates A includes the part B)
- **IsDocumentedBy/Documents** use this relation to link to another document that serves as a documentation for the App/workflow. This is an addition to the App documentation that you submit for an App via Git. (indicates B is documentation about/explaining A; e.g.points to software documentation/indicates A is documentation about B; e.g. points to software documentation)
- **IsVariantFormOf/IsOriginalFormOf** use this if the App/workflow is a result of a variation of another App/workflow or if other Apps/workflows are created with your resource as a base. (indicates A is a variant or different form of B/indicates A is the original form of B)
- **IsIdenticalTo** use this relation to link to other locations where you might have published the App/workflow additionally in the exact same form. (indicates that A is identical to B)
- **IsReviewedBy/Reviews** use this relation to link to a document that functions as a review for the App/workflow. This could be the assesment of a peer reviewer or colleague that thoroughly evaluated the App/workflow and published the result. (indicates that A is reviewed by B/indicates that A is a review of B)
- **IsRequiredBy/Requires** use this relation to link to a resource that the App/workflow requires to be used. This might be a specific package or library that you want to highlight. It is not necessary to add this information as the metadata for each App automatically includes all used software packages, but if your App depends heavily on a specific package to function, adding this reference is highly appreciated. (indicates A is required by B/indicates A requires B)
- **Obsoletes/IsObsoletedBy** use this to signal that the App/workflow makes another resource obsolete. This makes it a special relation of a version. Use this if you want to signal that the related resource should not be used anymore in the future. (indicates A replaces B/indicates A is replaced by B)

#### Examples

```json
{
  "settings": [],
  "references":[
  {
    "type": "IsReferencedBy",
    "note": "Darwin, C. 1859. The Origin of Species. John Murray, London",
    "url": "www.testpage.org"
  }
 ]
}
```