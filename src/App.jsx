import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


const Product = ({ product }) => {

  return (
    <>
      Im a product
      {JSON.stringify(product)}
    </>
  )
};


function App() {
  const [productProps, setProductProps] = useState({})

  useEffect(() => {
    // Access the global variable to get props
    const product = window.productProps || {'hello': 'test'};
    setProductProps(product)
  }, []);


  return (
    <>
      <Product product={productProps} />
    </>
  )
}


export default App
