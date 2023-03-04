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
                            item.style.display = 'block'
                        }else{
                            item.style.display = 'none'
                        }
                    }
                })
            })
        })

        

    })();
       
    return (
        <div>
            <div class="button-group filters-button-group">
                <button class="button is-checked" data-filter="all">all</button>
                <button class="button" data-filter="beach">beach</button>
                <button class="button" data-filter="bird">bird</button>
                <button class="button" data-filter="boat">boat</button>
                <button class="button" data-filter="lighthouse">lighthouse</button>
                <button class="button" data-filter="people">people</button>
                <button class="button" data-filter="rock">rock</button>
                <button class="button" data-filter="sea">sea</button>
            </div>

            <section id="grid-container" class="transitions-enabled fluid masonry js-masonry grid">
                <article class="store-item beach people sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach1.jpg" class="img-responsive" />
                </article>
                <article class="store-item beach bird">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird3.jpg" class="img-responsive" />
                </article>
                <article class="store-item sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea2.jpg" class="img-responsive" />
                </article>
                <article class="beach people rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach2.jpg" class="img-responsive" />
                </article>
                <article class="beach sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach3.jpg" class="img-responsive" />
                </article>
                <article class="store-item bird">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird1.jpg" class="img-responsive" />
                </article>
                <article class="store-item bird">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird2.jpg" class="img-responsive" />
                </article>
                <article class="store-item sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea4.jpg" class="img-responsive" />
                </article>
                <article class="store-item lighthouse rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/lighthouse1.jpg" class="img-responsive" />
                </article>
                <article class="store-item boat">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/boat2.jpg" class="img-responsive" />
                </article>
                <article class="store-item lighthouse sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/lighthouse2.jpg" class="img-responsive" />
                </article>
                <article class="store-item beach people">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/people1.jpg" class="img-responsive" />
                </article>
                <article class="store-item rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock3.jpg" class="img-responsive" />
                </article>
                <article class="store-item boat lighthouse sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/boat1.jpg" class="img-responsive" />
                </article>
                <article class="store-item boat sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea1.jpg" class="img-responsive" />
                </article>
                <article class="store-item rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock2.jpg" class="img-responsive" />
                </article>
                <article class="store-item beach">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach4.jpg" class="img-responsive" />
                </article>
                <article class="store-item rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea3.jpg" class="img-responsive" />
                </article>
                <article class="store-item people rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock1.jpg" class="img-responsive" />
                </article>
            </section> 
        </div>
    );
};

export default PortfolioG;