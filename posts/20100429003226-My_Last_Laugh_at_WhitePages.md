---
layout: post
title: My Last Laugh at WhitePages
date: 2012-04-29 00:32:26
tags: [hacks,bash]
image: /img/whitepages.jpg
comments: true
draft: false
---

o I long story short I recently reached a legal agreement with WhitePages.com where they agreed to not sue me over some data I collected from their servers. I however never agreed to not blog about the experience nor did I ever agree to not share my source code with the world as well.

Woops!

So it all started with the following email from WhitePages:

<hr/>
Mr. Vick,

Please find attached a letter that addresses your activities with respect to web properties owned by WhitePages, Inc.

Please contact me at your earliest convenience.

Sincerely,

Nathan D. Webb
206-356-6949
General Counsel
WhitePages, Inc.
<hr/>

To which I promptly replied with:

<hr/>
Hello Nathan,

Yes, I respect this request and I have ceased all scripting activities
with whitepages over 2 weeks ago and I will not deny them. In fact I
stand impressed your team did the research needed to identify me though
I did not make any particular attempts to hide my activities. The
heavy traffic was indeed coming from me, and I give praise where praise
is due.

As I just stated however, all scripting activities ceased over 2 weeks
ago. I wrote a very simple bash script in an attempt to build a
database of carrier/cell phone mapping in efforts to provide a free
open-source texting application for mobile phones. Over a couple weeks
ago I found out that the information I need is publicly available from
another source that I have chosen to use instead.

If you will notice however I used no proxies and made no attempts at
cloaking my scraping of the site and I hope that is proof enough my
intents were anything but malicious. Using random sleeps, random user
agents, and TOR proxies would of easily made my scraping undetectable
had a covert malicious effort been my intent. I just wanted to save
myself the trouble of copying and pasting a 170 million number blocks
by hand. As you must understand it is quite troublesome to do manually.

I sign all my outgoing mail with a virtually impossible to replicate
4096 bit RSA GPG signature so by all means count this as an official
statement from me if needed.

Your work here is done. Your client will have no more trouble from me :-)

--
Lance R. Vick
<hr/>

I was then called by Nathan later that afternoon where he informs me that whitepages carrier lookup services acquires its results from a third party, and that they pay for every search. He went on to state that the fact I had done far MORE searches than most people, that I should have to pay them to the order of $10,000 for searching so many of their public records. (Granted it was about 60 million records I pulled, but what is that between friends?)

I made it clear this was not going to happen, and we went back and forth over email for the next several weeks. They eventually agreed to back off legally via a document where both parties agreed not to pursue... under one primary condition: I had to reveal the source code I used to do the scraping on their site.

I did so, and all was kosher. I however do not appreciate being bullied by legal teams, and thought others out there might enjoy this simple bit of bash source code as well, which as of the writing of this article, should still work.

<script src="https://gist.github.com/1574264.js"> </script>

You would think if they wanted to limit the number of searches they would put in a basic rate limiter in place like pretty much every other search tool. It would only be a few lines of code. Oh well.

I am never legally allowed to run this or any similar code again, but if anyone else wants to play with it... have fun :-)
