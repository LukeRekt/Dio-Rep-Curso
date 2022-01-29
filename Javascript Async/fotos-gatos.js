const BASE_URL = "https://thatcopy.pw/catapi/rest/";
btn = document.getElementById("botao");

const getCats = async () => {
    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();
        console.log(json.webpurl)
        return json.webpurl;
    } catch(e){
        console.log(e.message);
    }
};




const loadImg = async () => 
{
const LoadCat = document.getElementById("cat");
LoadCat.src = await getCats();

}

btn.addEventListener('click', loadImg());
loadImg();