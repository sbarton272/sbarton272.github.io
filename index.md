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
        I am a <a href="https://xkcd.com/303/">software engineer</a> at <a href="https://branch.co/">Branch</a>. I live in <a href="{% post_url 2016-06-16-sf-photos %}">SF</a>.
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
