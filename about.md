[Home](https://okoseoglu.github.io) |
About |
[Works](https://okoseoglu.github.io/works)

## About

{% for post in site.posts %}
{% if post.tags contains 'about' %}
<h3>{{ post.title }}</h3>
<img alt="{{ post.title }}" src="{{ post.image }}" />
<p>{{ post.excerpt}}</p>
{% endif %}
{% endfor %}
