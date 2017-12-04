let showingVid = false;
// let videos = ["./videos/vid1.mp4"];
let randomIndex = 0;

function randomVid(){
    console.log('working')
    if(showingVid){
        console.log('go away')
        document.getElementById('fixedVid').style.display = "none"
        showingVid = false;
    }else{
        document.getElementById('fixedVid').style.display = "block"
        var video = document.getElementById('video');
        var source = document.getElementById('source');
        console.log('come back')
        source.src = '/vid1.mp4';
        showingVid = true;
    }
}

// function addSourceToVideo(element, src, type) {
//     var source = document.createElement('source');

//     source.src = src;
//     source.type = type;

//     element.appendChild(source);
// }

// var video = document.createElement('video');

// document.body.appendChild(video);

// addSourceToVideo(video, 'http://upload.wikimedia.org/wikipedia/commons/7/79/Big_Buck_Bunny_small.ogv', 'video/ogg');

// video.play();