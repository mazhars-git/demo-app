import React from 'react';
import "../Css/PortfolioG.css";

const PortfolioG = () => {
    (function(){
        const buttons = document.querySelectorAll('.button')
        const storeImages = document.querySelectorAll('.store-item')

        buttons.forEach((button) =>{
            button.addEventListener('click', (e) =>{
                e.preventDefault();
                const filter = e.target.dataset.filter
                storeImages.forEach((item) =>{
                    if(filter === 'all'){
                        item.style.display = 'block'
                    }else{
                        if(item.classList.contains(filter)){
                            console.log(filter)
                            item.style.display = 'block'
                        }else{
                            item.style.display = 'none'
                        }
                    }
                });
            });
        });
    })();
       
    return (
        <div>
            <div className="button-group filters-button-group">
                <button className="button is-checked" data-filter="all">ALL</button>
                <button className="button" data-filter="beach">BEACH</button>
                <button className="button" data-filter="boat">BOAT</button>
                <button className="button" data-filter="lighthouse">LIGHTHOUSE</button>
                <button className="button" data-filter="people">PEOPLE</button>
                <button className="button" data-filter="rock">ROCK</button>
                <button className="button" data-filter="sea">SEA</button>
            </div>

            <section id="grid-container" className="transitions-enabled fluid masonry js-masonry grid">
                <article className="store-item beach people sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach1.jpg" className="img-fluid" />
                </article>
                <article className="store-item beach">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird3.jpg" className="img-fluid" />
                </article>
                <article className="store-item sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea2.jpg" className="img-fluid" />
                </article>
                <article className="beach people rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach2.jpg" className="img-fluid" />
                </article>
                <article className="beach sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach3.jpg" className="img-fluid" />
                </article>
                <article className="store-item beach">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird1.jpg" className="img-fluid" />
                </article>
                <article className="store-item beach">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird2.jpg" className="img-fluid" />
                </article>
                <article className="store-item sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea4.jpg" className="img-responsive" />
                </article>
                <article className="store-item lighthouse rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/lighthouse1.jpg" className="img-responsive" />
                </article>
                <article className="store-item boat">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/boat2.jpg" className="img-responsive" />
                </article>
                <article className="store-item lighthouse sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/lighthouse2.jpg" className="img-responsive" />
                </article>
                <article className="store-item beach people">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/people1.jpg" className="img-responsive" />
                </article>
                <article className="store-item rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock3.jpg" className="img-responsive" />
                </article>
                <article className="store-item boat lighthouse sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/boat1.jpg" className="img-responsive" />
                </article>
                <article className="store-item boat sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea1.jpg" className="img-responsive" />
                </article>
                <article className="store-item rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock2.jpg" className="img-fluid" />
                </article>
                <article className="store-item beach">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach4.jpg" className="img-responsive" />
                </article>
                <article className="store-item rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea3.jpg" className="img-responsive" />
                </article>
                <article className="store-item people rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock1.jpg" className="img-responsive" />
                </article>
            </section> 
        </div>
    );
};

export default PortfolioG;