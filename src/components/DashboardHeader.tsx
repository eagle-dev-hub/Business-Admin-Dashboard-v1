function DashboardHeader(){
return(
    <div className="flex justify-between items-center ">
    <div><h1  className="text-2xl font-bold">Business Overview</h1>
    <p className="text-sm text-gray-500 mt-1">Monitor your products, inventory, and business performance.</p>
    </div>    
    
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors" >+ Add Product</button>
        
    
    </div>
    
)


 }
 export default DashboardHeader;