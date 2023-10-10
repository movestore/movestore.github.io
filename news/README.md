# MoveApps News CMS

This directory provides the news content of [MoveApps](https://moveapps.org).

## Files and Directories

### Directories

`YYYY-MM-DD_~anything`

- each news item belongs to its **own directory**.
- **Prefix**: each directory starts with a **[ISO local date string](https://en.wikipedia.org/wiki/ISO_8601#Calendar_dates)** (w/o time) (eg. `2023-10-09`). This is necessary to order/sort the news items. The newest news item gets selected for the landing page. This timestamp is also part of the presentation on MoveApps.
- **Suffix**: after the date prefix you can add any string to find yourself around.
- you can add the character '`~`' to the suffix in order to **hide this item on production**. The item is visible on the non-productive MoveApps mirror. Use it to preview the news item.

### Files

- each news item / directory must have **exactly 1 file w/ the suffix `.md`** (eg. `news.md`). This is the home of the news content.
- you can add and reference as many additional files as you wish (images, documents, etc.). Put them also into the same directory.

## Markdown

### Format / Syntax

- the news are written in `Markdown`.
- the news gets parsed on the website by [`marked`](https://marked.js.org/).
- therefor you can use this [Markdown Flavors](https://marked.js.org/#specifications).
- the recommendation is: _keep it simple_ - don't use any fancy features!

### Images

- images can be referenced an gets displayed directly on MoveApps.
- there is only **a absolute basic support** for images. Basically there is only 1 rule: images will get 100% of the available (content) width in each viewport.
- if you need to arrange images eg side-by-side: you have to compose them by yourself w/ your favorite image editing software to create a new single image.
- use [software to optimize](https://imageoptim.com/online) images for the web and keep an eye on privacy concerns (like `EXIF` data). 

## GitHub

The news gets served by GitHub. MoveApps fetches the news by [GitHub content API](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28).

The GitHub API is rate limited. For MoveApps the following [rules apply](https://docs.github.com/en/rest/overview/resources-in-the-rest-api?apiVersion=2022-11-28#rate-limits-for-requests-from-personal-accounts):

> For unauthenticated requests, the rate limit allows for up to 60 requests per hour. Unauthenticated requests are associated with the originating IP address, and not the person making requests.