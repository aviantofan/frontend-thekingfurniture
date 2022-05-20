import Head from 'next/head'
import { useState,useEffect } from "react"
import { useRouter } from 'next/router'
import { Row, Col, Container, Form } from "react-bootstrap"
import Image from "next/image"
import Button from "../components/Button"
import Input from "../components/Input"
import {FaTrashAlt} from "react-icons/fa"
import carts from "../styles/cart.module.scss"
import { useDispatch } from 'react-redux'
import { increment, decrement } from '../redux/actions/buttons'
import { useSelector } from 'react-redux'
import { deleteCart, getCart } from '../redux/actions/cart'
import Layout from '../components/Layout'

const Cart = ()=>{
  const router = useRouter()
  const buttons = useSelector(state=>state.buttons)
  const { cart, pages } = useSelector(state=>state)
  const {totalPrice, setTotalPrice} = useState({value: 0})
  // const [cart,setCart] = useState([])
  const [title,setTitle] = useState([])
  const dispatch = useDispatch()

  useEffect(()=>{
    getCart(dispatch)
    setTitle(["Products","Price","Quantity","Total"])
    // setCart([{name:"Fabric Mid Century Chair",image:"chair1.png",price:"$10.50",quantity: buttons?.value,total:"$21.00"},
    // {name:"Chair in Dark Grey",image:"chair2.png",price:"$10.50",quantity: buttons?.value,total:"$10.50"}])
  },[])

const onIncrement = (e)=>{
    e.preventDefault()
    dispatch(increment())
  }

  const onDecrement = (e)=>{
    e.preventDefault()
    dispatch(decrement())
  }
  const toCheckout = () => {
    router.push('/cart-checkout')
  }
  const deleteAllInCart = async() => {
    cart.data?.map((datas)=>{
      deleteCart(dispatch, datas.id)
    })
    window.scrollTo(0,0)
    await getCart(dispatch)
  }
  return(
      <>
        <Layout>
        <Head>
        <title>The King | Product List</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className={`${carts.containers} `}>
      {cart.data?.length>0 && <div>
      <div className={`${carts.profiles} `}>
                    <div className="d-flex flex-column justify-content-center">
                        <div style={{fontSize:"16px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 mt-5 nav-text">
                            <span >Cart {""}</span><span className="text-yellow-800"> {">"} </span>
                        </div>
                        <div className={`${carts.content} text-center mb-2 mt-3`}>Your Cart</div>
                        <div className={`${carts.contents} text-center mb-5`}>Buy everything in your cart now!</div>
                    </div>
                </div>
      <Container>
        <Form>
          <Row>
            <Col md={6} lg={7} xl={8}>
              <Row className="mt-5 pb-2 pt-5 text-color1 text-uppercase text-center d-none d-lg-flex border-bottom border-2 fw-bold">
                  {
                    title.map((item)=>{
                        return(
                          item==="Products" ? <Col lg={6}>{item}</Col> :
                          <Col lg={2}>{item}</Col>
                        )
                    })
                  }
              </Row>
                {!pages.isLoading && <div>
                  {cart.data && cart.data?.map((item)=>{
                    return(
                      <Row key={item.name}>
                        <Col lg={6}>
                          <div className='d-flex flex-row align-items-center'>
                            <span className="py-5 me-3" onClick={async()=>{deleteCart(dispatch,item.id); window.scrollTo(0,0); await getCart(dispatch);}}><Button className={carts.button}><FaTrashAlt className="fs-5"/></Button></span>
                            <Image src={item.product.product_images[0]?.image ? item.product.product_images[0]?.image : '/images/chair.png'} width={69} height={83} alt ="product"/>
                            <span className="ms-5">{item.product.name}</span>
                          </div>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                            <span className="fw-bold">{item.product.price.toLocaleString('id-ID')}</span>
                        </Col>
                        <Col  xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                            <div className="d-flex flex-row justify-content-between align-items-center">
                              <Button onClick={onDecrement} className={carts.button}>-</Button>
                              <div className={carts.form}>{item.qty}</div>
                              <Button onClick={onIncrement} className={carts.button}>+</Button>
                            </div>
                        </Col>
                        <Col xs={6} lg={2} className='my-auto mt-4 mt-lg-auto text-center'>
                          <span className="text-muted d-inline d-lg-none">Total: </span>
                          <span className="fw-bold">{(item.qty * item.product.price).toLocaleString('id-ID')}</span>
                        </Col>
                      </Row>
                    )
                  })}
                </div>
                  
                }
              <div className="d-md-flex justify-content-between mt-5">
                <div className={`${carts.cupon} d-md-flex mb-5 w-md-50`}>
                  <Input classVariant={`${carts.formCupon} w-md-50`} placeholder="Enter your coupon code"/>  
                  <Button className={`${carts.buttonUpdate} fw-bold`}>Apply Cupon</Button>
                </div>
                <div className="text-end">
                  <Button onClick={deleteAllInCart} classStyle={`${carts.buttonDelete}`}>Clear Cart</Button>
                  <Button classStyle={`${carts.buttonUpdate} fw-bold`}>Update Cart</Button>
                </div>
              </div>
             
            </Col>
            <Col md className='mt-5'>
                <div className={`${carts.bg} ms-md-4 ps-5 mt-5 pt-5`}>
                  <div className="fs-6 fw-bold mb-5">Cart Total</div>
                    <Row className="mb-5">
                      <Col xs={4}><div className="fw-bold">Subtotal</div></Col>
                      <Col><div className="fw-bold">$125</div></Col>
                    </Row>
                    <Row className="mb-5">
                      <Col md={4}><div className="fw-bold mb-3">Shipping</div></Col>
                      <Col>
                        <div className="me-5 me-md-3">
                          <Form.Select className={carts.selectShipping}>
                            <option>Disabled select</option>
                          </Form.Select>
                        </div>
                      </Col>
                    </Row>
                    <hr className="w-80 me-5"></hr>
                    <Row className="pb-5">
                      <Col xs={4}><div className="fw-bold">Total Price</div></Col>
                      <Col><div className="fw-bold">$125</div></Col>
                    </Row>
                </div>
                <div className="ms-md-4 mb-5 d-grid gap-2">
                  <Button onClick={toCheckout} styleCart={`${carts.buttonCo}` }>Procced To Check Out</Button>
                </div>
            </Col>
          </Row>
        </Form>
      </Container>
      </div>}
      {cart.data?.length<1 && <div>
        <div className={`${carts.profiles} `}>
            <div className="d-flex flex-column justify-content-center">
                <div style={{fontSize:"16px", fontFamily:"Rubik"}} className="text-justify p-auto px-5 mx-5 mt-5 nav-text">
                    <span >Cart {""}</span><span className="text-yellow-800"> {">"} </span>
                </div>
                <div className={`${carts.content} text-center mb-2 mt-3`}>Your Cart</div>
                <div className={`${carts.contents} text-center mb-5`}>Buy everything in your cart now!</div>
            </div>
        </div>
        <Container>
        <div className="text-center py-5">
          <div  className="pt-4">
            <Image src="/images/shopping-cart.png" width={200} height={200} alt="people"/>
          </div>
          <div className="fs-1 mt-3">Your Cart is Empty</div>
          <div className="w-50 ms-auto me-auto mt-3 pb-5">
            <p className={`${carts.text} text-center`}>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. urabitur blandit ultri</p>
          </div>
        </div>
        </Container>
      </div>}
      </div>
      </Layout>
      </>
  )
}

export default Cart