import React from 'react';

import media_image from "../assets/images/sale-image-1_clone.jpg";
import desktop_image from "../assets/images/sale_img_1.jpg";



const SaleImage = () => {
    return (
        <section class="sale-image">
        <picture>
            <source src={media_image} media =" (max-width:768px)"/>
            <img src= {desktop_image} alt= "images"/>
            <div class="sale-image__offer">
                <h1 class="sale-image__offer__title sale-image__offer--bottom-margin">Skills that driven you forward
                </h1>
                <p class="sale-image__offer__content sale-image__offer--bottom-margin">Technology and the world of work
                    change fast — with us, you’re faster. Get the skills to achieve goals and stay competitive.</p>
                <button type="#" class="sale-image__offer--background-black">View plans</button>

            </div>
        </picture>
    </section>

    )
}


export default SaleImage; 