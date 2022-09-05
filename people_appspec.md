# People
For future publication and citability, people involved in the development of the App shall be listed. All people can have one or more `roles` that must be selected from the below list. Note that it is mandatory to provide one person that is `author` of the App and that this person has a valid Email address assigned. The same roles can be assigned to people involved in a published workflow.

### List of roles

- **author** e.g. the developer of an App or the creator of a workflow. Use this role for the main people responsible for an App/workflow. (A person, family, or organization responsible for creating a work that is primarily textual in content, regardless of media type. Use also for persons, etc., creating a new work by paraphrasing, rewriting, or adapting works by another creator such that the modification has substantially changed the nature and content of the original or changed the medium of expression.)
- **copyright holder** e.g. the person that holds intellectual property rights for an App/ a workflow. (A person or organization to whom copy and legal rights have been granted or transferred for the intellectual content of a work.)
- **creator** e.g. the developer of an App or the creator of a workflow. Semantically synonymous to author. Use author instead. (A person or organization responsible for the intellectual or artistic content of a resource.)
- **contributor** e.g. a person that contributed code to an App or helped with creating a workflow, but is not the main person responsible. (A person, family or organization responsible for making contributions to the resource. If a more specific role is available, prefer that, e.g. author, compiler.)
- **data contributor** e.g. a person that owns/published the data sets an analysis workflow runs on.(A person or organization that submits data for inclusion in a database or other collection of data.)
- **funder** e.g. a single person responsible for funding of an App or workflow. Please use the funding fields (below) for funding by organisations. (A person or organization that furnished financial support for the production of the work.)
- **reviewer** e.g. a  person that reviewed the App/workflow or executed quality control.(A person or organization responsible for the review of a book, motion picture, performance, etc.)
- **translator** e.g. a person that translates documentation and supplementary material for an App or workflow from one language to another. (A person or organization who renders a text from one language into another, or from an older form of a language into the modern form.)

#### Example

```json
{
  "settings": [],
  "people": [
    {
      "firstName": "Charles",
      "middleInitials": null,
      "lastName": "Darwin",
      "email": "creator@example.com",
      "roles": [
        "author",
        "creator"
      ],
      "orcid": null,
      "affiliation": null,
      "affiliationRor": null
    }
  ]
}
```