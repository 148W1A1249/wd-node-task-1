const express = require("express");

const app = express();
app.use(express.json());
const port = process.env.port || 3000;
let data =[];

app.get("/",(req,res)=>{
    res.status(200).json({
        message: "ALL data",
        data,
    });
});
app.get("/:id",(req,res)=>{
    let result = data.find(ele=> ele.id == req.params.id)
    if(result){
        res.status(200).json({
            message: "your data",
            result,
        });
    }else{
        res.status(404).json({
            message: "Not Found",
        });
    }
});
app.post("/create-product",(req,res)=>{
    data.push(req.body);
    res.status(200).json({
        message: "product created",
    });
})
app.put("/update-product/:id",(req,res)=>{
    let result = data.map(ele=> {
        if(ele.id == req.params.id){
            ele["product_name"] = req.body.product_name;
            ele["product_price"] = req.body.product_price;
            ele["product_material"] = req.body.product_material;
            ele["product_color"] = req.body.product_color;
        }
    })
if(result){
    res.status(200).json({
        message: "product updated Successfully",
        data,
    });
}else{
    res.status(404).json({
        message: "Not Found",
    });
}
})
app.delete("/delete-product/:id",(req,res)=>{
    let result = data.filter(ele=> {return ele.id!== req.params.id});
    console.log(result)
    res.status(200).json({
        message: "Delete Success",
        result,
    });
})
app.listen(port,()=>console.log("your running with the port is: "+port));