import type {NextPage} from "next";
import Image from "next/image";
import logo from "../public/logo.svg";
import header from "../public/header.svg"
import footer from "../public/footer.svg"
import products from "../product/products.json"
import Head from "next/dist/shared/lib/head";
import hd4k from "../public/hd-4k.svg"
import asterisk from "../public/asterisk.svg"





const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Head>

<div>
    <nav className=" m-5 grid box-content grid-cols-3 " >
      <Image alt="" src={logo} className="object-none object-left-top "  />
      <Image alt="" src={hd4k} className="object-none object-center-top" />
      
     <p className="styles.description grid justify-items-end ... m-3 pb-5">
       <a className="snipcart-checkout snipcart-summary object-none object-right-top bg-transparent hover:bg-gray-600 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded-full" href="#" style={{textDecoration: "none"}}>
       <strong>CART:</strong> <span className="snipcart-total-price">$0.00</span>
       </a>
     </p>
     
    </nav>
</div>
      
    <div className="flex justify-center ..."> 
      <h1 className="w-5/6 ">
       <Image alt="" src={header} className="" />
      </h1>
    </div> 
      
    <div className="grid justify-items-end object-right-top m-5 ">
     <Image alt="" src={asterisk} className="" />
    </div>  
      <blockquote className=" text-white text-center pt-12 text-5xl ... " >
        A man can´t have enough basement swag
      </blockquote>
    <div className="m-5"> 
      <Image alt="" src={asterisk} />
    </div> 
    
      
    <div className={"styles.grid grid box-content grid-cols-3"}>
          {products.map(product => {
            return (
              <div key={product.id} className={"styles.card c-card block bg-gradient-to-b from-black to-gray-600 shadow-md hover:shadow-xl rounded-lg overflow-hidden"}>
                
                  <a>
                    <img src={product.image} alt={`Preview of ${product.title}`} />
                    <h3 className="pl-10 pt-3">{ product.title }</h3>
                    
                    <p className="pl-10 pt-1">${ product.price }</p>
                  </a>
                
                <p className="grid justify-end pb-5 pr-3">
                  <button className="snipcart-add-item bg-transparent hover:bg-black text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url={`/products/${product.id}`}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      
      
       
      <br></br>
      <br></br>
      <br></br>
      
      
    

    <div className="flex justify-center ...">
      <footer className="w-5/6 "> 
        <Image alt="" src={footer}  />
        <script async src="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="MjZlNjJkZTYtZTYxMi00NWMwLTk4M2MtNDJiMDRiNWRiMDMxNjM3NjUzNDIwMTg2ODc3Nzk2" />
        
      </footer>
    </div>
      
      
    
    </div>  
  );
};

export default HomePage;





