---
layout: default
title: Content
permalink: /content/
---

# Content

<ul>
  {% assign types = "articles,bookmarks,likes,notes,photos,replies" | split: "," %}
  {% for type in types %}
    {% for post in site[type] %}
      <li>
        <a href="{{ post.url }}">{{ post.title | default: post.url }}</a>{% if post.date %} - <small>{{ post.date | date: "%b %-d, %Y" }}</small>{% endif %}
      </li>
    {% endfor %}
  {% endfor %}
</ul>
