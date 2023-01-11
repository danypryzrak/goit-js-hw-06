const form = document.querySelector(".login-form") 
form.addEventListener('submit', handleSubmit)


function handleSubmit(event) {
    event.preventDefault()
    const { email, password } = event.currentTarget.elements
    if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!")
    }
    const userData = { email: email.value, password: password.value }
    console.log(userData)
    form.reset()
}



// const userData = {}

// function handleSubmit(event) {
// event.preventDefault()
//     const formData = new FormData(event.currentTarget)

//     formData.forEach((value, name) => {
//         if (value === '') {
//         return alert("Все поля должны быть заполнены")
//         } else {
//             userData[name] = value
//             console.log(userData)
//             form.reset()
//         }
//     });
    
// }

