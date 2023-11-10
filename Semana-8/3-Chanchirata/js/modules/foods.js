import comidas from "../../utils/data.js";

const foods = () => {
    const foodsFoods = document.getElementById('foodsFoods');
    comidas.forEach((element) => {
        const { id, name, description, urlImage, urlRecipe } = element;
        foodsFoods.innerHTML += `
        <div class="col-md-4"${id}>
            <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
                style="width: min(100%, 18rem);">
                <img src="${urlImage}"
                    class="card-img-top" alt="Comida" width="256" height="144" 
                    style="width: 100%; height: 192px; object-fit: cover;">
                <div class="card-body d-flex flex-column">
                    <h5 class="card-title text-light">${name}</h5>
                    <p class="card-text text-light">${description}</p>
                    <a href="${urlRecipe}" class="btn btn-primary mt-auto">Receta</a>
                </div>
            </div>
        </div>
        `;
    });
};

export default foods;