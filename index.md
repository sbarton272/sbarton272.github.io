---
layout: default
title: Home
---

<div class="row">
    <div class="col-sm-3">
        <img id="my-pic" class="img-responsive img-rounded" src="assets/img/me.jpg" alt="Photo of Spencer Barton">
    </div>
    <div class="col-sm-8">
    <p>
        Howdy, I'm Spencer
    </p>
    <p>
        I am an engineering manager at <a href="https://digit.co/">Digit</a>.
    </p>
    <h1>Blog Posts</h1>
    <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a>
      </li>
    {% endfor %}
    </ul>
    </div>
</div>
