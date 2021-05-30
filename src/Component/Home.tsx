import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { ProductItem } from '../Types/global';
import Slider from './Slider';
import '../App.css';
import { add } from '../Store/index'


const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: ProductItem[]) => state)
    console.log(products)
    return (
        <>
            <Slider />
            <h1 className="text-center h1" style={{marginTop:"50px",marginBottom:"30px",color:"blueviolet"}}>ALL Products</h1>
            <div className="container">
                <div className="row">
                    {
                        products.map((value, id) => {
                            return (
                                <div className="col-md-4 col-lg-4 col-sm-12 prdctView"  key={id}>
                                    <img src={`/images/${value.imageUrl}`} style={{ width: "100%", maxHeight: "300px" }} />
                                    <button className={value.added ? "discart" : "cart"} disabled={value.added} onClick={() => dispatch(add(value))} >{  value.added? "ALREADY ADDED" : "ADD TO CART"} </button>
                                    <div>
                                        <h4>{value.title}</h4>
                                        <h5 className="text-right">${value.price}</h5>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default Home