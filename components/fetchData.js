let getData = async (url) => {

    let res = await fetch(url)
    let data = await res.json()
    return data.meals
}

let display = (data, food) => {
    food.innerHTML = null
    data.forEach(function(elem){
       
        const foodList = document.createElement('div');
        foodList.setAttribute("class","foodList")

        const img = document.createElement('img');
        img.src = elem.strMealThumb

        const titleSpan = document.createElement('span');
        titleSpan.innerText = elem.strMeal

        const title = document.createElement('p');
        title.setAttribute("class","title")
        title.innerText = "Food Name: "
        title.append(titleSpan)

        const catSpan = document.createElement('span');
        catSpan.setAttribute("class","catSpan")
        catSpan.innerText = elem.strCategory

        const category = document.createElement('p');
        category.setAttribute("class","category")
        category.innerText = "Category: "
        category.append(catSpan)

        const areaSpan = document.createElement('span');
        areaSpan.innerText = elem.strArea
        
        const area = document.createElement('p');
        area.setAttribute("class","area")
        area.innerText = "Dish of: "
        area.append(areaSpan)

        foodList.append(img,title,category,area)
        food.append(foodList)
    })
}

export {getData, display}