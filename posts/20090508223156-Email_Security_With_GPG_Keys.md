---
layout: post
title: Email Security With GPG Keys
date: 2009-05-08 22:31:56
tags: [email,pgp,gpg,security]
image: /img/gnupg.png
comments: true
draft: false
---

When I was younger (and not quite as aware of consequences) I used to set up relay mail servers and send out perfectly spoofed mail from president@whitehouse.gov to people who made assumptions about security. My spoofs were perfect (other than the fact they did not originate from white-house IP address ranges and that the president never actually sends mail from that address). My method still easily fools Gmail spam filters and I can easily impersonate anyone I want.

Problem is so can thousands of other people... that will do so with worse intent than proving a point.

GPG to the rescue.

GPG is a free and Open Source implementation of the OpenPGP (Pretty Good Privacy) encryption standard.

At a glance it seems complicated, but I will try to break it down. It works using a pair of "keys". One of them is "public" and you put it on the Internet for the world to access, and the other is private and password protected and used only to verify you are the one that created the public key, or to decrypt files that were encrypted using that public key.

In email, it helps verify you are who you say you are by taking the contents of the message you are about to send and then generates a one-of-a-kind string based on that message and your private key. Anyone with your public key should be able to use that "signature" to verify you had possession of the private key and that the message has not been altered in any way.

Google has finally stepped up to the plate and begun to utilize this in Gmail. Though Gmail can not yet send messages with PGP signatures yet, work is underway to allow you to at least verify them. (I verified this personally with my Gmail account though the functionality only lasted a few hours.) If someone sends you a message to your Gmail account with a PGP signature, Google will soon go find that persons public key and verify it for you. It will then place a "message was verified" message at the bottom of the email. Google finally acknowledging how important authenticity of email.

Once this becomes wide-spread spam will be virtually impossible.

Below I am going to detail the steps I took to create my Keypair using the command-line gnupg utility. If you are not comfortable with the command-line please check out Thunderbird+Enigmail which will automate the whole process for you and make GPG pretty painless.

For the rest of you that would like to understand what is going on and do it by hand(like me) keep reading.

First fire up a terminal and run "gpg --gen-key". You will be presented with an option of what type of encryption to use.

