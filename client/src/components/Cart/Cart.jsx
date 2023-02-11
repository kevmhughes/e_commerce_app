import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import "./Cart.scss"

const Cart = () => {

    const data = [
        {
        id: 1,
        img: "https://images.pexels.com/photos/9741917/pexels-photo-9741917.jpeg?auto=compress&cs=tinysrgb&w=1200",
        img2: "https://images.pexels.com/photos/9741911/pexels-photo-9741911.jpeg?auto=compress&cs=tinysrgb&w=1200",
        title: "spiral t-shirt",
        isNew:true,
        oldPrice: 19,
        price: 12,
        desc: "poo"
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/9558231/pexels-photo-9558231.jpeg?auto=compress&cs=tinysrgb&w=1200",
            img2: "https://images.pexels.com/photos/9558244/pexels-photo-9558244.jpeg?auto=compress&cs=tinysrgb&w=1200",
            title: "long red shirt dress",
            isNew:true,
            oldPrice: 19,
            price: 12,
            desc: "pee"
        },
    ]

  return (
    <div className='cart'>
        <h1>Products in your cart</h1>
        {data?.map(item => (
            <div className='item' key={item.id}>
                <img src={item.img} alt="fashion" />
                <div className="details">
                    <h1>{item.title}</h1>
                    <p>{item.desc?.substring(0, 100)}</p>
                    <div className="price">1 x ${item.price}</div>
                </div>
                <DeleteOutlineIcon className='delete' />
            </div>
        ))}

        <div className="total">
            <span>SUBTOTAL</span>
            <span>$123</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart