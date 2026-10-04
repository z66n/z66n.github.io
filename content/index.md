---
layout: default
title: Content
permalink: /content/
---

# Content

{% assign types = "articles,bookmarks,likes,notes,photos,replies" | split: "," %}
{% for type in types %}
  {% assign posts = site[type] | sort: "date" | reverse %}
  {% if posts.size > 0 %}
    <h2>{{ type | capitalize }}</h2>
    <ul>
      {% for post in posts %}
        <li>
          <a href="{{ post.url }}">{{ post.title | default: post.url }}</a>{% if post.date %} - <small>{{ post.date | date: "%b %-d, %Y" }}</small>{% endif %}
        </li>
      {% endfor %}
    </ul>
  {% endif %}
{% endfor %}
