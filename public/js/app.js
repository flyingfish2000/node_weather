console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')

const msg1 = document.querySelector('#message-1') // query by id
const msg2 = document.querySelector('#message-2')

msg1.textContent = ""
msg2.textContent = ""

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    msg1.textContent = "loading ..."
    msg2.textContent = ""

    const location = search.value
    const url = 'http://localhost:3000/weather?address=' + location
    console.log(url)
    
    fetch(url).then((response) =>{
        response.json().then((data) => {
            if(data.error){
                console.log(data.error)
                msg1.textContent = data.error
            }else{
                console.log(data.location)
                console.log(data.forecast)
                msg1.textContent = data.location
                msg2.textContent = data.forecast
            }

        })

    })
    // 
})