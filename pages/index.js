import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Link from 'next/link'
import { Row,Col, Container,Nav } from 'react-bootstrap'
import homepage from '../styles/homepage.module.scss'
import KingButton from '../components/KingButton'
import { Card } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getProduct } from "../redux/actions/productList"
import styles from '../styles/ProductDetail.module.scss'
import NumberFormat from "react-number-format";
import empty from "../public/images/empty-input-image.png"


export default function Home() {

  const {product} = useSelector(state=>state)
  const dispatch = useDispatch()
  const router = useRouter()
  const [active, setActive] = useState('newProduct')

  const menu = [
    {onclick: 'newProduct', name: 'New Product'},
    {onclick: 'hotTrend', name: 'Hot Trend'},
    {onclick: 'sellOff', name: 'Sell Off'},
    
  ]

  const productDetail = (id) => {
    router.push(`product-list/${[id]}`)
  }

  useEffect(()=> {
    dispatch(getProduct)
  }, [dispatch])

  return (
    <>
    <style jsx>
        {`
          .menu {
              list-style-type: none;
          }
          .menu li {
              margin: 10px 20px;
          }
          .menu li a{
            color: #CF9C1F;
            padding-bottom: 10px;
            text-decoration: none;
            border-bottom: 3px solid transparent;
          }
          .menu li a.active{
            color: #855b27;
            border-color: #855b27;
          }
      `}
      </style>
    <Layout>
    <div className={styles.container}>
      <Head>
        <title className='bg-primary'>The King Furniture</title>
        <meta name="description" content="Generatedd by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <header className={homepage.header}>
            <Container>
                <Row className='align-items-center'>
                    <Col lg={6}>
                          <p className={`${homepage.titleHeader1} text-justify`}>
                          Living Room Collection
                          </p>
                          <p className={`${homepage.titleHeader2} text-justify`}>
                          Mid-Century Brown Sofa
                          </p>
                          <div className='mt-5 mb-5 d-flex align-items-center'>
                            <Link href="#"><KingButton variant="ms-3 fs-6 text-decoration-none bg-color2 text-light fw-bold">SHOP NOW</KingButton></Link>
                          </div>
                    </Col>
                    <Col lg={6}className='d-none d-lg-block mb-5'>
                      <Image src="/images/header-home.png" width={600} height={785}/>
                    </Col>
                </Row>
            </Container>
          </header>
          <section>
          <Container>
                <Row className='align-items-center'>
                  <Col lg={12}>
                    <p className={`${homepage.titleHeader1} text-center mb-5`}>New Collections</p>
                  </Col>
                    <Col lg={6}>
                      <Image src="/images/home.png" width={461} height={600}/> 
                    </Col>
                    <Col lg={6}className='d-none d-lg-block'>
                    <p className={`${homepage.titleHeader2} text-justify`}>
                          Living Room Collection
                    </p>
                    <p className={`text-justify`}>
                    Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam
                    </p>
                    <div className='mt-5 mb-5 d-flex align-items-center'>
                            <div className={homepage.lineHorizontal}></div>
                            <Link href="#"><a className="ms-3 fs-6 text-color3 text-decoration-none fw-bold">DISCOVER MORE</a></Link>
                    </div>
                    </Col>
                </Row>
            </Container>
          </section>
          <Row className='mt-5 mb-5'>
              <Col xl={12}>
                <ul className='menu d-flex align-items-center justify-content-center' key='menu'>
                  {menu.map(item => {
                    return (
                      <li key={item.name}>
                        <div className='cursor-pointer' onClick={() => { setActive(item.onclick) }}>
                          <a className={`${styles.cursor} d-flex flex-row align-items-center  mt-4 fs-5 ${active === item.onclick ? 'active' : ''}`}>
                            {item.name}
                          </a>
                        </div>
                      </li>
                    )
                  })}
                </ul>
              </Col>
            </Row>
          {active === 'newProduct' &&
          <> 
          <section>
              <Container>
                  <Row className='mt-5 mb-5 text-center'>
                  {product.data.map((datas, idx)=>{
                                return (
                                  <Col md={4} key={datas.id} style={{cursor: 'pointer'}} onClick={()=>productDetail(datas.id)} className="mb-4">
                                  <Image src={datas.product_images[0]?.image ? datas.product_images[0]?.image : '/images/chair.png'} width={360} height={450} alt="chair"/>
                                  <div className="text-md-start ms-4">
                                    <p className='fs-5'>{datas.name}</p>
                                    <div className='fs-6 fw-bold'><NumberFormat value={datas?.price} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} prefix={'Rp. '} ></NumberFormat></div>
                                  </div>
                                </Col>
                                )
                            })}

                    {/* <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-auto me-auto">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col> */}
                  </Row>
                  <div className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
                      <div className={homepage.lineHorizontal}></div>
                      <Link href="/product-list"><a className="ms-3 fs-6 text-color3 text-decoration-none fw-bold">VIEW MORE PRODUCTS</a></Link>
                  </div>
              </Container>
          </section>
          </>
          }
          {active === 'hotTrend' &&
          <>
          <section>
            <Container>
            <Row className='mt-5 mb-5 text-center'>
            <Col md={4} className="mb-4">
                      <Image src="/images/ht1.jpeg" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-auto me-auto">
                        <p className='fs-5'>Rinninge Chair</p>
                        <div className='fs-6 fw-bold'>Rp. 2.095.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/ht2.jpg" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Kyrre Chair</p>
                        <div className='fs-6 fw-bold'>Rp. 295.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/ht3.jpg" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Trotten Office Table</p>
                        <div className='fs-6 fw-bold'>Rp. 3.300.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/ht4.jpeg" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Bekant Table Set</p>
                        <div className='fs-6 fw-bold'>Rp. 3.900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/ht5.jpeg" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Gallant Wardrobe</p>
                        <div className='fs-6 fw-bold'>Rp. 1.900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/ht6.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Kitchen Set</p>
                        <div className='fs-6 fw-bold'>Rp. 5.900.000</div>
                      </div>
                    </Col>
            </Row>
            </Container>
          </section>
          </>
          }
          {active === 'sellOff' &&
          <>
          <section>
            <Container>
            <Row className='mt-5 mb-5 text-center'>
            <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-auto me-auto">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
                    <Col md={4} className="mb-4">
                      <Image src="/images/chair.png" width={360} height={450} alt="chair"/>
                      <div className="text-md-start ms-4">
                        <p className='fs-5'>Coaster 506222-CO Loveseat</p>
                        <div className='fs-6 fw-bold'>Rp. 900.000</div>
                      </div>
                    </Col>
            </Row>
            </Container>
          </section>
          </>
          }
          <section>
          <Row className='py-5'>
          <Col xs={12} md={4}>
          <Card className="text-center bg-color5 border-0">
            <Container>
              <Card.Body>
                <div height={30} className="my-3">
                <Image src="/images/sale1.png" width={280} height={280} alt="sale"/>
                <p className={`text-end `}>
                <s>$765.99</s>
                </p>
                <p className={`text-end fw-bold mb-5`}>
                only $380.99
                </p>
                </div>
                <Card.Text>
                  <p>MODERN CHAIR</p>
                </Card.Text>
                <h2>SALE 50%</h2>
                <Link href="#"><KingButton variant="ms-3 fs-6 text-decoration-none bg-color1 text-light fw-bold mb-5">SHOP NOW</KingButton></Link>
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card className="text-center bg-color4 border-0">
            <Container>
              <Card.Body>
              <div height={30} className="my-3">
                <Image src="/images/sale2.png" width={280} height={280} alt="sale"/>
                <p className={`text-end `}>
                <s>$240.99</s>
                </p>
                <p className={`text-end fw-bold mb-5`}>
                only $120.99
                </p>
                </div>
                <Card.Text>
                  <p>Table Lamp</p>
                </Card.Text>
                <h2>SALE 50%</h2>
                <Link href="#"><KingButton variant="ms-3 fs-6 text-decoration-none bg-color1 text-light fw-bold mb-5">SHOP NOW</KingButton></Link>
              </Card.Body>
            </Container>
          </Card>
        </Col>
        <Col xs={12} md={4}>
        <Card className="text-center bg-color5 border-0">
            <Container>
              <Card.Body>
              <div height={30} className="my-3">
                <Image src="/images/sale3.png" width={280} height={280} alt="sale"/>
                <p className={`text-end `}>
                <s>$140.99</s>
                </p>
                <p className={`text-end fw-bold mb-5`}>
                only $100.99
                </p>
                </div>
                <Card.Text>
                  <p>Plant Flower Display Stand </p>
                </Card.Text>
                <h2>SALE 50%</h2>
                <Link href="#"><KingButton variant="ms-3 fs-6 text-decoration-none bg-color1 text-light fw-bold mb-5">SHOP NOW</KingButton></Link>
              </Card.Body>
            </Container>
          </Card>
        </Col>
      </Row>
          </section>
          <section>
          <Row className='py-2 bg-color4 align-items-center justify-content-center mb-4'>
          <Col xs={12} md={6}>
            <Card className="text-center bg-color4 border-0">
              <Container>
                <Card.Body>
                  <Card.Text>
                    &quot;Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work.&quot;
                  </Card.Text>
                  <hr></hr>
                  <h5>Trevor Rivera - CEO IKEA</h5>
                </Card.Body>
              </Container>
            </Card>
          </Col>
        </Row>
        </section>
        </div>
    </Layout>
    </>
  )
}
