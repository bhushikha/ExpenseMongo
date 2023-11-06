const mongoose = require('mongoose')
const Schema =mongoose.Schema;
const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    ispremiumuser:{
        type:Boolean
    }
})

module.exports=mongoose.model('User',userSchema)
// exports.getPurchase=async(req,res)=>{
//     try{
        
//     var rzp = new Razorpay({
//         key_id:process.env.RAZORPAY_KEY_ID,
//         key_secret:process.env.RAZORPAY_KEY_SECRET
//     })
//     const amount=2500;
//     const response = await rzp.orders.create({amount,currency:"INR"})
//     const order=new Order({orderid:response.id,status:'PENDING',userId:req.user})
//     await order.save();
//     res.json({order,key_id:rzp.key_id})

//     // rzp.orders.create({amount,currency:"INR"},(err,order)=>{
//     //     if(err){
//     //         throw new Error(JSON.stringify(err));
//     //     }
//     //     const razorpzy=new Order({orderid:order.id,status:'PENDING'}).then(()=>{
//     //         return res.json({order,key_id:rzp.key_id});
//     //     }).catch(err=>{
//     //         throw new Error(err)
//     //     })
//     // })
// }catch(err){
//     console.log(err)
//     res.status(500).json({message:'something went wrong',error:err})
// }

// }