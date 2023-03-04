import React from 'react';
import "../Css/PortfolioG.css";

const PortfolioG = () => {
       
    return (
        <div>
            <div class="button-group filters-button-group">
                <button class="button is-checked" data-filter="*">all</button>
                <button class="button" data-filter=".beach">beach</button>
                <button class="button" data-filter=".bird">bird</button>
                <button class="button" data-filter=".boat">boat</button>
                <button class="button" data-filter=".lighthouse">lighthouse</button>
                <button class="button" data-filter=".people">people</button>
                <button class="button" data-filter=".rock">rock</button>
                <button class="button" data-filter=".sea">sea</button>
            </div>

            <section id="grid-container" class="transitions-enabled fluid masonry js-masonry grid">
                <article class="beach people sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach1.jpg" class="img-responsive" />
                </article>
                <article class="beach bird">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird3.jpg" class="img-responsive" />
                </article>
                <article class="sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea2.jpg" class="img-responsive" />
                </article>
                <article class="beach people rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach2.jpg" class="img-responsive" />
                </article>
                <article class="beach sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach3.jpg" class="img-responsive" />
                </article>
                <article class="bird">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird1.jpg" class="img-responsive" />
                </article>
                <article class="bird">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/bird2.jpg" class="img-responsive" />
                </article>
                <article class="sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea4.jpg" class="img-responsive" />
                </article>
                <article class="lighthouse rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/lighthouse1.jpg" class="img-responsive" />
                </article>
                <article class="boat">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/boat2.jpg" class="img-responsive" />
                </article>
                <article class="lighthouse sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/lighthouse2.jpg" class="img-responsive" />
                </article>
                <article class="beach people">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/people1.jpg" class="img-responsive" />
                </article>
                <article class="rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock3.jpg" class="img-responsive" />
                </article>
                <article class="boat lighthouse sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/boat1.jpg" class="img-responsive" />
                </article>
                <article class="boat sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea1.jpg" class="img-responsive" />
                </article>
                <article class="rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock2.jpg" class="img-responsive" />
                </article>
                <article class="beach">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/beach4.jpg" class="img-responsive" />
                </article>
                <article class="rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/sea3.jpg" class="img-responsive" />
                </article>
                <article class="people rock sea">
                    <img src="https://cdn2.hubspot.net/hub/322787/hubfs/MYCHEFCOM/hackathon/photos-gallery/rock1.jpg" class="img-responsive" />
                </article>
            </section> 
        </div>
    );
};

export default PortfolioG;