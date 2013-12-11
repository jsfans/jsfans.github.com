---
layout: post
title: 使用 Jekyll 在 Github 上搭建博客
data: 2013-12-05 16:43:25
categories: tools
tags: jekyll github
author: Seishi
---

本文记录了如何用 [Jekyll][Jekyll] 搭建静态网站，用 Markdown 写文章以及在 Github 上免费托管网站。

## 用 Jekyll 创建静态网站

### 安装 Jekyll

Jekyll 的安装很简单，一句命令搞定。

{% highlight bash %}
~ $ gem install jekyll
{% endhighlight %}

### 创建网站

{% highlight bash %}
~ $ jekyll new my-site
~ $ cd my-site
~/my-site $ jekyll serve --watch
{% endhighlight %}

经过编译生成后的网站结构如下：

{% highlight text %}
my-site/
    |--_layouts/                # 模板文件存放处
    |    |--default.html        # 默认布局模板
    |    `--post.html           # 文章模板
    |--_posts/                  # 文章存放处
    |--_site/                   # 编译生成的网站根目录
    |--css/
    |--_config.yml              # 网站参数配置
    `--index.html
{% endhighlight %}

“\_posts” 目录用于存放未经编译的文章源文件，除了 Markdown 外，你还可以使用 Textile。

“\_site” 目录是网站的根目录，Jekyll 在进行编译的时候会清空 “\_site” 目录里面的内容，然后将内容重新生成。符合以下规则的文件和文件夹在编译的时候会重新复制一份到 “\_site” 目录：

- 以下划线开头;
- 没有在 “_config.yml” 文件的 “exclude” 参数中指定。

“_config.yml” 是主配置文件，网站的基本设置都是定义在这个文件中。详细的配置列表可以参看 [Jekyll的配置](http://jekyllrb.com/docs/configuration/)。

## 用 Markdown 来写文章

关于使用 Markdown 的好处以及 Markdown 的语法请参看附录中的相关链接，里面有详尽的介绍，本文只想介绍一下需要注意的一些规则。

1. 夹在两个 “---” 之间的 YAML 格式文本，Jekyll 会将其看做页面的参数。比如以下例子指定该页面使用 “\_layouts/default.html” 这个文件作为布局文件：

{% highlight yaml %}
---
layout: default
---
{% endhighlight %}

Jekyll 还允许你自定义所需的参数

> “_posts”文件夹中下划线开头的文件会被 Jekyll 忽略掉，不会生成文章页面。

## 在 Github 上托管网站

Github 支持 Jekyll 的生成，所以“_site”这个文件夹可以不用托管到 Github。

## 添加多说评论系统

## 结语

## 附录

阮一峰：[搭建一个免费的，无限流量的Blog----github Pages和Jekyll入门](http://www.ruanyifeng.com/blog/2012/08/blogging_with_jekyll.html)  
Wow!Ubuntu：[Markdown 语法说明](http://wowubuntu.com/markdown/)  
维基百科：[Markdown](http://zh.wikipedia.org/wiki/Markdown)  

[Jekyll]: (http://jekyllrb.com/)
