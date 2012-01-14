---
layout: post
title: Why software projects go wrong
date: 2012-01-10 21:39:42
tags: [tech, design, business]
image: /img/nuke.jpg
comments: true
draft: false
---

In most cases? Because they are not planned, managed, and delegated well.

In order for a software project to be successful, particularly in an agency
environment that has lots of clients, employees, and layers of communications,
a strict set of operating procedures is a fundamental requirement.

Based on my experience working with many agencies, founding
companies (now on my 4th), and having to take an active role at just about
every stage of many projects... I will attempt to share what I feel to be best
practices to ensure success.

These are all things that if not at least somewhat adhered to, will usually
render projects that never end, and plummeting company morale. The
following could probably apply to many types of projects, but based on my
experience I can only speak for software projects.

Below I will break the rest of this article into four stages: Introduction,
Definition, Production, and Delivery. For all intensive purposes this all
applies to startups as well and the word "client" can be used interchangeably
with "investor"

### Introduction Stage

This is where a prospect is first contacted. Here they are enticed by a
sales agent about how your team can help improve any combination of
sales, public exposure, or overall usability of web/tech offerings.
This is the point where hopefully a prospect becomes engaged and willing to
take the time required to begin planning the project in order to get a quote.

Failure in this stage usually creates a nightmare and loss of money for the
company. Getting prospective client expectations set correctly here is
absolutely critical.

#### Tell the truth

Not knowing team limitations is not an excuse. Sales agents in most cases know
nothing about what really goes into software engineering, and as such
everything is magic to them. If not properly controlled, they will simply tell
a prospect whatever they think they want to hear for easy kudos or commissions.

This works out fine until the work produced by the team does not live up to the
promises made by the sales agent. Sadly however the punishment for this mistake
usually falls on engineering teams who end up having to work insane hours only
to still fail to meet the unrealistic expectations set in the introduction
stage.

#### Sell from an engineer-approved list

Sales agents should only be allowed to sell from a very clear list of defined
possibilities and general services. List and any modifications should only be
considered valid when approved by a senior engineer.

#### Don't tell prospects what they want

Let them tell you. Lots of well crafted questions should be asked here so that
a prospect gets a chance to express things in their company that could be
better, so where applicable they can be directed to solutions your team is
already prepared to offer. If a sales agent simply throws out a bunch of things
prospects will often say "oh yes I want all of that", instead of honing in on
the things they really need and would actually use based on answers to
qualifying questions. Feed them just enough to get them talking about problems,
or less than optimal situations your team might have solutions for.

#### Do not discuss schedules

Discussing even a general time frame with a prospect, until well into the
definition stage is project suicide. A sales agent should not release any time
frames that have not been signed off on by engineers, when enough information
exists to do so accurately. Instead questions like this should be sought as an
opportunity to encourage a client to invest time in a definition stage so you
can work out the real answers to timeline questions together.

### Definition stage

At this point a prospect is interested in building out a "blueprint" or
"story board" of exactly what your company intends to do for them with a
time frame and quote. If the initial sales stage was done correctly, a prospect
at this point still has no quote, and no time frame but has been "hooked" and
now wants both.

#### Wire-frame everything

At this stage a UX developer should be involved to help work with the client
to iterate over at least functional wire frames that very clearly define every
human-facing aspect of the project. What functions will exist where, examples
of every type of output, what functions will be provided to users vs employees,
etc. A given set of wire frames and overall project plan can not be considered
approved or ready for quoting until it is signed off on by both the client, and
a lead engineer.

If due diligence is done here quotes can nearly always be provided within 10%
accuracy against the final outcome.

#### Itemize all tasks

Until a project is broken into very specific tasks and components based on
client-approved wire frames, the design stage is not over. Tasks should be small
enough that they can be defined in hours. Anything that is defined in weeks is
almost certainly made up. You  also can not expect to get an engineering
team to give you an accurate time estimate for a project, until it is broken up
into small functionalities.

This level of detail can also help a prospect see how much is involved in a
given project and increase their overall respect for your team's capabilities
and control of the situation. It will also help them be more understanding when
you tell them how long it will take, and how much it will cost.

#### Let engineers estimate hours

If you are not the one doing the work, then you can't say exactly how long it
will take.

To quote from the FogzBuz article (linked below) "Any system where management
writes a schedule and hands it off to programmers is doomed to fail. Only a
programmer who is going to do the work can figure out what steps they will need
to take to implement that feature"

#### Block out testing and documentation time

If you make the assumption that all software is going to just work on a first
pass, and be easy to understand for any future party that needs to work on it,
you are either a delusional optimist or you have not been around software
engineering very long. If a set block of time is not left for testing and
documentation it will simply not get done, and when it does not get done, it
will come back to bite your company every single time. We are dealing with
humans and computers here. Things will break that are not obvious and things
that seem obvious will not be understood.

### Production Stage

Now, with all proper planning and client expectation management out of the way
it is time to get stuff done.

Here all the hard work and detailed "blueprints" of the project are handed off
fully to the engineering team, to produce.

If the introduction and definition stages were done correctly, this should be a
really fun experience where your engineering team can tackle the well defined
challenges. This will include solving problems that there is existing
experience with in new ways, or getting experience solving new challenges for
the first time.

At the end of this stage you should have a completed well tested work, ready to
hand off to the client in the delivery stage.

