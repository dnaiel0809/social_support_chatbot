// window.addEventListener("DOMContentLoaded", (event) => {
    // var id = localStorage.getItem("ID");

    // // const scriptURL='https://script.google.com/macros/s/AKfycbzsPOC9Q0_kxMQkP8ZJo2c8lSCxQN1BiLFeC9aVMCUTpPhCV4baXCkwuU7cpLMiGnQT/exec'
    // const form_2 = document.forms['form_2']
    // console.log("form_2:"+form_2)

    // form_2.addEventListener('submit_2', e => {
    //     console.log("button")
    //     var formdata = new FormData(form)
    //     formdata.append('ID', id)
    //     formdata.append('Q', 'C2')
    //     console.log("formdata")
    //     e.preventDefault()
    //     fetch(scriptURL, { mode: "no-cors",method: 'POST', body: formdata})
    //         .then(response => {alert("You have successfully submitted.");
    //             // window.location.href = "Task_3.html";
    //     $(function(){
    //         $("#body").load("Task_3.html"); 
    //     });
    //     $.getScript("Task_3.js");
    //     })
    //     .catch(error => console.error('Error!', error.message))
    // })
    
// });

$(document).on('click', '#submit_2', function() {
    $('#submit_2').click(function() {
        console.log('Button clicked!');
        // Other code here
      });
  });