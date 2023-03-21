import React from 'react';
import Link from 'next/link';


var ReactDOM = require('react-dom');
var Carousel = require('react-responsive-carousel').Carousel;

var DemoCarousel = React.createClass({
    render() {
        return (
            <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}>
                <div>
                    <img src="/aura.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="/aura_2.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
              </Carousel>
        );
    }
});
ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
export default Carousel