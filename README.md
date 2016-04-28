# ConFusion
Bootstrap Web Page


## Trowbleshoting

###error : 
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
###solution
`echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`


###error
  `Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension`

###solution
`python -m http.server`

###error
>There is an error with the bootstrap scrollspy nav and angular, it does not work, looks like we have to refresh the element by javascript

##Todo list
> looks like bootstrap is not working with the angular ui router, so check http://angular-ui.github.io/bootstrap/ to redo the elements


"
Apparently the uesemin plugin is buggy, thats why we need another plugin.

1. Install plugin (https://github.com/mariusGundersen/gulp-forEach):

npm install --save-dev gulp-foreach

2. update gulpfile:

usemin = require('gulp-usemin'),foreach = require('gulp-foreach'),imagemin = require('gulp-imagemin'),

gulp.task('usemin', ['jshint'], function () {    return gulp.src('./app/*.html')        .pipe(foreach(function (stream, file) {            return stream.pipe(usemin({                    css: [minifycss(), rev()],                    js: [ngannotate(), uglify(), rev()]                }))                .pipe(gulp.dest('dist/'));        }))});

If someone has a more elegant solution, please feel free to share it..
 · 

UM
 · 16 hours ago · Edited

I had the same issue.

With the code supplied in the instructions I received the following error for some tasks when executing default gulp task;

[20:34:53] gulp-notify: [Error in notifier] Error in plugin 'gulp-notify'
Message:
    Command failed: C:\conFusion\node_modules\node-notifier\vendor\toaster\toast.exe -p C:\conFusion\node_modules\gulp-notify\assets\gulp.png -m Images task complete -t Gulp notification -q true

Unhandled Exception: System.Exception: The notification platform found application is already registered. (Exception from HRESULT: 0x803E0118)
   at Windows.UI.Notifications.ToastNotifier.Show(ToastNotification notification)
   at toast.Program.ShowToast(String title, String message, String imageURI, Boolean sound)
   at toast.Program.Main(String[] args)

Details:
    killed: false
    code: 3762504530
    signal: null
    cmd: C:\conFusion\node_modules\node-notifier\vendor\toaster\toast.exe -p C:\fullstack\fullstack-c3\module1\conFusion\node_modules\gulp-notify\assets\gulp.png -m Images task complete -t Gulp notification -q true

I solved it by adding return to the gulp.src call to make sure it completes before the next call.

Edit: I put return on the first call by mistake, make sure to have return on the second call or else the function will exit and not add the latter fonts.

So add return to the last call in the copyfonts task;

gulp.task('copyfonts', ['clean'], function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
   return gulp.src('./bower_components/bootstrap/dist/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});

 · 


"