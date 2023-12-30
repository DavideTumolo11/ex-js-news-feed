const card = [
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        author: "Diana Rossi",
        published: "2023-02-11",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima",
        imgSrc: "img/rubber-duck.jpg",
        tags: "geo tech",

    },
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        author: "Diana Rossi",
        published: "2023-02-11",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima",
        imgSrc: "img/kitchen-food.jpg",
        tags: ["geo", "tech"],

    },
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        author: "Diana Rossi",
        published: "2023-02-11",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima",
        imgSrc: "img/deep-sea.jpg",
        tags: ["geo", "tech"],

    },
    {
        title: "Scoperta di una nuova specie di papera di gomma",
        author: "Diana Rossi",
        published: "2023-02-11",
        content: "Un breve articolo sulla recente scoperta di una specie di papera di gomma mai vista prima",
        imgSrc: "img/modern-art.jpg",
        tags: ["geo", "tech"],

    }


]



/**
 * generate markup for an card
 * @param {object} card the card object
 * @returns object
 */
function generateCard(card) {
    return `<div class="card">
    <i class="fa-regular fa-bookmark"></i>
    <h2>${card.title}</h2>
    <h3>Publicato da ${card.author}</h3>
    <h6>in data ${card.published}</h6>
    <br>
    <p>${card.content}</p>
    <div class="cont_img">
    <img src="${card.imgSrc}" alt="">
    </div>
    <div class="container_tag d-block d-flex ">
    <div class="tags">${card.tags}
    </div>
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














