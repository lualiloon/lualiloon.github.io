---
layout: default
---
## Monthly Posts

<ul id="posts">
{% for post in site.posts %}
<li class="post-entry">
<a href="{{ post.url }}">
<h3>{{ post.title }}</h3>
<span class="read-more">Read More →</span>
</a>
</li>
{% endfor %}
</ul>