import React from 'react';
import { Card } from 'reactstrap'
class CardComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="d-flex px-4" style={{paddingTop:'30vh'}}>
                    <Card className="shadow p-5 mb-5 bg-white rounded mx-2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minima iusto consequatur, doloremque delectus quia nulla soluta vel earum incidunt obcaecati impedit suscipit magnam perferendis nisi dicta consectetur sequi quos.</p>
                    </Card>
                    <Card className="shadow p-5 mb-5 bg-white rounded mx-2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minima iusto consequatur, doloremque delectus quia nulla soluta vel earum incidunt obcaecati impedit suscipit magnam perferendis nisi dicta consectetur sequi quos.</p>
                    </Card>
                    <Card className="shadow p-5 mb-5 bg-white rounded mx-2">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam minima iusto consequatur, doloremque delectus quia nulla soluta vel earum incidunt obcaecati impedit suscipit magnam perferendis nisi dicta consectetur sequi quos.</p>
                    </Card>
                </div>
            </div>
        );
    }
}

export default CardComp;