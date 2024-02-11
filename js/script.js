const card = [
    {
        id: 1,
        title: 'Scoperta di una nuova specie di papera di gomma',
        author: 'Diana Rossi',
        published: '2023-02-11',
        content: 'Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima',
        imgSrc: 'img/rubber-duck.jpg',
        imgAlt: 'Una papera di gomma',
        tags: ['geo', 'tech'],

    },
    {
        id: 2,
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        author: 'Fabio Mari',
        published: '2023-03-14',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        imgSrc: 'img/deep-sea.jpg',
        imgAlt: 'Profondità del mare',
        tags: ['viaggi', 'geo'],

    },
    {
        id: 3,
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        author: 'Marta Bianchi',
        published: '2023-04-20',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.',
        imgSrc: 'img/kitchen-food.jpg',
        imgAlt: 'Pomodori con coltello e olio',
        tags: ['cucina'],

    },
    {
        id: 4,
        title: 'Arte moderna: oltre i confini convenzionali',
        author: 'Gabriele Neri',
        published: '2023-05-29',
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        imgSrc: 'img/modern-art.jpg',
        imgAlt: 'Street art su muri per strada',
        tags: ['arte', 'tech'],

    }

]


function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('it-IT');
}


function generateTags(tags) {

    return tags.map(tag => `<div class="tags ${tag}">${tag}</div>`).join('');
}




/**
 * generate markup for an card
 * @param {object} card the card object
 * @returns object
 */
function generateCard(card) {

    return `<div class="card">
    <i class="fa-regular fa-bookmark"></i>
    <div class="container_title"><h2>${card.title}</h2></div>
    <h3>Publicato da ${card.author}</h3>
    <h6>in data ${formatDate(card.published)}</h6>
    <p>${card.content}</p>
    <div class="cont_img">
    <img src="${card.imgSrc}" alt="${card.imgAlt}">
    </div>
    <div class="container_tag">
    ${generateTags(card.tags)}
    </div>`;
};



/*generate all card*/

const cardAddEl = document.getElementById('container_feed')

addCards(card, cardAddEl);



/**
 * render a list of card into the dom element provided
 * @param {Array} card A an of card object
 * @param {*} cardAddEl the node where append all icons
 */
function addCards(card, cardAddEl) {
    cardAddEl.innerHTML = '';
    card.forEach(card => {
        const cardHTML = generateCard(card);

        cardAddEl.innerHTML += cardHTML;
    });
}



let isChecked = [];
console.log(isChecked);

function checkBookmark() {
    const colorBooks = document.querySelectorAll('.fa-bookmark');

    colorBooks.forEach((colorBook, id) => {
        colorBook.addEventListener('click', function (e) {
            //console.log(e);
            this.classList.replace('fa-regular', 'fa-solid');
            isChecked[id] = this.classList.contains('fa-solid',) ? 'checked' : '';
            console.log(isChecked);
        });
    });
}

checkBookmark();






function apllyFilter() {
    let filteredCard = card;
    let selectTag = selectElement.value;

    if (selectTag != 'all') {
        filteredCard = filteredCard.filter((card) => {
            return card.tags.includes(selectTag);
        })
    }

    let isCheckedEl = checkElement.checked;
    console.log(isCheckedEl);

    if (isCheckedEl == true) {
        filteredCard = filteredCard.filter((card) => {
            return isChecked[card.id] === 'checked';
        })
    }


    addCards(filteredCard, cardAddEl);
}




let allTags = card;


const tags = ['politica', 'geo', 'tech', 'viaggi', 'cucina']
const selectElement = document.getElementById('tag_type');
const checkElement = document.getElementById('news');


selectElement.addEventListener('change', function (e) {
    apllyFilter();

})

checkElement.addEventListener('change', function (e) {
    apllyFilter();


})