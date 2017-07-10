# ConFusion
Bootstrap Web Page


## Trowbleshoting

### error : 
`shinkei (master *) ConFusion $ gulp watch
[17:32:09] Using gulpfile ~/Programming/ConFusion/gulpfile.js
[17:32:09] Starting 'clean'...
[17:32:09] Finished 'clean' after 13 ms
[17:32:09] Starting 'default'...
[17:32:09] Starting 'jshint'...
[17:32:09] Starting 'imagemin'...
[17:32:09] Starting 'clean'...
[17:32:09] Finished 'default' after 17 ms
[17:32:09] Starting 'browser-sync'...
[17:32:09] Finished 'browser-sync' after 41 ms
[17:32:09] Starting 'watch'...
[17:32:09] 'watch' errored after 38 ms
[17:32:09] Error: watch /home/shinkei/Programming/ConFusion/app/styles/ ENOSPC
    at exports._errnoException (util.js:890:11)
    at FSWatcher.start (fs.js:1313:19)
    at Object.fs.watch (fs.js:1341:11)
    at Gaze._watchDir (/home/shinkei/Programming/ConFusion/node_modules/gaze/lib/gaze.js:289:30)
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/gaze.js:358:10
    at iterate (/home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:52:5)
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:61:11
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/gaze.js:420:5
    at iterate (/home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:52:5)
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:61:11
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/gaze.js:420:5
    at iterate (/home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:52:5)
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:61:11
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/gaze.js:420:5
    at iterate (/home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:52:5)
    at /home/shinkei/Programming/ConFusion/node_modules/gaze/lib/helper.js:61:11
[17:32:09] Finished 'clean' after 90 ms
events.js:154
      throw er; // Unhandled 'error' event
      ^

Error: watch app/styles ENOSPC
    at exports._errnoException (util.js:890:11)
    at FSWatcher.start (fs.js:1313:19)
    at Object.fs.watch (fs.js:1341:11)
    at createFsWatchInstance (/home/shinkei/Programming/ConFusion/node_modules/chokidar/lib/nodefs-handler.js:37:15)
    at setFsWatchListener (/home/shinkei/Programming/ConFusion/node_modules/chokidar/lib/nodefs-handler.js:80:15)
    at FSWatcher.NodeFsHandler._watchWithNodeFs (/home/shinkei/Programming/ConFusion/node_modules/chokidar/lib/nodefs-handler.js:228:14)
    at FSWatcher.NodeFsHandler._handleDir (/home/shinkei/Programming/ConFusion/node_modules/chokidar/lib/nodefs-handler.js:407:19)
    at FSWatcher.<anonymous> (/home/shinkei/Programming/ConFusion/node_modules/chokidar/lib/nodefs-handler.js:455:19)
    at FSWatcher.<anonymous> (/home/shinkei/Programming/ConFusion/node_modules/chokidar/lib/nodefs-handler.js:460:16)
    at FSReqWrap.oncomplete (fs.js:82:15)
`
### solution
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`


### error
  `Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension`

### solution
`python -m http.server`

### error
>There is an error with the bootstrap scrollspy nav and angular, it does not work, looks like we have to refresh the element by javascript

## Todo list
> looks like bootstrap is not working with the angular ui router, so check http://angular-ui.github.io/bootstrap/ (there are two elements that I didn't implement, the modal, because I don't like the way ui.bootstrap implements it and the spynav because there is no support)


