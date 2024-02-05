# Works

{% for post in site.posts %}
{% if post.tags contains 'work' %}
<h3>{{ post.title }}</h3>
<img alt="{{ post.title }}" src="{{ post.image }}" />
<p>{{ post.excerpt}}</p>
{% endif %}
{% endfor %}
