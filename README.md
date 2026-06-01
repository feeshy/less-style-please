# less style, please!

<img src="https://github.com/feeshy/less-style-please/wiki/example.png" style="max-width:640px;">

<hr id="zh"></hr>

**中文** | [English](#en) | [Wiki](#wiki)

纯文本风格Jekyll博客主题，基于rigggraz的[no_style_please](https://github.com/riggraz/no-style-please)，具有基于分类的树形结构，可系统地组织关于不同主题的文章，支持手动索引外部平台的内容，可将你的全部创作统一整合为一个网站。

- 继承
  - 极简且克制的设计风格，适合主要专注于文本内容的网站
  - 动态明暗主题
- 改进
  - 配色方案改为低饱和度、低对比度的风格
  - 表格自适应与隔行变色
  - 综合发布时间与修改时间的智能博文排序
  - PWA支持
  - 自托管的中文webfont（仅限完整版）

## 使用方法

```mermaid
flowchart LR
A[创建仓库] --> A1[下载模板ZIP包] --> A2[解压到本地] --> C
B[使用本仓库作为模板]--> B1[删除远程分支] --> B2[拉取仓库到本地] --> C
C[按需修改] --> C1[选择部署方式] --> C2[推送修改到仓库]
```

### 1. 创建仓库并获取模板

- 方法一
  - 登录 GitHub，[用本仓库作为模板](https://github.com/new?template_name=less-style-please&template_owner=feeshy)创建一个名为 `你的用户名.github.io`的仓库，勾选 `Include all branches` 并创建
  - 访问 `https://github.com/你的用户名/你的用户名.github.io/branches`，将 `example` 设为默认分支，删除 `main` 和 `lite` 分支。
  - 使用 git 工具将仓库拉取到本地
- 方法二
  - 登录 GitHub，[新建一个仓库](https://github.com/new)，命名为 `你的用户名.github.io`
  - 下载主题 [模板 ZIP 包](https://github.com/feeshy/less-style-please/archive/refs/heads/example.zip)
  - 解压 ZIP 包

### 2. 设置 remote theme 分支

- 编辑 `_config.yml` 文件，修改 `title`、`description`、`author` 等基本信息。设置 `remote_theme` 启用对应分支：
  - **完整版**：```remote_theme: feeshy/less-style-please```
    - 体积约 15 MB，内置了霞鹜文楷和思源宋体的 webfont
    - 适合对中文字重有较高要求的站点（主要影响宋体类帖子的标题层级、加粗等格式）
  - **精简版**：```remote_theme: feeshy/less-style-please@lite```
    - 体积约 2.6 MB，相比完整版去除了中文 webfont
    - 以牺牲中文显示效果为代价，大幅度降低流量消耗、提升载入速度。
- 将 `general`、`literature` 目录重命名为符合你需求的文章分类（也可自行创建更多分类），在每个分类的 `_posts` 目录中添加或修改文章
- 编辑 `_data/menu.yml`，设置站点首页的树形层级
- 详细使用方法请参阅wiki https://github.com/feeshy/less-style-please/wiki/

### 3. 部署到 GitHub Pages

网页访问你的仓库，进入 **Settings → Pages → Build and deployment**，选择通过 GitHub Actions 部署

完成以上配置后，推送代码到对应分支，GitHub Pages 会自动构建并发布你的站点。

<hr id="en"></hr>

[中文](#zh) | **English** | [Wiki](#wiki)

A pure text Jekyll blog theme forked from rigggraz's [no_style_please](https://github.com/riggraz/no-style-please), with a category-based tree structure for systematically organizing articles on diverse topics, and the ability to manually index external content to consolidate your entire content ecosystem into one single website.

- What Are Kept
  - Minimalist and reserved design style, ideal for pure text websites
  - Adaptive light and dark theme
- What Are Changed
  - Low-saturated color palette for both light and dark themes
  - Rowing color grades for tables
  - Intelligent Post Sorting Based on Publication and Modification Dates
  - PWA Ready
  - Self hosting web fonts for Simplified Chinese

## Usage

```mermaid
flowchart TD
A[Create a repo] --> A1[Download the template] --> A2[Extract locally] --> C
B[Use this repo as template]--> B1[Delete remote branches] --> B2[Pull repository locally] --> C
C[Modify on your need] --> C1[Select deployment method] --> C2[Push changes to github]

```

### 1. Create a Repository and Get the Template

* Method 1
  * Log in to GitHub, [use this template to create a repository](https://github.com/new?template_name=less-style-please&template_owner=feeshy) named as `your-username.github.io`, check `Include all branches`, and click Create.
  * Visit `https://github.com/your-username/your-username.github.io/branches`, set `example` as the default branch, and delete the `main` and `lite` branches.
  * Use git tools to pull the repository to your local machine.

* Method 2
  * Log in to GitHub, [create a new repository](https://github.com/new), and name it `your-username.github.io`.
  * Download the theme [template ZIP file](https://github.com/feeshy/less-style-please/archive/refs/heads/example.zip).
  * Extract the ZIP file.

### 2. Set Up the Remote Theme Branch

* Edit the `_config.yml` file to modify basic information such as `title`, `description`, and `author`. Set `remote_theme` to enable the corresponding branch:
  * **Full Version**: `remote_theme: feeshy/less-style-please`
    * Approx. 15 MB, with built-in Chinese webfonts for 霞鹜文楷 and 思源宋体.
    * Suitable for sites with higher requirements for Chinese font weights (mainly affects heading levels, bolding, and other formatting in Serif-styled posts).
  * **Lite Version**: `remote_theme: feeshy/less-style-please@lite` 👈 **recommend for non-Chinese writers**
    * Approx. 2.6 MB, removing the Chinese webfonts compared to the full version.
    * Significantly reduces traffic consumption and improves loading speed at the expense of Chinese display quality.
* Rename the `general` and `literature` directories to post categories that meet your needs (you can also create more categories yourself), and add or modify posts in the `_posts` directory of each category.
* Edit `_data/menu.yml` to set the tree hierarchy for the site's homepage.
* For detailed instructions, please refer to the wiki https://github.com/feeshy/less-style-please/wiki/

### 3. Deploy to GitHub Pages

Visit your repository on the web, go to **Settings → Pages → Build and deployment**, and select to deploy via **GitHub Actions**.

After completing the above configurations, push the code to the corresponding branch, and GitHub Pages will automatically build and deploy your static site.

<hr id="wiki"></hr>

[中文](#zh) | [English](#en) | **Wiki**

- 中文
  - [设计](https://github.com/feeshy/less-style-please/wiki/1-%E8%AE%BE%E8%AE%A1)
  - [使用](https://github.com/feeshy/less-style-please/wiki/2-%E4%BD%BF%E7%94%A8%E6%AD%A5%E9%AA%A4)
  - [帖子语法](https://github.com/feeshy/less-style-please/wiki/3-%E5%B8%96%E5%AD%90%E8%AF%AD%E6%B3%95)
  - [站点配置](https://github.com/feeshy/less-style-please/wiki/4-%E7%AB%99%E7%82%B9%E9%85%8D%E7%BD%AE)
- English
  - [Design](https://github.com/feeshy/less-style-please/wiki/1-Design)
  - [Usage](https://github.com/feeshy/less-style-please/wiki/2-Usage)
  - [Post Config](https://github.com/feeshy/less-style-please/wiki/3-Post-Config)
  - [Site Config](https://github.com/feeshy/less-style-please/wiki/4-Site-Config)