#### Commit everything

Pick a version control system like git, subversion, mercurial, CVS... anything
just use one. Make sure all engineers are committing frequently with detailed
commit messages so your project has a very full and detailed history. People
not used to working this way will complain, but it is not optional if you
intend to have quality work, and any professional credibility. It also allows you
to track code changes, get stats on team progress, enforce coding guidelines,
and see who is pulling their weight and who is not.

If the VCS history of one engineer shows he has only committed 10 lines of
code in the whole project, or has not made a commit in weeks, or that every
time he commits code other engineers have to immediately make repair-commits...
pretty sure bet what he is hammering away at on his workstation is in strong
need of review.

Version control keeps everyone honest and accountable, and creates history logs
that even the least technically inclined can use to gauge progress. Team
managers have no excuse for not keeping a close eye on this.

#### Document everything

How do you get this up and running with fresh hardware? What special
considerations exist? How are access credentials made available? What libraries
or third party requirements exist? These are the sorts of questions that a new
engineer walking into this project later is going to be asking. Answers must
exist otherwise that future party that is mucking around in code your team
produced is going to cause more harm than good. Regardless it is going to fall
back on your team as that that future party is going to complain, a lot.

More often than not a future problem that would be a huge ordeal can be avoided
by having easily accessible detailed documentation of everything required to
deploy and use a project. It is a chore for your engineers, but they are the
only ones that can do it and it must be done.

#### Test Everything

If an end user can do it, then it needs to be tested. If any new
code is pushed, then it must all be tested again. If bugs are not being found
with a new piece of software of any complexity, then testing is probably not
being taken seriously. No software is perfect. If due diligence is not given
to testing, you are in practice letting your clients or users be your primary
testers. That is amateur and reflects badly on your team.

#### Don't rely on engineers for testing

It is a far too common for testing to be written off as the sole responsibility
of the engineering team. This is a terrible judgement. Engineers should not
be bothered with the bulk of testing. Anyone can do testing, but few can do what
they are doing. Secondly, engineers are the worst people to do testing from an
end-user perspective. They are biased, have tunnel vision, and will often miss
the obvious because their minds are focused on that next big feature to write.
Get the people who are not programming to take the lead in this. Interns,
graphics artists, managers, it does not matter who, but at least 2 different
people with vastly different perspectives need to own this, and be willing to
provide detailed bug reports to engineers with clear written steps required to
reproduce the issue themselves.

#### Do not change the plan

For any reason.  There are no _small_ changes. If engineers are distracted,
their minds are being taken away from the original set of goals and the
project will be late, or less refined. Once the blueprint is made, and the
definition stage is over, everyone needs to take their creative hats off and
get down to laying the bricks.

If you contract a company to build a skyscraper, an architect makes a
blueprint, then a super-intendant oversees development. If you demand 5 more
bathrooms and a swimming pool on the roof mid-development, it is not going to
end well. Software Engineering is similar.

Don't even waste time with meetings about potential new changes and polluting
thought-space until the job at hand is done. Put a pin on a board and come back
to it. If a feature request was not made in the definition stage, then the
window was missed and in most cases it should be shelved as a future idea for
a future build. If it really is a deal-breaking feature then go back to the
definition stage and re-adjust everything so all expectations and deadlines are
re-set and well understood.

### Delivery Stage

If you have done the other three stages properly, this should be a very happy
time, where people can take a breath, take pride in the work they have done,
and get due praise from those the work is provided to.

There are however some responsibilities here that should not be overlooked.

#### Hand over everything

Do the right thing. Give the client absolutely everything they would need in
order to fire your company, and go with someone else. Credentials,
documentation, engineer notes... everything. If you put the complete control in
their hands, and you have done a good job, they will feel safe, and respected...
and respect you in return. If they have to fight you to get credentials and
organized documentation, it could very quickly lose your team any respect you
have gained in the course of the entire project.

Far better for everyone to make sure all code and documentation is in an online
VCS like Github, and shared with the client.

#### Celebrate

If you are not giving your team members the due credit for the hard work they
have done, especially if things go wrong that merit above-and-beyond efforts,
your team morale is going to drop off the grid and you will notice your best
and brightest making more frequent updates to their LinkedIn profiles.

It is easy to forget we are working with humans in the software industry. Every
team member has feelings and egos that need attention and respect. If you
somehow can't afford to give each team member a big job-well-done bonus of some
valuation every time a big project is complete, at the very least treat them
all to a nice meal to let them know they are appreciated and to work out any
animosity that has built up through the course of the project. Build it into
the budget. It is important if you intend on keeping your team happy,
productive, and around for a while.

### Recommended Reading

This article is only the tip of the ice berg. If you are in a position to lead
teams there are plenty of great materials out there you should consider taking
a look at. In particular however I want to call attention to the two I have
found the most helpful:

* [The Mythical Man Month](http://en.wikipedia.org/wiki/The_Mythical_Man-Month)
* [FogBugz guide to Estimating Software Tasks](http://www.fogcreek.com/fogbugz/docs/70/topics/schedules/Estimatingsoftwaretasks.html)

### Closing

There is a lot more that could be added to this, but the intent was to cover
all the most common things that result in project failure, so they can be
considered in order to provide project success.

Hopefully despite the extra work, you will take some of these things to heart
so your projects can be more successful.

