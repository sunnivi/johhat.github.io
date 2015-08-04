---
layout: default
title: Blog
permalink: /blog/
---
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <h1>All posts</h1>
      <p class="text-muted">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>
      <hr>
      <ul class="list-unstyled">
        {% for post in site.posts %}
          <li>
            <h3>
              <a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
              <small>{{ post.date | date: "%b %-d, %Y" }}</small>
            </h3>
            <p>
              {{ post.excerpt }}
              <small><a href="{{ post.url | prepend: site.baseurl }}">Read more</a></small>
            </p>
          </li>
          <hr>
        {% endfor %}
      </ul>
    </div>
  </div>
</div>