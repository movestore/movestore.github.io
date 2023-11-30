Oct 2023

- when building R App that uses `move2`, use the latest base image for building the Docker image (`sdk-v3.x.y`).
    - the latest build image should already be suggested by the system - nothing special to consider. 
    - The above is only true for app-versions that are submitted AFTER updating the system. If there are any pending app-submission you have to adjust the `FROM ` line in the Dockerfile by yourself!
- when building R App that uses `move1` (update of an old App that does not use Template updates) the admin that builds the docker image has to actively select the last non-v3 (`co-pilot-v1`) base image.
    - make sure to choose the latest non-v3 _co-pilot version_ from the dropdown "_App will be based on co-pilot_" (selected version should start w/ `co-pilot-v1-`)
    - the `Dockerfile` must start w/ the latest non-v3 base image. As of 2023-11 it is 
        - for shiny Apps: `FROM registry.gitlab.com/couchbits/movestore/movestore-groundcontrol/co-pilot-v1-shiny:geospatial-4.3.2-3531` 
        - for R Apps: `FROM registry.gitlab.com/couchbits/movestore/movestore-groundcontrol/co-pilot-v1-r:geospatial-4.3.2-3531`.