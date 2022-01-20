import "./App.css";
import { useState, useEffect } from "react";
import Axios from "axios";
import AsyncSelect from 'react-select/async';
import Select from 'react-select';



function App() {
  const [Name, setName] = useState("");
  const [productType_id, setProductType_id] = useState("");
  const [inputvalue, setInputValue] = useState("");
  const [selectedvalue, setSelectedValue] = useState(null);
  const [newName, setNewName] = useState("");


  const [productList, setProductList] = useState([]);
  const [producttpesList, setProductTypeList] = useState([]);
  const options = [
    { value: "1", label: "tshirts" },
    { value: "2", label: "shoes" },

  ];

  //handle input chhange event

  const handleInputChange = value => {
    setInputValue(value);
  }

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }

  useEffect(() => {
    getProducts();
  }, []);


  const addProduct = () => {
    let value = selectedvalue.value;
    console.log({ "name": Name, "id": value });
    console.log(selectedvalue);
    Axios.post("http://localhost:5000/api/product", {
      Name: Name,
      productType_id: value,


      /* }).then(() => {
         setProductList([
           ...productList,
           {
             Name: Name,
             ProductType: selectedvalue.label,
   
           },
         ]);
       });*/
    }).then(() => {
      // Axios.get("http://localhost:5000/api/product").then((response) => {
      //setProductList(response.data);
      // });
      getProducts();
    });
  };



  const getProducts = () => {
    console.log("im here ");
    Axios.get("http://localhost:5000/api/product").then((response) => {
      setProductList(response.data);
      console.log(response.data);

    });
  };

  const getProductsTypes = () => {
    Axios.get("http://localhost:5000/api/producttype").then((response) => {
      setProductTypeList(response.data);






    });

  };

  const updateProduct = (id) => {
    Axios.put(`http://localhost:5000/api/product/${id}`, { Name: newName })
    {
      console.log("wssslat");
      getProducts();
      console.log("wssslat2");
      /*setProductList(
        productList.map((val) => {
          return val.id == id
            ? {
              Name: newName,

              ProductType: val.productType_id,
            }
            : val;
        })
      );*/



    }



  };

  const deleteProduct = (id) => {
    Axios.delete(`http://localhost:5000/api/product/${id}`).then((response) => {
      setProductList(
        productList.filter((val) => {
          return val.id != id;
        })
      );
    });
  };

  const getProductType = (id) => {
    Axios.get(`http://localhost:5000/api/producttype/${id}`).then((response) => {
      setProductType_id(response.data.Name);
      //setProductList([...productList, { "productType_id": productType_id }])
      console.log(productType_id);

    });
  };
  return (
    <div className="App">
      <div className="information">
        <label>Name:</label>

        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />


        <label>ProductType:</label>

        <Select
          defaultValue={selectedvalue}
          onChange={setSelectedValue}
          options={options}
        />
        <br />




        <button onClick={addProduct} type="submit">Add Product</button>
        <br />


      </div>
      <div className="products">
        <button onClick={getProducts}>Refresh After Update</button>


        {productList.map((val, key) => {
          return (
            <div className="product">
              <div>
                <h3>Name: {val.Name}</h3>

                <h3>pro: {val.ProductType}</h3>
                <div>
                  <input
                    type="text"

                    onChange={(event) => {
                      setNewName(event.target.value);
                    }}
                  />
                  <button
                    onClick={() => {
                      updateProduct(val.id);

                    }}
                  >
                    {" "}
                    Update
                  </button>

                  <button
                    onClick={() => {
                      deleteProduct(val.id);
                    }}
                  >
                    Delete
                  </button>

                </div>
              </div>

            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

