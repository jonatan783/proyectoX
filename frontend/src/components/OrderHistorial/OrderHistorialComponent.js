// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { Link } from "react-router-dom";
import FakeOrders from '../../jsonData/FakeOrders'
// import OrderItemHistory from "../../commons/OrderItemHistory"
import { OrderItemHistoryComponent } from '../'
import "./OrderHistorial.css";

const OrderHistorialComponent = () => {
    const datas = FakeOrders
  return (
    <div className="">
            <div className="">
              <div className="order-title">Order Historial</div>

              <div className="orderContainer">

              {datas.map((data, i) => (
                  <OrderItemHistoryComponent data={data} key={i} id={i}/>
              ))}
            </div>
    </div>
    </div>
  );
};

export default OrderHistorialComponent;


