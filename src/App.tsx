import DashboardHeader from "./components/DashboardHeader";
import ProductList from "./components/ProductList";
import SummaryCard from "./components/SummaryCard";



function App(){
return(
 <>
 <div className="p-6 bg-blue-100">
<DashboardHeader/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-6 p-5">
  <SummaryCard 
title="Total Sales"
  value={24}
  description="Sales recorded today"/>
  <SummaryCard title="Revenue"
  value={12500}
  description="Sales revenue today"/>
   <SummaryCard title="Products"
  value={38}
  description="Products in inventory"/>
   <SummaryCard title="Low Stock"
  value={3}
  description="Products needing restocking"/>

</div>
<div>
<ProductList/>

</div>

</>   



)



}
export default App;
