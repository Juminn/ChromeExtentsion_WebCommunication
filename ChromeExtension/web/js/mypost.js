    // url 가져오기
    chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
        url = tabs[0].url;
        document.getElementsByName('url')[0].value = url;
        
        
        // use url here inside the callback because it's asynchronous!
    });
    
    // 유튜브시간 가져오면서 서버로 보내기
    chrome.tabs.executeScript({
        code: 'document.getElementsByClassName("ytp-progress-bar")[0].getAttribute("aria-valuenow")'
    }, function (result) {
        
        document.getElementsByName('comment_location')[0].value = result;
        document.UIForm.submit();
    });
    //alert(url);
    //document.getElementsByName('url')[0].value = url;
    //alert(document.getElementsByName('url').value);
    
    
    