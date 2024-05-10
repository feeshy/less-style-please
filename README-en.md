# less-style-please

Docs Language: [中文](/README.md) | English

A pure text Jekyll blog theme forked from rigggraz's no_style_please[^riggraz], with a category-based tree structure for systematically organizing articles on diverse topics, and the ability to manually index external content to consolidate your entire content ecosystem into one single website.

![](https://feeshy.github.io/less-style-please/assets/img/example.png)

## Design

### What Are Kept

- Minimalist and reserved design style, ideal for pure text websites
- Adaptive light and dark theme

### What Are Changed

- Low-saturated color palette for both light and dark themes
- Rowing color grades for tables
- Self hosting web fonts for Simplified Chinese

## Usage on Post

example page: [markdown](/general/_posts/2020-07-07-overview-post.md) -> [webpage](https://feeshy.github.io/less-style-please/general/overview-post)

### Basic Post Meta Info

A post is always supposed to be stored in the following naming pattern: `/category/sub-category/_post/yyyy-mm-dd-title.md`

#### Title 

The title is required in the filename `yyyy-mm-dd-title.md`. Could be overwritten in the front matter:

``` yml
---
title: yyyy-mm-dd
---
```

#### Date

A date is already defined in the filename `yyyy-mm-dd-title.md`. Could be overwritten in the front matter:

``` yml
---
date: yyyy-mm-dd
---
```

For further edits after the post is published, add a new syntax in the front matter:

``` yml
---
last_modified_at: yyyy-mm-dd
---
```

If `last_modified_at` is set, a updated date will be rendered in metadata section of the post. This attribute is also quite useful for sitemap[^jekyll-sitemap]

#### Categories

Categories could be set with hierarchical directories: `/category/sub-category/_post/yyyy-mm-dd-title.md`

you may also define categories in the front matter of the post:

``` yml
---
categories: [category, sub-category]
---
```

#### Tags

``` yml
---
tags: [tags1, tags2]
---
```

Set tags on your need. Tags of a post will be rendered on the post-meta section.

### Layout

``` yml
---
layout: post
---
```

There are 5 types of layouts

- appears on post list
	- post：justify aligned, meta data rendered if set (tags, created date, updated date, redirected url)
	- poetry: center aligned, w/o meta data
	- redirect: like page, w/ redirecting hyperlinks and javascripts and noindex meta tag, w/o meta data
- not appears on post list
	- page：like post, w/o meta data
	- redirect: like page, w/ redirecting hyperlinks and javascripts and noindex meta tag, w/o meta data
	- archive: the layout of a post list page

### Table of Contents[^toc]

``` yml
---
toc: true
---
```

### Redirecting

#### From the Post to a New URL

``` yml
---
layout: redirect
redirect_to: /newdir/newpage
---
```

Considering server-side 301 redirecting is not supported by github pages, three client-side ways to redirect is provided:

- redirect via http refresh meta tag
- redirect via javascript
- user manually click on the hyperlink rendered on the webpage

This syntax is not only applicable to redirecting pages on the site, but can also be used to redirect articles outside of the site, so that external content may obtain the same metadata index as posts on the site and be displayed in the same post list. It could be quite handy when you want to consolidate all content you posted on different platforms to one single place.

#### From Old URLs to the Post

``` yml
---
redirect_from:
  - https://example.com/oldurl
  - /old-dir/old-url-1
  - /old-dir/old-url-2
---
```

Requiring jekyll-redirect-from plugin[^redirect]. The URL in the first row will be rendered as a hyperlink at the position of the creation date.

### Exclude the Post from Search Results

> noindex is a rule set with either a <meta> tag or HTTP response header and is used to prevent indexing content by [search engines that support the noindex rule](https://developers.google.com/search/docs/crawling-indexing/block-indexing), such as Google. When Googlebot crawls that page and extracts the tag or header, Google will drop that page entirely from Google Search results, regardless of whether other sites link to it.

``` yml
---
noindex: true
---
```

### Drop Cap

![](https://i.stack.imgur.com/RpOEO.gif)

``` yml
---
dropcap: true
---
```

### Post Language

If the post is written in an language other than the default language in `_config.yml`, you may define the lang at front matter.

``` yml
---
lang: zh-yue
locale: zh-yue_HK
---
```

standard [language codes](https://www.w3schools.com/tags/ref_language_codes.asp) & [territory codes](https://www.w3schools.com/tags/ref_country_codes.asp)

### Copyright Disclaimer

Copyright disclaimers are automatically generated at the bottom of the page. If the article uses a copyright license other than the defaulted value in `_config.yml`, you can define the license in front matter:

``` yml
---
copyright: public-domain
---
```

available values: ```"all-rights-reserved", "by-nc-nd", "by-nd", "by-nc-sa", "by-nc", "by-sa", "by", "public-domain"```

The [Creative Commons license](https://creativecommons.org/share-your-work/cclicenses/) will automatically redirect to the appropriate version of the official translation based on the language of the post

### inline stickers

use html syntax

```html
<img class="sticker" src="sticker_url_here">
```

### Insert Anything to Html Head

Any string of `custom_head` in the front matter will be inserted to the rendered html file.

``` yml
---
custom_head: ""
---
```

If you want the post excluded from search engine, for instance, just type `custom_head: "<meta name='robots' content='noindex'>"` in your front matter.

## Site Configuration

edit `/_config.yml` root in the root directory for site configurations

### Basic Site Info

read docs of [jekyll-seo-tag]((https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md)[^seo-tag]

### PWA

#### App Icons & Web Manifest

- Export app icons from your designer software (or generate them with online tools)
  - a modern light-dark vector `favicon.svg` 🛠️[online tool](https://realfavicongenerator.net/svg-favicon/)
  - a 32x32 `favicon.ico` for old browser, a 180x180 png for iOS 🛠️[online tool](https://realfavicongenerator.net/)
  - 192x192 and 512x512 maskable pngs for chrome PWA 🛠️[online tool](https://maskable.app/editor/)
- Put the icons in the root directory of the project
- edit `_config.yml` on your need

``` yml
favicon_legacy: "/favicon.ico" # legacy 'favicon.ico' at the root folder of your site, it is highly recommended not changing this name
favicon_svg_xml: "/favicon.svg" # name+extension of modern vector favicon
favicon_ios: "/apple-touch-icon.png" # icon for Safari
webmanifest: "/site.webmanifest" # icon config file for Chrome. and don't forget to check the favicon names at webmanifest.
ms_tile_color: "#da532c" # hex background for windows 8.1~10 tile. and don't forget to configure your tile icons at "/browserconfig.xml"
```

#### Service-Worker.js

read docs of jekyll-pwa-workbox[^pwa]

### Archive Page

Create an archive page at `/category/index.md` with the following front matter:

``` yml
---
layout: archive
which_category: category name
title: page title
---
[optional]you could add some content here, it will be rendered before post list
```

### Home Page

The content of home page is stored as `/index.md` in the root directory of your project.

``` yml
---
layout: home
---
[optional]you could add some content here, it will be rendered after menu
```

The menu on home page are stored as `/_data/menu.yml`. You could set link to the archive page from home page, read [the original docs](https://github.com/riggraz/no-style-please)[^riggraz] for detailed instructions.

## Markdown Parser

the default kramdown parser[^kramdown] has a bug that renders any unescaped `|` as single row tables, which has exist [for decades](https://stackoverflow.com/questions/23751917/how-do-you-disable-tables-in-kramdown). In both kramdown's and jekyll's repos there are issues mentioning the bug now and then, most of which are closed by timeout. Considering that there is no hope that the bug is being fixed, the default markdown engine in my version of theme is set as redcarpet[^redcarpet].

6 non standard flavored markdown syntax are enabled by default - "tables", "autolink", "strikethrough", "highlight", "footnotes", "with_toc_data". Read [the original docs](https://github.com/vmg/redcarpet?tab=readme-ov-file)[^redcarpet] for more usages.

---

[^riggraz]: [no_style_please](https://github.com/riggraz/no-style-please)
[^sitemap]: [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap)
[^toc]: [jekyll-toc](https://github.com/toshimaru/jekyll-toc)
[^redirect]: [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from)
[^seo]: [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md)
[^pwa]: [jekyll-pwa-workbox](https://github.com/souldanger/jekyll-pwa-workbox)
[^kramdown]: [kramdown-parser-gfm](https://github.com/kramdown/parser-gfm)
[^redcarpet]: [redcarpet](https://github.com/vmg/redcarpet)