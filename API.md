# Access Workflow products via API link

## Create API links

Each output product of a Workflow can be remotely adressed and downloaded via a secured, stable https link that can be created by our API functionality. This can be done for scheduled as well as manually run Workflows. The link always accesses the most up-to-date product/artefact. To create such a stable https link, please click the `API Access` button at the top of the `Output` window. This directs you to a site to "Register for Artefacts API Access". Here, you need to `Register`, which creates a user name and password that can be used to access the https links for this Workflow Instance (only). Please store these details somewhere for later use. You can use `this overview` as your entrypoint to get stable links to your products/artefacts.

<kbd>![](files/API_register.png ":size=450x")</kbd>
 
To access the overview of the product/artefact https links, go to the `Output` window, `API Access`, and then to `this overview`. You then have to enter the previously created user name and password. An XML list will be shown that provides the links (highlighted in the screenshot below). Note that these links are defined by the position of the App in the Workflow and the name of the product file. Thus, the link is stable only if the Apps in the Workflow stay in the same order and the products of the Apps keep the same name. Each time the Workflow is now run, the product changes and is accessible via the stable link. So, it is possible to integrate the secure link into another web page, and the file can be automatically updated each time the Workflow has run.

<kbd>![](files/API_link_list.png ":size=700x")</kbd>

## Integrate API links into your website

Please have a look at our [example page](https://docs.moveapps.org/web-partner-api/example.html). We have integrated multiple artifacts from a Workflow running on MoveApps. The details of how we integrated it into the site can be used as an example for you to follow. See the code of this example page on our [github repository](https://github.com/movestore/movestore.github.io/blob/master/web-partner-api/example.html).
