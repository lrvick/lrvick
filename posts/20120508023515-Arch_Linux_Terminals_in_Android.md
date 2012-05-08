---
layout: post
title: Arch Linux Terminals in Android
date: 2012-05-08 02:35:15
tags: ['android','arch linux','linux','cli','programming']
image: /img/archdroid.jpg
comments: true
draft: false
---


So I got a shiny new Transformer Prime and of course the first thing I wanted
to do was make sure I had a reasonable way to use it to develop on the go.

Option one was dual-boot... however everything I read indicated I would have
vastly reduced battery life, and I would lose the ability to do important
android tasks, like play angry birds.

Another solution was running a system like Ubuntu in a chroot then using a VNC
connection to loop back to it. That seemed like a terrible waste of
memory/battery/disk space when all I wanted was a sane terminal development
environment where I could use python, nodejs, vim, etc.

Then I realized Arch Linux supports Arm, is very lean, and it should be able to
run against an Android kernel without issue provided I got the userland all set
up properly. I set out to do just that and the result has been working out
beautifully for me. I have android running full time, get my long battery life
etc, but a full development environment is as acessible as hitting the terminal
icon when I need it. I use native Vim to take notes and program, and I have
native htop to monitor my system, etc.

A few people have been asking me how to do this, so I decided to hammer out a
guide which is as follows.

### Root your device

I am going to assume that if you are even interested in something like this,
you have already rooted your device, and know that its required. If for some
reason you have not, I advise doing a google for "My device + rooting" and
then coming back here with a rooted device :)

### Set Up SSH server (optional)

Technically optional, but highly reccomended.  Unless you have a hardware
keyboard typing out a lot of commands can be pretty painful. Setting up an SSH
server on your device will let you connect to it remotely on a computer with a
bigger screen and real keyboard.

I found [Dropbear SSH
Server](https://play.google.com/store/apps/details?id=me.shkschneider.dropbearserver)
to be super easy to work with but there are plenty of other options.

### Ensure you have enough space on root device

I would advise making sure you have at least a couple gigs of free space.
Also I would strongly advise you work on your internal device memory and not an
SD card. A full distro has lots of read/writes that will quickly destroy most
microsSDs. I speak from experience. They also tend to be much slower.

This guide will assume you are working in /data/local/arch. Anywhere is fine,
just adjust steps accordingly.

### Set up Arch Environment

    :::bash
    su
    bash
    cd /data/local/
    mkdir arch
    cd arch
    wget http://archlinuxarm.org/os/ArchLinuxARM-omap-smp-latest.tar.gz
    tar xzf ArchLinuxARM*.tar.gz
    rm ArchLinuxARM*.tar.gz
    mount -o bind /dev/ /data/local/arch/dev
    mount -t proc /proc /data/local/arch/proc
    mount -t proc proc /proc
    mount -t sysfs sysfs /sys
    echo "nameserver 8.8.8.8" >> /data/local/arch/etc/resolv.conf
    ln -s /proc/self/fd /data/local/arch/dev/fd

### Enter environment and update

    :::bash
    chroot . /bin/bash
    source /etc/profile
    export TERM=xterm-256color
    export HOME=/root
    mount /dev/pts
    pacman -Syuu

### Create regular user

    :::bash
    useradd -m -G wheel,net_raw lrvick # your username here obviously

### Set up Init script

You will want to set up an init script for your Android terminal emulator to
run that can drop you into your environment.

I use the following:

<script src="https://gist.github.com/2632221.js"></script>

Assuming the script is located at "/data/local/arch/init.sh" you can set up
terminal emulators with the auto-run command:

    :::bash
    su -c "sh /data/local/arch/init.sh"

For connectbot this can be found in:

Hosts > long-press host > Edit Host > post-login automation

For Terminal Emulator:

Menu > Preferences > Initial Command

Thats it! Now every time you open a terminal it should drop you into a complete
arch linux envornment. Please post with any issues or even just to let me know
this worked out for you, so I can feel like these sorts of posts are worth
my time writing :-)
