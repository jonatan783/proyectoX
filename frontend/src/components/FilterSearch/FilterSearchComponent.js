// ver que existen dos useEffect observando el cambio []
import { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { GridContainer } from "../../containers";
import { getProductAll, getProductCategory } from '../../requests/productRequest'
import { getCategoryAll } from '../../requests/categoryRequest'
import "./FilterSearch.css";

const FilterSearchComponent = ({  }) => {
  const [allCategories, setAllCategories] = useState([]);
  const [checkedState, setCheckedState] = useState("");
  const [products, setProducts] = useState([])

  useEffect(() => {
    getCategoryAll()
      .then(({ data }) => {
        setAllCategories(data);
        return data;
      })

  }, []);

  useEffect(() => {
    getProductAll()
    .then(res => setProducts(res.data));
  }, []);

  const handleOnChangeCheck = (e) => {
    let categId = e.target.value
    getProductCategory(categId)
      .then(res => setProducts(res.data))
    setCheckedState(e.target.value)
  };

  return (
    <div className="filterContainer1">
      <div className="filterAccordion">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Category</Accordion.Header>
            <Accordion.Body>
              <form>
                {allCategories.map((category) => {
                  return (
                    <div>
                      <input
                        type="radio"
                        name={category.name}
                        value={category.id}
                        checked={checkedState == category.id}
                        id={category.name}
                        // checked={checkedState[category.id]}
                        onChange={handleOnChangeCheck}
                      />
                      <label style={{ marginLeft: "6px" }}>{category.name}</label>
                    </div>
                  );
                })}
              </form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <div className="pagination">
          <span>
            {products.length} Result(s) found
          </span>
          {/* <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
          </div> */}
        </div>
        <GridContainer products={products} />
      </div>
    </div>
  );
};

export default FilterSearchComponent;
