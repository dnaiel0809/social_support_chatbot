var id = localStorage.getItem("ID")
var next = localStorage.getItem("order1")
const scriptURL='https://script.google.com/macros/s/AKfycbwFEjvw0g-D76hXmh3FqvkhpPWM65RaSqUNeGEv6WLYenfydBd9HrZM7RsseKVDZRwB/exec'
const form = document.forms['form']


form.addEventListener('submit', e => {
var formdata = new FormData(form)
formdata.append('ID', id)
formdata.append('Q', 'C1')

e.preventDefault()
  fetch(scriptURL, { mode: "no-cors",method: 'POST', body: formdata})
    .then(response => {alert("You have successfully submitted. By clicking the button \"I\'ve submitted task,\" let the chatbot know you are moving to the next task.");
// 					 for (var pair of formdata.entries()) {
//  					   console.log(pair[0]+ ', ' + pair[1]); 
// 					}
    // window.location.href = "Task_2.html";
    $(function(){
        $("#includedContent").load(next+".html",function () {
//           $.getScript(next+".js");
        }); 
    });
    })
    .catch(error => console.error('Error!', error.message))
    })
