# less-style-please

Docs Language: [中文](./README.md) | English

A pure text Jekyll blog theme forked from rigggraz's [no_style_please](https://github.com/riggraz/no-style-please), with a category-based tree structure for systematically organizing articles on diverse topics, and the ability to manually index external content to consolidate your entire content ecosystem into one single website.

## Design

### What Are Kept

- Minimalist and reserved design style, ideal for pure text websites
- Adaptive light and dark theme

### What Are Changed

- Low-saturated color palette
- Rowing color grades for tables
- Self hosting web fonts for Simplified Chinese

## Usage on Post

example page: [markdown](https://github.com/feeshy/less-style-please/blob/master/general/_posts/2024-04-11-example.md) -> [webpage](https://feeshy.github.io/less-style-please/general/example)

### Basic Post Meta Info

A post is always stored and named like the following pattern: `/category/sub-category/_post/yyyy-mm-dd-title.md`

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

If `last_modified_at` is set, a updated date will be rendered in metadata section of the post. This attribute is also quite useful for sitemap (via [jekyll-sitemap](https://github.com/jekyll/jekyll-sitemap) plugin)

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
	- post：sans-serif+黑体, justify aligned, meta data rendered if set (tags, created date, updated date, redirected url)
	- poetry: EB Garamond+思源宋体, center aligned, dynamic breathe spacing to the top of the page, no meta data
	- redirect: like page, redirecting hyperlinks and javascripts, no meta data
- not appears on post list
	- page：like post, no meta, no toc
	- archive: the layout of a post list page

### Table of Contents

``` yml
---
toc: true
---
```

read docs of [jekyll-toc](https://github.com/toshimaru/jekyll-toc)

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

Requiring [jekyll-redirect-from](https://github.com/jekyll/jekyll-redirect-from) plugin. The URL in the first row will be rendered as a hyperlink at the position of the creation date.

### Drop Cap

![](https://i.stack.imgur.com/RpOEO.gif)

``` yml
---
dropcap: true
---
```

### Post Language

``` yml
---
locale: zh-Hant
---
```

If the post is written in an language other than the default language in `_config.yml`, you may define the locale at front matter.

### Insert Anything to Html Head

Any string of `htmlhead` in the front matter will be inserted to the rendered html file.

``` yml
---
htmlhead: ""
---
```

If you want images in the post less wide than 360px, for instance, just type `htmlhead: "<style>img {max-width: 360px;}<style>"` in your front matter.

## Site Configuration

edit `/_config.yml` root in the root directory for site configurations

### Basic Site Info

read docs of [jekyll-seo-tag](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/usage.md)

### PWA

#### App Icons & Manifest.json

- Create icon package using [real favicon generator](https://realfavicongenerator.net/)
- Extract the zip package to the root directory of the project
- Paste the generated html code into `_includes\head.html`

#### Service-Worker.js

read docs of [jekyll-pwa-workbox](https://github.com/souldanger/jekyll-pwa-workbox)

### Archive Page

Create an archive page at `/category/index.md` with the following front matter:

``` yml
---
layout: archive
which_category: category name
title: page title
---
You could add some content before post list
```

Template for archive page are stored at `_layouts/archive.html`

### Home Page

The content of home page is stored as '/index.md' in the root directory of your project.

``` yml
---
layout: home
---
You could add some content before post list
```

The menu on home page are stored as `/_data/menu.yml`. You could set link to the archive page from home page, read the original docs at [no-style-please](https://github.com/riggraz/no-style-please) for detailed instructions.

### Markdown Parser

the default [kramdown-parser-gfm](https://github.com/kramdown/parser-gfm) engine has a bug that renders any unescaped `|` as single row tables, which has exist [for decades](https://stackoverflow.com/questions/23751917/how-do-you-disable-tables-in-kramdown). In both kramdown's and jekyll's repos there are issues mentioning the bug now and then, most of which are closed by timeout. Considering that there is no hope that the bug is being fixed, the default markdown engine in my version of theme is set as [redcarpet](https://github.com/vmg/redcarpet).

5 non standard flavored markdown syntax are enabled by default - "tables", "autolink", "strikethrough", "highlight", "footnotes". Read the original docs at [redcarpet](https://github.com/vmg/redcarpet) for more usages.