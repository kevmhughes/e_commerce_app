import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import "./FeaturedProducts.scss"
import axios from "axios"

const FeaturedProducts = ({type}) => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try{
                const res = await axios.get(
                    process.env.REACT_APP_API_URL + "/products?populate=*", 
                    {
                headers: {
                    Authorization: "bearer " + process.env.REACT_APP_API_TOKEN,
                } 
                });
                setData(res.data.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [])

    console.log(data)

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