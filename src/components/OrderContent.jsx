import React, { useState, useEffect } from "react";
import { getOrderById } from "../services/OrderServices";
import { getAllProducts, getProductById } from "../services/ProductServices";
import { useParams } from "react-router-dom";
import { Box, Button, Container } from "@chakra-ui/react";
import { useUserContext } from "../contexts/UserContext";
import { getAllUsers } from "../services/UserServices";

function OrderContent() {
  const [orders, setOrders] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState([]);
  const [name, setName] = useState("User");
  const [addedProd, setAddedProd] = useState(false);
  const { currentUser } = useUserContext();
  const { id } = useParams();


  useEffect(() => {
    getOrderById(id).then((result) => {
      setOrders(result.order);
    });
  }, [refresh]);

  useEffect(() => {
    getAllProducts().then((result) => {
      setProducts(result.allProducts);
    });
  }, [refresh]);

  useEffect(() => {
    getAllUsers().then((result) => {
      setUser(result.allUsers);
    });
  }, [refresh]);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
 var total=0;
  return (
    <>
      <Button
        size="md"
        height="48px"
   
        width="100px"
        border="2px"
        borderColor="green.500"
        onClick={() => window.print()}
      >
        Print Invoice
      </Button>
      <div id="invoiceholder">
        <div id="invoice" className="effect2">
          <div id="invoice-top">
            <div className="logo">
              <img
                width="40px"
                height="40px"
                src="data:image/png;base64,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"
                alt="Logo"
              />
            </div>
            <div className="title">
              <h1>
                Invoice #<span className="invoiceVal invoice_num">tst-inv-23</span>
              </h1>
              <p>
                Invoice Date: <span id="invoice_date">{today}</span>
              </p>
              {user?.map(
                (item, index) =>
                  item._id === currentUser && (
                    <div>
                      <p>Email:{item.email}</p>
                      <p>Phone:{item.phone}</p>
                      <p>Address:{item.address}</p>
                      
                    </div>
                  )
              )}
            </div>
          </div>
          <div className="invoice_body" >
                    {
                      
                        <div className="invoice_info">
                          <p className="datesss" ><span>Order Date</span>:{orders.orderDate}</p>
                         {
                          orders.productsWithAmount?.map((item,index)=>(
                           <div className="contentofeachele">
                           <div className="imgofprod">
                           <p>{

                            products?.map((ele,index)=>(
                              ele._id===item.id  && <img className="imginvoice" src={ele.imageUrl} alt="img"/>
                            ))
                          }</p>
                           </div>
                           <div className="inforofprod">
                           <div style={{display:"none"}}>{total+=item.price}</div>
                           <p><span className="spanooo">Amount:</span>{item.amount}</p>
                           <p><span className="spanooo">Price:</span>{item.price}$</p>
                           </div>
                           </div>
                          
                      ))}
                     
                      <div className="Total">
                          <span>Total Price: </span>
                          <span>{total}</span>

                      </div>
                        </div>
                      
                    }
          </div>
        </div>
      </div>

     
    </>
  );
}

export default OrderContent;
