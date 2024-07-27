import React from 'react'
import Card from './card'
function Cards() {
    const categories=[{navigate:"fashion",title:"Fashion",des:"50% OFF on Fashion items",link:"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/fashion-sale-facebook-ad-design-template-670f107db6d42e61e399c2a34ac4a8ba_screen.jpg?ts=1634960674"},
        {navigate:"electronics",title:"Electronics",des:"20% OFF on electronic items",link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbMQ-S1AkPI4iwwfvnE2WRAV8PGW66sAjwTLGAN8v2Gg&s"},
        {navigate:"gadgets",title:"Gadgets",des:"30% OFF on gadgets items",link:"https://i.pinimg.com/736x/9d/85/57/9d855796e08f758deb57dd00b6feaad5.jpg"},
        {navigate:"grocery",title:"Grocery",des:"70% OFF on grocery items",link:"https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/amazon-grocery-ad-template-7bzb3h0de1aaf0.webp"},
        {navigate:"others",title:"Others",des:"90% OFF on Other items",link:"https://img.freepik.com/free-psd/social-media-promo-template-sales_23-2149533432.jpg"},]
  return (
    <div className='container-fluid' style={{padding:"30px",background:"white",display:"flex", flexDirection:"row",marginTop:"0px",gap:"20px"}}>
        {categories.map(obj=>{
          return( <div className="card" style={{width: "18rem",padding:"10px",backgroundColor:"#e6e6ff",color:"black"}} class="card">
          <img style={{width:"100%", height:"200px",borderRadius:"10px"}} src={obj.link} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title"style={{fontSize:"1.6vw"}}>{obj.title}</h5>
            <p className="card-text" style={{fontSize:"1vw"}}>{obj.des}</p>
            <a href={`/${obj.navigate}`} className="btn" style={{backgroundColor:"black",color:'white',fontSize:"1.2vw"}}>Buy Now</a>
          </div>
        </div>)
        })
        }
    </div>
  )
}

export default Cards
