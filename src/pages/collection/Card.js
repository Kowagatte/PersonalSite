import React from "react";

const regionFlag = (id) =>{
    if(id === 'ja'){
        return "🇯🇵";
    }else{
        return "🇬🇧";
    }
}

const foilFlag = (id) =>{
    return id ? "Foil" : "";
}

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image_url: null,
            name: null,
            lang: null,
            price: null,
            foil: false
        }
    }

    render() {
        return(
            <figure className={'card'}>
                <figcaption className={'caption'}>
                    {this.props.name}「{regionFlag(this.props.lang)}」
                    {this.props.foil && (<p className={'foil-tag'}>{foilFlag(this.props.foil)}</p>)}
                    <br/>
                    ${this.props.price} USD
                </figcaption>
                <img draggable={false} src={this.props.image_url} alt={''}/>
            </figure>
        );
    }
}

export default Card;