function FetchFunc(){
fetch('https://endereco-api.com/', {
    method: 'GET',//POST, GET, PUT, DELETE, PATCH E ETC
    cache: 'no-cache',
})
.then(response => response.json())
.then(json => console.log(json))
    
}