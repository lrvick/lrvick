---
layout: post
title: Accessibly Importing vCards From QR Codes
date: 2012-02-24 19:15:58
tags: [qr code,tech,business,android,iphone]
image: /img/tawlkcards.jpg
comments: true
draft: false
---

QR codes are popping up just about everywhere these days. Menus, bumper
stickers, bill boards, clothing, etc.

It makes perfect sense. I mean how often do you see a URL and actually go
through the trouble of typing it all in by hand, especially if it is long? I
don't. When I see a QR code however it is just a simple matter of snapping a
picture and it is now open in my phone browser.

Because of this kind of utility, one place QR codes are starting to pop up
more frequently, is business cards. People often put a link to their website
or company website in a code and put it on the card. This usually works out
great.

There is another widely desired use for QR codes here however: Having them
import a contact directly into the address book of a phone.

This _should_ be obvious, standard, and easy like QR codes themselves. Sadly,
it's not.

Since you can embed any type of textual information into a QR code, many people
just directly encode the text of a meCard or vCard.

This seems rather obvious and _should_ just be that easy, but in practice you
run into some problems.

First lets take a look at my fairly complete vCard:

    :::text
    BEGIN:VCARD
    N;CHARSET=utf-8:Vick;Lance;;;
    FN;CHARSET=utf-8:Lance Vick
    ORG;CHARSET=utf-8:Tawlk
    TITLE;CHARSET=utf-8:Founder & Lead Engineer
    TEL;WORK:4072837596
    EMAIL;INTERNET;WORK;CHARSET=utf-8:lance@tawlk.com
    ADR;WORK;CHARSET=utf-8:;;4545 36th St.;Orlando;FL;32811;United States
    URL;WORK;CHARSET=utf-8:http://tawlk.com
    VERSION:2.1
    END:VCARD

There are two main ways of getting this imported into a phone via QR code.

## Method 1: Encode It directly ##

You can easily just dump the full text of a vCard into any QR code generation
service like [Kaywa](http://qrcode.kaywa.com/).

Encoding the vCard text directly works fine, but results in the dense QR Code
seen on the left.

<img class="left" src="/img/hugeqr.png">

Now on looking at this an immediate problem surfaces. This is a
huge QR code. If you scan it with your phone right now, it will probably work
fine. In practice however you would need to shrink it down to fit on a
business card, roll it through a printer that will render it in less than
perfect quality, then try to snap a clear picture of it with your average
smart phone camera which may or may not have auto-focus. This will sometimes
result in an error such as "No QR Code Found", because at that point your QR
Decoding application only had a black and white smudge to work with.

If you are getting high resolution cards professionally printed, or have a
good quality laser printer you might get away with using a full vCard, however
be sure to test a lot of phones if you try to make sure their cameras can pick
it up.

The only way I could get this method to work well on an average quality
printer, was to include only the bare essentials in the vCard. Name, phone,
email. Anything more than that and the QR tends to end up too large.

This brings us to the reality, that embedding anything much longer than a URL
or a very small vCard is probably going to result in a QR code too dense to
be read clearly by most smart phones, if printed with a lower-end printer, or
from any distance.

At this point I thought to myself "Ok, so I will just put the vCard file on my
server and link to it".

This brings us to the next method.

## Method 2: Put it on a server and link to it ##

In a perfect world this should work except for what I would consider to be a
bug in android phones... they simply download the file and ignore the fact
that it is a vCard that should be handled by the Contacts app.

Details on this issue can be found [here](http://code.google.com/p/android/issues/detail?id=9215&q=vcard&colspec=ID%20Type%20Status%20Owner%20Summary%20Stars)

After much toying around I found that if you serve your VCF files with the
following headers, Android will treat them as importable vCard files:

    :::
    Content-Disposition: attachment;
    Content-Type: text/x-vcard; charset=utf-8;


For nginx the vhost configuration to inject the needed headers will look
something like this:

    :::
    server {
        listen 127.0.0.1:80;
        server_name vcf.example.com;
        location / {
                root /home/user/vcf/;
                add_header content-disposition 'attachment;';
                add_header content-type 'text/x-vcard; charset=utf-8;';
        }
    }

Once you have a URL serving up a vCard with the correct headers, you can then
run it through a URL shortening service, and many will even give you tracking
to let you know how many times people use it.

My preferred way is to put the link into http://goo.gl which gives me a short
URL, a tracking URL, and a QR code all in one go which is fairly straight
forward and does not require any sign-up or API keys.

With your QR code that now links to a vCard served with the correct headers all
in place, you are set for Android, and Blackberry with virtually every
application I have tested.

Now that leaves iOS devices. Most barcode scanning applications will do the
right thing and open the vCard in the Mobile Safari browser. The problem is
Mobile Safari has no built in extensions for dealing with files which means
that downloaded files like vCards will just sit there. You will be unable to
import them or do anything with them.

There is no solution for this, short of encouraging people to install an
application to work around Mobile Safari's inability to deal with files.

So far these are the only applications I am aware of that will allow downloaded
vCards to import on iOS:

  * [Qrafter Pro](http://itunes.apple.com/us/app/qrafter-pro-qr-code-reader/id468610525?mt=8)
  * [TapForms](http://itunes.apple.com/us/app/tap-forms-database/id291405311?mt=8)
  * [vCard Getter](http://itunes.apple.com/app/vcard-getter/id454057908)

If you have confirmed this method to work with any other IOS apps please let
me know and I will include them.

## Conclusion ##

All in all each method has its own advantages and disadvantages. Ultimately to
me, method #2 makes the most sense. It allows for tracking, lets you keep the
same QR code forever, and lets you edit the vCard even after printing. The
lack of support in popular IOS applications however does make this difficult.
I can only hope Apple chooses to resolve this situation soon.

Let me know what methods you choose to go with and how it works out for you.
