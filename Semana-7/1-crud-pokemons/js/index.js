'use strict';

const POKEMON_CRUD_DATA = 'pokemons-crud';
const pokemons = JSON.parse(localStorage.getItem(POKEMON_CRUD_DATA)) ?? [];

const createPokemon = (e) => {
    e.preventDefault();
    const documentFormPokemon = document.forms['formPokemon'];
    const name = documentFormPokemon.name.value;
    const type = documentFormPokemon.type.value;
    const hp = documentFormPokemon.hp.value;
    const attack = documentFormPokemon.attack.value;
    const special = documentFormPokemon.special.value;
    const imgUrl = documentFormPokemon.imgUrl.value;
    pokemons.push({ name, type, hp, attack, special, imgUrl });
    localStorage.setItem(POKEMON_CRUD_DATA, JSON.stringify(pokemons));
    readPokemons();
};

const readPokemons = () => {
    const tBodyPokemons = document.getElementById('tBodyPokemons');
    tBodyPokemons.innerHTML = '';

    pokemons.forEach((element, index) => {
        const { name, type, hp, attack, special, imgUrl } = element;
        tBodyPokemons.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${name}</td>
                <td>${type}</td>
                <td>${hp}</td>
                <td>${attack}</td>
                <td>${special}</td>
                <td>
                    <img 
                    src="${imgUrl}"
                    alt="${name}" class="img-fluid" style="max-width: 128px;" />
                </td>
                <td>
                    <button class="btn btn-info"
                    onClick="readPokemon(${index})"
                    >
                        ✏
                    </button>
                    <button class="btn btn-danger"
                    onClick="deletePokemon(${index})"
                    >
                        🗑
                    </button>
                </td>
            </tr>
            `;
    });
};

const readPokemon = (index) => {
    // const pokemon = pokemons.find((element, i) => {
    //     return i === index;
    // });
    const pokemon = pokemons.slice(index, index + 1)[0];
    console.log(pokemon);
};

const deletePokemon = (index) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success mx-1",
          cancelButton: "btn btn-danger mx-1"
        },
        buttonsStyling: true
      });
      swalWithBootstrapButtons.fire({
        title: "Estas seguro?",
        text: "No seras capas de revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, eliminalo",
        cancelButtonText: "No, cancelalo!",
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
            pokemons.splice(index, 1);
            localStorage.setItem(POKEMON_CRUD_DATA, JSON.stringify(pokemons));
            readPokemons();
          swalWithBootstrapButtons.fire({
            title: "Eliminado!",
            text: "Tu registro ha sido eliminado.",
            icon: "success"
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelado",
            text: "Tu registro esta seguro :)",
            icon: "error"
          });
        }
      });
};

const documentReady = () => {
    const formPokemon = document.getElementById('formPokemon');

    readPokemons();
    formPokemon.addEventListener('submit', createPokemon);
};

document.addEventListener('DOMContentLoaded', documentReady);