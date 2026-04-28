import categoryAPI from "@/app/api/categoryAPI";

 async function Category() {
    let cat = await categoryAPI()
    console.log(cat.news_category);
    return (
        <>
        
        </>
    )
}

export default Category;