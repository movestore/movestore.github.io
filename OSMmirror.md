# Internal Open Street Map mirror

Since February 2024, MoveApps has an integrated mirror of the Open Street Map files that can be adressed by an Overpass API. This API can be used at the run time of the App on the platform. For testing, please use one of the public endpoints. 

The environmental variable of the MoveApps OSM mirror is must be adressed as "OVERPASS_API".

As an example, using the R package `osmdata` the OSM mirror can be adressed as follows:

```
library(osmdata)
set_overpass_url(Sys.getenv("OVERPASS_API", "https://overpass-api.de/api/interpreter"))
```

