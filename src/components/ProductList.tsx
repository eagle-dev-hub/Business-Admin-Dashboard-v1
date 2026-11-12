import { useState } from "react"

type Product = {
id: number,
name: string,
price: number,
quantity: number
}



function ProductList() {
  const [products, setProducts] = useState<Product[]>([
  { id: 1, name: "Rice", price: 2500, quantity: 6 },
  { id: 2, name: "Cooking Oil", price: 850, quantity: 8 },
  { id: 3, name: "Sugar", price: 1200, quantity: 7 }
])

const [productName, setProductName] = useState("");
const [productPrice, setProductPrice] = useState<number | "">("");
const [productQuantity, setProductQuantity] = useState<number | "">("");
const[error, setError] = useState({
productName: "",
productPrice: "",
productQuantity: ""
});
//const [isEditModalOpen, setEditModal] = useState(false);
//const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
const lowStockProducts = products.filter((product) =>{
if(product.quantity <= 5){
return true;
}
else {
return false;

}

});
function handleAddProduct(event: React.FormEvent<HTMLFormElement>){
  event.preventDefault();

const newErrors = {
  productName: "",
  productPrice: "",
  productQuantity: ""
};

const nxtId = Math.max(
...products.map(product =>product.id ) 

) + 1;

if(productName.trim() === ""){
 newErrors.productName = "Product name is required!"


}

if(productPrice==="" ||productPrice <= 0 ){
newErrors.productPrice = "Product price must be greater than  0" 
 
  
}

 if(productQuantity === "" || productQuantity <= 0){
  newErrors.productQuantity =  "Product quantity must be greater than  0"  


}
setError(newErrors);
const hasErrors = Object.values(newErrors).some(error => error !== "");
if(hasErrors){
return;

}


const newProduct: Product = {  
id: nxtId, 
name :productName.trim(),
price:Number(productPrice),
quantity:Number(productQuantity),
}
setProducts([...products, newProduct]);
setProductName("");
setProductPrice("");
setProductQuantity("");
setError(newErrors)


}


  
  return(
   
    <div >
      <div className="p-4">
  <h2 className="text-lg font-semibold">Products</h2>
</div>
<div className="bg-white rounded-xl border shadow-sm overflow-hidden">
  <table className="w-full text-left">
      <thead>
        <tr className="bg-gray-100">
      <th className="p-3 font-semibold" scope="col">Product</th>
      <th className="p-3 font-semibold" scope="col">Price</th>
      <th className="p-3 font-semibold" scope="col">Stock</th>

     </tr >
     </thead>
     
      

     <tbody>{ products.map((product)=>(
     <tr  className="border-b" key={product.id}>
      <td className="p-3"> {product.name}</td>
      <td className="p-3">{product.price} birr</td>
      <td className="p-3">{product.quantity} units</td>
      
     </tr>
     

     ))}</tbody>
        
        
     </table> 
     </div>
     <div>
     <section className="p-4">
  
     <h2 className="text-lg font-semibold">Low Stock Alert<span className="bg-red-100 text-red-700 px-2 rounded-full ml-2">{lowStockProducts.length}</span></h2>
     
    {lowStockProducts.length  > 0 ?
      <ul>
      { lowStockProducts.map((product) =>(
      <li key={product.id}>
        {product.name} — 
        {product.quantity} units
      
        </li>        
       
      ))}

          
     </ul>
 : <p>All product stocked sufficently!</p>} 



     </section>
     </div>
     <div>
   
        <form onSubmit={handleAddProduct} className="bg-white rounded-xl border shadow-sm p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-2 gap-4">
     
      <div className="flex flex-col">
        <label>Product Name </label>
        <input type="text" 
      value={productName}
      onChange={(e)=>setProductName(e.target.value)}
      placeholder="Enter product name"
       className="w-full rounded-lg border
        border-gray-300
        px-3 py-2 focus:ring-2
         focus:border-blue-500
          focus:outline-none focus:ring-blue-500 "

     
    />
    
    {error.productName && <p>{error.productName}</p>}
    
    
     
     </div>
    
    <div className="flex flex-col">
      <label>Product Price</label> 
      <input 
    type="number"
    value={productPrice}
    onChange={(e) => setProductPrice(e.target.value === ""?"":Number(e.target.value) )}
    placeholder="Enter Price
    "
   className="w-full rounded-lg border
        border-gray-300
        px-3 py-2 focus:ring-2
         focus:border-blue-500
          focus:outline-none focus:ring-blue-500 "
    />
    {error.productPrice && <p>{error.productPrice}</p>}
    </div> 

    <div className="flex flex-col">
      <label>Product Quantity</label>
      <input 
    type="number"
    value={productQuantity}  
    onChange={(e) => setProductQuantity(e.target.value === ""? "": Number(e.target.value) )} 
    placeholder="Enter Quantity"
     className="w-full rounded-lg border
        border-gray-300
        px-3 py-2 focus:ring-2
         focus:border-blue-500
          focus:outline-none focus:ring-blue-500 "
    />
    {error.productQuantity && <p>{error.productQuantity}</p>}
     
    </div>
    </div>

    <button  type="submit" className=" m-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Add products</button>   
  
    
    </form>

    
    </div>

     
     
</div>

  

     
  
  );
}

export default ProductList;
