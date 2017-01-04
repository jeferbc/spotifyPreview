$(document).ready(function(){
    $(document).keypress(function(e) {
        if(e.which == 13) {
            e.preventDefault();
            $(".results").empty();
            var template = Handlebars.compile($('#songs-template').html());
            var search = $('#search').val();
            $.getJSON("https://api.spotify.com/v1/search?q="+search+"&type=track", function(data) {
                for(i in data.tracks.items){
                    var songs = {
                        album_image: data.tracks.items[i].album.images[0].url,
                        name: data.tracks.items[i].name,
                        artist: data.tracks.items[i].artists[0].name,
                        preview_url: data.tracks.items[i].preview_url
                    };
                    $(".results").append(template(songs));
                }
            });
        }
    });
})
