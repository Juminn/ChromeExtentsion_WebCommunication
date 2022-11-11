/*
playAlert = setInterval(function () {
    alert('alert 1');
}, 1000);

playAlert = setInterval(function () {
    alert('alert 2');
}, 2000)

playAlert = setInterval(function () {
    alert('alert 3');

}, 3000)

*/


playAlert = setInterval(function () {
    alert('alert lay');

}, 3000)





    // url 가져오기
chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    
    url = tabs[0].url;
    alert(url);
    document.getElementsByName('url')[0].value = url;
    
    
    // use url here inside the callback because it's asynchronous!
});

// 유튜브시간 가져오면서 서버로 보내기
chrome.tabs.executeScript({
    code: 'document.getElementsByClassName("ytp-progress-bar")[0].getAttribute("aria-valuenow")'
}, function (result) {
    alert(result);
    document.getElementsByName('comment_location')[0].value = result;
    document.UIForm.submit();
});
//alert(url);
//document.getElementsByName('url')[0].value = url;
//alert(document.getElementsByName('url').value);


