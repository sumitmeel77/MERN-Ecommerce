import React from 'react';
import RaectHelmet from '../component/Helmet';
import ProductCard from '../component/ProductCard';
import home_1 from '../images/home_1.jpg'

export default function Home() {
    const product = {
        name: "Mango",
        numOfReviews: 5,
        price: 50,
        ratings: 3,
    }
    return <>
        <RaectHelmet title="Home" />
        <img className="d-none d-md-flex" src={home_1} width="100%" alt="" />
        <a href="/" style={{ "textDecoration": "None" }}><h2 className="homeHeading">FRUITS</h2></a>
        <div className='container'>
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
        </div>
        <a href="/" style={{ "textDecoration": "None" }}><h2 className="homeHeading">VEGETABLES</h2></a>
        <div className='container'>
            <ProductCard product={product} />
            <ProductCard product={product} />
            <ProductCard product={product} />
        </div>
        <style jsx>{`
        .homeHeading {
            text-align: center;
            font-family: Roboto;
            font-size: 2vmax;
            border-bottom: 1px solid rgba(21, 21, 21, 0.5);
            width: 20vmax;
            padding: 1vmax;
            margin: 5vmax auto;
            color: rgb(0, 0, 0, 0.7);
            }
        .container{
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        
        `}
        </style>
    </>;
}
