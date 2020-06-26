let matriculaField = document.getElementById("matricula")
let senhaField = document.getElementById("senha")
let loginBtn = document.getElementById("login")

let matErrMsg = document.getElementById("mat_err")
let senhaErrMsg = document.getElementById("senha_err")
let genErrMsg = document.getElementById("gen_err")

loginBtn.addEventListener("click", () => {
  let matricula = matriculaField.value
  let senha = senhaField.value


  if(matricula == "" || senha == ""){
    matErrMsg.style.display = matricula == "" ? "block" : "none"
    senhaErrMsg.style.display = senha == "" ? "block" : "none"
  } else if(matricula == "123456" && senha == "123456"){
    alert("Seja bem vindo!")
  } else {
    genErrMsg.style.display = "block"
  }
})

matriculaField.addEventListener("input", () => {
  matErrMsg.style.display = "none"
  genErrMsg.style.display = "none"
})

senhaField.addEventListener("input", () => {
  senhaErrMsg.style.display = "none"
  genErrMsg.style.display = "none"
})
