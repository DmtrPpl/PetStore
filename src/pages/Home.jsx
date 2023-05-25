import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import products from "../assets/data/products"

import Helmet from "../components/Helmet/Helmet";
import "../styles/home.css"

import { Container, Row, Col} from "reactstrap";
import heroImg from "../assets/images/hero-img.png"

import Services from "../services/Services";
import ProductsList from "../components/UI/ProductsList";
import { useEffect, useState } from "react";

import Clock from "../components/UI/Clock";


// <motion.button whileHover={{ scale: 1.2 }} --- 33 рядок при наведенні рухається ---- за умовчуванням при натисненні рух

// розмір фону заднього 17 рядок

const Home = ( ) => {


    const [trendingProducts, setTrendingProducts] = useState([])
    const [bestSalesProducts, setBestSalesProducts] = useState([])
    const [popularProducts, setPopularProducts] = useState([])

    const year = new Date().getFullYear();

    useEffect(()=>{

        const filteredBestSalesProducts = products.filter(
            (item) => item.category2 ==="Best Sales"
        );

        const filteredTrendingProducts = products.filter(
            (item) => item.category2 ==="Trending Products"
        );

        const filteredPopularProducts = products.filter(
            (item) => item.category ==="birds"
        );

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
        setPopularProducts(filteredPopularProducts);
    }, []);

    return(
    <Helmet title={"Home"}>
        <section className="hero__section">
            <Container>
                <Row>
                    <Col lg='6' md='6'> 
                        <div className="hero__content">
                            <p className="hero__subtitle">
                                Trending product in {year}
                            </p>
                            <h2> Petland </h2>
                            <p> Meow Meow Meow. Don’t Worry, They Understand. </p>

                            <motion.button whileTap={{ scale: 1.2 }} 
                            className="buy__btn store__btn"><Link to="/shop">SHOP NOW</Link></motion.button>
                        </div>
                    </Col>

                    <Col lg ='4' md='6' className="text-end">
                        <div className="hero__img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>

        <Services />
        
        <section className="best__sales">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">Best Sales</h2>
                    </Col>

                    <ProductsList data={bestSalesProducts}/>
                </Row>
            </Container>
        </section>

        <section className="timer__count">
        <Container>
                <Row>
                    <Col className="count__down-col"> 
                        <div className="clock__top-content">
                            <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                            <h3 className="text-white fs-5 mb-3">Quality products</h3>
                        </div>
                        <Clock />

                        <motion.button whileTap={{ scale: 1.2 }} className="buy__btn store__btn">
                            <Link to="/shop">Visit Store</Link>
                        </motion.button>

                    </Col>
                    
                </Row>
            </Container>
        </section>

        <section className="trending__products">
            <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">Trending Products</h2>
                    </Col>
                    <ProductsList data={trendingProducts} />
                </Row>
            </Container>
        </section>

        <section className="popular__category">
        <Container>
                <Row>
                    <Col lg='12' className="text-center mb-5">
                        <h2 className="section__title">Popular in Category</h2>
                    </Col>
                    <ProductsList data={popularProducts} />
                </Row>
            </Container>
        </section>

    </Helmet>
    );
};

export default Home;