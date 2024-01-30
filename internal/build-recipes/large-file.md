# How to include large files into apps?

```
FROM registry.gitlab.com/couchbits/movestore/movestore-groundcontrol/co-pilot-v1-r:geospatial-4.2.2-3188

# store the large file in the GitHub repository - DO NOT include it into the repository (SCM)
ADD https://github.com/movestore/Add_Elevation/releases/download/v2.0/us_nga_egm2008_1.tif .
# adjust permission
USER root
RUN chown $UID:$GID us_nga_egm2008_1.tif
```

Example apps:

- https://github.com/movestore/Add_Elevation: see release from 17 March 2023
- https://github.com/movestore/Add_Corine_Landcover2018: see first release
