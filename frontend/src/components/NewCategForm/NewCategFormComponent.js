import React from 'react';
import { useNavigate } from "react-router";
import useInput from "../../hooks/useInput";
import { postCategoryAdd } from '../../requests/categoryRequest'

const NewCategFormComponent = () => {
  const navigate = useNavigate();

  const name = useInput("");
  const description = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    postCategoryAdd({ name: name.value, description: description.value })
      .then(() => navigate("/admin/categories"));
  };

  return (
    <div className="container singleProductDiv">
      <h1 className="text-center product-name ">CREAR CATEGORIA</h1>
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
              {...name}
            />
          </div>

       
          <div className="d-flex flex-column labelAndInput">
            <label htmlFor="description">Descripción:</label>
            <textarea type="text" placeholder="Description" {...description} />
          </div>

          <div>
            <div className="d-flex flex-row-reverse">
              <button
                className="btn btn-primary"
                type="submit"
                style={{ marginRight: "0px" }}
              >
                Crear categoría
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewCategFormComponent;
