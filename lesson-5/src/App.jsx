import { useEffect, useState } from 'react'

import './App.css'




function App() {
  const [products, setProducts] = useState([]);
  const [image, setImage] = useState([])

  async function siteData() {
    const response = await fetch("https://api.vendoo.ge/api/beta/catalog?url=technics%2Ftelefonebi%2Fmobiluri-telefonebi&sort=popular&sortDir=desc&page=1&limit=20&fbclid=IwAR0s6u7MCxcfz2467VbymrazjdTEuGJfq6Y0YF22avUzoehaUs7aM0D6BBY");
    const list = await response.json()
    // console.log(list)

    const filteredProducts = list.products.filter((el) => el.final_price != el.original_price)
    setProducts(filteredProducts)
    const imageM = [
       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-13-6gb-128gb-model-a2633-pink-mobiluri-telefoni-281512/?keyword=Apple%20iPhone%2013%206GB%20128GB%20Model%20A2633%20Pink%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img: './src/image/img2 (1).jpg'
         
       },
       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/default-category/alcatel-smartphone-1se-light-2gb-32gb-light-blue-mobiluri-telefoni-284284/?keyword=Alcatel%20Smartphone%201SE%20light%202GB%2032GB%20Light%20Blue%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img:  './src/image/img3.jpg'
       },
       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-11-4gb-64gb-black-mobiluri-telefoni-175006/?keyword=Apple%20iPhone%2011%204GB%2064GB%20Black%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img: './src/image/img2 (2).jpg'
       },
       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-11-4gb-128gb-black-mobiluri-telefoni-efli-175012/?keyword=Apple%20iPhone%2011%204GB%20128GB%20Black%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98%20(%E1%83%94%E1%83%A4%E1%83%9A%E1%83%98)',
        img:  './src/image/img5.png'
       },
       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-13-4gb-128gb-midnight-mobiluri-telefoni-286277/?keyword=Apple%20iPhone%2013%204GB%20128GB%20Midnight%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img: './src/image/img4.jpg'
       },

       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-13-4gb-128gb-midnight-mobiluri-telefoni-286277/?keyword=Apple%20iPhone%2013%204GB%20128GB%20Midnight%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img: './src/image/img4.jpg'
       },

       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-13-4gb-128gb-midnight-mobiluri-telefoni-286277/?keyword=Apple%20iPhone%2013%204GB%20128GB%20Midnight%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img: './src/image/img4.jpg'
       },

       {
        url: 'https://vendoo.ge/details/technics/telefonebi/mobiluri-telefonebi/apple-iphone-13-4gb-128gb-midnight-mobiluri-telefoni-286277/?keyword=Apple%20iPhone%2013%204GB%20128GB%20Midnight%20%E1%83%9B%E1%83%9D%E1%83%91%E1%83%98%E1%83%9A%E1%83%A3%E1%83%A0%E1%83%98%20%E1%83%A2%E1%83%94%E1%83%9A%E1%83%94%E1%83%A4%E1%83%9D%E1%83%9C%E1%83%98',
        img: './src/image/img4.jpg'
       }
    ];

    const imageMasiv = imageM.filter((el)=> el.url)

    // console.log(imageMasiv)
    setImage(imageMasiv)
    
   
  }

  useEffect(() => {
    siteData();
  }, []);

  return (
    <div className='aqciaCont'>
      <h1>ფასდაკლება</h1>
      {products.map((el, index) => (
        <div className='cont' key={index}>
          <img className='img' src={image[index].img} alt="image" />
         <a className='aTeg'  href={image[index].url}>{el.name}</a>
         {/* {console.log(image)} */}
         {/* {console.log(products)} */}
        </div>
      ))} 

      
    </div>
  );
}





export default App
