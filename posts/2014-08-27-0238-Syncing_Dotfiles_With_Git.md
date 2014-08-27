---
layout: post
title: Syncing Dotfiles With Git
date: 2014-08-27 02:38:52
tags: [bash,git,linux,cli]
image: /img/terminal.png
comments: true
draft: false
---

# Problem

Maintaining preferences on multiple machines sucks.

So, I use a lot of computers. In a given week I may log into and use systems
ranging from Gentoo, Debian, Arch, FreeBSD, and sometimes even OSX if I am
being forced against my will (or having to debug Safari/iOS nonsense).

On all these machines I like all my tools of choice to have consistent and
predictable configurations suited to my workflow. This may include setting up
my terminal preferences, colorschemes, IDE plugins, aliases, custom scripts,
window manager setup/plugins, etc. Manually changing and migrating these sorts
of things across laptops, servers, rapsberry pis, etc... is pretty
unreasonable.


# Solution

Make your entire home folder a Git repo!

I did do the manually-copying-stuff-around thing for a while, then realized,
hey, Git is pretty good about tracking and syncing changes. Why not make the
entire home folder on every system a Git repo?

But then you might be thinking "I dont want to have to manually omit all the
personal files and system-specific data all the time". Yeah, good point, that
would be a big pain, and also put you at high risk for accidentally committing
something sensitive. So then, in this instance, the reverse of gits defaults
make more sense. Ignore everything, then explicitly include what you want!

Lets break this down into some steps.


# Initial Repository Creation

  1. Make the home folder on your primary system a Git repo

        :::bash
        cd
        git init

  2. Ignore everything by default

        :::bash
        echo "*" >> ~/.gitignore
        git add .gitignore

  3. Force add/commit specific files you want to track

        :::bash
        git add -f .bashrc
        git add -f .bash_profile
        git add -f .tmux.conf
        git add -f .Xresources
        git add -f .config/locale.conf
        git add -f .config/awesome
        git add -f .weechat/{.,python,perl}/*.{conf,rc}
        git add -f .ssh/{config,environment,id_rsa.pub}
        git commit -m 'initial commit from desktop'

  4. Add and push to an online Git repo

        :::bash
        git remote add git@github.com:lrvick/dotfiles.git
        git push origin master

# New system setup

  1. Initialize repo

        :::bash
        cd
        git init
        git remote add git@github.com:lrvick/dotfiles.git

  2. Sync/overwrite local dotfiles from repo

        :::bash
        git fetch --all
        git reset --hard origin/master
        git submodule update --init --recursive

# Send new changes to server

  
  1. Force add/commit changes/new file.

        :::bash
        git add -f .somefile
        git commit -m 'updated somefile'

  2. Push changes 
  
        :::bash
        git push

# Automatically sync new dotfiles

  1. Add command to attempt to sync dotfiles on login

        :::bash
        echo "git pull && git submodule foreach --recursive git pull origin
        master" >> ~/.bash_profile

# Closing Notes

Hopefully this helps with your dotfile syncing needs. Feel free to share your dotfiles repo and any conventions that help you.

Feel free to check out [My dotfiles repo](https://github.com/lrvick/dotfiles)

