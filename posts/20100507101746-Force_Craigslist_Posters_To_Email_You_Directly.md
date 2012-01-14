---
layout: post
title: Force Craigslist Posters To Email You Directly
date: 2010-05-07 10:17:46
tags: [craigslist,hacks,php]
image: /img/craigslist.jpg
comments: true
draft: false
---

Ever get tired of the usual slow and cumbersome process of responding to a craigslist ad? Go browse, find a post, determine if you have responded to it or not, then copy the email address to your mail client as well as the text of the ad so they know what you are replying to. Perhaps even copy the post’s title to the subject of the email with re: in front of it.

It is a pain and it is a big enough pain that no one has time to mess with it and by the time you do all of that, someone else has beaten you to it.

Enter Craigmailer. This is a little script I put together that watches craigslist topics for you, then emails you postings from the requested threads as though they were coming directly from the posters email address. All the information is already plugged in for you. Then all you need to do is have your email client put them in their own folder to keep them out of your usual mail-flow, then perhaps install a canned-responses plugin, and reply, reply, reply. ;-)

Requires PHP with working mail(), file_get_contents, and SQLite support.

<script src="https://gist.github.com/1574256.js"> </script>
