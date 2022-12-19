import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
// import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

// const Home = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { loading, error, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProduct());
//   }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="ECOMMERCE" />

//           <div className="banner">
//             <p>Welcome to Ecommerce</p>
//             <h1>FIND AMAZING PRODUCTS BELOW</h1>

//             <a href="#container">
//               <button>
//                 Scroll <CgMouse />
//               </button>
//             </a>
//           </div>

//           <h2 className="homeHeading">Featured Products</h2>

//           <div className="container" id="container">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Home;

// import React from 'react';
// import RaectHelmet from '../component/Helmet';
import ProductCard from './ProductCard.js';
import home_1 from '../../images/home_1.jpg'

export default function Home() {
      const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {
        if (error) {
        alert.error(error);
        dispatch(clearErrors());
        }
        dispatch(getProduct());
    }, [dispatch, error, alert]);
    const product = {
        name: "Mango",
        numOfReviews: 5,
        price: 50,
        ratings: 3,
    }
    console.log("products")
    console.log(products)
    return <>
        {/* <RaectHelmet title="Home" /> */}
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
