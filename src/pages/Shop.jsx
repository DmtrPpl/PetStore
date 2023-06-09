import React from "react";
import { useState } from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";

import "../styles/shop.css";

import products from "../assets/data/products";
import ProductList from "../components/UI/ProductsList"

const Shop = ( ) => {


    const [productsData, setProductsData] = useState(products)

    const handleFilter = e=>{

        const filterValue = e.target.value

        if (filterValue === "dogs") {
            const filteredProducts = products.filter(item=> item.category==="dogs")
            setProductsData(filteredProducts);
        }

        if (filterValue === "cats") {
            const filteredProducts = products.filter(item=> item.category==="cats")
            setProductsData(filteredProducts);
        }

        if (filterValue === "birds") {
            const filteredProducts = products.filter(item=> item.category==="birds")
            setProductsData(filteredProducts);
        }

        if (filterValue === "rodents") {
            const filteredProducts = products.filter(item=> item.category==="rodents")
            setProductsData(filteredProducts);
        }

    }

    const handleSearch = e=> {
        const searchTerm = e.target.value

        const searchedProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProductsData(searchedProducts)
    }




    return(

        <Helmet title="Shop">

            <CommonSection title="Products"/>

            <section>
                <Container>
                    <Row>
                    <Col lg='6' md='12'>
                            <div className="search__box">
                                <input type="text" placeholder="Search....." onChange={handleSearch} />
                                <span>
                                    <i class="ri-search-line"></i>
                                </span>
                            </div>
                        </Col>

                        <Col lg='3' md='6'>
                            <div className="filter__widget">
                                <select onChange={handleFilter}>
                                    <option>Filter By Category</option>
                                    <option value="dogs">Dogs</option>
                                    <option value="cats">Cats</option>
                                    <option value="birds">Birds</option>
                                    <option value="rodents">Rodents</option>
                                </select>
                            </div>
                        </Col>
                        
                        <Col lg='3' md='6' className="text-end">
                        <div className="filter__widget">
                                <select>
                                    <option>Sort By</option>
                                    <option value="ascending">Ascending</option>
                                    <option value="descending">Descending</option>
                                </select>
                            </div>
                        </Col>
                        
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        {
                            productsData.length === 0? ( <h1 className="text-center fs-4">No products are found!</h1> ) 
                            : ( <ProductList data={productsData} /> )
                        }
                    </Row>
                </Container>
            </section>
            

        </Helmet>
    );
};

export default Shop;