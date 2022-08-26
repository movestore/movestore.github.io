# Access Workflow products via API link

### Create API links

Each output product of a workflow can be remotely adressed and downloaded via a secured, stable http link that can be created by our API functionality. To create such a link, please click the API Access button at the top of the output window. This directs you to a site to `Register for Artefacts/Products API Access`. Here, you need to create a user name and password that can be used to access the http links for this workflow (only). Please store these details somewhere for later use. The stable links for each product/artefact can be accessed by clicking on the link in:  You can use `this overview` as your entrypoint to get stable links to your artefacts.

![](../files/API_register.png)

To access the overview of the product http links, you have to enter the previously created user name and password into your preferred browser. An XML list will be shown that provides the links. Note that these links are defined by the position of the App in the workflow and the name of the product file. Thus, the link is stable only if the Apps in the workflow stay in the same order and the products of the Apps keep the same name. Each time the workflow is now run, the product changes and is accessible via the stable link. So, it is possible to integrate the secure link into another web page, and the file can be automatically updated each time the workflow has run.

![](../files/API_link_list.png)

### Integrate API links into your website

Please have a look at our [landing page](https://www.moveapps.org). In the news section about API integration we have integrated an animation artifact from a scheduled workflow that is running on MoveApps daily. The details of how we integrated it into the site can be used as an example for you to follow. See the code on our [github repository](https://github.com/movestore/movestore.github.io/blob/master/web-partner-api/example.html) and the showcase below.

![](../web-partner-api/example.html)