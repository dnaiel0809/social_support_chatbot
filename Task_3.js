var id = localStorage.getItem("ID");
console.log("task3")
// const scriptURL='https://script.google.com/macros/s/AKfycbzsPOC9Q0_kxMQkP8ZJo2c8lSCxQN1BiLFeC9aVMCUTpPhCV4baXCkwuU7cpLMiGnQT/exec'
var form_3 = document.forms['form_3']
console.log("form_3:"+form_3)

form_3.addEventListener('submit', e => {
    console.log("button")
    var formdata = new FormData(form_3)
    formdata.append('ID', id)
    formdata.append('Q', 'C3')
    console.log("formdata")
    e.preventDefault()
    fetch(scriptURL, { mode: "no-cors",method: 'POST', body: formdata})
        .then(response => {alert("You have successfully submitted. By clicking the button \"I\'ve submitted task,\" let the chatbot know you are moving to the next task.");
    $(function(){
        $("#includedContent").load("Task_4.html",function () {
          $.getScript("Task_4.js");
        }); 
    });
    })

    
    .catch(error => console.error('Error!', error.message))
})



// $(document).on('click', '#submit_2', function() {
//     $('#submit_2').click(function() {
//         console.log('Button clicked!');
//         // Other code here
//       });
//   });
