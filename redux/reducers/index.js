import { combineReducers } from 'redux'
import auth from "./auth";
import productDetail from "./productDetail";
import counter from "./counter";
import pages from "./pages";
import product from './productList'
import color from './color'
import size from './size'
import buttons from './buttons'
import users from './users';
import productSeller from './productSeller';
import cart from './cart'
import favorite from './favorite'
import category from './category';
import transactionSeller from './transactionSeller'
import paymentMethod from './paymentMethod'
import transactionUser from './transactionUser';
import wishlist from './wishlist'

const rootReducers = combineReducers({
    auth,
    productDetail,
    counter,
    pages,
    product,
    color,
    size,
    buttons,
    users,
    productSeller,
    cart,
    favorite,
    category,
    transactionSeller,
    paymentMethod,
    transactionUser,
    wishlist,
})

export default rootReducers
