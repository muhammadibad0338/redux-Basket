import React from 'react'

const Slider = () => {
    return (
        <div id="carouselExampleInterval" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-interval="10000">
                    <img src="https://cdn.shopify.com/s/files/1/0143/1552/0054/files/Spend_More_Save_More_banner_2_1728x.jpg?v=1603173821" className="d-block w-100" alt="SAVE more" />
                </div>
                <div className="carousel-item" data-interval="2000">
                    <img src="https://cdn.shopify.com/s/files/1/0143/1552/0054/files/banner_8df8055d-38fe-420c-9dbf-c1456703302d_1728x.jpg?v=1601470904" className="d-block w-100" alt="20% OFF" />
                </div>
                <div className="carousel-item">
                    <img src="https://cdn.shopify.com/s/files/1/0143/1552/0054/files/up_to_50_banner_1728x.jpg?v=1603173872" className="d-block w-100" alt="50% OFF" />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Slider
