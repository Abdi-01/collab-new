import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

class Carousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <UncontrolledCarousel
                    items={[
                        {
                            altText: 'Slide 1',
                            caption: 'Slide 1',
                            key: 1,
                            src: 'https://images.unsplash.com/photo-1546815670-5c5e437ffc6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80'
                        },
                        {
                            altText: 'Slide 2',
                            caption: 'Slide 2',
                            key: 2,
                            src: 'https://images.unsplash.com/photo-1603361513137-219be38712ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80'
                        },
                        {
                            altText: 'Slide 3',
                            caption: 'Slide 3',
                            key: 3,
                            src: 'https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
                        }
                    ]}
                />
            </div>
        );
    }
}

export default Carousel;