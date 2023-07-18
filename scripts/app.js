const figures = [
    {
        image: "https://i.ibb.co/qk3WZzd/bouquet-cart1.png",
        name: "Ніжна свіжість",
        flowers: "троянди та лілії",
        price: 445
    },
    {
        image: "https://i.ibb.co/kSqMtYg/bouquet-cart2.png",
        name: "Сорбет",
        flowers: "хризантеми та троянди",
        price: 450
    },
    {
        image: "https://i.ibb.co/P9mTcQT/bouquet-cart3.png",
        name: "Yellow song",
        flowers: "соняшники та солідаго",
        price: 455
    },
    {
        image: "https://i.ibb.co/M8NL0gT/bouquet-cart4.png",
        name: "Персиковий нектар",
        flowers: "лілії та троянди",
        price: 455
    },
    {
        image: "https://i.ibb.co/LYMJ9mc/bouquet-cart5.png",
        name: "Аврора",
        flowers: "лілії та троянди",
        price: 460
    },
    {
        image: "https://i.ibb.co/Y7jdbq5/bouquet-cart6.png",
        name: "Класика кохання",
        flowers: "червоні троянди",
        price: 465
    }
];



{/* <figure class="card1">
        <img class="card__image" src="https://i.ibb.co/qk3WZzd/bouquet-cart1.png">
        <figcaption class="card__title">Gentle freshness: <br> roses and lilies <br> <br> 20$
        </figcaption>
    </figure> */}

function createContent(card) {
    //card
    const figure = document.createElement('figure');
    figure.classList.add('card1');

    //
    const img = document.createElement('img');
    img.classList.add('card__image');
    img.src = card.image;

    const figcaption = document.createElement('figcaption');
    figcaption.classList.add('card__title');
    figcaption.textContent = `${card.name} - ${card.flowers} - ${card.price}`;

    figure.appendChild(img);
    figure.appendChild(figcaption);

    return figure;
}

function createContentTemplate(card) {
    const figure = `<figure class="card1">
    <img class="card__image" style="background-image: url(${card.image})">
    <figcaption class="card__title">${card.name} - ${card.flowers} - ${card.price}
    </figcaption>
    </figure>`

    return createFragmentTemplate(figure);
}

function createFragmentTemplate(str) {
    const template = document.createElement('template');

    template.innerHTML = str;

    return template.catalog;
}

function appendContent(catalog) {
    const el = document.getElementById('catalog');

    el.appendChild(catalog);
}

function init(figures) {
    const fragment = document.createDocumentFragment();

    figures.forEach((card) => {
        fragment.appendChild(createContentTemplate(card));
    });

    appendContent(fragment);
}

init(figures);