const card = [
    {
        title: 'Scoperta di una nuova specie di papera di gomma',
        author: 'Diana Rossi',
        published: '2023-02-11',
        content: 'Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima',
        imgSrc: 'img/rubber-duck.jpg',
        tags: ['geo', 'tech'],

    },
    {
        title: 'Esplorando le profondità marine: il mistero degli abissi',
        author: 'Fabio Mari',
        published: '2023-03-14',
        content: 'Esplorando le profondità marine: il mistero degli abissi',
        imgSrc: 'img/deep-sea.jpg',
        tags: ['viaggi', 'geo'],

    },
    {
        title: 'Viaggio culinario: alla ricerca dei sapori perduti',
        author: 'Marta Bianchi',
        published: '2023-04-20',
        content: 'Esplorazione di tradizioni culinarie dimenticate e la ricerca di sapori autentici.',
        imgSrc: 'img/kitchen-food.jpg',
        tags: ['cucina'],

    },
    {
        title: 'Arte moderna: oltre i confini convenzionali',
        author: 'Gabriele Neri',
        published: '2023-05-29',
        content: "Un'analisi delle tendenze e delle sfide nell'arte contemporanea, con interviste a artisti emergenti.",
        imgSrc: 'img/modern-art.jpg',
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
    <img src="${card.imgSrc}" alt="">
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
    card.forEach(card => {
        const cardHTML = generateCard(card);

        cardAddEl.innerHTML += cardHTML;
    });
}




const colorBooks = document.querySelectorAll('.fa-bookmark');

colorBooks.forEach(colorBook => {
    colorBook.addEventListener('click', function(){
        this.style.backgroundColor = 'blue';
    });
});










