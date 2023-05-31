---
layout: default
---
## Monthly Posts

<ul id="posts">
{% for post in site.posts %}
<li class="post-entry">
<a href="{{ post.url }}">{{ post.title }}</a>
{{ post.excerpt }}
</li>
{% endfor %}
</ul>