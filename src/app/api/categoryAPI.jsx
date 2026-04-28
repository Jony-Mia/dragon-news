 const categoryAPI = async ()=>{
    let categories = await fetch("https://openapi.programming-hero.com/api/news/categories");
    let res = await categories.json()
    return res.data;
}
export default categoryAPI;