import Recommended_images1 from "../assets/images/recomeded_image.webp";
import Recommended_images2 from "../assets/images/recommended-image_2.avif";
import Recommended_images3 from "../assets/images/recommended-image_3.avif";
import Recommended_images4 from "../assets/images/recommended-image_5.avif";

import "../App.css"

const PopularSection = ()=>{
    return (
        <section classNameName="popular">
        <div className="popular__title__container">
            <h1 className="popular__title popular--size">Most popular</h1>
            <p className=" popular__subtitle popular--size">Pick the best</p>
        </div>
        <div className="popular__container">
            <div className="recommended__container-course_card">
                <img src={Recommended_images1} alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>2024 Python Data Visulisation Masterclass</h3>
                    <p className="recommended__container-course_card__aurthor">Col steel</p>
                    <p>4.9⭐⭐⭐⭐⭐</p>
                    <p><b>₹649</b> <del>₹1,999</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images2} alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>Block chain Masterclass</h3>
                    <p className="recommended__container-course_card__aurthor">Sam</p>
                    <p>3.3⭐⭐⭐</p>
                    <p><b>₹449</b> <del>₹2,999</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images3}alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>Web development</h3>
                    <p className="recommended__container-course_card__aurthor">steel</p>
                    <p>3.2 ⭐⭐⭐</p>
                    <p><b>₹249</b> <del>₹5,999</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images4} alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>2024 Python Data Visulisation Masterclass</h3>
                    <p className="recommended__container-course_card__aurthor">Col steel</p>
                    <p>4.9⭐⭐⭐⭐⭐</p>
                    <p><b>₹649</b> <del>₹1,999</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images1} alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>Block chain Masterclass</h3>
                    <p className="recommended__container-course_card__aurthor">Sam</p>
                    <p>3.3⭐⭐⭐</p>
                    <p><b>₹449</b> <del>₹2,999</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images2}alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>Web development</h3>
                    <p className="recommended__container-course_card__aurthor">steel</p>
                    <p>3.2 ⭐⭐⭐</p>
                    <p><b>₹249</b> <del>₹5,999</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images3} alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>Dot net tutorials for beginners</h3>
                    <p className="recommended__container-course_card__aurthor">Wilson</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p><b>₹349</b> <del>₹1,599</del></p>
                </div>
            </div>

            <div className="recommended__container-course_card">
                <img src={Recommended_images4} alt="Python data visulisation masterclass"/>
                <div className="recommended__container__content">
                    <h3>Dot net tutorials for beginners</h3>
                    <p className="recommended__container-course_card__aurthor">Wilson</p>
                    <p>4.3 ⭐⭐⭐⭐</p>
                    <p><b>₹349</b> <del>₹1,599</del></p>
                </div>
            </div>
        </div>
    </section>
    )
}


export default PopularSection;