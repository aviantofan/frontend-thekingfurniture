import Head from 'next/head'
import Input from '../components/Input'
import { Container, Row, Col, Form, Button, Alert, Spinner } from 'react-bootstrap'
import Layout from '../components/Layout'
import seller from '../public/images/seller.png'
import empty from '../public/images/empty-input-image.png'
import Image from 'next/image'
import NavbarProfile from '../components/NavbarProfile'
import styles from "../styles/profile.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { createProductSeller } from '../redux/actions/productSeller'
import React, { useEffect, useRef, useState } from 'react'
import { getCategory } from '../redux/actions/category'
import { HiOutlinePencil } from 'react-icons/hi'
import Modals from "../components/ModalAdd"
import http from '../helpers/http'

const SellingProduct = () => {
  const {productSeller, auth, category} = useSelector(state=>state)
  const dispatch = useDispatch()
  const hiddenFileInput = useRef(null)
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState({})
  const [img, setImg] = useState();
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(false)

  useEffect(() => {
    dispatch(getCategory);
  }, [])

  // const [image, setImage] = useState(null);
  // const [createObjectURL, setCreateObjectURL] = useState(null);
  
  const uploadFile = (e) => {
    e.preventDefault()
    hiddenFileInput.current.click()
  }

  const imageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImg(URL.createObjectURL(event.target.files[0]));
    }
    setData({image:event.target.files[0]})
  }
  

  const addProductHandler = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErr(false)
    const name  = document.getElementById("name").value;
    const description  = document.getElementById("description").value;
    const stock  = document.getElementById("stock").value;
    const price  = document.getElementById("price").value;
    const condition  = document.getElementById("condition").value;
    const id_seller = auth.userData.id;
    const id_category = document.querySelector('.category .form-check-input:checked').value;
    // const image = data.image
    const file = document.getElementById('fileImg').files[0];

    const param = new URLSearchParams();
    param.append('name', name)
    param.append('description', description)
    param.append('price', price)
    param.append('stock', stock)
    param.append('condition', condition)
    param.append('id_seller', id_seller)
    param.append('id_category', id_category)

    const token = window.localStorage.getItem('token')

    if (file) {
      await http(token).post('/product', param)
      .then(async (res) => {
        if (res.status < 400) {
          console.log('res', res)
          const files = new FormData();
          files.append('image', file)
          files.append('id_product', res.data.result.id)
          await http(token).post('/product-image', files)
          .then(res => {
            console.log('image', res.data.result)
          })
          .catch(err => {
            // console.log('image', err.response.data.message)
          })
          // setMessage(res.data.result.message)
          // setSuccess(true)
          setLoading(false);
          route.push('/my-product')
        }
      }).catch(err => {
        setLoading(false);
        setErr(true);
        // console.log(err.response.data.message)
        // setMessage(err.response.data.message)
      })
    } else {
      setErr(true);
      // setMessage('Please add your image products')
    }
    
    window.scrollTo(0, 0)
  }
  return (
    <Layout>
        <Head>
            <title>The King | Selling Product</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={`${styles.containers} `}>
            <div className={`${styles.profiles} `}>
                <div className="d-flex flex-column justify-content-center vh-50">
                    <div className={`${styles.content} text-center mt-4`}>Selling Product</div>
                    <div className={`${styles.contents} text-center mb-5`}>See your notifications for the latest updates</div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center px-5 mx-5">                    
                <NavbarProfile />    
            </div> 
        <Form  onSubmit={addProductHandler}> 
        {productSeller.errorMsg &&
          <div className="alert alert-warning fade show" role="alert" aria-label="Close">
          <strong>{productSeller.errorMsg}</strong>
          </div>
        }
        {!productSeller.errorMsg  &&
          <Modals show={modalShow} onHide={() => setModalShow(false)} />
        }
        <Container className='mb-5'>
        <Row>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <h4>Inventory</h4>
            <Input
              type="text"
              id="name"
              name="name"
              aria-describedby="name"
              className='me-5 py-3 mt-5'
              placeholder='Name of goods *'
            />
            <Input
              type="text"
              id="description"
              as="textarea"
              name="description"
              aria-describedby="description"
              className='me-5 py-3 mt-5'
              placeholder='Description Product *'
            />
            <h4 className='mt-5'>Item Details</h4>
            <Input
              type="number"
              id="price"
              name="price"
              aria-describedby="price"
              className='me-5 py-3 mt-5'
              placeholder='Unit price *'
            />
            <Input
              type="number"
              id="stock"
              name="stock"
              aria-describedby="stock"
              className='me-5 py-3 mt-5'
              placeholder='Unit Stock *'
            />
            <Row className='mt-5 g-1'>
              <div className='mb-3'>Categories</div>
              {category.data.map((data, index) => {
                return <Col key={data.name} xs={6} lg={4}>
                  <Form.Check
                  inline
                  label={data.name}
                  name="id_category"
                  className='category'
                  value={data.id}
                />
                </Col>
              })}
            </Row>
            <Row className='mt-3'>
              <div className='my-4'>Stock Condition</div>
              <Col>
                <Form.Check
                  inline
                  label="New Product"
                  name="condition"
                  value='New'
                  id="condition"
                />
              </Col>
              <Col>
                <Form.Check
                  inline
                  label="Second Product"
                  name='Second'
                />
              </Col>
            </Row>
            <h4 className='mt-5'>Photo of Goods</h4>
            <Row className='my-5'>
              <Col xs={12} md={4}>
                <div height={30} className="my-3">
                  <Image
                    src={img || seller}
                    width="500px"
                    height="500px"
                    className="img-thumbnail"
                    alt="..." />
                </div>
              </Col>
              <Col xs={12} md={4}>
                <div height={30} className="my-3 position-relative">                
                  <Image
                    id='product-image'
                    name='product-image'
                    src={empty}
                    width="500px"
                    height="500px"
                    className="img-thumbnail"
                    alt="..." />
                    <Button block variant='pallet-2 radius mt-1 d-flex flex-row justify-content-center' onClick={(e) => uploadFile(e)}> Choose from Gallery </Button>
                  <input type="file"
                  id='fileImg'
                      ref={hiddenFileInput}
                      className='d-none'                      
                      accept='image'
                      onChange={imageChange}
                  />
                </div>
                {/* <Button block variant='pallet-3 my-1 radius save-1' onClick={uploadToServer}> Choose from Gallery </Button>                 */}
              </Col>
            </Row>
            <Button onClick={()=>setModalShow(true)} type='submit' className='mt-4 px-4' variant="color2" size="lg" active>
              Sell Product
            </Button>{' '}
            <Modals show={modalShow} onHide={() => setModalShow(false)} />
          </Col>
          <Col xs={12} md={3}>

          </Col>
        </Row>
      </Container>
      </Form>   
      </div>
    </Layout >
  )
}
export default SellingProduct