---
layout: post
title: Thermo-Electric Axolotl Cooling
date: 2011-12-20 11:29:27
tags: [axolotl,tec,hardware]
image: /img/axolotl.jpg
comments: true
draft: false
---

So in my many ventures around the interwebs I eventually ran into a picture of an unusual animal, the Axolotl. Over the years I have cared for and been aware of a lot of exotic pets but this... this was something totally new to me.

On seeing pictures of these for the first time I did some <a href="http://en.wikipedia.org/wiki/Axolotl">research</a>, then did some more <a href="http://www.axolotl.org/">research</a>. Turns out they are a listed as a critically endangered species existing wild in only one lake in the world. Specifically, <a href="http://en.wikipedia.org/wiki/Lake_Xochimilco">Lake Xochimilco</a> in a valley in the mountains of Mexico. I also learned they have some very fascinating properties such as their ability to <a href="http://www.youtube.com/watch?v=_R20vEIHcOo">regrow just about any body part</a>, and some <a href="http://www.youtube.com/watch?v=Uleb3MlZ4JU">glow in the dark</a>. If threatened, some will even permanently sacrifice their regenerative abilities in order to drop their gills, grow full tails, fire up a set of lungs, and <a href="http://www.caudata.org/cc/images/species/Ambystoma/A_mexicanum1BARTLETT.jpg">begin life on land as a salamander</a>. These things are like legit real-life pokemon that can "evolve" and everything.

So learning all this I decide I want to procure a couple of them as pets. I found they can be bought online from Phil Vena from <a href="http://buy-axolotls.com">buy-axolotls.com</a> who has been breeding them in his basement for several years. He has started a rescue program, as well as efforts  to educate people about these fascinating animals as well as helping introduce new colors and traits to the species. I spoke to him at length a few days ago and was very impressed by his knowledge and care for the animals, and would highly recommend him to anyone who decides they want axolotls of their own.

Anyway, so I got a couple ordered, then shortly after read a warning I somehow did not register before. Despite all their regenerative abilities, 75F or higher will kill them. Considering I live in Orlando, Florida... thats a problem.

<a href="http://familab.org/blog/wp-content/uploads/2011/12/800px-Peltierelement.png"><img class="size-medium wp-image-1715 right" style="border-style: initial; border-color: initial;" title="800px-Peltierelement" src="http://familab.org/blog/wp-content/uploads/2011/12/800px-Peltierelement-300x165.png" alt=""/></a>Right away I thought back to my years of cooling overclocked computer CPUs with liquid circuts and<a href="http://en.wikipedia.org/wiki/Thermoelectric_cooling"> Thermo Electirc Cooling Elements</a> (TEC). In short when electricity is applied to a TEC one side gets very hot, and the other gets very cold. The hot side must be controlled however it will quickly build up too much heat and cook itself.

I however wanted to not jump to a hard solution if there was something cheap and available to do this for me. The best thing I could find on the market to help cool a small tank like my <a href="http://www.hagen.com/uk/aquatic/addinfo/fluval_edge.cfm">Fluval Edge</a> was the <a href="http://www.google.com/products/catalog?q=iceprobe&amp;um=1&amp;ie=UTF-8&amp;tbm=shop&amp;cid=15516201384105473116&amp;sa=X&amp;ei=SbfvTqjAIISftwfq2eXACA&amp;ved=0CFkQ8wIwAg">IceProbe</a>, at about $120 shipped. Considering the fact that its maximum temperature drop is only 3-6 degrees at best, and that it would not even fit in the tank... I looked for external cooling options. Cheapest external cooler I could find was an <a href="http://www.google.com/products/catalog?q=aquarium+chiller&amp;um=1&amp;ie=UTF-8&amp;tbm=shop&amp;cid=6595180832334228091&amp;sa=X&amp;ei=ubfvTqeMPISCtge547T_CQ&amp;ved=0CIYBEPMCMAE">Aqua Euro USA chiller</a> at $290. Thats the lowest end of these units, most at well over $500. There is also the fact it would be a huge brick nearly the size of my tank I have to put somewhere. These facts didn't sit well, so I then jumped into #familab on IRC to discuss the TEC based DIY options.

After looking at some TEC prices, and finding they are only about $5 for a 40mm^2 77watt unit, I thought building it was probably a smaller and less expensive path. On talking to Kyle on #familab to IRC he helped me pick out some compatible parts to sandwich the TEC and give me the final push I needed to just make it.

<img class="left" style="border-style: initial; border-color: initial;"
src="https://lh3.googleusercontent.com/-AKyjslTbQT8/Tuf5zpxVx5I/AAAAAAAAGZo/YMISfnbZmWY/s800/IMG_20111209_150115.jpg"
alt="" />

Ordered it all that night and a couple days later brought it all to Familab for the 2011 Holiday Party.

Had to mill out some holes that did not quite fit and then Kyle and I got it all put together. Hot side of the TEC gets a conventional universal mount Fan CPU cooler, and the cold side gets a universal mount water block CPU cooler. The 40mm TEC unit was a perfect fit between them.

We then set up a water pump to pull water out of a 2 liter bottle, through the water block mounted to the cold side of the active TEC unit, back out to the bottle. Within a few hours the bottle was down to a brisk 53 degrees. Success!

Next I took it all home and got it all integrated into my tank, and let it run. Several hours later it was down to 65F, and considering Axolotls are happy anywhere between 40-72F, this would do perfectly.

<img class="right" src="https://lh4.googleusercontent.com/-PzM6coEIOqo/Tuf5zo9WICI/AAAAAAAAGZo/LuzQdn6DgsE/s800/IMG_20111211_005017.jpg" alt="" />

I then added a digital thermometer I got off Ebay for a couple dollars by dremeling out a hole in the front bezel and used some coat hanger parts to build a bracket to hang it. I also added a power rod to wire it all up neatly, and then introduced my two new pets which were previously living in buckets in front of my air conditiner.

I now have my Axolotls happily living on my desk next to me. When I get frustrated with a programming challenge I can just look over and go "You are very strange creatures, and you amuse me" then go back to my work refreshed. Though I may well make some modifications to this design in the future or invest in a larger tank at some point, I am pretty happy with how this setup turned out. It seems to be a perfectly viable option for people who need to keep cold-water species that don't feel like shelling out about $300 on a commercially sold  water chiller.

Here are some pics of the "finished" product and process:

<object width="100%" height="400px" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"
codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0"><param
name="src" value="https://picasaweb.google.com/s/c/bin/slideshow.swf" /><param
name="flashvars"
value="host=picasaweb.google.com&amp;hl=en_US&amp;feat=flashalbum&amp;RGB=0x000000&amp;feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F109278148620470841006%2Falbumid%2F5685787719347218033%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_US"
/><param name="pluginspage" value="http://www.macromedia.com/go/getflashplayer"
/><embed width="100%" height="400px" type="application/x-shockwave-flash" src="https://picasaweb.google.com/s/c/bin/slideshow.swf" flashvars="host=picasaweb.google.com&amp;hl=en_US&amp;feat=flashalbum&amp;RGB=0x000000&amp;feed=https%3A%2F%2Fpicasaweb.google.com%2Fdata%2Ffeed%2Fapi%2Fuser%2F109278148620470841006%2Falbumid%2F5685787719347218033%3Falt%3Drss%26kind%3Dphoto%26hl%3Den_US" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>
