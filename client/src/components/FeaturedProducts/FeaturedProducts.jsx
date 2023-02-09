import React from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"

const FeaturedProducts = ({type}) => {

    const data = [
        {
            id: 1,
            img: "https://images.pexels.com/photos/9741917/pexels-photo-9741917.jpeg?auto=compress&cs=tinysrgb&w=1200",
            img2: "https://images.pexels.com/photos/9741911/pexels-photo-9741911.jpeg?auto=compress&cs=tinysrgb&w=1200",
            title: "spiral t-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 2,
            img: "https://images.pexels.com/photos/9558231/pexels-photo-9558231.jpeg?auto=compress&cs=tinysrgb&w=1200",
            img2: "https://images.pexels.com/photos/9558244/pexels-photo-9558244.jpeg?auto=compress&cs=tinysrgb&w=1200",
            title: "long red shirt dress",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 3,
            img: "https://images.pexels.com/photos/13833041/pexels-photo-13833041.jpeg?auto=compress&cs=tinysrgb&w=1200",
            img2: "https://images.pexels.com/photos/13833042/pexels-photo-13833042.jpeg?auto=compress&cs=tinysrgb&w=1200",
            title: "NASA t-shirt",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
        {
            id: 4,
            img: "https://images.pexels.com/photos/8973512/pexels-photo-8973512.jpeg?auto=compress&cs=tinysrgb&w=1200",
            img2: "https://images.pexels.com/photos/8973515/pexels-photo-8973515.jpeg?auto=compress&cs=tinysrgb&w=1200",
            title: "Lakers slacks",
            isNew:true,
            oldPrice: 19,
            price: 12,
        },
    ];


    console.log(data.map(item => item.title))
  return (
    <div className='featuredProducts'>
        <div className="top">
            <h1>{type} products</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                dolor in reprehenderit in voluptate velit esse cillum dolore eu 
                fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>

        <div className="bottom">
            {data.map(item => (
                <Card item={item} key={item.id}/>
            ))}
        </div>
    </div>
  )
}

export default FeaturedProducts