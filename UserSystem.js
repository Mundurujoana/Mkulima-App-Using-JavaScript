class Mkulima {
  
    constructor() {
      this.farms = [];
      this.products = [];
      this.orders = [];
      this.addFarm =(farmId, name, farmer, phone, address)=>{
        this.farms.push({ farmId, name, farmer, phone, address});
      }
      this.removeFarm = (farmId) => {
      this.farms.splice(this.farms.findIndex(item=>item.farmId===farmId), 1);
      }
      this.updateFarm = (oldId,farmId, name, farmer, phone, address) => {
          let target=this.farms.find(item=>item.farmId===oldId)
          target.farmId=farmId
          target.name=name
        target.farmer=farmer
      target.phone=phone
    target.address=address
      }

    this.getFarm = (farmId) => {  
    this.farms.find(item=>item.farmId===farmId)
    }

    this.addProduct = (productId, name, price) => {
      this.products.push({productId,name,price});
    }
    this.removeProduct = (productId) =>{
    this.products.splice(this.products.findIndex(item=>item.productId === productId));
    }
    updateProduct = (productId, name, price) =>{
    let targetproduct = this.products.find(item=>item.productId === productId);
    targetproduct.productId=productId;
    targetproduct.name=name; 
    targetproduct.price=price;  

    }
    this.getProduct  = (productId) =>{
      this.products.find(item=>item.productId===productId);
    } 
    this.printProducts  = () =>{
console.log({products: price});
    }
    this.calculateOrderCost = ( productId, quantity) => {

    }
  
  }
}