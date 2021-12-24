//유튜브내 위치설정
var addressContainer = document.getElementById("secondary-inner");

//form생성
var newForm = document.createElement('form');
newForm.action = "http://localhost:8080/comment";
newForm.method = 'post';


//등록버튼
var button = document.createElement('input');
button.setAttribute("type", "submit");
button.setAttribute("value", "등록");


//입력창
var i = document.createElement('input');
i.setAttribute("type", "text");
i.setAttribute("name", "comment");
i.setAttribute("placeholder", "댓글");

//form에 추가
newForm.appendChild(i);
newForm.appendChild(button);

//youtube에 넣기
addressContainer.insertAdjacentElement("afterbegin", newForm);

//제목
var title = document.createElement('h1');
var titleText = document.createTextNode('댓글작성');
title.appendChild(titleText);
addressContainer.insertAdjacentElement("afterbegin", title);

