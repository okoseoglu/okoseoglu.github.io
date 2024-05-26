---
layout: home
---

Translator and interpreter based in Turkey, providing services in English and Turkish. I mainly focus on [human rights law](#), [journalism](#), [social theory](#), and [literature](#). Experienced localization linguist. Notary certified legal translator. Bachelor of letters. Reader. Chess player.

## Featured work

{% for post in site.posts %}
{% if post.tags contains 'featured' %}
<img src="{{ post.image }}" />
<h3>{{ post.title }}</h3>
{% endif %}
{% endfor %}
