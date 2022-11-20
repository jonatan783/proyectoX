import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import useInput from '../hooks/useInput';
import { getCategoryAll, postCategoryAddRelation } from '../requests/categoryRequest'
import { postProductAdd } from '../requests/productRequest'
import { NewProductFormComponent } from '../components'

const NewProductFormContainer = () => {
    const navigate = useNavigate();
    const [allCategories, setAllCategories] = useState([]);
    const [checkedState, setCheckedState] = useState({});
  
    useEffect(() => {
      getCategoryAll()
        .then(({ data }) => {
          setAllCategories(data);
          return data;
        })
        .then((categories) => {
          let auxObj = {};
          categories.forEach((categObj) => {
            auxObj[categObj.id] = false;
          });
          console.log(`auxobj es`, auxObj);
          setCheckedState(auxObj);
        });
    }, []);
  
    const name = useInput("");
    const price = useInput(0);
    const stock = useInput(0);
    const imagePath1 = useInput("");
    const imagePath2 = useInput("");
    const imagePath3 = useInput("");
    const imagePath4 = useInput("");
  
    const description = useInput("");
  
    const [imgNumber, setImgNumber] = useState(["1"]);
  
    const handleNumberImg = (e) => {
      e.preventDefault();
      if (imgNumber.length < 7) {
        let otroArr = imgNumber.map((el) => el);
        otroArr.push("otro");
        setImgNumber(otroArr);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      postProductAdd({
        name: name.value,
          description: description.value,
          price: price.value,
          stock: stock.value,
          img: [
            imagePath1.value,
            imagePath2.value,
            imagePath3.value,
            imagePath4.value,
          ],
      })
        .then((res) => {
          const productId = res.data[0].id;
          postCategoryAddRelation({
            productId,
            objCategoryId: checkedState,
          })
        })
        .then(() => navigate("/admin/products"));
    };
  
    const handleOnChangeCheck = (categ) => {
      const updatedCheckedState = { ...checkedState };
      console.log(`updatedcheckstate es`, updatedCheckedState);
      console.log(`categ es`, categ);
  
      for (const property in updatedCheckedState) {
        console.log(`property es`, property);
        if (property == categ)
          updatedCheckedState[categ] = !updatedCheckedState[categ];
      }
      console.log(`updatedcheckstate es`, updatedCheckedState);
  
      setCheckedState(updatedCheckedState);
    };
    return (
        <div>
            <NewProductFormComponent/>
        </div>
    )
}

export default NewProductFormContainer
