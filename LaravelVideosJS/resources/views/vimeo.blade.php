@extends('layouts.app')

@section('styles')
    <link href="https://vjs.zencdn.net/7.6.6/video-js.css" rel="stylesheet" />

    <!-- If you'd like to support IE8 (for Video.js versions prior to v7) -->
    <!--<script src="https://vjs.zencdn.net/ie8/1.1.2/videojs-ie8.min.js"></script>-->
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
                    <video
                        id="vid1"
                        class="video-js vjs-theme-city"
                        width="640" height="264"
                        data-setup='{ "techOrder": ["vimeo"], "sources": [{ "type": "video/vimeo", "src": "https://vimeo.com/378327608"}], "vimeo": { "color": "#fbc51b"} }'
                    >
                    </video>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
    <script src="{{ mix('js/videojs.js') }}"></script>
    <!--<script src="https://vjs.zencdn.net/7.6.6/video.js"></script> 
    <script src="{{ asset('js/videojs-vimeo.min.js') }}"></script>-->
    {{-- <script src="https://cdn.jsdelivr.net/npm/videojs-vimeo-v2@2.0.2/src/Vimeo.min.js"></script> --}}

    <script>
        var player = videojs('#vid1');

        player.playlist([{
        sources: [{
            src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/sintel/poster.png'
        }, {
        sources: [{
            src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
        }, {
        sources: [{
            src: 'http://vjs.zencdn.net/v/oceans.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://www.videojs.com/img/poster.jpg'
        }, {
        sources: [{
            src: 'http://media.w3.org/2010/05/bunny/movie.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/bunny/poster.png'
        }, {
        sources: [{
            src: 'http://media.w3.org/2010/05/video/movie_300.mp4',
            type: 'video/mp4'
        }],
        poster: 'http://media.w3.org/2010/05/video/poster.png'
        }]);

        // Play through the playlist automatically.
        player.playlist.autoadvance(0);
    </script>

    
@endsection
