@extends('layouts.app')

@section('styles')
    <link href="https://vjs.zencdn.net/7.6.6/video-js.css" rel="stylesheet" />

    <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
    <script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    {{-- <video
                        id="vid1"
                        class="video-js vjs-default-skin"
                        controls
                        autoplay
                        width="600" height="500"
                        data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}], "youtube": { "iv_load_policy": 1 } }'
                        >
                    </video> --}}
                    <video id="vid1" class="video-js vjs-default-skin vjs-fluid" controls width="640" height="264"></video>
                    <!--   <video id="vid1" class="video-js vjs-default-skin vjs-fluid" controls width="640" height="264" data-setup='{ "techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/watch?v=xjS6SftYQaQ"}] }'>
                        </video> -->

                    <h2>Load Video:</h2>
                    <form id="vsg-loadvideo">
                        Video URL:
                        <br>
                        <input type="text" name="vidurl" id="vsg-vurl" style="width:450px" value="https://www.youtube.com/watch?v=xDMP3i36naA" placeholder="Enter Youtube URL">
                        <br>
                        <br>
                        <input type="submit" value="Load video">
                    </form>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif
                    <ul id="vidlink">
                        <li><a id="myLink" title="Click video" href="http://podcast.rickygervais.com/rickyandpepe_twitter.mp4">Play .MP4</a></li>
                        <li><a id="myLink" title="Click video" href="http://assets3.ign.com/videos/zencoder/2016/06/15/640/7080c56a76e2b74ec8ecfe4c224441d4-500000-1466028542-w.mp4">Play .MP4</a></li>
                        <li><a id="myLink" title="Click video" href="https://www.youtube.com/watch?v=kkGeOWYOFoA">Play Youtube 1</a></li>
                        <li><a id="myLink" title="Click video" href="https://www.youtube.com/watch?v=Ie8olvmaZug">Play Youtube 2</a></li>
                        <li><a id="myLink" title="Click video" href="http://www.france24.com/static/podcast/fr/REPORTAGES/videos/DN096980-A-01-20141211.m4v">Play .M4V</a></li>

                        <li><a id="myLink" title="Click video" href="http://video.webmfiles.org/big-buck-bunny_trailer.webm">Play .webm</a></li>
                        <li><a id="myLink" title="Click video" href="https://player.vimeo.com/video/32445434?color=959cae&title=0&byline=0&portrait=0">Vimeo</a></li>
                        <li><a id="myLink" title="Click video" href="https://www.youtube.com/watch?v=x4ZTpNPL_dc">Youtube</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script src="https://vjs.zencdn.net/7.6.6/video.js"></script>
    <script src="{{ asset('js/Youtube.min.js') }}"></script>

    <script>
        /* VIDEOJS */
        // declare object for video
        var vgsPlayer, poster;
        /*
        vgsPlayer = videojs('vid1', {
        techOrder: ['youtube'],
        autoplay: false,
        sources: [{
            type: "video/youtube",
            src: "https://www.youtube.com/watch?v=xjS6SftYQaQ"
        }]
        });
        */

        vgsPlayer = videojs('vid1', {
        techOrder: ["html5", "flash", "youtube"],
        autoplay: false,
            youtube: { "iv_load_policy": 3 },
        sources: [{
            type: "video/mp4",
            src: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
            }]
        });

        vgsPlayer.poster('https://img.youtube.com/vi/aqz-KE-bpKQ/maxresdefault.jpg');
        //vgsPlayer.poster("http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4")

        //videojs("vid1").ready(function() {
        //  vgsPlayer = this;
        //});

        jQuery(function($) {

        // vsgLoadVideo("https://www.youtube.com/watch?v=r1H98REH0c0");
        // Video on page load

        //jQuery(document).ready(function($) {

        $("#vsg-loadvideo").submit(function(e) {
            e.preventDefault();

            var vidURL = $("#vsg-vurl").val();

            vsgLoadVideo(vidURL);

        });

        }); // jQuery(function($) END


        function vsgLoadVideo(vidURL, poster) {

        if (ytVidId(vidURL) !== false) {
            ext = "youtube"
            console.log('Youtube');

            // alert(getId(vidURL)) // Youtube video ID
            //var yvID = getId(vidURL);
            //vidURL = "https://www.youtube.com/watch?v="+yvID;

        } else {

            //$("#vid1 iframe, #vid1 .vjs-iframe-blocker").remove();

            if (!ext) ext = "mp4";
            var ext = vidURL.split('.').pop();
        }

        console.log(ext);

        vgsPlayer.src({
            //"techOrder": ['youtube'],
            "type": "video/" + ext,
            "src": vidURL
                //"youtube": { "iv_load_policy": 3 }
        });

        if (poster) vgsPlayer.poster(poster);
            vgsPlayer.play();
        }

        function ytVidId(url) {
            //var p = /^(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?(?=.*v=((\w|-){11}))(?:\S+)?$/;
            var p = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            return (url.match(p)) ? RegExp.$1 : false;
        }

        /**/
        function getId(url) {
            var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
            var match = url.match(regExp);

            if (match && match[2].length == 11) {
                return match[2];
            } else {
                return 'error';
            }
        }

        /********* LOAD URL *********/
        $('#vidlink li a').on('click', function(e) {
            e.preventDefault();
            var vidlink = $(this).attr('href');
            vsgLoadVideo(vidlink);
            $('#vsg-vurl').val(vidlink);
        });

    </script>
@endsection
