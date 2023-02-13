var vid=document.getElementById("vid");
var videoRange=document.getElementById("timeBar");
var videoTime=document.getElementById("duration");
var speedRange=document.getElementById("speed");
var volumeVal = vid.volume;

// plybtn function
    playbtn.onclick=function(){
        vid.play();
        vid.ontimeupdate = function() {
        let minutes = Math.floor(vid.currentTime / 60);
        let seconds = Math.floor(vid.currentTime % 60);
        if (minutes < 10)
            minutes = "0" + minutes;
        else
            minutes = "" + minutes;
        if (seconds < 10)
            seconds = "0" + seconds;
        else
            seconds = "" + seconds;
        videoTime.innerText = `${minutes}:${seconds}`;
        videoRange.value = vid.currentTime;
    }
};
// stopBtn function
    stopbtn.onclick=function(){
        vid.pause()
};

// muteBtn function
    mutebtn.onclick=function(){
        if (vid.volume == 0) {
            vid.volume = volumeVal;
    } 
        else {
          volumeVal = vid.volume;
          vid.volume = 0;
    }
 };

//  restart function
    restart.onclick=function(){
        vid.currentTime=0
};

// forward 5 sec function
    forwardskip.onclick=function(){
        vid.currentTime+=5
};

// back 5 sec function
    backskip.onclick=function(){
        vid.currentTime-=5
};

// reach to end function 
    end.onclick=function(){
        vid.currentTime=vid.duration
};

// speed the video function 
    speedRange.oninput = function() {
        vid.playbackRate = speedRange.value;
};