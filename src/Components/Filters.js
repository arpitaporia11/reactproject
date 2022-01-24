import React,{useState} from 'react';
import {Button,Form} from 'react-bootstrap';
import { CartState } from '../Context/Context';
import Rating from './Rating';
import "./style.css";
const Filters = () => {
    // const [rate, setRate] = useState(2);

    const {productState:{byStock,byFastDelivery,sort,byRating,searchQuery},
    productDispatch,
}=CartState();
    // console.log("Product",productState);
    console.log("Filter Product",byStock,byFastDelivery,sort,byRating,searchQuery)
    return (
        <div className="filters">
           <div className="filters">
 <span className="title">FILTER PRODUCTS</span>
 
    <span>
        <Form.Check
            inline
             label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={()=>
            productDispatch({
                type:"SORT_BY_PRICE",
                payload:"lowToHigh",
            })
            }
            checked={sort ==="lowToHigh" ? true:false}
        />
    </span>
    <span>
        <Form.Check
            inline
             label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={()=>
            productDispatch({
                type:"SORT_BY_PRICE",
                payload:"highToLow",
            })
            }
            checked={sort ==="highToLow" ? true:false}
        />
    </span>
    <span>
        <Form.Check
            inline
             label="Include Out of Stock"
            name="group1"
            type="checkbox"
            id={`inline-3`}
            onChange={()=>
            productDispatch({
                type:"FILTER_BY_STOCK",
            })
            }
            checked={byStock}
        />
    </span>
    <span>
        <Form.Check
            inline
             label="Fast Delivery Only"
            name="group1"
            type="checkbox"
            id={`inline-4`}
            onChange={()=>
            productDispatch({
                type:"FILTER_BY_DELIVERY",
            })
            }
            checked={byFastDelivery}
        />
    </span>
 <span>
     <label style={{paddingRight:10}}>Rating:</label>
     <Rating rating={byRating}onClick={(i)=>productDispatch({
         type:"FILTER_BY_RATING",
         payload:i+1,
     })} style={{cursor:"pointer"}}/>
 </span>
 <Button type="submit" variant="light" onClick={()=>
            productDispatch({
                type:"CLEAR_FILTERS",
            })
            }>CLEAR FILTERS</Button>
          
    </div>   
        </div>
    )
}

export default Filters
