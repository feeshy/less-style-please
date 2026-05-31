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

字体搭配分为五个层次：

|                        | 首选字体                                                                                    | 候补字体                                                                                                                                                               |
| ---------------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 通用内容               | Avenir Next<br>苹方-简                                                                      | Segoe UI, [Clear Sans🌐](https://github.com/intel/clear-sans), HarmonyOS Sans,<br>思源黑体 (Noto Sans CJK SC), 思源黑体 CN (Noto Sans SC), 更纱黑体, sans-serif         |
| 文学性内容             | [Garamontio🌐](https://github.com/octaviopardo/EBGaramond12)<br>思源宋体 (Noto Serif CJK SC) | EB Garamond, Adobe Garamond Pro, Garamond, Palatino<br>[思源宋体 CN / Noto Serif SC🌐](https://github.com/notofonts/noto-cjk), 宋体-简, 冬青明朝体, serif               |
| 元数据<br>引用<br>注释 | [Ysabeau🌐](https://github.com/CatharsisFonts/Ysabeau)<br>霞鹜文楷                           | [霞鹜文楷轻便版🌐](https://github.com/lxgw/LxgwWenKai-Lite), 华文细黑, 冬青黑体, sans-serif                                                                             |
| 表格                   | Bahnschrift                                                                                 | SF Pro Condensed, Helvetica Neue Condensed, HarmonyOS Sans Condensed, Roboto Condensed🌐, Ubuntu Sans Condensed, Ubuntu Condensed, Inconsolata, Ubuntu Mono, sans-serif |
| 代码                   | 等距更纱黑体                                                                                | Ubuntu Mono🌐, Inconsolata, Iosevka, JetBrains Mono, Monaco, Source Code Pro, 思源黑体HW (Noto Sans Mono CJK), 文泉驿等宽微米黑, monopace                               |



标🌐的字体切割为细粒度webfont并托管在`/assets/OpenFont`目录，以期获得稳定的跨平台显示效果。

> 💡 如您的博客不需要使用「霞鹜文楷」与「思源宋体」的 webfont，则强烈建议选择本主题的 lite 分支构建，将极大降低网站的流量消耗。

考虑到流量消耗，各大系统均预装的黑体并未托管webfont。安卓Droid Sans Fallback缺字重的问题通过浏览器font-synthesis合成解决。Safari似乎有可变Webfont重复合成字重的bug，考虑到iOS预装的苹方不缺字重，干脆禁用了macOS与iOS的font-synthesis。

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