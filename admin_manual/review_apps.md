# Review Apps before building

## Basic steps
1. Go to `User Apps` > `Review Apps`
1. The Apps listed under `....` are ready for revision. Their status is described under `Version status`: `UNKOWN`, `BUILDING`, `DONE`, `ERROR`
1. Select the App 
1. Check code and adjust docker if needed (and save)
1. If new [category](admin_manual/app_categoriess.md#When-new-category-is-handed-in-with-App-submission) or new [IO type](admin_manual/new_IO.md) was submitted go to respective sections. 
1. Build App
1. Release for trial if build was success
1. If problems were found during review of the code, or the build gives an error we cannot fix: Reject App

## App review and docker adjustments
### First submission of App
- check:
  - R/Python code: eyeball code to see if it generally looks sound
  - Readme: check that it exists (not just template), and that it is complete. If there is no previous agreement with the developer, reject App with the message that the documentation has to be completed
  - Appspec: if R App, check that libraries listed here correspond to libraries listed in the R code. Check that keywords exist. Check that libraries listed are not from base (base R libraries cannot be installed). If a base library is listed, delete it from the docker and inform the developer to please remove it from the appspecs
- by skimming though the readme, evaluate if the chosen categories are adequate

### Submissions of App versions
- if developer is well known, probably no need to check the source code
- if developer is known to sometimes forget things or not be the most accurate coder, check code, probably last commits to see what has changed
- ALWAYS compare to last version to see if manual adjustments have happend in the docker
- if a specific library needs to be forced to be installed again (and not taken from cash) than specify the exact version of the library to be installed (`remotes::install_version(“ctmm”, VERSION_TO_BE_USED)`).
- if the library needs to be installed from git again, which does not work with versioning...to be solved

### Manual edits to the docker

#### System dependencies

System dependencies need to be installed for some R libraries. Here the list of the current known ones: 

**`ctmm, amt`**

```
USER root:root
RUN apt-get update && apt-get install -y \
   libmpfr-dev \
   && apt-get clean
USER $UID:$GID

```

**`webshot2`**

```
USER root:root
RUN apt-get update && apt-get install -y --no-install-recommends \
        wget gnupg ca-certificates \
    && wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub \
        | gpg --dearmor -o /usr/share/keyrings/google-linux.gpg \
    && echo "deb [arch=amd64 signed-by=/usr/share/keyrings/google-linux.gpg] https://dl.google.com/linux/chrome/deb/ stable main" \
        > /etc/apt/sources.list.d/google-chrome.list \
    && apt-get update && apt-get install -y --no-install-recommends \
        google-chrome-stable \
    && rm -rf /var/lib/apt/lists/*
USER $UID:$GID

```

#### Adding large auxiliary files
Large auxiliary files can be appended to a release. This needs to be specified in the docker. The developer needs to inform about the existence of these files, and which correspond to which stated provided file in the `appspecs.json`. More details [here](admin_manual/large-file.md).

Example:
```
# large provided files handling
ADD --chown=$UID:$GID \
https://github.com/nilanjanchatterjee/basic_rsf/releases/download/v3.0/global_human_modification.tif \
provided-app-files/global_human_modification/
ADD --chown=$UID:$GID \
https://github.com/nilanjanchatterjee/basic_rsf/releases/download/v3.0/land_cover_type.tif \
provided-app-files/land_cover_type/
```

#### Usage of src/app folder

If the Rcode is distributed among several files, the following line has to be uncommented in the docker:

```
# COPY --chown=$UID:$GID src/app/* ./src/app/
```


## Errors

If the build runs into an error, open the logs:
- if the message says that no logs can be shown, rebuild the app
- if the error is that a library cannot be installed or has not been installed
  - check if the library is base, if yes exclude it from the docker
  - check if the library has system dependencies that need to be installed
  - for Python apps, users wishing to depend on apps that are not on `conda-forge` must be installed by pip in `environment.yml`. If these exist on PyPI, they can be installed by name. If installing from GitHub, provide the HTTPS path to the library repository:

```
dependencies:
  ...
  - pip
  - pip:
    - my-python-library
    - 'my-python-library @ git+https://github.com/user/my-python-library.git'
```
