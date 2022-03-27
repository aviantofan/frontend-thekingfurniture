import { Col, Row, Container, Form } from 'react-bootstrap'
import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '../styles/Wishlist.module.scss'
import Image from 'next/image'
import { BsCheck, BsFillHeartFill } from 'react-icons/bs';
import Button from "../components/Button";
import { useDispatch, useSelector } from 'react-redux'
import { getFavorite } from "../redux/actions/favorite"
import { useEffect, useState } from "react"
import { addToCart } from '../redux/actions/cart'

const Favorite = () => {

  // const productsFavorite = [
  //   { image: '/images/img-product.png', name: 'Coaster 506222-CO Loveseat', status: 'In Stock', price: 'Rp. 400.000' },
  //   { image: '/images/img-product.png', name: 'Coaster 506222-CO Loveseat', status: 'In Stock', price: 'Rp. 400.000' },
  //   { image: '/images/img-product.png', name: 'Coaster 506222-CO Loveseat', status: 'In Stock', price: 'Rp. 400.000' },
  // ]

  const dispatch = useDispatch()

  const { favorite } = useSelector(state => state)
  const [userToken, setUserToken] = useState()
  const [showModalAdd, setShowModalAdd] = useState(false)

  useEffect(() => {
    const token = window.localStorage.getItem('token')
    dispatch(getFavorite(token))
  }, [])

  // const addCart = async (e) => {
  //   e.preventDefault()
  //   const data = {
  //     id_product: favorite.data.id_product,
  //     qty: 'Unset',
  //     recipient_name: 'Unset',
  //     address: 'Unset',
  //   }
  //   console.log(data)
  //   await addToCart(dispatch, userToken, data)
  //   await setShowModalAdd(true)
  //   setTimeout(() => {
  //     setShowModalAdd(false)
  //   }
  //     , 5000)
  // }

  return (
    <>
      <Layout>
        <Head>
          <title>The King | Favorite</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={`${styles.profiles} `}>
          <div className="d-flex flex-column justify-content-center">
            <h1 className={`${styles.content} text-center mb-1 mt-5`}>Favorite</h1>
            <h5 className={`${styles.content} text-center mb-5`}>Pay and get your ordered items</h5>
          </div>
        </div>
        <Container>
          <Row className="border-bottom border-top mt-5 mb-5 py-3 fw-bold d-none d-lg-flex">
            <Col lg={4}>
              Product
            </Col>
            <Col lg={4}>
              <span className="ms-0 ms-lg-5">Stock Status</span>
            </Col>
            <Col lg={4}>
              <span className="ms-0 ms-lg-5">Price</span>
            </Col>
          </Row>
          {favorite.data?.map((datas, idx) => {
            return (
              <>
                <Row className='mb-5'>
                  <Col xs={12} sm={6} lg={4} className='d-flex flex-row align-items-center'>
                    <Image className={`${styles.image}`} src={datas.product?.product_images[0]?.image ? datas.product?.product_images[0]?.image : '/images/noimage.png'} width={170} height={172} alt='wishlist' />
                    <span className="ps-4">{datas.product.name}</span>
                  </Col>
                  <Col xs={12} sm={6} lg={4} className='my-auto'>
                    <span className="ms-0 ms-lg-5">
                      <span ><BsCheck /></span> {datas.product.stock} in Stock
                    </span>
                  </Col>
                  <Col xs={12} sm={12} lg={4} className='my-auto d-flex align-items-center'>
                    <span className="ms-0 ms-lg-5">Rp.{datas.product.price.toLocaleString('id-ID')}</span>
                    <Button className={`${styles.button} px-4 py-2 ms-5`} color='danger'>Add to cart</Button>
                  </Col>
                </Row>
              </>
            )
          })}
        </Container>
      </Layout>
    </>
  )
}

export default Favorite