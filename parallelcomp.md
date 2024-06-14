# Parallel computing within MoveApps

It is possible to programme Apps in a way as to enable parallel computing of suitable tasks in MoveApps. The MoveApps nodes contain 8 cores each that can be used. Beware that this might possibly lead to waiting times in running other Workflows.

#### Parallel computing in R Apps
For R Apps we suggest usage of the package "future" with the option 'cluster': `future::plan("cluster")`. Note that the option 'multisession' does not work in Docker containers ([see more](https://github.com/dmpstats/moveapps-check-parallel/issues/2)), and therefore is not an option for MoveApps Apps. For more details of how to go for parallel computing in R Apps, look at this testing App of Bruno Caneco, a most helpful collaborator: https://github.com/dmpstats/moveapps-check-parallel.

#### Parallel computing in Python Apps
*Upcoming*