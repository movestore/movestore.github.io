# How to include large files in apps?

## Summary 2025-05

- MoveApps ignores files provided by the app developer via git-lfs (default - can be overridden by app reviewer)
- App developer must provide its large files via GitHub release
- App developer is free to use git-lfs for its own development experience

## Details

1. Large files are a problem w/ git
1. The established handling is git-lfs. This is a nice experience for the developer.
1. Storing large files via git-lfs at github (w/ is the "normal" way for our app developers) is a problem from time to time as GitHub has a quota limit of [100GB bandwidth](https://docs.github.com/en/billing/managing-billing-for-your-products/managing-billing-for-git-large-file-storage/about-billing-for-git-large-file-storage#included-bandwidth-and-storage-per-month) [per month](https://docs.github.com/en/repositories/working-with-files/managing-large-files/about-storage-and-bandwidth-usage).
1. As MoveApps hits this limit we established the workaround to store large files in the GitHub release and delete it from there via HTTP during the app build

This is an example error message hitting the github limit:

```
Downloading data/local_app_files/provided-app-files/raster_file/raster.tif (401 MB)
Error downloading object: data/local_app_files/provided-app-files/raster_file/raster.tif (b0ca341): Smudge error: Error downloading data/local_app_files/provided-app-files/raster_file/raster.tif (b0ca3413fec67b05d4ab69939c1a359b640af700bd89c169174205993e44fccf): batch response: This repository exceeded its LFS budget. The account responsible for the budget should increase it to restore access.
```

## Receipt

```
FROM registry.gitlab.com/couchbits/movestore/movestore-groundcontrol/co-pilot-v3-r:sdk-v3.2.0_geospatial-4.4.2_3888

# large provided files handling
ADD --chown=$UID:$GID \
https://github.com/smthfrmn/basic_rsf/releases/download/sf.testing.v3/global_human_modification.tif \
provided-app-files/global_human_modification/

# ! make sure no other command will override these files later in the dockerfile
# ! eg make sure to remove the (auto generated) line 
# ! `COPY --chown=$UID:$GID data/local_app_files/provided-app-files/global_human_modification/ provided-app-files/global_human_modification/`
```

Example apps:

- https://github.com/smthfrmn/basic_rsf/releases/tag/sf.testing.v3
- https://github.com/movestore/Add_Elevation: see release from 17 March 2023
- https://github.com/movestore/Add_Corine_Landcover2018: see first release
