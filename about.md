---
layout: category_index
title: About
permalink: /about/
category_name: about
---

## About

{% for post in site.posts %}
{% if post.tags contains 'about' %}
<img alt="{{ post.title }}" src="{{ post.image }}" />
<h3>{{ post.title }}</h3>
<p>{{ post.content }}</p>
{% endif %}
{% endfor %}
