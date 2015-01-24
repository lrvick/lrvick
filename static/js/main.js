$(document).ready(function(){
    $.getJSON('https://api.github.com/users/lrvick/events?callback=?',function(data){
        var items = [];
        $.each(data.data, function(key,val){
            console.log(key,val)
            if (val.type == 'PushEvent' ){
                items.push('<li><span class="time">'+val.created_at+'</span><span class="action">Pushed to: <a href="https://github.com/'+val.repo.name+'">'+val.repo.name+'</a></span><br/> "'+val.payload.commits[0].message+'"</li>');
            } else if (val.type == 'FollowEvent'){
                items.push('<li><span class="time">'+val.created_at+'</span><span class="action">Followed: <a href="'+val.url+'">'+val.payload.target.login+'</a></span></li>');
            } else if (val.type == 'WatchEvent'){
                items.push('<li><span class="time">'+val.created_at+'</span><span class="action">Watched: <a href="https://github.com/'+val.repo.name+'">'+val.repo.name+'</a></span></li>');
            } else if (val.type == 'IssueCommentEvent'){
                items.push('<li><span class="time">'+val.created_at+'</span><span class="action">Commented on: <a href="https://github.com/'+val.repo.name+'">'+val.repo.name+'</a><br/></span></li>');
            }
        })
        $('<ul/>',{ html: items.slice(0,5).join('\n') }).appendTo('.github')
        $('.github .time').cuteTime({refresh: 40});
    })

    
    //$.getJSON('https://api.twitter.com/statuses/user_timeline.json?screen_name=lrvick&callback=?',function(data){
    //    var items = [];
    //    $.each(data, function(key,val){
    //        items.push('<li><span class="time">'+val.created_at+'</span>'+val.text+'</li>');
    //    })
    //    $('<ul/>',{ html: items.slice(0,3).join('\n') }).appendTo('.twitter')
    //    $('.twitter .time').cuteTime({refresh: 40});
    //})

    $.getJSON('https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lrvick&api_key=30faa843dc740d5b76b0f1e77a66db59&format=json&callback=?',function(data){
        var items = [];
        $.each(data.recenttracks.track, function(key,val){
            var date
            if (val.date){
                date = val.date.uts
            } else {
                date = "Playing Now"
            }
            items.push('<li><span class="time">'+date+'</span><a href="'+val.url+'">'+val.artist['#text']+' - '+val.name+'</a></li>');
        })
        $('<ul/>',{ html: items.slice(0,3).join('\n') }).appendTo('.lastfm')
        $('.lastfm .time').cuteTime({refresh: 40});
    })

    $.getJSON('https://gdata.youtube.com/feeds/api/users/lrvick/uploads?v=2&alt=jsonc&callback=?',function(data){
        var items = []
        $.each(data.data.items,function(key,value){
            items.push('<li><span class="time">'+value.uploaded+'</span><a href="http://youtu.be/'+value.id+'">'+value.title+'</a></li>');
        })
        $('<ul/>',{ html: items.slice(0,3).join('\n') }).appendTo('.youtube')
        $('.youtube .time').cuteTime({refresh: 40});
    })

    $('<a target="_blank" class="github-badge" href="http://github.com/lrvick"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/52760788cde945287fbb584134c4cbc2bc36f904/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f77686974655f6666666666662e706e67" alt="Fork me on GitHub"></a>').appendTo('body');
})
