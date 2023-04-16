
var id = localStorage.getItem("ID");
const scriptURL='https://script.google.com/macros/s/AKfycbzsPOC9Q0_kxMQkP8ZJo2c8lSCxQN1BiLFeC9aVMCUTpPhCV4baXCkwuU7cpLMiGnQT/exec'
const form_3 = document.forms['form_3']
form_3.addEventListener('submit', e => {
  var formdata = new FormData(form_3)
  formdata.append('ID', id)
  formdata.append('Q', 'C3')

  e.preventDefault()
  fetch(scriptURL, { mode: "no-cors",method: 'POST', body: formdata})
    .then(response => {alert("You have successfully submitted.");
          window.location.href = "Post-survey.html";
          })
    .catch(error => console.error('Error!', error.message))
})
