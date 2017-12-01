let showingVid = false;
let videos = ["./videos/vid1.mp4"];
let randomIndex = 0;

function randomVid(){
    console.log('working')
    if(showingVid){
        console.log('go away')
        document.getElementById('fixedVid').style.display = "none"
        showingVid = false;
    }else{
        console.log('come back')
        document.getElementById('fixedVid').style.display = "block"
        document.getElementById('showRandomVid').src = './videos/vid1.mp4';
        showingVid = true;
    }
}