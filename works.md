---
layout: page
title: "Works"
permalink: /works/
---

<ul class="post-list">
  {% for post in site.categories.works %}
    <li>
      <!-- <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span> -->
      <div class="post-frame">
      <h2>
        <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
      </h2>
      <em><span class="post-meta">
      	{% for tag in post.tags %}
      	{{ tag }}
      	{% unless forloop.last %}&nbsp;&lt;&gt;&nbsp;{% endunless %}
      	{% endfor %}
      </span></em>
  	</div>
    </li>
  {% endfor %}
</ul>