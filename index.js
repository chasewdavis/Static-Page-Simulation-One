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
        source.src = '/videos/vid1/mp3'
        showingVid = true;
    }
}