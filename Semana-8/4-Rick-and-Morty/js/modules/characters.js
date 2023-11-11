
const characters = () => {
  const previousCharacters = document.getElementById('previousCharacters');
  const nextCharacters = document.getElementById('nextCharacters');
  let page = 1;
 
  const renderCharacters = (data) => {
    const charactersContainer = document.getElementById('charactersCharacters');
    charactersContainer.innerHTML = '';

    data.forEach((element) => {
      const { id, name, status, species, type, gender, origin, location, image } = element;

      charactersContainer.innerHTML += `
            <div class="col-md-4" key=${id}>
            <div class="card bg-dark border border-2 border-light border-opacity-25 h-100 mx-auto"
              style="width: min(100%, 18rem);">
              <div class="card-header text-center text-light">
                ${name}
              </div>
              <div class="card-body">
                <img src="${image}" class="card-img-top" alt="Comidas" width="256" height="144"
                  style="width: 100%; height: 192px; object-fit: cover; border-radius: 0.5rem">
                <h5 class="card-title mt-2 text-light">${name}</h5>
                <h6 class="card-subtitle mb-2 text-secondary">${type || 'Unknown type'}</h6>
                <p class="card-text text-light">
                  <span class="badge text-bg-primary">${status}</span>
                  <span class="badge text-bg-success">${species}</span>
                  <span class="badge text-bg-danger">${gender}</span>
                </p>
                <p class="card-text text-light"><span class="fw-bold">Origen:</span> ${origin.name}</p>
                <p class="card-text text-light"><span class="fw-bold">Ubicacion:</span> ${location.name}</p>
              </div>
              <div class="card-footer text-center">
              <a href="${image}"target="_blank" rel="noopener noreferrer" class="card-link text-decoration-none text-warning">Descargar Imagen</a>
              </div>
            </div>
          </div>
            `;
    });
  };

  const fetchRead = async (page) => {
    try {
      const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
      renderCharacters(data.results);
    } catch (error) {
      console.log(error);
    } finally {
      window.scrollTo(0, 0);
    }
  };

  previousCharacters.addEventListener('click', () => {
    fetchRead(--page);
  });
  nextCharacters.addEventListener('click', () => {
    fetchRead(++page);
  });

  fetchRead(page);
};

export default characters;