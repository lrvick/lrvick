---
layout: post
title: Making Users Think Firefox Is IE6
date: 2008-11-11 00:33:47
tags: [tech,firefox,ie6]
image: /img/firefoxeatsie.jpg
comments: true
draft: false
---

I have had customers... that the mere word "change" scares into tears. Some people just can not wrap their heads around concepts like Favorites being the same thing as Bookmarks. The solution? Hand them Firefox, in a way that they are not even aware you did. Everyone wins.

Before you write me off as a dirty sinner... hear me out.

Ever have those situations where you install a peice of software for someone for their own protection... and they uninstall it and go back to they way they were used to the second you turn your back... then everything ends up broken and it is suddenly your fault?... Yeah... I have too.

This is a solution for those people. Make Firefox Look and feel exactly like IE6. (Because to people married to IE6, even the appearance of IE7 often scares them).

This is also a solution for people who have "IT Professionals" over their heads
that for whatever reason dictate nothing but IE6 is to be used on a network... and you know better.

My recipie is as follows:

  1.  Start with a totally stock Firefox Installation and be sure to import from Internet Explorer so you get the default bookmarks toolbar and what-not.
  2.  Install the NoUn Buttons extension
  3.  Install my Modified FirefoXP extension (My version includes a couple of cosmetic fixes, integrates the IE6 icon, and adds an "address" button for the toolbar)
  4.  Install the Old Location Bar extension
  5.  Install the FireSomething extension
  6.  Install the PlainOldFavorites extension
  7.  Install the Menu Editor extension
  8.  Install the Yahoo Toolbar extension (Optional... but let's face it, virtually all IE6 users _expect_ it to be there since it got installed by some random peice of software they used ages ago)
  9.  Install the Google Toolbar extension (Also Optional... but I have seen
  plenty of hardcore IE6 users who insist on having both!)
  10.  Go to Tools > Add-Ons then hit "Options" on Menu Editor. Select "Bookmarks" under "Edit Menu" then uncheck "Visible". Hit OK.
  11.  Go to Tools > Add-Ons then hit "Options" on Firesomething. Delete everything in all 3 columns. Add "Microsoft" "Internet" and "Explorer" to those respective three columns. Hit Apply.
  12.  Right click on the toolbar and select "Customize" then drag and drop everything around to match our screenshot.
  13.  Remove all Internet Explorer icons on target system and put Firefox icons named "Internet Explorer" in their place.
  14.  For each icon do Right click > Properties > Shortcut > Change Icon.
  Under "Look for icons in this file:" put "C:\\Program Files\\Internet Explorer\\iexplore.exe" then select that evil blue E.
  15.  Repent and be ashamed of yourself.

My result came out like this:

<img src="/img/fakeie.jpg" style="width:100%;"/>