You should be safe with RSA-2048... but no promises. Our computing capabilities could triple in 3 years rendering 2048 useless. Many say that is impossible, but they said the same thing about RSA-1024. My first key was RSA-1024 and that has since been obsoleted. I erred to the side of caution (read "paranoia") here and chose RSA-4096.Though it may take a while to use when sending large mail... I do not mind considering I will hopefully be able to trust this key for a very long time.

    :::bash
    lrvick@baqash ~ $ gpg --gen-key
    Please select what kind of key you want:
    (1) DSA and Elgamal (default)
    (2) DSA (sign only)
    (5) RSA (sign only)
    Your selection? 5
    RSA keys may be between 1024 and 4096 bits long.
    What keysize do you want? (2048) 4096
    Requested keysize is 4096 bits
    Please specify how long the key should be valid.
    0 = key does not expire
    <n> = key expires in n days
    <n>w = key expires in n weeks
    <n>m = key expires in n months
    <n>y = key expires in n years
    Key is valid for? (0)
    Key does not expire at all
    Is this correct? (y/N) y

    GnuPG needs to construct a user ID to identify your key.

    Real name: Lance Reagan Vick
    Email address: lance@reaganvick.com
    Comment: Personal Key
    You selected this USER-ID:
    "Lance Reagan Vick (Personal Key) <lance@reaganvick.com>"

    Change (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O
    You need a Passphrase to protect your secret key


Enter a strong passphrase twice. I do mean STRONG.

Use a mix of numbers, uppercase letters, lowercase letters, and symbols. Do NOT write it down anywhere... memorize it. Half of the security of GPG is choosing a password that a robot can not easily generate.

Next you should get:

    :::bash
    We need to generate a lot of random bytes. It is a good idea to perform
    some other action (type on the keyboard, move the mouse, utilize the
    disks) during the prime generation; this gives the random number
    generator a better chance to gain enough entropy.

Do exactly that. Beat your keyboard randomly as fast as you can. Move your mouse around. Click and highlight stuff. No I am not kidding. Have fun with it! Let your cat help. Just about anything you do to your computer right now contributes to generating better random numbers tor use with your key.

After a while you will get:

    :::bash
    gpg: key 36C8AAA9 marked as ultimately trusted
    public and secret key created and signed.

    gpg: checking the trustdb
    gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
    gpg: depth: 0 valid: 6 signed: 2 trust: 0-, 0q, 0n, 0m, 0f, 6u
    gpg: depth: 1 valid: 2 signed: 0 trust: 2-, 0q, 0n, 0m, 0f, 0u
    gpg: next trustdb check due at 2012-01-12
    pub 4096R/36C8AAA9 2009-05-09
    Key fingerprint = 6B61 ECD7 6088 748C 7059 0D55 E90A 4013 36C8 AAA9
    uid Lance Reagan Vick (Personal Key) <lance@reaganvick.com>

    Note that this key cannot be used for encryption. You may want to use
    the command "--edit-key" to generate a subkey for this purpose.

Ok. You are all done creating the key that will be used to sign all the mail you send from now on.

Now we are going to generate a "sub key" that will be used when you want to actually encrypt things, instead of just verifying they came from you.

Here I am using my key id "36C8AAA9". Use whatever yours ended up being above instead.

    :::bash
    lrvick@baqash ~ $ gpg --edit-key 36C8AAA9
    Secret key is available.

    pub 4096R/36C8AAA9 created: 2009-05-09 expires: never usage: SC
    trust: ultimate validity: ultimate
    [ultimate] (1). Lance Reagan Vick (Personal Key) <lance@reaganvick.com>

    Command> addkey
    Key is protected.

    You need a passphrase to unlock the secret key for
    user: "Lance Reagan Vick (Personal Key) <lance@reaganvick.com>"

Enter the pass-phrase you just created earlier.

Now you will be choosing how strong you want your encryption key to be. I again chose my paranoid-friendly RSA-4096.

    :::bash
    4096-bit RSA key, ID 36C8AAA9, created 2009-05-09

    Please select what kind of key you want:
    (2) DSA (sign only)
    (4) Elgamal (encrypt only)
    (5) RSA (sign only)
    (6) RSA (encrypt only)
    Your selection? 6
    RSA keys may be between 1024 and 4096 bits long.
    What keysize do you want? (2048) 4096
    Requested keysize is 4096 bits
    Please specify how long the key should be valid.
    0 = key does not expire
    <n> = key expires in n days
    <n>w = key expires in n weeks
    <n>m = key expires in n months
    <n>y = key expires in n years
    Key is valid for? (0) 0
    Key does not expire at all
    Is this correct? (y/N) y
    Really create? (y/N) y
    We need to generate a lot of random bytes. It is a good idea to perform
    some other action (type on the keyboard, move the mouse, utilize the
    disks) during the prime generation; this gives the random number
    generator a better chance to gain enough entropy.

You get to have some fun once more. Flog your keyboard! I mean how often to you get a chance to just go hog wild with your computer and actually have a legitimate reason?

Once generation finishes you will get the following. Enter "save" and your key is all done.

    :::bash
    pub 4096R/36C8AAA9 created: 2009-05-09 expires: never usage: SC
    trust: ultimate validity: ultimate
    sub 4096R/A649FFDA created: 2009-05-09 expires: never usage: E
    [ultimate] (1). Lance Reagan Vick (Personal Key) <lance@reaganvick.com>

    Command> save

Next is an optional though highly recommended step of embedding a picture of yourself into your key. This is important step because if you get a file signed with someones key and it depicts a Chinese man, and the person you meet later is clearly an American... you might have cause for alarm. This aspect of GPG is very much like a photo ID and it is likewise very important you really do use a real head-shot of yourself, as anything else could potentially invalidate the trust of the key.

Don't worry about how good it looks as you an always change it later with "gpg --edit-key"

You will need to make a 240x288 JPG headshot preferably at 6k or less so your key does not end up huge.

    :::bash
    lrvick@baqash ~ $ gpg --edit-key 36C8AAA9
    Secret key is available.

    pub  4096R/36C8AAA9  created: 2009-05-09  expires: never       usage: SC  
                         trust: ultimate      validity: ultimate
    sub  4096R/A649FFDA  created: 2009-05-09  expires: never       usage: E   
    [ultimate] (1). Lance Reagan Vick (Personal Key) <lance@reaganvick.com>

    Command> addphoto

    Pick an image to use for your photo ID.  The image must be a JPEG file.
    Remember that the image is stored within your public key.  If you use a
    very large picture, your key will become very large as well!
    Keeping the image close to 240x288 is a good size to use.

    Enter JPEG filename for photo ID: graphics/gpgphoto.jpg
    Is this photo correct (y/N/q)? y

    You need a passphrase to unlock the secret key for
    user: "Lance Reagan Vick (Personal Key) <lance@reaganvick.com>"
    4096-bit RSA key, ID 36C8AAA9, created 2009-05-09

    pub  4096R/36C8AAA9  created: 2009-05-09  expires: never       usage: SC  
                         trust: ultimate      validity: ultimate
    sub  4096R/A649FFDA  created: 2009-05-09  expires: never       usage: E   
    [ultimate] (1). Lance Reagan Vick (Personal Key) <lance@reaganvick.com>
    [ unknown] (2)  [jpeg image of size 6119]

    Command> save

Now your shiny new key-pair is created!

Now, for some damage control.

What if you forget your password? What if every computer and device that contains your private key explodes? What if someone steals your key and tortures your password out of you? What if RSA-4096 is beaten in 10 years?

Crap happens and you need a way to revoke that key in case it does

Generate a "revocation" key file which you can use to revoke and invalidate your key.

Once you generate it, put it on some physical media and store it in a safe place no one has access to but you. Your identity depends on it.

    :::bash
    lrvick@baqash ~ $ gpg --gen-revoke 36C8AAA9 >> /media/thumbdrive/revoke-36C8AAA9.asc 

Next we need to make sure the whole world has easy automated access to your public key. Though there is no "offical" server, subkeys.pgp.net is a very important server to get your key on right away. Especially before someone else puts a key on there as you. Subkeys.pgp.net is also a great service because it will in turn migrate your key out to many other partner servers for you.

    :::bash
    lrvick@baqash ~ $ gpg --keyserver subkeys.pgp.net --send-keys 36C8AAA9
    gpg: sending key 36C8AAA9 to hkp server subkeys.pgp.net

Finally a last optional step. If you own your own domain, and better yet if your email address is on that domain, you can export your key and upload it to you domain which further verifies you own it. 

Putting your key as http://yourdomain.com/0x(your key id).asc is a strong trend I have noticed, and one I will continue with until hopefully it becomes a standard. 

I used Rsync to upload my key here. Use whatever you want.

    :::bash
    lrvick@baqash ~ $ gpg --export -a 36C8AAA9 >> 0x36C8AAA9.asc
    lrvick@baqash ~ $ rsync -Pav 0x36C8AAA9.asc reaganvick.com:sites/lrv/
    Enter passphrase for key '/home/lrvick/.ssh/id_rsa': 
    sending incremental file list
    0x36C8AAA9.asc
           12318 100%   11.08MB/s    0:00:00 (xfer#1, to-check=0/1)

    sent 11026 bytes  received 61 bytes  1167.05 bytes/sec
    total size is 12318  speedup is 1.11

That completes everything you can personally do to in creating a strong trusted GPG identification keyset.

The next, and most important step... is getting other people who believe that you are who you say you are, to sign your key with theirs.

The more verified GPG keyholders that in turn sign your key, the more valid your identity becomes.

Next I will demonstrate the steps you would take to sign a key and by extension the steps someone would take to sign your key. Here I am actually signing my own key as an example which is generally a good idea regardless.

If you actually know me, by all means actually do this for me and I will in exchange sign your key as well.

    :::bash
    lrvick@baqash ~ $ wget http://reaganvick.com/0x36C8AAA9.asc
    --2009-05-10 02:31:04--  http://reaganvick.com/0x36C8AAA9.asc
    Resolving reaganvick.com... 66.96.251.117
    Connecting to reaganvick.com|66.96.251.117|:80... connected.
    HTTP request sent, awaiting response... 200 OK
    Length: 12318 (12K) [text/plain]
    Saving to: `0x36C8AAA9.asc'

    100%[===============================>] 12,318      --.-K/s   in 0.006s  

    2009-05-10 02:31:04 (1.85 MB/s) - `0x36C8AAA9.asc' saved [12318/12318]

    lrvick@baqash ~ $ gpg --import 0x36C8AAA9.asc
    gpg: key 36C8AAA9: "Lance Reagan Vick (Personal Key) <lance@reaganvick.com>" not changed
    gpg: Total number processed: 1
    gpg:              unchanged: 1
    lrvick@baqash ~ $ gpg --sign-key 36C8AAA9

    gpg: checking the trustdb
    gpg: 3 marginal(s) needed, 1 complete(s) needed, PGP trust model
    gpg: depth: 0  valid:   5  signed:   2  trust: 0-, 0q, 0n, 0m, 0f, 5u
    gpg: depth: 1  valid:   2  signed:   0  trust: 2-, 0q, 0n, 0m, 0f, 0u
    gpg: next trustdb check due at 2012-01-12
    pub  4096R/36C8AAA9  created: 2009-05-09  expires: never       usage: SC  
                         trust: ultimate      validity: ultimate
    sub  4096R/A649FFDA  created: 2009-05-09  expires: never       usage: E   
    [ultimate] (1). Lance Reagan Vick (Personal Key) <lance@reaganvick.com>
    [ultimate] (2)  [jpeg image of size 6119]

    Are you sure that you want to sign this key with your
    key "Lance Reagan Vick (Personal Key) <lance@reaganvick.com>" (36C8AAA9)

    Really sign? (y/N) y

    You need a passphrase to unlock the secret key for
    user: "Lance Reagan Vick (Personal Key) <lance@reaganvick.com>"
    4096-bit RSA key, ID 36C8AAA9, created 2009-05-09

    lrvick@baqash ~ $ gpg --export -a 36C8AAA9 > 0x36C8AAA9.asc

Now you would just need to get the 0x36C8AAA9.asc file you just created to me and I would in turn overwrite my existing one on my domain and upload it to subkeys.pgp.net. Likewise if anyone signs your key and gave it back to you, you would then import that newly signed keyfile and then then re-export it back to to a keyserver as detailed above.

That covers all the hard parts of GPG. From here on out just set up a GPG friendly mail client like Mutt, Evolution, or Thunderbird to sign all your outgoing mail with your new key, and no one can ever easily impersonate or alter mail from you again.

You can also now easily encrypt mail to others who use GPG which means anyone who intercepts the mail gets useless garbage. If you want to test it, send me a random encrypted message.

GPG really is a win win all around.

By all means comment with your experiences!
