class Mkulima {
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
//addFarm   
      this.addFarm =(farmId, name, farmer, phone, address)=>{
        this.farms.push({ farmId, name, farmer, phone, address});
      }
//removeFarm
      this.removeFarm = (farmId) => {
      this.farms.splice(this.farms.findIndex(item=>item.farmId===farmId), 1);
      }
//updateFarm
      this.updateFarm = (farm1Id,farmId, name, farmer, phone, address) => {
          let upFarm=this.farms.find(item=>item.farm2Id===farm1Id)
          upFarm.farmId=farmId;
          upFarm.name=name;
        upFarm.farmer=farmer;
      upFarm.phone=phone;
    upFarm.address=address;
      }
//getFarm
    this.getFarm = (farmId) => {  
    this.farms.find(item=>item.farmId===farmId)
    }
//addProduct  
    this.addProduct = (productId, name, price) => {
      this.products.push({productId,name,price});
    }
//removeProduct
    this.removeProduct = (productId) =>{
    this.products.splice(this.products.findIndex(item=>item.productId === productId),1);
    }
//updateProduct
    this.updateProduct = (productId, name1, name2, price) =>{
    let upProduct = this.products.find(item=>item.name2=== name1);
    upProduct.productId=productId;
    upProduct.name2=name2; 
    upProduct.price=price;  
    }
//getProduct
    this.getProduct = (productId) =>{
      this.products.find(item=>item.productId===productId);
    } 
//printProducts
    this.printProducts  = () =>{
console.log(this.products);
    }
//calculateOrderCost
    this.calculateOrderCost = ( productId, quantity) => {
let orderProduct = this.products.find(item=>item.productId===productId);
console.log(`${quantity} of ${orderProduct} for ${orderProduct.price*quantity}`);
    }
  
  }
}


//FARMS
//addFarm
let mkuliApp = new Mkulima
mkuliApp.addFarm("f011","Irene","john","0753489877","Nairobi");
mkuliApp.addFarm("f012","Valley","john","0753489877","Kisumu");
mkuliApp.addFarm("f013","Tout","john","0753489877","Mombasa");
console.log(mkuliApp.farms);
// //removeFarm
mkuliApp.removeFarm("1011");
console.log(mkuliApp.farms);
// //updateFarm
mkuliApp.updateFarm("f013","f014","Tout","john","0753489877","Mombasa");
console.log(mkuliApp.farms);
// //getFarm
mkuliApp.getFarm("f012");
console.log(mkuliApp.farms);


//PRODUCTS
mkuliApp.addProduct("P201","Beans","ksh.2000");
mkuliApp.addProduct("P202","Rice","ksh.3000");
mkuliApp.addProduct("P203","Ugali","ksh.4000");
console.log(mkuliApp.products);
// //removeProduct
mkuliApp.removeProduct("P203");
console.log(mkuliApp.products);
// //updateProduct
mkuliApp.updateProduct("P202","Soya","Rice","ksh.3000");
console.log(mkuliApp.products);
// //getProduct
mkuliApp.getProduct("P201");
console.log(mkuliApp.products);
// //printProducts
mkuliApp.printProducts();
// //calculateOrderCost
mkuliApp.calculateOrderCost("P201","5");
console.log(mkuliApp.products);
