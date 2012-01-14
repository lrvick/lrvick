---
layout: page
title: Code
date: 2011-10-12 08:07:36
tags: []
comments: false
draft: false
---

<script type="text/javascript" src="/js/jquery-githubindex/jquery.githubindex.js"></script>
<script type="text/javascript">
    $(document).ready(function(){
        var $code_el = $('body article').githubIndex(
          ['lrvick'],
          ['tawlk/synt', 'tawlk/hyve', 'tawlk/kral'],
          function($el){
            $el.find('time').cuteTime()
          }
        )
      })
</script>
