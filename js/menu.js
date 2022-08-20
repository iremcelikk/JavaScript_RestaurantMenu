const menu = [

    {
        id: 1,
        title: "Croissant",
        category: "Dessert",
        country: "France",
        price: 8,
        img: "https://cdn.pixabay.com/photo/2019/03/24/14/23/bread-4077812_960_720.jpg",
        desc: "A croissant, is a buttery, flaky, French viennoiserie pastry inspired by the shape of the Austrian kipferl but using the French yeast-leavened laminated dough."
    }
    ,
    {
        id: 2,
        title: "Ratatouille",
        category: "Meal",
        country: "France",
        price: 16,
        img: "https://cdn.pixabay.com/photo/2020/06/19/08/26/ratatouille-5316199_960_720.jpg",
        desc: "Ratatouille , is a French Provençal dish of stewed vegetables which originated in Nice, and is sometimes referred to as ratatouille niçoise."
    }
    ,
    {
        id: 3,
        title: "Macaron",
        category: "Dessert",
        country: "France",
        price: 6,
        img: "https://cdn.pixabay.com/photo/2017/07/28/14/28/macarons-2548818_960_720.jpg",
        desc: "French macaron is a sweet meringue-based confection made with egg white, icing sugar, granulated sugar, almond meal, and food colouring."
    }
    ,
    {
        id: 4,
        title: "CroqueMonsieur",
        category: "Meal",
        country: "France",
        price: 9,
        img: "https://cdn.pixabay.com/photo/2016/10/05/05/46/bread-1716102_960_720.jpg",
        desc: "A croque monsieur, is a hot sandwich made with ham and cheese."
    }
    ,
    {
        id: 5,
        title: "Fajita",
        category: "Meal",
        country: "Mexico",
        price: 17,
        img: "https://cdn.pixabay.com/photo/2021/01/20/04/22/fajitas-5933057_960_720.jpg",
        desc: "A fajita, in Tex-Mex cuisine, is any stripped grilled meat with stripped peppers and onions usually served on a flour or corn tortilla."
    }
    ,
    {
        id: 6,
        title: "Taco",
        category: "Meal",
        country: "Mexico",
        price: 15,
        img: "https://cdn.pixabay.com/photo/2016/08/23/08/53/tacos-1613795_960_720.jpg",
        desc: "A taco, is a traditional Mexican food consisting of a small hand-sized corn- or wheat-based tortilla topped with a filling."
    }
    ,
    {
        id: 7,
        title: "Churros",
        category: "Dessert",
        country: "Mexico",
        price: 9,
        img: "https://cdn.pixabay.com/photo/2017/03/30/15/47/churros-2188871_960_720.jpg",
        desc: "A churro, is a type of fried dough. These are eaten for breakfast dipped in champurrado, hot chocolate, dulce de leche or café con leche. Cinnamon sugar is often sprinkled on top."
    }
    ,
    {
        id: 8,
        title: "Lahmacun",
        category: "Meal",
        country: "Turkey",
        price: 14,
        img: "https://cdn.pixabay.com/photo/2021/05/07/08/55/lahmacun-6235579_960_720.jpg",
        desc: "Lahmacun, is a Turkish flatbread and meat dish. It consists of a flatbread topped with minced meat, minced vegetables, and herbs including onions, garlic, tomatoes, red peppers, and parsley, flavored with spices such as chili pepper and paprika."
    }
    ,
    {
        id: 9,
        title: "AdanaKebap",
        category: "Meal",
        country: "Turkey",
        price: 20,
        img: "https://cdn.pixabay.com/photo/2021/02/17/17/20/adana-kebab-6024915_960_720.jpg",
        desc: "Adana kebabı, is a Turkish dish that consists of long, hand-minced meat kebab mounted on a wide iron skewer and grilled on an open mangal filled with burning charcoal."
    }
    ,
    {
        id: 10,
        title: "Baklava",
        category: "Dessert",
        country: "Turkey",
        price: 12,
        img: "https://cdn.pixabay.com/photo/2019/05/06/14/07/pistachio-baklava-4183179_960_720.jpg",
        desc: "Baklava, is a layered pastry dessert made of filo pastry, filled with chopped nuts, and sweetened with syrup or honey."
    }
    ,
    {
        id: 11,
        title: "FırınSütlaç",
        category: "Dessert",
        country: "Turkey",
        price: 8,
        img: "https://cdn.pixabay.com/photo/2021/09/02/17/59/rice-pudding-6594064_960_720.jpg",
        desc: "Fırın Sütlaç is a dish made from rice mixed with water or milk and other ingredients such as cinnamon, vanilla and raisins. "
    }
]

let foods_areaDOM = document.querySelector("#food_area")

function filter(e) {
    foods_areaDOM.innerHTML = ""
    menu.forEach(function (obj) {
        if (obj.country == e.id || obj.category == e.id || e.id == "all") {
            foods_areaDOM.innerHTML += ` <div class="col p-2">
        <div class="card mb-3 h-100" style="max-width: 540px;">
            <div class="row">
                <div class="col-sm-4 d-flex align-items-center">
                    <img src="${obj.img}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-sm-8">
                    <div class="card-body">
                        <h5 class="card-title">${obj.title}</h5>
                            <p class="card-text">${obj.desc}</p>
                    </div>
                    <div class="card-footer">
                    <small>${obj.price}$</small>
                  </div>
              
                </div>
            </div>
        </div>
    </div>`
        }
    })
}
