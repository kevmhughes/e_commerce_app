import React from "react"
import Categories from "../../components/Categories/Categories"
import Contacts from "../../components/Contacts/Contacts"
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts"
import Slider from "../../components/Slider/Slider"
import "./Home.scss"

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured"/>
      <Categories />
      <FeaturedProducts type="trending"/>
      <Contacts />
    </div>
  )
}

export default Home