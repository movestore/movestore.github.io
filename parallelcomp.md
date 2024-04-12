# Parallel Computation within MoveApps

It is possible to programme Apps in a way as to enable parallel computing of suitable tasks in MoveApps. The MoveApps nodes contain 8 cores each that can be used. Beware that this might possibly lead to waiting times in running other workflows.

For R Apps we suggest usage of the package "future" with the option 'cluster': ` future::plan("cluster")`. Note that the option 'multisession' does not work in Docker containers ([see more](https://github.com/dmpstats/moveapps-check-parallel/issues/2)), so is not an option for MoveApps Apps. For more details of how to go for parallel computing look at this testing App of Bruno Caneco, a most helpful collaborator from Scotland: https://github.com/dmpstats/moveapps-check-parallel.

