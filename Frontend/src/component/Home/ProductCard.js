// import React from "react";
// import { Link } from "react-router-dom";
// import { Rating } from "@material-ui/lab";

// const ProductCard = ({ product }) => {
//   const options = {
//     value: product.ratings,
//     readOnly: true,
//     precision: 0.5,
//   };
//   return (
//     <Link className="productCard" to={`/product/${product._id}`}>
//       <img src={product.images[0].url} alt={product.name} />
//       <p>{product.name}</p>
//       <div>
//         <Rating {...options} />{" "}
//         <span className="productCardSpan">
//           {" "}
//           ({product.numOfReviews} Reviews)
//         </span>
//       </div>
//       <span>{`₹${product.price}`}</span>
//     </Link>
//   );
// };

// export default ProductCard;


import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import mango from '../../images/mango.jpg'
export default function ProductCard({ product }) {
    const options = {
        value: product.ratings,
        readOnly: true,
        precision: 0.5,
    };
    return <>
        <div class="productCard">
            <img src={mango} alt="" />
            <p>{product.name}</p>
            <div className='justify-content-center'>
                <StarRatingComponent {...options} />{" "}
                <span className="productCardSpan">
                    {"  "}
                    {product.numOfReviews} Reviews
                </span>
            </div>
            <span>{`₹${product.price} /kg`}</span>
            <button type="button" className="button">ADD TO CART</button>
        </div>
        <style jsx>{`
        .productCard {
            width: 21vmax;
            display: flex;
            flex-direction: column;
            text-decoration: none;
            color: rgb(48, 48, 48);
            margin: 2vmax;
            transition: all 0.5s;
            padding-bottom: 0.5vmax;
            box-shadow: 0 0 5px rgb(75,168,56);
        }

        .productCard > img {
            width: 21vmax;
            height:21vmax;
        }

        .productCard > div {
            margin: 0.5vmax;
            display: flex;
            justify-content: flex-center;
        }

        .productCardSpan {
            margin: 0.5vmax;
            font: 300 1vmax "Roboto";
            text-align:center;
        }

        .productCard > p {
            font-family: "Roboto";
            font-size: 2vmax;
            margin: 1vmax 0.5vmax;
            margin-bottom: 0;
            text-align:center;
            text-transform: uppercase;
        }

        .productCard > span {
            margin: 0.5vmax;
            color: black;
            font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
            font-size: 1vmax;
            text-align:center;
        }

        // .productCard:hover {
        //     box-shadow: 0 0 5px rgba(15, 15, 15, 0.26);

        //     transform: translateY(-1vmax);
        // }
        .button{
            padding: 0 20px;
            width:12vmax;
            text-align: center;
            color: #000;
            text-transform: uppercase;
            font-weight: 500;
            border-radius: 40px;
            margin-left:4.5vmax;
            padding-top:2px;
            padding-bottom:2px;
            border: 2px solid rgb(75,168,56);
            margin-bottom:5px;
        }
        @media screen and (max-width: 600px) {
        .productCard > p {
            font-size: 1.7vmax;
        }

        .productCard > div {
            margin: 0vmax;
            display: block;
        }

        .productCard > span {
            font-size: 1.5vmax;
        }

        .productCard > div > span {
            margin: 0 0.5vmax;
            font: 300 1vmax "Roboto";
        }
        .button{
            padding: 0 20px;
            width:12vmax;
            text-align: center;
            color: #000;
            text-transform: uppercase;
            font-weight: 500;
            border-radius: 20px;
            margin-left:4.5vmax;
            padding-top:2px;
            padding-bottom:2px;
            border: 2px solid rgb(75,168,56);
            margin-bottom:5px;
            font-size: 0.9vmax;
        }
        }
        `}

        </style>
    </>;
}

