import { Col, Row, Container, Form } from 'react-bootstrap'
import Head from 'next/head'
import Image from 'next/image'
import { FaStar, FaPlus, FaMinus, FaHeart, FaTruck, FaRulerCombined } from 'react-icons/fa'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { ImLocation2, ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import styles from '../../styles/ProductDetail.module.scss'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import { useDispatch, useSelector } from "react-redux";
import { getProductDetail } from '../../redux/actions/productDetail'
import { increment, decrement } from '../../redux/actions/counter'
import { addToCart } from '../../redux/actions/cart'
import { checkFavorite, addToFavorite, removeFavorite } from '../../redux/actions/favorite'
import { checkWishlist, addToWishlist, removeWishlist } from '../../redux/actions/wishlist'
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const ProductDetail = () => {

  const { productDetail } = useSelector(state => state)
  const { favorite, wishlist } = useSelector(state => state)
  const [liked, setLiked] = useState(false)
  const [wished, setWished] = useState(false)
  const [userToken, setUserToken] = useState()
  const [showModalAdd, setShowModalAdd] = useState(false)
  const router = useRouter()

  // const product = [
  //   { image: '/images/detail1.png' },
  //   { image: '/images/detail2.png' },
  //   { image: '/images/detail3.png' },
  //   { image: '/images/detail4.png' },
  //   { image: '/images/detail5.png' }
  // ]

  const [active, setActive] = useState('description')

  const menu = [
    { onclick: 'description', name: 'Description' },
    { onclick: 'review', name: 'Review' },
    { onclick: 'aboutBrand', name: 'Additional Information' },
    { onclick: 'additionalInformation', name: 'About Brand' },
    { onclick: 'shippingDelivery', name: 'Shipping & Delivery' }
  ]

  const relatedProducts = [
    { image: '/images/detail7.png', name: 'Coaster 506222-CO Loveseat', price: 'Rp. 400.000' },
    { image: '/images/detail8.png', name: 'Coaster 506222-CO Loveseat', price: 'Rp. 400.000' },
    { image: '/images/detail9.png', name: 'Coaster 506222-CO Loveseat', price: 'Rp. 400.000' },
  ]

  const reviewProducts = [
    { image: '/images/review1.png', comment: 'Theme is very flexible and easy to use. Perfect for us. Customer support has been excellent and answered every question we`ve thrown at them with 12 hours.' },
    { image: '/images/review2.png', comment: 'Exceptional service, beautiful and straightforward theme! Can`t recommend enough.' },
    { image: '/images/review3.png', comment: '``Highly customizable. Excellent design. Customer services has exceeded my expectation. They are quick to answer and even when they don`t know the answer right away. They`ll work with you towards a solution.``' },
  ]

  const dispatch = useDispatch()

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    setUserToken(token)
    getProductDetail(dispatch, router.query.id)

  }, [router.query.id])

  useEffect(() => {
    checkFavorite(dispatch, router.query.id)
    if (favorite.data?.id) {
      setLiked(true)
    }
    if (wishlist.data?.id) {
      setWished(true)
    }
  }, [])


  const counter = useSelector(state => state.counter)

  const onInc = () => {
    if (counter.num < productDetail.data.stock) {
      dispatch(increment())
    }
  }
  const onDec = () => {
    if (counter.num > 1) {
      dispatch(decrement())
    }
  }

  const cart = (id) => {
    router.push(`cart/${[id]}`)
  }
  const addCart = async (e) => {
    e.preventDefault()
    const data = {
      id_product: router.query.id,
      qty: counter.num > 1 ? counter.num : 1,
      recipient_name: 'Unset',
      address: 'Unset',
    }
    console.log(data)
    await addToCart(dispatch, userToken, data)
    await setShowModalAdd(true)
    setTimeout(() => {
      setShowModalAdd(false)
    }
      , 5000)
  }

  const likeProduct = async () => {
    setLiked(!liked)
    if (!favorite.data?.id) {
      const data = { id_product: router.query.id }
      addToFavorite(dispatch, data)
    } else {
      removeFavorite(dispatch, favorite.data.id)
      await checkFavorite(dispatch, router.query.id)
    }

  }

  const wishlistProduct = async () => {
    setWished(!wished)
    const data = { id_product: router.query.id }
    addToWishlist(dispatch, data)
  }

  return (
    <>
      <style jsx>
        {`
          .menu {
              list-style-type: none;
          }
          .menu li {
              margin: 10px 0;
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
        <Head>
          <title>The King | Product Detail</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container>
          <Row xl={12}>
            <div className="d-flex flex-column justify-content-center">
              <div style={{ fontSize: "16px", fontFamily: "Arimo" }} className="text-justify p-auto mt-3 nav-text">
                <span >Shop {""}</span><span> {">"} Shop Right Sidebar {">"} Product</span>
              </div>
            </div>
          </Row>
          <Row>
            <Col xl={3}>
              {productDetail.data?.product_images.map((data, idx) => {
                return (
                  <>
                    <Row className='mt-2'>
                      <Col className='mb-1' key='detail'>
                        <Image className={`${styles.image}`} src={data.image} width={140} height={134} alt='detail' />
                      </Col>
                    </Row>
                  </>
                )
              })}
            </Col>
            <Col xl={9} className='mt-5 mb-5'>
              <Image className={`${styles.image}`} src={productDetail.data?.product_images[0]?.image ? productDetail.data?.product_images[0].image : '/images/noimage.png'} width={990} height={805} alt='detail' />
            </Col>
          </Row>
          <Row>
            <Col className='ms-1 mt-5'>
              <h2>{productDetail.data?.name}</h2>
            </Col>
          </Row>
          <Row>
            <Col xl={6} className='ms-1 mt-3'>
              <Row>
                <Col xl={3}>
                  <FaStar className='me-1' />
                  <FaStar className='me-1' />
                  <FaStar className='me-1' />
                  <FaStar className='me-1' />
                  <FaStar />
                </Col>
                <Col xl={3} className='mb-2'>
                  <p>2 (reviews)</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col xl={6}>
              <h2 className='fs-1 text-bold'>Rp. {productDetail.data?.price.toLocaleString('id-ID')}</h2>
            </Col>
            <Col xl={6}>
              <Row>
                <Col xl='1' className='text-end'>
                  <AiOutlineCheckCircle />
                </Col>
                <Col>
                  <p>Sold / {productDetail.data?.stock} In Stock</p>
                </Col>
              </Row>
            </Col>
            <Row>
              <Col className='mt-3'>
                <p className=''>{productDetail.data?.description}</p>
              </Col>
            </Row>
            {showModalAdd &&
              <div className='text-primary bg-white p-5'>Added to cart</div>}
            <Row>
              <Col xl={12} className='text-center mt-5'>
                <div className='d-flex'>
                  <div className={`${styles.counter} py-3 px-3`}>
                    <FaPlus className={`${styles.quantity} me-4`} onClick={onInc} />
                    {counter.num}
                    <FaMinus className={`${styles.quantity} ms-4`} onClick={onDec} />
                  </div>
                  <div className='d-inline-block'>
                    <button className={`${styles.button} py-3 px-5 ms-3 me-3 text-white`} onClick={addCart}>Add to cart</button>
                  </div>
                  <div className='d-inline-block'>
                    <button onClick={likeProduct} className={`${styles.buttonLike} py-3 px-3 ${liked ? 'text-danger' : 'text-white'}`}><FaHeart className='fs-5' /></button>
                  </div>
                  <div className='d-inline-block'>
                    <button onClick={wishlistProduct} className={`${styles.buttonWish} py-3 ms-3 text-white `} ><p className={`p-0 m-0 ${wished ? 'text-danger' : 'text-white'}`}>Add to wishlist</p></button>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xl={6} className='mt-5'>
                <p className='text-muted'>SKU: N/A <br />
                  Categories: Furniture, Interior, Chair  <br />
                  Tag:  Furniture, Chair, Scandinavian, Modern <br />
                  Product ID: {productDetail.data?.id}</p>
              </Col>
            </Row>
            <Row>
              <Col xl={6} className='mt-5'>
                <div className='d-flex'>
                  <div className='d-inline-block me-2'>
                    <FaTruck />
                  </div>
                  <div className='d-inline-block me-3'>
                    <p>Delivery and return</p>
                  </div>
                  <div className='d-inline-block me-2'>
                    <FaRulerCombined />
                  </div>
                  <div className='d-inline-block me-3'>
                    <p>Size Guide</p>
                  </div>
                  <div className='d-inline-block me-2'>
                    <ImLocation2 />
                  </div>
                  <div className='d-inline-block'>
                    <p>Store availability</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col xl={6} className='mt-3'>
                <div className='d-flex'>
                  <div className='d-inline-block me-4'>
                    <div className={`${styles.roundBorder} text-center`}>
                      <ImFacebook />
                    </div>
                  </div>
                  <div className='d-inline-block me-4'>
                    <div className={`${styles.roundBorder} text-center`}>
                      <ImTwitter />
                    </div>
                  </div>
                  <div className='d-inline-block me-4'>
                    <div className={`${styles.roundBorder} text-center`}>
                      <ImYoutube />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className='mt-5 mb-5'>
              <Col xl={12}>
                <ul className='menu d-flex justify-content-between' key='menu'>
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
            {active === 'description' &&
              <>
                <Row>
                  <Col xl={6}>
                    <Image className={`${styles.image}`} src={productDetail.data?.product_images[0]?.image ? productDetail.data?.product_images[0].image : '/images/noimage.png'} width={500} height={317} alt='detail' />
                  </Col>
                  <Col xl={6}>
                    <p>{productDetail.data?.description}</p>
                  </Col>
                </Row>
              </>
            }
            {active === 'review' &&
              <>
                {reviewProducts.map(item => {
                  return (
                    <>
                      <Row className='justify-content-center align-items-center'>
                        <Col xl={2}>
                          <Image className={`${styles.image} rounded-circle`} src={item.image} width={94} height={94} alt='detail' />
                        </Col>
                        <Col xl={5} className='py-4'>
                          {item.comment}
                          <Row className='py-4'>
                            <Col xl={5}>
                              <p className={`${styles.text} text-muted`}>35 mins ago, 15 November 2019</p>
                            </Col>
                            <Col xl={5}>
                              <p className={`${styles.text} `}>Reply</p>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row className='justify-content-center align-items-center'>
                        <Col xl={2}>
                        </Col>
                        <Col xl={5} className='py-4'>
                          <Row className='align-items-center'>
                            <Col xl={2}>
                              <Image className={`${styles.image} rounded-circle`} src={item.image} width={94} height={94} alt='detail' />
                            </Col>
                            <Col xl={10} className='py-4'>
                              {item.comment}
                              <Row className='py-4'>
                                <Col xl={6}>
                                  <p className={`${styles.text} text-muted`}>35 mins ago, 15 November 2019</p>
                                </Col>
                                <Col xl={5}>
                                  <p className={`${styles.text} `}>Reply</p>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </>
                  )
                })}
                <Row className='justify-content-center'>
                  <Col xl={7}>
                    <h2>Leave A Comment</h2>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xl={7}>
                    <p>Your email address will not be published. Required fields are marked *</p>
                  </Col>
                </Row>
                <Row className='justify-content-center mb-3'>
                  <Col xl={7}>
                    <Row>
                      <Col xl={4}>
                        <input className='w-100 px-4 py-2' placeholder='Name*'></input>
                      </Col>
                      <Col xl={4}>
                        <input className='w-100 px-4 py-2' placeholder='Email*'></input>
                      </Col>
                      <Col xl={4}>
                        <input className='w-100 px-4 py-2' placeholder='Website'></input>
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <Row className='justify-content-center mb-3'>
                  <Col xl={7}>
                    <input className='w-100 px-4 py-5' placeholder='Your Comment'></input>
                  </Col>
                </Row>
                <Row className='justify-content-center'>
                  <Col xl={7}>
                    <button className={`${styles.button} w-25 py-3`}>Send</button>
                  </Col>
                </Row>
              </>
            }
            <Row>
              <Col xl={12} className='text-center mt-5 mb-5'>
                <h1 className='fs-1 text-bold'>Related Products</h1>
              </Col>
            </Row>
            <Row className='mb-5'>
              <Col xl={12}>
                <div className='d-flex justify-content-center'>
                  <Carousel autoPlay={true}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    controlArrow={false}

                    width="100%">
                    {relatedProducts.map(item => {
                      return (
                        <>
                          <div className='d-inline-block ms-5 me-5'>
                            <Image className={`${styles.image}`} src={item.image} width={360} height={450} alt='detail' />
                            <div className='mb-2 mt-2'>
                              {item.name}
                            </div>
                            <div>
                              {item.price}
                            </div>
                          </div>
                        </>
                      )
                    })}
                  </Carousel>
                </div>
              </Col>
            </Row>
          </Row>
        </Container >
      </Layout>
    </>
  )
}

export default ProductDetail