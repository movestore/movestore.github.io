# Dependencies
In this part of the [appspec.json](appspec.md) file, all libraries on which the App depends have to be listed. These are dependencies that the App needs for its construction and/or runtime. For each library, you can optionally define which version must be loaded.

!\> Special rules apply to certain libraries (e.g. shiny); these can only be required in a certain version.

!\> Note that for **Python Apps** this part of the appspec.json is not necessary, because all dependencies are collected from the Conda dependency management file `environment.yml`.

#### Example
Following is an example of the dependencies of an R App that requires libraries (packages) `prettyunits` and `futile.logger`.

```json
{
  "settings": [],
  "dependencies": {
    "R": [
      {
        "name": "prettyunits",
        "version": "1.1.1"
      },
      {
        "name": "futile.logger"
      }
    ]
  }
}
```