

//버튼클릭시
function assa(e){
    /*
    chrome.tabs.executeScript(null,
        {code:"document.querySelector('#invoice_no_0').value='123123';"});
    
   chrome.tabs.executeScript(null,
        {code:"document.write(3);"});
    */   

        
    /*
    var lineCount = 0;
    var i = document.createElement('input');
    i.setAttribute("type", "text");
    i.setAttribute("placeholder", "Address Line " + ++lineCount);
    var addressContainer = document.getElementById("body");
    addressContainer.insertAdjacentElement("beforeend", i);
    */

    /*
    chrome.tabs.executeScript(null,
        {code:'var lineCount = 0; var i = document.createElement("input"); i.setAttribute("type", "text"); i.setAttribute("placeholder", "댓글 "); var addressContainer = document.getElementById("secondary-inner"); addressContainer.insertAdjacentElement("afterbegin", i);'
    
    
    
    });
    */

    //insertlayer.js 호출
    chrome.tabs.executeScript(null, {
        file: "insertlayout.js"
        }, function() {
            if (chrome.extension.lastError) {
                document.body.innerText = 'There was an error insertlayout script : \n' + chrome.extension.lastError.message;
            }
        });
    



}

//버튼리스너
document.addEventListener('DOMContentLoaded',function(){
   var btn01 = document.querySelector('#btn');
   btn01.addEventListener("click",assa);

});