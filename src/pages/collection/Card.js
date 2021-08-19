import React from "react";

class Card extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image_url: null,
            name: null,
            lang: null,
            price: null
        }
    }

    render() {
        return(
            <figure className={'card'}>
                <figcaption className={'caption'}>
                    {this.props.name} 「🇯🇵」
                    <br/>
                    ${this.props.price} USD
                </figcaption>
                <img draggable={false} src={this.props.image_url} alt={''}/>
            </figure>
        );
    }
}

export default Card;