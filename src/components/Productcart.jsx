import "./Productcart.css"
export default function Productcart(props){            //to create own html tags, // first letter should be capital
            
    return(
        <div className="Productcart ">
            <h1>{props.name}</h1>
            <p> {props.price} </p>
            <img className="Productcart " 
                src={props.image}
                alt="Product"
            />
                <button>ADD TO CART</button>
        </div>
    )
            
        
                                                 

}