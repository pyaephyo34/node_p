console.log('Client side javascript file is loaded!')

// fetch('http://localhost:3000/weather?address=!').then((response) => {
//     response.json().then((data) => {
//         if (data.error) {
//             console.log(data.error)
//         } else {
//             console.log(data.location)
//             console.log(data.forecast)
//         }
//     })
// })

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherform.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = search.value
    
    messageOne.textContent = 'loading ....'
    messageTwo.textContent = ''
    if(location){
        fetch('https://node-p-2f4i.onrender.com/weather?address='+location).then((response) => {
            response.json().then((data) => {
                messageOne.textContent = ''
                messageTwo.textContent = ''
                if (data.error) {
                    messageOne.textContent = data.error
                } else {
                    if(data.location) messageOne.textContent = data.location
                    if(data.forecast) messageTwo.textContent = data.forecast
                }
            })
        })
    }
    else{
        console.log('please provide location!!')
    }

   
})