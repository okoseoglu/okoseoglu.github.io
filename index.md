Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper malesuada libero et tincidunt. Donec suscipit nisi nec leo molestie elementum id et elit.

Curabitur a condimentum ligula eget.

[Home](https://okoseoglu.github.io) |
[About](https://okoseoglu.github.io/about) |
[Works](https://okoseoglu.github.io/works)

## Featured work

{% for post in site.posts %}
{% if post.tags contains 'featured' %}
<h3>{{ post.title }}</h3>
<img alt="{{ post.title }}" src="{{ post.image }}" />
<p>{{ post.excerpt | truncatewords: 20 }} →</p>
{% endif %}
{% endfor %}
