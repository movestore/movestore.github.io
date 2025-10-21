# Dependencies
In this part of the [appspec.json](appspec.md) file, all libraries on which the App depends have to be listed. These are dependencies that the App needs for its construction and/or runtime. For each library, you can optionally define which version must be loaded. If libraries need to be installed from GitHub or GitLab, this needs to be specified. You can use any of the functions to install packages from the R library [`remotes`](https://remotes.r-lib.org/reference/index.html). See example below.

!\> Special rules apply to certain libraries (e.g. shiny); these can only be required in a certain version.

!\> Note that for **Python Apps** this part of the appspec.json is not necessary, because all dependencies are collected from the Conda dependency management file `environment.yml`.

#### Example
Following is an example of the dependencies of an R App that requires the R libraries (packages) `prettyunits` of a specific version, `futile.logger`, and `move2` installed from GitLab.

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
      },
      {
        "remotes": "install_git('https://gitlab.com/bartk/move2.git')"
      }
    ]
  }
}
```