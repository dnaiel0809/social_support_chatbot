var id = localStorage.getItem("ID");
var index = localStorage.getItem("index")
var next = localStorage.getItem("order"+index)
localStorage.setItem("index", String(Number(index)+1));
console.log("next: "+next)
var scriptURL='https://script.google.com/macros/s/AKfycbwFEjvw0g-D76hXmh3FqvkhpPWM65RaSqUNeGEv6WLYenfydBd9HrZM7RsseKVDZRwB/exec'
var form_3 = document.forms['form_3']
console.log("form_3:"+form_3)

form_3.addEventListener('submit', e => {
    console.log("button")
    var formdata = new FormData(form_3)
    formdata.append('ID', id)
    formdata.append('Q', 'C3')
    console.log("formdata")
    e.preventDefault()
    if (next=='Post-survey'){
        fetch(scriptURL, { mode: "no-cors",method: 'POST', body: formdata})
    .then(response => {alert("You have successfully submitted. Well done.");
          window.location.href = "Post-survey.html";
          })
    .catch(error => console.error('Error!', error.message))
    }else{

    fetch(scriptURL, { mode: "no-cors",method: 'POST', body: formdata})
        .then(response => {alert("You have successfully submitted. By clicking the button \"I\'ve submitted task,\" let the chatbot know you are moving to the next task.");
    $(function(){
        $("#includedContent").load(next+".html",function () {
//           $.getScript(next+".js");
        }); 
    });
    })
    }   
})



// $(document).on('click', '#submit_2', function() {
//     $('#submit_2').click(function() {
//         console.log('Button clicked!');
//         // Other code here
//       });
//   });
