const nav = document.querySelector('#nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const filterButtons = document.querySelectorAll('.nav-list a'); 

abrir.addEventListener('click', () => {
  nav.classList.add("visible");
});

cerrar.addEventListener('click', () => {
  nav.classList.remove("visible");
});

const copyrightElement = document.getElementById('copyright');
const lastModifiedElement = document.getElementById('last-modified');

const currentYear = new Date().getFullYear();
copyrightElement.textContent = `Copyright © ${currentYear} 🌴 Jose Manuel Rodas 🌴 La Paz, Bolivia`;

lastModifiedElement.textContent = `Document last modified: ${document.lastModified}`;

const temples = [
    {
      templeName: "Fallout 4",
      location: "Bethesda Game Studios",
      dedicated: "2015, August",
      area: 20,
      imageUrl:
      "https://i.3djuegos.com/juegos/11529/fallout_4/fotos/ficha/fallout_4-3148336.webp"
    },
    {
      templeName: "StarCraft II",
      location: "Blizzard Entertainment ",
      dedicated: "2009, May",
      area: 10,
      imageUrl:
      "https://th.bing.com/th/id/R.28fc3e852ca55685fe0fb8bab23015ee?rik=1%2fVwt%2fPhvAEkDw&pid=ImgRaw&r=0"
    },
    {
      templeName: "Concord",
      location: "Concord Entertainment",
      dedicated: "2024, June",
      area: 60,
      imageUrl:
      "https://i.3djuegos.com/juegos/19107/concord/fotos/ficha/concord-5869188.webp"
    },
    {
      templeName: "Portal 2",
      location: "Valve",
      dedicated: "2012, March",
      area: 30,
      imageUrl:
      "https://i.3djuegos.com/juegos/2826/portal_2/fotos/ficha/portal_2-1708304.webp"
    },

    
  ];

function createTempleCard(filteredTemples) {
  const gridElement = document.querySelector(".grid");
  gridElement.innerHTML = ""; 

  filteredTemples.forEach(temple => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    let location = document.createElement("p");
    let dedication = document.createElement("p");
    let area = document.createElement("p");
    let img = document.createElement("img");

    name.textContent = temple.templeName;
    location.innerHTML = `<span class="label">Publisher:</span> ${temple.location}`;
    dedication.innerHTML = `<span class="label">Released:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class="label">Price:</span> ${temple.area} $`;

    img.setAttribute("src", temple.imageUrl);
    img.setAttribute("alt", `${temple.templeName} Temple`);
    img.setAttribute("loading", "lazy");

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    gridElement.appendChild(card);
  });
}

createTempleCard(temples); 

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filterType = button.textContent.trim().toLowerCase(); 
    filterTemples(temples.filter(
      temple => {
        switch (filterType) {
          case "old":
            return new Date(temple.dedicated).getFullYear() < 2015;
          case "new":
            return new Date(temple.dedicated).getFullYear() > 2014;
          case "cheapest":
            return temple.area < 21;
          case "small":
            return temple.area < 10000;
          case "home":
            return true; 
          default:
            console.error("Invalid filter type:", filterType);
            return false;
        }
      }
    ));
  });
});

function filterTemples(filteredTemples) {
    createTempleCard(filteredTemples);
  }
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filterType = button.dataset.filter; 
      let filteredTemples = [];
      switch (filterType) {
        case "old":
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
          break;
        case "new":
          filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
          break;
        case "cheapest":
          filteredTemples = temples.filter(temple => temple.area > 90000);
          break;
        case "small":
          filteredTemples = temples.filter(temple => temple.area < 10000);
          break;
        case "home":
          filteredTemples = temples; 
          break;
        default:
          console.error("Invalid filter type:", filterType);
          return;
      }
      filterTemples(filteredTemples);
    });
  });


  // Populate product options
  const selectElement = document.getElementById('product-name');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });

  if (window.location.pathname.includes('review.html')) {
    const reviewCount = localStorage.getItem('reviewCount') || 0;
    localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
  }