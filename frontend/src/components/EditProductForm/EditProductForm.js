import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import { getProductById, putProductById } from '../../requests/productRequest'
import { getCategoryByIdAndProduct, getCategoryAll, putCategoryUpDate } from "../../requests/categoryRequest"

const EditProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [checkedState, setCheckedState] = useState({});
  const [allCategories, setAllCategories] = useState([]);
  const [product, setProduct] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    img: ["", "", "", ""],
  });

  const handlePathChange = (e) => {
    const otroObj = Object.assign({}, product);
    otroObj.img[parseInt(e.target.id[e.target.id.length - 1])] = e.target.value;
    setProduct(otroObj);
  };

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .then(() => {
        return getCategoryByIdAndProduct(id);
      })
      .then(({ data }) => {
        getCategoryAll()
          .then((res) => {
            let everyCategory = res.data;
            let otroObj = {};
            everyCategory.forEach((categObj) => {
              otroObj[categObj.id] = false;
              data.forEach((el) => {
                if (el.id == categObj.id) otroObj[el.id] = true;
              });
            });
            setCheckedState(otroObj);
          });
      });
  }, [id]);

  useEffect(() => {
    getCategoryAll()
      .then(({ data }) => {
        setAllCategories(data);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    putProductById(product)
      .then(() => {
        return putCategoryUpDate ({
          productId: product.id,
          objCategoryId: checkedState,
        })
      })
      .then(() => {
        navigate("/admin/products");
      });
  };

  const handleOnChangeCheck = (categ) => {
    const updatedCheckedState = { ...checkedState };

    for (const property in updatedCheckedState) {
      if (property == categ)
        updatedCheckedState[categ] = !updatedCheckedState[categ];
    }

    setCheckedState(updatedCheckedState);
  };

  return (
    <div className="container singleProductDiv">
      <h1 className="text-center product-name ">EDITAR PRODUCTO</h1>
      <div className="d-flex" style={{ justifyContent: "center" }}>
        <form
          className="col-lg-7"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              placeholder="Nombre del producto"
              name="name"
              className="productInput"
              value={product.name}
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="price">Precio:</label>
            <span>
              (ARS) $
              <input
                type="number"
                placeholder="0"
                min={0}
                name="price"
                className="productInput priceInput"
                value={product.price}
                onChange={(e) =>
                  setProduct({ ...product, price: e.target.value })
                }
              />
            </span>
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="category">Categoría:</label>

            {/* <select name="category" id="cars" style={{height: '60px', padding: '0 15px'}} multiple>
              {categorias.map(category=>{
                return (<option value={category}>{category}</option>)
              })} 
            </select>
             */}

            <div className="form-check">
              {/* {
                let anotherCHeck = true
                return ()
              } */}

              {allCategories.map((categ, index) => {
                // console.log(`categ es`, categ)
                // console.log(`checked state dentro de map es`, checkedState)
                return (
                  <div>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      name={categ.name}
                      value={categ.id}
                      checked={checkedState[categ.id]}
                      onChange={() => handleOnChangeCheck(categ.id)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      {categ.name}
                    </label>
                  </div>
                );
              })}
            </div>
            <div style={{ alignSelf: "flex-end" }}>
              <Link to="/admin/categories">
                <button className="btn btn-light">Editar categorías</button>
              </Link>
              <Link to="/admin/categories/new-category">
                <button className="btn btn-dark">Nueva categoría</button>
              </Link>
            </div>
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="stock">Stock:</label>
            <input
              type="number"
              placeholder="Stock del producto"
              min={0}
              name="stock"
              className="productInput"
              value={product.stock}
              onChange={(e) =>
                setProduct({ ...product, stock: e.target.value })
              }
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="images">Imagenes:</label>
            {/* {product.img? product.img.map(img=>{
              return (
                <input
              type="text"
              placeholder="path1; path2; ..."
              name="images"
              className="imgProductInput"
              defaultValue={img}
            />
              )
            }): null} */}
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img ? product.img[0] : ""}
              onChange={handlePathChange}
              id="path0"
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img ? product.img[1] : ""}
              onChange={handlePathChange}
              id="path1"
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img ? product.img[2] : ""}
              onChange={handlePathChange}
              id="path2"
            />
            <input
              type="text"
              placeholder="https://path-to-img.png"
              name="images"
              className="imgProductInput"
              value={product.img ? product.img[3] : ""}
              onChange={handlePathChange}
              id="path3"
            />
          </div>
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="description">Descripción:</label>
            <textarea
              type="text"
              placeholder="Description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
            />
          </div>

          <div>
            <div className="d-flex flex-row-reverse">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginRight: "0px" }}
              >
                Editar producto
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductForm;
