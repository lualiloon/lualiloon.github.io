---
layout: default
title: Home
---

## Welcome to my game design playground! 

This is where I experiment with game design ideas and showcase my past projects.

I've been fascinated with game design for years. I love creating worlds, characters, and mechanics that players can immerse themselves in. This website is my way of sharing that passion with you.

### Monthly Projects

Every month, I'll post a new update with a small project I've been working on. These projects could be anything from a quick prototype to a mini-game. My goal is to challenge myself to create something new every month, and share the process with you.

### The Crypt

In addition to my monthly projects, I'll also be digging up my old projects and adding them to [The Crypt](/crypt.html). This is where you can find all my forgotten work -- old code, bad art, unfinished design docs. It's a place to explore my past projects and see how skills and ideas can develope over time.

### Let's Explore

Game design is all about experimentation, iteration, and learning. My hope is that this website can be a place for us to learn and grow together, as we explore interactive experiences and ignite imagination.

Thanks for stopping by, I hope you enjoy your time here!

### Posts

<ul>
{% for post in site.posts %}
<li>
<a href="{{ post.url }}">{{ post.title }}</a>
</li>
{% endfor %}
</ul>
___

## About this website

Built using [jekyll](https://jekyllrb.com/)

Content and styling created in collaboration with [ChatGPT](https://chat.openai.com/)

