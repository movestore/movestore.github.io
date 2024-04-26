# People
For future publication and citability, people involved in the development of the App shall be listed. Each person can have one or more `roles` that must be selected from the below list. Note that it is mandatory to provide one person that is `author` of the App and that this person has a valid e-mail address assigned. The same roles can be assigned to people involved in a published Workflow. Note that it is possible to also add an ORCID iD and affiliations.

### List of roles
- **author**: *a person, family, or organization responsible for creating a work that is primarily textual in content, regardless of media type. Use also for persons, etc., creating a new work by paraphrasing, rewriting, or adapting works by another creator such that the modification has substantially changed the nature and content of the original or changed the medium of expression.* E.g. the/a developer of an App or the/a creator of a Workflow. Use this role for the main people responsible for an App/Workflow. One of the authors needs to be the creator (and maintainer) of an App, see below.
- **compiler**: *a person, family, or organization responsible for creating a new work through the act of compilation, e.g., selecting, arranging, aggregating, and editing data, information, etc.* E.g. a person who wrote existing code into an App.
- **copyright holder**: *a person or organization to whom copy and legal rights have been granted or transferred for the intellectual content of a work.* E.g. the person that holds intellectual property rights for an App or a Workflow.
- **creator**: *a person or organization responsible for the intellectual or artistic content of a resource.* E.g. the main developer of an App or the creator of a Workflow. The person that had the idea for the App/Workflow, has implemented it and maintains it (in case of an App). It is mandatory that each App has a creator.
- **contributor**: *a person, family or organization responsible for making contributions to the resource. If a more specific role is available, prefer that, e.g. author, compiler.* E.g. a person that contributed code to an App or helped with creating a Workflow, but is not (one of) the main person(s) responsible.
- **contractor**: *a person or organization relevant to a resource, who enters into a contract with another person or organization to perform a specific task.* E.g. a person or organisation that was hired to conribute to an App.
- **data contributor**: *a person or organization that submits data for inclusion in a database or other collection of data.* E.g. a person that owns/published the data sets that a Workflow runs on.
- **funder**: *a person or organization that furnished financial support for the production of the work.* E.g. a single person responsible for funding of an App or Workflow. Please use the [funding fields](appspec/current/funding_appspec.md) for funding by organisations.
- **reviewer**: *a person or organization responsible for the review of a book, motion picture, performance, etc.* E.g. a  person that reviewed the App/Workflow or executed quality control.
- **translator**: *A person or organization who renders a text from one language into another, or from an older form of a language into the modern form.* E.g. a person that translates documentation and supplementary material for an App or Workflow from one language to another.

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