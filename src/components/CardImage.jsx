import React from 'react';

class CardImage extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {}
    render() {
        return (
            <div className=''>
                <div classaName="card-deck">
                    <div className="card">
                        <img className="card-img-top" src="https://miro.medium.com/max/1400/1*PJ_LNrqaaASgFMXwFKvcMg.png" alt="Card image cap" style={{width: "400px"}}/>
                        <div className="card-body"> Some more card content </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://miro.medium.com/max/1400/1*PJ_LNrqaaASgFMXwFKvcMg.png" alt="Card image cap" style={{width: "400px"}}/>
                        <div className="card-body"> Some more card content </div>
                    </div>
                    <div className="card">
                        <img className="card-img-top" src="https://miro.medium.com/max/1400/1*PJ_LNrqaaASgFMXwFKvcMg.png" alt="Card image cap" style={{width: "400px"}} />
                        <div className="card-body"> Some more card content </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CardImage;