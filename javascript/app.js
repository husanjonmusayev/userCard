let user = document.querySelector('.user')
let input = document.querySelector('.input')
let inputimg = document.getElementById('inputImg')
let submit = document.getElementById('submit')
let form = document.querySelector('form')
let eror = document.querySelector('.eror')
let erorimg = document.querySelector('.erorimg')
let texarea = document.querySelector('#texarea')
let erordes = document.querySelector('.erordes')
let wrap = document.querySelector('.contentWrap')


user.addEventListener('click', () => {
  inputimg.click();
});

function creatCard() {

  return `
  <div class="item">
        <img src="${URL.createObjectURL(inputimg.files[0])}" alt="img">
        <h4>${input.value}</h4>
        <span>${texarea.value}</span>
  </div>`

}

function clear() {
  input.value = ''
  texarea.value = ''
}

function validate() {
  if (!inputimg.value) {
    user.style.borderColor = 'red'
    erorimg.textContent = `surat bolishi shart`
    erorimg.style.color = 'red'
    return false
  } else {
    user.style.borderColor = 'teal'
    erorimg.textContent = 'Suratni yuklang'
    erorimg.style.color = 'black'
  }


  if (!input.value.trim()) {
    input.style.borderColor = 'red'
    eror.textContent = 'ismingizni kiritishingiz shart'
    eror.style.color = 'red'
    input.focus()
    return false
  } else {
    eror.textContent = ''
    input.style.borderColor = 'teal'
  }

  if (!texarea.value) {
    texarea.style.borderColor = 'red'
    erordes.textContent = 'izoh bolishi shart'
    erordes.style.color = 'red'
    texarea.focus()
    return false
  } else {
    erordes.textContent = ''
    texarea.style.borderColor = 'teal'
  }



  return true
}

submit.addEventListener('click', function () {
  validate()
  wrap.innerHTML += creatCard()
  clear()


})





