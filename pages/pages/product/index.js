import Image from 'next/image'
import { Form } from 'react-bootstrap'
import { MdNavigateNext, MdOutlineArrowDropDown } from 'react-icons/md'
const Product = () => {
    const data = [
        {id: 1, category: 'Living Room', totalData: 30},
        {id: 2, category: 'Bedroom', totalData: 32},
        {id: 3, category: 'Wardrobe', totalData: 20},
        {id: 4, category: 'Outdoor', totalData: 9},
        {id: 5, category: 'Decoration', totalData: 15},
    ]
    const dataProduct = [
        {id: 1, name: 'Kursi', price: 200000},
        {id: 2, name: 'Meja makan', price: 200000},
        {id: 3, name: 'Lemari pakaian', price: 200000},
        {id: 4, name: 'Buffet', price: 200000},
        {id: 5, name: 'Kursi', price: 200000},
        {id: 6, name: 'Kursi', price: 200000},
        {id: 7, name: 'Kursi', price: 200000},
        {id: 8, name: 'Kursi', price: 200000},
        {id: 9, name: 'Kursi', price: 200000},
        {id: 10, name: 'Kursi', price: 200000},
        {id: 11, name: 'Kursi', price: 200000},
        {id: 12, name: 'Kursi', price: 200000},
    ]
    return(
        <div className='container my-5'>
            <Image src='/images/AD_BANNER.png' alt='banner' width={300} height={100} layout='responsive' priority />
            <p>Shop <MdNavigateNext /> Shop Right Sidebar</p>
            <div className='row'>
                <div className='col-12 col-md-3'>
                    <h1 className='fs-4'>Categories</h1>
                    <div>
                    {data.map((dataList)=>{
                        return(
                            <div key={dataList.id} className='d-flex'>
                                <p>{dataList.category}</p>
                                <p className='ms-auto'>{dataList.totalData}</p>
                            </div>
                        )
                    })}
                    </div>
                    <h1 className='fs-4'>Price</h1>
                    <p>Price IDR 100.000 - IDR 500.000</p>
                    <Image src='/images/price-bar.png' alt='pricebar' width={100} height={10} layout='responsive' />
                    <button>Filter</button>
                    <h1 className='fs-4'>Brands</h1>
                    <Form>
                        <Form.Check 
                        type='checkbox'
                        id='ikea'
                        label='IKEA' />
                        <Form.Check 
                        type='checkbox'
                        id='ikea'
                        label='Mr. Royal' />
                        <Form.Check 
                        type='checkbox'
                        id='ikea'
                        label='Sweet Home' />
                        <Form.Check 
                        type='checkbox'
                        id='ikea'
                        label='North Oxford' />
                        <Form.Check 
                        type='checkbox'
                        id='ikea'
                        label='Mr. Poppin' />
                    </Form>
                    <h1 className='fs-4'>Colors</h1>
                    <div className='row'>
                        <div className='col-2 mx-auto rounded-circle bg-danger' style={{width: '30px', height:'30px'}}></div>
                        <div className='col-2 mx-auto rounded-circle bg-primary' style={{width: '30px', height:'30px'}}></div>
                        <div className='col-2 mx-auto rounded-circle bg-secondary' style={{width: '30px', height:'30px'}}></div>
                        <div className='col-2 mx-auto rounded-circle bg-danger' style={{width: '30px', height:'30px'}}></div>
                        <div className='col-2 mx-auto rounded-circle bg-primary' style={{width: '30px', height:'30px'}}></div>
                        <div className='col-2 mx-auto rounded-circle bg-secondary' style={{width: '30px', height:'30px'}}></div>
                    </div>
                    <div className='position-relative'>
                        <Image src='/images/Mask.png' alt='shop' width={300} height={300} layout='responsive' />
                        <div className='position-absolute top-50 end-50'>
                            <button>Shop Now</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-9'>
                    <div className='d-flex'>
                        <p className='fw-bold'>Showing 12 of 10,000 results</p>
                        <p className='ms-auto' style={{cursor: 'pointer'}}>Sort by <MdOutlineArrowDropDown /></p>
                    </div>
                    <div className='row'>
                        {dataProduct.map((product)=>{
                            return(
                                <div key={product.id} className='col-12 col-md-4 text-center'>
                                    <Image src={`${product.image ? product.image : '/images/default.png'}`} alt={product.name} width={100} height={100} layout='responsive' />
                                    <p>{product.name}</p>
                                    <p className='fw-bold'>IDR {product.price.toLocaleString('id-ID')}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='row' style={{maxWidth: '300px'}}>
                        <div className='bg-secondary text-center px-0' style={{width: '30px', height: '30px'}}>01</div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Product