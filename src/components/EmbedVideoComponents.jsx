import React from 'react'

const EmbedVideoComponents = (props) => {
    return (
        <div className='container'>
            <div className="row">
            <div className="d-flex justify-content-center">
                <div className="col-md-6 mt-4">
                    <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1" width='600' height='400' frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default EmbedVideoComponents