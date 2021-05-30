import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ProductItem } from '../Types/global';
import '../App.css';
import { addItem, removeItem, remove } from '../Store/index'


const Basket = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: ProductItem[]) => state)
    let arr = [...products]
    arr = arr.filter(val => {
        return val.added === true
    })
      // console.log(arr)
    const totalPrice = () =>{
        let total = 0
            arr.map(val =>{
                total+=(val.price*val.quantity)
                // console.log(total)
            } )
            return total
    }
    console.log(totalPrice())
     return (
        <>
            <h1 className="text-center h1 my-5">Cart Item</h1>
            {/* <ol>
                {products.map((val, id) => {
                    if (val.added) {
                        return (
                            <li> {val.title} </li>
                        )

                    }


                })}
            </ol> */}
            <div className="container">
                <div className="row">
                    {
                        products.map((value, id) => {
                            if (value.added) {
                                return (
                                    <>
                                        <div className="col-12 bsktCard">
                                            <img src={`/images/${value.imageUrl}`} />
                                            <h5>{value.title}</h5>
                                            <div className="bsktCnt">
                                                <button onClick={() => dispatch(addItem(value))}>+</button>
                                                <h5>{value.quantity}</h5>
                                                <button onClick={() => dispatch(removeItem(value))} >-</button>
                                            </div>
                                            <h4>${value.quantity * value.price}</h4>
                                            <button className="bsktdel" onClick={() => dispatch(remove(value))} >X</button>
                                        </div>
                                        <hr style={{ width: "100%", height: "5px" }} />
                                    </>
                                )
                            }
                        })
                    }
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Total Price ${totalPrice()}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Basket
