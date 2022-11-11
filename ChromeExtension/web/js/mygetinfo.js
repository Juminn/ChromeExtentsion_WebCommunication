
    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var url = window.location.href//현재 페이지 URL

    var videoTime = ytplayer.getCurrentTime();//현재 영상 재생 시간.

    var scrollYLocation = window.scrollY; //스크롤위치


//URL가져오기
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        let url = tabs[0].url;
        alert(url);
        // use url here inside the callback because it's asynchronous!
    });