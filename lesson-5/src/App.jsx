import { useEffect, useState } from 'react'

import './App.css'




function App() {
  const [products, setProducts] = useState([]);
 

  async function siteData() {
    const response = await fetch("https://api.vendoo.ge/api/beta/catalog?url=technics%2Ftelefonebi%2Fmobiluri-telefonebi&sort=popular&sortDir=desc&page=1&limit=20&fbclid=IwAR0s6u7MCxcfz2467VbymrazjdTEuGJfq6Y0YF22avUzoehaUs7aM0D6BBY");
    const list = await response.json()
    // console.log(list)

    const filteredProducts = list.products.filter((el) => el.final_price != el.original_price)
    setProducts(filteredProducts)
    
   
  }

  useEffect(() => {
    siteData();
  }, []);

  return (
    <div className='aqciaCont'>
      <h1>ფასდაკლება</h1>
      {products.map((el, index) => (
        <div className='cont' key={index}>
          <img className='img' src={products[index].thumb_img.files.file} alt="image" />
         <a className='aTeg'  href={"https://vendoo.ge/" + products[index].url}>{el.name}</a>
        
        </div>
      ))} 

      
    </div>
  );
}





export default App
