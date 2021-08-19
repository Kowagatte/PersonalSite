import React from "react";
import "./collection.scss"
import {cards} from "./Cards"
import Card from "./Card";

function constructFetchLink(text){
    return "https://api.scryfall.com/cards/"+text;
}

function sumPrices(cardData){
    let total = 0.0;
    for(const card of cardData){
        total += parseFloat(card.prices.usd)
    }
    return total
}

class Collection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            card_data: [],
            prices: []
        }
    }

    componentDidMount() {
        for(const [key, value] of Object.entries(cards)){
            fetch(constructFetchLink(key))
                .then(response => response.json())
                .then(data => {
                    this.setState(prevState => ({
                        card_data: [...prevState.card_data, data]
                    }))
                });
        }
    }

    render(){
        const { card_data } = this.state;
        return(
            <div className={'card-container'} id={'styled-scroll'}>
                <div className={'price-total'}>Total price ${sumPrices(card_data)} USD</div>
                <p/>
                {
                    Object.keys(card_data || {}).map((value, index) =>{
                        const data = card_data[index]
                        return <Card
                            name={data.name}
                            image_url={data.image_uris.png}
                            lang={data.lang}
                            price={data.prices.usd}
                        />
                    })
                }
                <p/>
            </div>
        );
    }
}

export default Collection;