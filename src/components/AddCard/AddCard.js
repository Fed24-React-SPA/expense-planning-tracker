import { useEffect, useState } from "react";
import "./AddCard.css";
import SwiperCard from "../Card/Card";
import Hero from "../Hero/Hero";



const AddCard = () => {
  const [cardInfo, setCardInfo] = useState({
    cardNumber: "",
    cardHolderName: "",
    expirationDate: "",
    securityCode: ""
  });
  const [getData, setGetData] = useState([]);


  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("getData"));
    if (getData) {
      setGetData(getData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardInfo({
      ...cardInfo,
      [name]: value
    });
  };


  const handleSubmit = (e) => {
    console.log(e.target.elements);
    e.preventDefault();
    localStorage.setItem("getData", JSON.stringify([...getData, cardInfo]));
    setGetData([...getData, cardInfo]);
    e.target.elements.cardNumber.value = ""
    e.target.elements.cardHolderName.value = ""
    e.target.elements.expirationDate.value = ""
    e.target.elements.securityCode.value = ""

  };
 
  return (
    <>

      <div className="swiperCardContainer">
        <SwiperCard data={getData} />
      </div>
      {/* <Hero/> */}
      <div className="cardFormContainer">
        <form onSubmit={handleSubmit} className="cardForm">
          <img src="../asset/Plus.png" alt="" className="plus" />
          <input type="text" className="inputBlanket" name="cardNumber" onChange={handleChange} placeholder="Card Number" required></input>

          <input type="text" className="inputBlanket" name="cardHolderName" onChange={handleChange} placeholder="Cardholder Name" required></input>

          <div className="securityInfo">

            <input type="text" className="inputBlanket" name="expirationDate" onChange={handleChange} placeholder="Expiration Date" required></input>


            <input type="text" className="inputBlanket" name="securityCode" onChange={handleChange}
              placeholder="Security Code" required></input>

          </div>
          <button className="nextBtn" >NEXT</button>
        </form>
      </div>
    </>
  );


};

export default AddCard;