import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import store from '../redux/store.js'

function MyApp({ Component, pageProps }) {
  useEffect(()=>{
  import('bootstrap/dist/js/bootstrap.bundle');
}, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
