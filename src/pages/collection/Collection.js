import React from "react";
import "./collection.scss"
import {cards} from "./Cards"
import Card from "./Card";

import fetch from "node-fetch";
import {RateLimit} from "async-sema"

const limit = RateLimit(10);

const fetchFromAPI = (id) => {
    const url = `https://api.scryfall.com/cards/${id}`;
    return fetch(url)
        .then(response => response.json())
        .catch((error) => console.log(error));
}

function sumPrices(cardData){
    let total = 0.0;
    for(const card of cardData){
        total += parseFloat(card.price)
    }
    return total.toFixed(2)
}

class Collection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            card_data: []
        }
    }

    async componentDidMount() {
        for (const [key, value] of Object.entries(cards)) {
            let card = {"name": null, "lang": null, "img": null, "price": 0.0, "foil": false}
            await limit()
            fetchFromAPI(key).then((data) => {
                card["lang"] = data.lang
                card["name"] = data.name
                card["img"] = data.image_uris.png
                card["foil"] = value
                card["price"] = value ? data.prices.usd_foil : data.prices.usd;

                this.setState(prevState => ({
                    card_data: [...prevState.card_data, card]
                }))
            });

        }
    }

    render(){
        const { card_data } = this.state;
        return(
            <div className={'card-container'} id={'styled-scroll'}>
                <div className={'price-total'}>
                    <h1>Total price ${sumPrices(card_data)} USD</h1>
                </div>
                {
                    Object.keys(card_data || {}).map((value, index) =>{
                        const data = card_data[index]
                        return <Card
                            name={data.name}
                            image_url={data.img}
                            lang={data.lang}
                            price={data.price}
                            foil={data.foil}
                        />
                    })
                }
            </div>
        );
    }
}

export default Collection;