import { Container, Row, Col, Card, Button, Pagination } from "react-bootstrap"
import Image from "next/image";
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from "../styles/product-list.module.scss"
import mask from "../public/images/Mask.png"
import {GoTriangleDown} from "react-icons/go"
import product from "../public/images/product.png"
import image from "../public/images/image-1.png"
import Head from "next/head";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProductPromo = () => {
    const [value, setValue] =  React.useState([2,500]);

    const rangeSelector = (event, newValue) => {
        setValue(newValue);
        console.log(newValue)
      };

    return (
        <>
            <Head>
            <title>The King | Product List</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={`${styles.containers} `}>
                <div className={`${styles.profiles} `}> 
                <Carousel autoPlay={true}
                emulateTouch={true}
                infiniteLoop={true}
                showThumbs={false} controlArrow={false}
                width="100%" className="py-5">
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div>                            
                            <p >Midcentury Modern Occasional Chair</p>
                            <h1 className={`${styles.carousels}`}>off 30%</h1>
                            <Button className={`${styles.buttons} d-flex py-2`}>
                                Shop Now
                            </Button>
                        </div>
                        <div className="d-flex flex-row">                  
                            <Image src={image} width={400} height={400} alt="image1"/>
                            <div className={`${styles.text} py-5`}>only $309.99</div>                        
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div>                            
                            <p >Midcentury Modern Occasional Chair</p>
                            <h1 className={`${styles.carousels}`}>off 30%</h1>
                            <Button className={`${styles.buttons} d-flex py-2`}>
                                Shop Now
                            </Button>
                        </div>
                        <div className="d-flex flex-row">                  
                            <Image src={image} width={400} height={400} alt="image1"/>
                            <div className={`${styles.text} py-5`}>only $309.99</div>                        
                        </div>
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center">
                        <div>                            
                            <p >Midcentury Modern Occasional Chair</p>
                            <h1 className={`${styles.carousels}`}>off 30%</h1>
                            <Button className={`${styles.buttons} d-flex py-2`}>
                                Shop Now
                            </Button>
                        </div>
                        <div className="d-flex flex-row">                  
                            <Image src={image} width={400} height={400} alt="image1"/>
                            <div className={`${styles.text} py-5`}>only $309.99</div>                        
                        </div>
                    </div>
                </Carousel>

                </div>
                <Row className={`${styles.filter} px-5`}>
                    <Col xl={3} className='px-5 mt-5 pt-3'>
                        <h3>Categories</h3>
                        <div className="mt-5">
                        <div className="d-flex flex-row justify-content-between">
                            <div>Accessories</div>
                            <div>5</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Brands</div>
                            <div>15</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Clothing</div>
                            <div>3</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Fashion</div>
                            <div>8</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Furniture</div>
                            <div>9</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Men</div>
                            <div>6</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Women</div>
                            <div>8</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Shoes</div>
                            <div>10</div>
                        </div>
                        <div className="d-flex flex-row justify-content-between">
                            <div>Wallets</div>
                            <div>11</div>
                        </div>
                        </div>
                        <div style={{
                            margin: 'auto',
                            display: 'block',
                            width: "100%"
                        }}>
                            <h3 className="mt-5">Price</h3>
                            <Typography className="mt-4" id="range-slider" gutterBottom>Price ${value[0]} - ${value[1]}</Typography>
                            <Slider
                                value={value}
                                onChange={rangeSelector}
                                valueLabelDisplay="auto"
                            />
                        </div>
                        <Button className={`${styles.button} d-flex py-2`}>
                            Filter
                        </Button>
                        <h3 className="mt-5">Brands</h3>
                        <div className=" mb-5">
                            <div >
                                <label className="radio-button d-flex  align-items-center">
                                    <input type="checkbox" name="gender"/>
                                    <div className="checkmark px-2"></div>
                                    <div className="text">IKEA</div>
                                 </label>
                            </div>
                            <div>
                                <label className="radio-button d-flex  align-items-center">
                                    <input type="checkbox" name="gender"/>
                                    <div className="checkmark px-2"></div>
                                    <div className="text">Mr Royal</div>
                                </label>
                            </div>
                            <div>
                                <label className="radio-button d-flex  align-items-center">
                                    <input type="checkbox" name="gender"/>
                                    <div className="checkmark px-2"></div>
                                    <div className="text">Sweet House</div>
                                </label>
                            </div>
                            <div>
                                <label className="radio-button d-flex  align-items-center">
                                    <input type="checkbox" name="gender"/>
                                    <div className="checkmark px-2"></div>
                                    <div className="text">North Oxford</div>
                                </label>
                            </div>
                            <div>
                                <label className="radio-button d-flex  align-items-center">
                                    <input type="checkbox" name="gender"/>
                                    <div className="checkmark px-2"></div>
                                    <div className="text">Mr. Poppin 1929</div>
                                </label>
                            </div>
                        </div>
                        <h3 className="mt-5">Colors</h3>
                        <h3 className="mt-5">Size</h3>
                        <div className="mt-5 mb-5 position-relative">
                            <Image src={mask} width={260} height={280} alt="ShopNow" />
                            <Button className={`${styles.button} bottom-0 start-0 position-absolute mx-4 my-4`}>Shop Now</Button>
                        </div>
                    </Col>
                    <Col xl={9} className='px-5 mt-5 pt-3'>
                        <div className="d-flex justify-content-between">
                            <div>Showing 1-16 of 39 Results</div>
                            <div className="me-5">Sort by <GoTriangleDown /></div>
                        </div>
                        {/* <Row className="mt-5">
                        {products.forEach(item => {                            
                            return (                                
                                <Col xl={4}>
                                    <Image src={item.image} width={293} height={400} alt='product' />
                                    <div className="text-center">{item.name}</div>
                                    <div className="text-center">{item.price}</div>
                                </Col>                                     
                            )                            
                        })}
                        </Row> */}
                        <Row className="mt-5">
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt='product' />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt='product' />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt='product' />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt={product} />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt={product} />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt={product} />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt={product} />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt={product} />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                            <Col xl={4}>
                                <Image src={product} width={293} height={400} alt={product} />
                                <div className="text-center">Coaster 506222-CO Loveseat</div>
                                <div className="text-center">$765.99</div>
                            </Col>
                        </Row>
                        <div className="d-flex flex-column align-items-center mt-5 mb-5">
                        <Pagination>
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{4}</Pagination.Item>
                            <Pagination.Item>{5}</Pagination.Item>
                            <Pagination.Item >{6}</Pagination.Item>
                            <Pagination.Item>{7}</Pagination.Item>
                            <Pagination.Item >{8}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default ProductPromo