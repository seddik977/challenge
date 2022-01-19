<div className="information">
<label>Name:</label>
<input
  type="text"
  onChange={(event) => {
    setName(event.target.value);
  }}
/>


<label>ProductType:</label>
<input
  type="text"
  onChange={(event) => {
    setProductType(event.target.value);
  }}
/>


<button onClick={addProduct}>Add Employee</button>
</div>
<div className="employees">
<button onClick={getProducts}>Show Employees</button>

{setProductList.map((val, key) => {
  return (
    <div className="employee">
      <div>
        <h3>Name: {val.name}</h3>
        <h3>Age: {val.producttype}</h3>

      </div>

    </div>
  );
})}
</div>


<AsyncSelect
cacheOptions
defaultOptions
value={selectedvalue}
getOptionLabel={event => event.Name}
getOptionValue={e => e.id}
loadOptions={getProductsTypes}
onInputChange={handleInputChange}
onChange={setSelectedValue}
defaultValue={selectedvalue}

/>