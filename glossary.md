# MoveApps Glossary

<style>p:has(> a[id]) { padding-left: 0.5cm; text-indent: -0.5cm; }</style>

➡ Jump to: [Movement ecology & tracking terms](#movement-ecology--tracking-terms)

---

## MoveApps platform terms

[A](#a-mp) · B · [C](#c-mp) · [D](#d-mp) · [E](#e-mp) · F · G · H · [I](#i-mp) · J · K · L · M · [N](#n-mp) · [O](#o-mp) · [P](#p-mp) · Q · [R](#r-mp) · [S](#s-mp) · [T](#t-mp) · U · V · [W](#w-mp) · X · Y · Z

<a id="a-mp"></a>

<a id="api"></a>**API**: Short for *Application Programming Interface*. On MoveApps, each output [artifact](#artifact) of a [Workflow Instance](#workflow-instance) can be retrieved via a stable, password-protected HTTPS API link, so data can be embedded in a website or fetched programmatically without going through the web UI. Combine the API with a [scheduled Workflow](#schedule-instance--scheduled-run) and you have live plots, maps, or CSVs on your own webpage that refresh automatically after each scheduled run. Links are managed per [Workflow Instance](#workflow-instance) via the `API Access` button at the top of the `Output` window.

<a id="app"></a>**App**: An analytical module that produces at least one conclusive result, for example an App that downloads tracking data from Movebank, or that plots the data on a map, or that calculates space use. Apps are written by volunteer developers in R, R-Shiny, or Python. Apps are chained together to create a [Workflow](#workflow); each App exposes configurable [Settings](#settings) that can be adjusted by the user. Each App declares its input and output [IO types](#io-type), which define the Workflow connectivity.

<a id="app-browser"></a>**App Browser**: The catalogue of every available App ([`App Browser`](https://www.moveapps.org/apps/browser)) — searchable by title, description, or keywords. Apps can be filtered by [App Category](#app-category) or developer. By clicking on an App, a window with more details will open. [Deprecated Apps](#deprecated-app) are hidden by default and revealed via the slider at the foot of the page.

<a id="app-category"></a>**App Category**: A label assigned to each App to group them by topic and make the search easier in the [App Browser](#app-browser). Categories are grouped into Classes, e.g. `Location Data`, `Integration`, `Helper`. New Categories can be requested by the App developer when an App fits none of the existing ones.

<a id="app-container"></a>**App Container**: In a Workflow, the display of the App is called the App container. The App container provides access to the [App Menu](#app-menu), the [Cargo Agent](#cargo-agent), and the [Output](#output).

<a id="app-details"></a>**App Details**: The App menu item (and pop-up) that lists every piece of metadata about an App — its description, runtime environment, [IO types](#io-type), version, author and email, suggested citation, GitHub repository, and any warning note from the developer. It can be accessed from the [App Browser](#app-browser), or from the [App Menu](#app-menu) inside a [Workflow](#workflow) (the three vertical dots on the top right corner of the [App container](#app-container)).

<a id="app-logs"></a>**App logs** (`log.txt`): The text log every App writes during a Workflow run, accessible via `Show Logs` in the App menu (or, when an App errors, via the `app logs` link inside [Error details](#error-details)). For interactive Shiny Apps the log file only becomes available in the outputs after the App goes idle (about 8 hours), but a per-run log overview is always reachable from `Show Logs` in the [App Menu](#app-menu). Always check the log when an App fails or produces unexpected results; it is also useful when filing a GitHub issue against the App.

<a id="app-menu"></a>**App Menu**: The three vertical dots on the top right corner of each [App container](#app-container) in a Workflow. This menu gives access to `Settings`, `App Details`, `Pin to this App`, `Show logs`, and `Delete`.

<a id="app-ui"></a>**App UI** (Open App UI): The interactive web interface of an R-Shiny App, opened via the `Open App UI` button on the [App container](#app-container) after the App has run. Inside the UI a user examines results and can change parameters; choices made there can be persisted via [Stored Settings](#stored-settings) for future runs, e.g. for [scheduled Workflows](#schedule-instance--scheduled-run). The UI stays available for 8 hours after the run. To make the UI available again, [pin](#pin) to the previous App and run the Workflow again.

<a id="app-version-tag--release"></a>**App version (Tag / Release)**: A specific build of an App, tied to a GitHub Tag/Release the developer publishes. When you add an App to your Workflow it locks to whichever version was current at that moment; later, a warning icon on the [App container](#app-container) indicates a newer version is available and you can pick it up via `Update App` in the [App Menu](#app-menu) or by clicking on the warning triangle. Public Workflows keep the App versions they had at the moment of sharing, for reproducibility.

<a id="artifact"></a>**Artifact**: Any file an App produces during a Workflow run — for example a .pdf report, a .csv table, or a .zip file. All Artifacts can be downloaded from each [App container](#app-container) directly or via the [Output](#output) button. Artifacts can also be accessed via the [API](#api).

<a id="attribute"></a>**Attribute**: Tracking data always contains associated information; these columns in the data are also known as attributes. Attributes can be associated with each location, referred to as 'event attributes' in the [Cargo Agent](#cargo-agent) (for example 'battery_voltage'), or with the tracks, referred to as 'track attributes' in the [Cargo Agent](#cargo-agent) (for example 'sex').

<a id="auxiliary-file"></a>**Auxiliary file**: A file that a user can upload to an App. Some Apps have fallback or default files; in other Apps the upload is mandatory, in others optional. Most Apps currently do not need any auxiliary file to be uploaded.

<a id="c-mp"></a>

<a id="cargo-agent"></a>**Cargo Agent**: Accessed via the green 'i' icon at the top right corner of any [App container](#app-container) in a Workflow after the App has produced results. It contains a summary of the App's output data. Here you will also find the list of [attributes](#attribute) associated with the data.

<a id="d-mp"></a>

<a id="dashboard"></a>**Dashboard**: The page you land on after logging in to MoveApps. From the Dashboard you create and manage your [Workflows](#workflow), initialise new [Apps](#app), and access [Public Workflows](#public-workflow).

<a id="deprecated-app"></a>**Deprecated App**: An App whose author has marked it as no longer maintained — typically because it was replaced or can no longer be supported. Deprecation is permanent: a deprecated App cannot be added to new Workflows and cannot be reactivated, but it continues to run inside Workflows that already contain it. [Public Workflows](#public-workflow) containing at least one deprecated App are flagged as "deprecated" in the catalogue but remain runnable for reproducibility.

<a id="doi"></a>**DOI**: Short for *Digital Object Identifier*. A MoveApps [Workflow](#workflow) can be assigned a DOI via the "Archive with DOI" submission in the Workflow menu. The DOI makes the Workflow citable and permanently reproducible. A Workflow can only receive a DOI if it is associated with a paper; the DOI will be provided upon acceptance of the manuscript. The data used in an archived Workflow should be archived in the [Movebank Data Repository](https://www.datarepository.movebank.org/) or be publicly available on Movebank; if neither is possible, the authors need to add an [instance](#workflow-instance) to the Workflow that contains public data so that anyone can run the Workflow.

<a id="e-mp"></a>

<a id="error-details"></a>**Error details**: The diagnostic panel that opens when an App in a [Workflow](#workflow) fails, reached by clicking `Error details` on the failed [App container](#app-container). It shows the error message and includes links to the App's [App logs](#app-logs), the App's GitHub issues page, and a pre-filled email to MoveApps support. The error message is often enough to identify the problem (e.g. an invalid setting); when not, the App logs are the next thing to check. If these are not readable, please send the message to MoveApps support.

<a id="i-mp"></a>

<a id="io-type"></a>**IO type**: Short for *input/output type*. Every App declares one input IO type and one output IO type, fixed to its runtime environment (R, R-Shiny, or Python). Apps can only be chained in a Workflow when the upstream output type matches the downstream input type. To connect Apps with different IO types, [Translator](#translator) Apps are often available.

<a id="n-mp"></a>

<a id="notification-of-completion"></a>**Notification of Completion**: An email sent to the user when a Workflow run finishes, activated via the green "Notification" icon next to the `Start` button in the Workflow. The email contains links to the [Workflow Instance](#workflow-instance) and its outputs. This option is very useful when Workflows take a long time to run.

<a id="o-mp"></a>

<a id="output"></a>**Output**: The `Output` button next to a [Workflow Instance](#workflow-instance) opens a window listing every file ([artifact](#artifact)) generated by every App in the run, downloadable individually or as a `.zip` (or bundled .pdf). The `app-output.rds` (R) or `app-output.pickle` (Python) file contains the output data of an App, which is used as input for the next App.

<a id="p-mp"></a>

<a id="pin"></a>**Pin**: A Workflow control that freezes the output of one App and every App preceding it, so re-running the Workflow only re-executes the Apps after the pin. Pinning a Shiny App closes its UI but retains its data. Important for [scheduled runs](#schedule-instance--scheduled-run): pins block re-downloading of live data, so unpin before scheduling.

<a id="public-workflow"></a>**Public Workflow**: A [Workflow](#workflow) shared by a user with all MoveApps users. These Workflows serve as a starting point or inspiration for your own analysis. Public Workflows can be added to 'Your Workflows' via the '+ADD' button, and run without modifying anything, adjusting the settings for your own purposes, and/or adding more Apps to it. When making a Public Workflow, the data are not shared, only the settings of the Apps that access the data. Only if the user has access to that specific data set can they run the exact same Workflow. Therefore please ensure that at least one [instance](#workflow-instance) contains public data that can be accessed by anyone, and please make it clear in the description of the instance which is the one containing public data. A Public Workflow containing at least one [deprecated App](#deprecated-app) keeps the `deprecated` flag, but remains runnable for reproducibility.

<a id="r-mp"></a>

<a id="rerun"></a>**Rerun**: The [Workflow](#workflow) control to re-start a Workflow after its first run — distinct from `Start Workflow` (which begins the first run) and from `Stop Workflow` (which halts a running Workflow). Any [Pin](#pin) you have set is honoured during the re-run: Apps up to and including the pinned App are skipped and their stored outputs are re-used, so only the Apps after the pin are actually re-executed.

<a id="s-mp"></a>

<a id="schedule-instance--scheduled-run"></a>**Schedule Instance / Scheduled Run**: An automated re-run of a [Workflow Instance](#workflow-instance) at a fixed daily, weekly, or monthly cadence, set up via `Schedule Instance` next to the `Output` button. To prevent forgotten Workflows running indefinitely, each scheduled Instance is allowed up to 30 (daily) or 12 (weekly/monthly) runs before the user has to renew the quota; a [pinned](#pin) App blocks live data downloads in scheduled runs.

<a id="sdk"></a>**SDK**: *(For App developers.)* Software Development Kit — code shipped inside the MoveApps App templates that emulates the platform locally, so an App's `RFunction.R`, `ShinyModule.R`, or Python entry-point can be run on the developer's machine before submission.

<a id="settings"></a>**Settings**: The user-configurable parameters of an App — accessed from each App's `Settings` menu in the Workflow view, or, for Shiny Apps, inside the [App UI](#app-ui) itself. App developers declare which settings an App exposes; the user fills them in when configuring the App for a particular run. Shiny Apps can persist their UI parameters across runs via [Stored Settings](#stored-settings).

<a id="shared-workflow"></a>**Shared Workflow**: A [Workflow](#workflow) shared via the `Share` menu with named users by nickname. Recipients receive a local *copy* they can edit independently. When sharing a Workflow, the data are not shared, only the settings of the Apps that access the data. Only if the user has access to that specific data set can they run the exact same Workflow.

<a id="stored-settings"></a>**Stored Settings**: Click `Store settings` inside an R-Shiny [App UI](#app-ui) to remember your current parameter choices across future Workflow runs. The stored values appear as an item named "Stored Settings" in the App's outputs.

<a id="t-mp"></a>

<a id="translator"></a>**Translator**: A category of helper App that converts data from one [IO type](#io-type) to another, so that Apps with otherwise mismatched input and output types can still be combined in the same Workflow. Not all IO types can be translated into one another. In the near future this will happen automatically and the user will not have to worry about it.

<a id="w-mp"></a>

<a id="workflow"></a>**Workflow**: An ordered chain of [Apps](#app) configured to ingest, process, and analyse movement data. Every Workflow begins with a data source App (e.g. *Movebank Location*, *Upload File from Local System*), and every subsequent App must accept the upstream App's output [IO type](#io-type) — or be preceded by a [Translator](#translator).

<a id="workflow-category"></a>**Workflow Category**: A user-defined grouping label for Workflows in the dashboard's *Your Workflows* overview. Imported Workflows that the user has not yet recategorised land under reserved labels: `Imported Public Shared Workflows` or `Imported Directly Shared Workflows`.

<a id="workflow-instance"></a>**Workflow Instance**: A single named configuration of a [Workflow](#workflow) — the same App sequence and order, but with its own settings values. Multiple instances let users compare parameter sets without rebuilding the Workflow; changes to the App selection or order propagate to all instances of that Workflow.

---

## Movement ecology & tracking terms

[A](#a-me) · [B](#b-me) · [C](#c-me) · [D](#d-me) · [E](#e-me) · [F](#f-me) · [G](#g-me) · [H](#h-me) · [I](#i-me) · J · [K](#k-me) · [L](#l-me) · [M](#m-me) · [N](#n-me) · [O](#o-me) · [P](#p-me) · Q · [R](#r-me) · [S](#s-me) · [T](#t-me) · [U](#u-me) · V · W · X · Y · Z

<a id="a-me"></a>

<a id="accelerometer"></a>**Accelerometer**: An on-tag [sensor](#sensor) that records acceleration along three axes, either in high-frequency short bursts or continuously. The resulting data are not [positions](#position) but a time series of g-forces, used to classify behaviour, calculate ODBA/VEDBA or to drive activity-based fix scheduling on the [tag](#tag).

<a id="akde"></a>**aKDE (Autocorrelated kernel density estimation)**: A [UD](#ud) estimator that extends [KDE](#kde) by accounting for the autocorrelation in tracking data. It produces a [range distribution](#range-distribution) (long-term space requirements) and, unlike classical KDE, returns estimates whose areas remain comparable between individuals sampled at different frequencies.

<a id="argos"></a>**ARGOS**: A satellite tracking system originally meaning *Advanced Research and Global Observation*, relying on NOAA and EUMETSAT polar-orbiting weather satellites. Two flavours of ARGOS-compatible tag exist: passive GPS tags that use ARGOS only for relay, and active satellite tags that determine position from Doppler shift in the emitted signal — lower-accuracy than [GPS](#gps) but smaller and lower-power. Movebank provides ARGOS data filtering tools.

<a id="autocorrelation"></a>**Autocorrelation**: The statistical dependence between consecutive [positions](#position) of a [trajectory](#trajectory) — successive locations are not independent because the animal cannot teleport. Most classical space-use and habitat-selection estimators assume independent observations; ignoring autocorrelation biases sample-size, bandwidth selection, and confidence intervals. Diagnose with a [semi-variogram](#semi-variogram); account for it via continuous-time models (see [ctmm](#ctmm)) or [aKDE](#akde).

<a id="azimuth"></a>**Azimuth** (also called *[bearing](#bearing)* or *[direction of travel](#direction-of-travel)*): The compass direction from one [position](#position) to the next, measured in degrees clockwise from north (0°); e.g. an azimuth of 90° means the animal moved due east. It is the absolute direction of a [segment](#segment), independent of any previous segment — contrast with the [turning angle](#turning-angle), which is the *change* in direction between two consecutive segments. Distinct from [heading](#heading) (body-axis orientation, which may differ under crosswind).

<a id="b-me"></a>

<a id="bandwidth"></a>**Bandwidth (h)**: The smoothing parameter of a [kernel density estimator](#kde) — the width of the kernel placed on each [position](#position). Too small a bandwidth produces a spiky surface that hugs the data; too large oversmooths it and inflates the estimated [UD](#ud). Common automatic selectors include the Gaussian reference function (`href`) and least-squares cross-validation (LSCV); the latter often performs poorly with large or autocorrelated samples.

<a id="bcpa"></a>**BCPA (Behavioural change point analysis)**: A parametric segmentation method that uses a sliding window and likelihood estimates to detect when a metric of the [trajectory](#trajectory) — usually persistence velocity — changes regime. The window size trades off detection of short-term shifts against false positives; penalisation typically follows the Bayesian Information Criterion.

<a id="bearing"></a>**Bearing**: Synonym for [azimuth](#azimuth) — the compass direction from one [position](#position) to the next, measured clockwise from north. The term is particularly common in [radio tracking](#radio-tracking), where directional bearings from receiving stations are intersected by [triangulation](#triangulation) to fix the tag's location.

<a id="bounding-box"></a>**Bounding box**: The smallest axis-aligned rectangle enclosing every [position](#position) in a [trajectory](#trajectory) — the minimum and maximum X and Y coordinates of the data.

<a id="c-me"></a>

<a id="ctmm"></a>**Continuous-time movement model (ctmm)**: A class of stochastic-process models that treat an animal's location as a continuous function of time rather than a sequence of discrete steps, so the model is no longer tied to the sampling schedule. Fitting a ctmm yields parameters such as a position autocorrelation timescale and (where applicable) a velocity autocorrelation timescale, which then feed into autocorrelation-aware estimators like [aKDE](#akde) and continuous-time speed/distance estimation.

<a id="crs"></a>**Coordinate reference system (CRS) / projection**: The mathematical framework that ties X/Y coordinates to a location on Earth. *Geographic* coordinate systems (e.g. EPSG:4326) use longitude and latitude on an unprojected sphere; *projected* systems (global or region-specific) flatten the sphere to preserve some of distance, angle, or area at the cost of the others. All Movebank uploads to MoveApps arrive in the geographic coordinate system `EPSG:4326`. Search for projections here: https://epsg.io

<a id="correlated-random-walk"></a>**Correlated random walk (CRW)**: A statistical model of animal movement in which each step is drawn from distributions of [step length](#step-length) and [turning angle](#turning-angle), with consecutive turning angles correlated — i.e. animals tend to keep going in roughly the same direction rather than turn at random. CRWs are the baseline against which many movement analyses compare observed data, including [NSD](#nsd) interpretation, [SSF](#ssf) random-step generation, and the two-state [HMM](#hmm) for "travelling" behaviour.

<a id="d-me"></a>

<a id="dead-reckoning"></a>**Dead reckoning**: A path-reconstruction technique that pieces together fine-scale movement between [GPS](#gps) fixes using on-board [accelerometer](#accelerometer), [magnetometer](#magnetometer), and (optionally) [gyroscope](#gyroscope) data — [heading](#heading) from the magnetometer plus speed inferred from the accelerometer, integrated step by step. The reconstructed path drifts over time and is periodically anchored against absolute [GPS](#gps) positions to correct accumulated error.

<a id="deployment"></a>**Deployment**: The act of attaching a [tag](#tag) to a specific individual for a specific period — and hence the unit of metadata that ties a tag's data records to one animal. One individual can have multiple deployments if e.g. the tag has been replaced or the animal has been recaptured and tagged multiple times over its life span.

<a id="direction-of-travel"></a>**Direction of travel**: Synonym for [azimuth](#azimuth) — the absolute compass direction along a [segment](#segment) of a [trajectory](#trajectory). Distinct from [heading](#heading), the orientation of the animal's body axis, which under crosswind or current may differ from the direction it is actually moving in.

<a id="dbbmm"></a>**Dynamic Brownian Bridge Movement Model (dBBMM)**: An [occurrence distribution](#occurrence-distribution) estimator that incorporates the temporal sequence of locations — modelling the movement between consecutive [positions](#position) as a conditional Brownian motion bridge. The "dynamic" extension allows the motion variance to change along the trajectory, capturing shifts between, say, directed travel and local foraging. Estimated areas shrink as sampling becomes denser, so cross-individual comparison requires caution. 

<a id="e-me"></a>

<a id="environmental-annotation"></a>**Environmental annotation**: The process of associating each location in a [trajectory](#trajectory) with the value of an environmental variable (elevation, temperature, land cover, NDVI, etc.) at that point in space and time.

<a id="f-me"></a>

<a id="fpt"></a>**First passage time (FPT)**: The time an animal takes to cross a circle of given radius along its [trajectory](#trajectory). Sweeping the radius reveals the spatial scales at which behaviour changes — a maximum in the variance of log-FPT marks the scale of area-restricted search.

<a id="g-me"></a>

<a id="geolocators"></a>**Geolocators**: Light-level loggers that infer position from the timing of sunrise and sunset (day length plus solar noon). Accuracy is on the order of hundreds of kilometres but tags weigh under one gram and can record for over a year, making them indispensable for tracking small migratory species. Geolocators are passive: data must be retrieved by recapturing the animal.

<a id="gps"></a>**GPS**: The Global Positioning System — a passive receiver that determines its own location from the timing of signals from a constellation of orbiting satellites. State-of-the-art tags can sample at >1 Hz with metre-level accuracy; many tags use Kalman filters internally to improve precision and can also estimate instantaneous [speed](#speed) and [heading](#heading) from Doppler shift. Battery weight is the principal constraint on tag size.

<a id="gyroscope"></a>**Gyroscope**: An on-tag [sensor](#sensor) that records angular velocity around three axes (pitch, roll, yaw). Combined with an [accelerometer](#accelerometer) and a [magnetometer](#magnetometer) inside an [IMU](#imu), gyroscope data resolve fine-scale orientation changes and are used in [dead reckoning](#dead-reckoning) to reconstruct movement paths between [GPS](#gps) fixes.

<a id="h-me"></a>

<a id="heading"></a>**Heading**: The direction the animal's body axis is pointing. In the flight and swim literature it is distinguished from the [direction of travel](#direction-of-travel) (the [azimuth](#azimuth) of the [segment](#segment) actually traversed): under crosswind or current the animal must point its body partly into the flow, so heading and direction of travel diverge. Standalone [GPS](#gps) data only resolve direction of travel; recovering heading requires a body-mounted [magnetometer](#magnetometer) and (typically) an [IMU](#imu). Some [GPS](#gps) devices record a "heading" value (present as a [event attribute](#attribute) in the dataset), this value is an instantaneos recording of the body position when the gps location was recorded.

<a id="hmm"></a>**Hidden Markov Model (HMM)**: A statistical model widely used for [segmentation](#segmentation) of tracking data into discrete behavioural states (e.g. "encamped" vs "travelling") that are not directly observed in the data. The model is fit to [step lengths](#step-length) and [turning angles](#turning-angle); each state has its own step-length and turning-angle distributions, and the most likely state sequence is decoded (typically via the Viterbi algorithm). Covariates such as day-of-year or habitat can be added to drive the transition probabilities.

<a id="home-range"></a>**Home range**: The area an individual uses to maintain its energetic and behavioural needs — Burt's 1943 definition explicitly excludes migration corridors and dispersal. The term has no precise operational definition; in practice it is reported as a contour (commonly 95%) of a [utilisation distribution](#ud), with the inner 50% often called the *core area*. Common estimators include [MCP](#mcp), [KDE](#kde), [dBBMM](#dbbmm), and [aKDE](#akde); they differ in their assumptions and in whether they estimate a [range distribution](#range-distribution) ("how much space does the animal need?") or an [occurrence distribution](#occurrence-distribution) ("where was the animal during this tracking period?"). The precise terms *range distribution* and *occurrence distribution* are preferred over the less concise term *home range*.

<a id="i-me"></a>

<a id="imu"></a>**IMU (Inertial Measurement Unit)**: A composite [sensor](#sensor) package that bundles a tri-axial [accelerometer](#accelerometer), a tri-axial [magnetometer](#magnetometer), and (often) a tri-axial [gyroscope](#gyroscope), resolving motion along surge/sway/heave and rotation in pitch/roll/yaw. IMUs underpin behaviour classification, posture recovery, and [dead-reckoning](#dead-reckoning) reconstruction of fine-scale paths.

<a id="interpolation"></a>**Interpolation**: Filling gaps in a [trajectory](#trajectory) by inserting estimated [positions](#position) where the [tag](#tag) did not record. The simplest method distributes missing points evenly along the straight line between the two known endpoints; more sophisticated methods condition on the animal's movement statistics or on environmental context. Interpolation imposes assumptions on segments of unknown true shape and inflates apparent [autocorrelation](#autocorrelation). It is mostly used for visualisations, mainly animations; doing this for analysis has to be done carefully, as interpolation effectively "makes up data".

<a id="k-me"></a>

<a id="kde"></a>**Kernel density estimation (KDE)**: A [UD](#ud) estimator that produces a continuous probability surface — the [utilisation distribution](#ud) — by placing a small two-dimensional kernel (typically Gaussian) on each [position](#position) and summing them. The crucial choice is the [bandwidth](#bandwidth), which controls how tightly the surface hugs the data. Classical KDE assumes the locations are statistically independent, which is incorrect for high-frequency tracking data (consecutive [positions](#position) are [autocorrelated](#autocorrelation)); [aKDE](#akde) addresses this.

<a id="l-me"></a>

<a id="locoh"></a>**LoCoH (Local Convex Hulls)**: A family of [UD](#ud) estimators built by drawing a small convex hull around each location plus its nearest neighbours (chosen by fixed count *k*, fixed radius *r*, or fixed cumulative distance *a*), then merging and ranking the hulls by density. The result resolves sharp boundaries (coastlines, fences) better than [KDE](#kde) and is robust to [outliers](#outlier), but neighbour-count choice strongly affects the outcome.

<a id="m-me"></a>

<a id="magnetometer"></a>**Magnetometer**: An on-tag [sensor](#sensor) that records the Earth's magnetic-field vector along three axes (in Gauss). Inside an [IMU](#imu), the magnetometer fixes [heading](#heading) relative to magnetic north, complementing the [accelerometer](#accelerometer) which only resolves orientation relative to gravity; together they enable behaviour classification and [dead reckoning](#dead-reckoning). Tri-axial magnetometers require soft-iron and hard-iron calibration to remove tag-specific distortions.

<a id="mcp"></a>**Minimum convex polygon (MCP)**: The simplest and oldest estimator of an animal's range: the smallest convex polygon (a shape with no inward dents) that encloses all — or a specified percentage of — an animal's [positions](#position). A 95% MCP (the hull around the 95% of points closest to the centroid) is conventionally reported, to mitigate the effect of [outliers](#outlier). Limitations: every location has equal weight regardless of how long the animal stayed there, and the hull often includes large unused areas.

<a id="movebank"></a>**Movebank**: A publicly accessible online database for animal-tracking data, hosted at [movebank.org](https://www.movebank.org). It standardises tracking data, supports filtering, visualisation, and sharing, and serves as the primary data source for MoveApps via the *Movebank Location* and *Movebank Non-Location* data source Apps.

<a id="n-me"></a>

<a id="nsd"></a>**Net square displacement (NSD)**: The squared distance from each location to a reference point (preferably the nest, colony, den or other meaningful location, but often the start of the [trajectory](#trajectory) is used) plotted over time. Originally introduced for comparison against [correlated random-walk](#correlated-random-walk) models, NSD is a useful global summary of dispersal and migration phases; like most trajectory metrics, it is strongly scale-dependent on sampling frequency.

<a id="o-me"></a>

<a id="occurrence-distribution"></a>**Occurrence distribution**: A type of [utilisation distribution](#ud) that *interpolates between observed [positions](#position) in the past* — it answers "where did the animal go during the period of observation?". Estimated areas (occurrence regions) shrink as sampling becomes denser and therefore should not be compared across individuals tracked at different frequencies and durations. Typical estimators are the [dBBMM](#dbbmm) and the ctmm-based *ocurrence*. Contrast with the [range distribution](#range-distribution).

<a id="outlier"></a>**Outlier**: A recorded [position](#position) that does not represent the animal's true location — typically caused by a poor [GPS](#gps) fix, [triangulation](#triangulation) error, [ARGOS](#argos) Doppler-shift artefact, or signal-reception drop-out. Outliers can be spotted visually on a map, by implausibly high [speeds](#speed) between successive positions, or by statistical tests; on MoveApps several helper Apps are dedicated to outlier filtering. Removing or correcting them is usually one of the first analysis steps.

<a id="p-me"></a>

<a id="position"></a>**Position**: A single recorded coordinate of an animal at a given timestamp. Synonyms in the literature include *location*, *relocation*, and *GPS fix*.

<a id="r-me"></a>

<a id="radio-tracking"></a>**Radio tracking**: The earliest tracking technology: the animal carries an active VHF transmitter that emits a signal received by directional antennae. Position is determined either by [triangulation](#triangulation) from two or more stationary receiving stations, or by *homing in* — approaching the signal until the animal is sighted. Transmitters can weigh as little as 200 mg (e.g. for bumblebees), keeping radio tracking the method of choice for the smallest study species. 

<a id="range-distribution"></a>**Range distribution**: A type of [utilisation distribution](#ud) that *extrapolates space use into the future* — it answers "how much space does the animal need over its life time?". The estimated area considers all realisations of the underlying movement process that could occur, so it is well suited to comparing [UD](#ud) areas across individuals or to deciding whether protected areas are sufficiently large. Typical estimators include [KDE](#kde) and [aKDE](#akde). Contrast with the [occurrence distribution](#occurrence-distribution). 

<a id="recursion"></a>**Recursion (revisitation)**: Repeated return of an animal to the same place. Operationally measured by counting how many times the [trajectory](#trajectory) re-enters a circle of fixed radius around each [position](#position), together with the residence time per visit; the resulting maps highlight foraging sites, roosts, or watering holes.

<a id="rsf"></a>**Resource selection function (RSF)**: A class of model that estimates the probability of an animal occurring at a location as a function of environmental conditions there. Classical RSFs fit a logistic regression of *used* locations against random *available* locations sampled within the assumed accessible area (e.g. the [UD](#ud) or MCP). The model's coefficients give the relative probability of selection per covariate. 

<a id="s-me"></a>

<a id="segment"></a>**Segment**: The line connecting two successive [positions](#position). Used to characterise attributes of the connection itself, such as its duration (a [time lag](#time-lag)), the [distance](#step-length) or [speed](#speed) between the two positions.

<a id="segmentation"></a>**Segmentation**: Subsetting a [trajectory](#trajectory) into shorter, coherent sections — for example splitting a migration trajectory into "foraging", "migrating", and "resting" portions. Segmentation can be based on behavioural annotation, environmental boundaries (e.g. land vs. sea), or unsupervised algorithms.

<a id="semi-variogram"></a>**Semi-variogram**: A diagnostic plot of semi-variance in position as a function of [time lag](#time-lag) between locations, used to identify the autocorrelation structure of movement data. A flat variogram means no autocorrelation; a linear rise without plateau indicates Brownian motion (no finite range); a rise to a plateau (the **sill**) indicates resident range behaviour, with the time at the plateau giving the autocorrelation timescale (also called the **range**).

<a id="sensor"></a>**Sensor**: An on-tag instrument that records a particular type of measurement — for example a [GPS](#gps) receiver, an [accelerometer](#accelerometer), a [magnetometer](#magnetometer), or a heart-rate sensor. A single [tag](#tag) can carry multiple sensors.

<a id="speed"></a>**Speed**: The [step length](#step-length) divided by the [time lag](#time-lag) between two consecutive [positions](#position) — usually reported in m/s or km/h. Despite its apparent simplicity, speed is strongly scale-dependent on the sampling frequency: at longer time lags the actual path between fixes is shortened to a straight line, so the same animal will appear "slower" at coarser sampling. 

<a id="step-length"></a>**Step length**: The straight-line distance between two consecutive [positions](#position) — the spatial length of a [segment](#segment). Step lengths and [turning angles](#turning-angle) are the two primitive statistics that summarise local movement and underpin most fine-scale models such as [Step Selection Functions](#ssf), [correlated random walks](#correlated-random-walk), and [Hidden Markov Models](#hmm). Like all movement metrics, step length is strongly sensitive to the [time lag](#time-lag) between fixes.

<a id="ssf"></a>**Step selection function (SSF)**: A model of habitat selection that compares each observed *step* (the move from one location to the next) against alternative steps the animal could have taken from the same starting position. Availability is therefore constrained by realistic [step lengths](#step-length) and [turning angles](#turning-angle), making SSFs capture fine-scale movement decisions that an [RSF](#rsf) cannot. The integrated SSF (iSSF) jointly estimates habitat selection and movement parameters. 

<a id="study"></a>**Study**: A Movebank-organised dataset corresponding to one investigation: one or more [deployments](#deployment) of [tags](#tag) on one or more individuals, gathered under shared metadata (species, principal investigator, license, etc.). The unit imported into MoveApps by the *Movebank Location* and *Movebank Non-Location* data source Apps.

<a id="t-me"></a>

<a id="tag"></a>**Tag**: The hardware device carried by the animal that records or transmits position and other [sensor](#sensor) data — a [GPS](#gps) collar, a VHF [radio](#radio-tracking) transmitter, an [ARGOS](#argos) satellite tag, a light-level [geolocator](#geolocators), and so on. The tag is the hardware *deployed* in a [deployment](#deployment); for the GitHub-Tag / MoveApps platform meaning of "Tag", see [App version (Tag / Release)](#app-version-tag--release).

<a id="thinning"></a>**Thinning**: Sub-sampling a [trajectory](#trajectory) so that consecutive [positions](#position) are further apart in time — typically to obtain a regular sampling schedule or to reduce [autocorrelation](#autocorrelation) before applying methods that assume independent locations. Thinning discards data, however, and the resulting estimates are sensitive to the chosen interval.

<a id="time-lag"></a>**Time lag**: The time difference between two consecutive [positions](#position); equivalently, the temporal length of a [segment](#segment). Irregular time lags complicate many trajectory analyses (e.g. speed and turning-angle estimation), which is why regularising or modelling the sampling schedule is a recurring concern.

<a id="timestamp"></a>**Timestamp**: The date-and-time recorded at each [position](#position). On MoveApps, all uploaded tracking data are stored in UTC and Apps must return outputs in UTC.

<a id="track-id"></a>**Track ID**: The identifier that links each event to the track it belongs to, most often equivalent to individual name or [deployment](#deployment)), but it could also be that tracks are e.g. split for each individual per season.

<a id="trajectory"></a>**Trajectory**: The full sequence of [positions](#position) recorded from one tagged individual. Also called a *track* or *path*.

<a id="triangulation"></a>**Triangulation**: In [radio tracking](#radio-tracking), computing an animal's position by intersecting two or more directional [bearings](#bearing) taken from stations of known location. Accuracy depends on the geometry between stations and tag (intersect angles approaching 0° or 180° degrade precision) and on landscape effects on signal propagation.

<a id="turning-angle"></a>**Turning angle**: The change in direction between two successive [segments](#segment) — 0° means continuing straight, +90° a right turn, −90° a left turn. Distinct from [azimuth](#azimuth) (the absolute compass direction of a single segment) and from [heading](#heading) (the direction the animal's body axis points). Computed in [`move2`](#move2-object) via `mt_turnangle()`.

<a id="u-me"></a>

<a id="ud"></a>**Utilisation distribution (UD)**: A probability density describing how an animal's use of space is distributed across an area — at each location it gives the probability of finding the animal there. The UD underlies the modern, statistical concept of [home range](#home-range): the conventional reporting picks a probability contour (most often the 95% volume) to delimit a "range", with the inner 50% commonly called the *core area*. UDs come in two flavours that answer different questions: a [range distribution](#range-distribution) extrapolates long-term space requirements ("how much space does the animal need?"), an [occurrence distribution](#occurrence-distribution) interpolates between observed [positions](#position) ("where was the animal during this tracking period?").

