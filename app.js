const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")


var app=Express()
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())

var FacultyModel=Mongoose.model("facultys",new Mongoose.Schema(
    {
        name:String,
        education:String,
        address:String,
        mobileno:String,
        pincode:String,
        district:String
    }
    ))

    app.post("/api/view",(req,res)=>{
        collegemodel.find((error,data)=>{
            if(error)
            {
                res.send({"status":error})
            }
            else{
    
                res.send({"status":"success","data":data})
            }
        })
        
    })
    
    app.post("/api/search",(req,res)=>{
        var getAdmissionno=req.body
        collegemodel.find(getAdmissionno,(error,data)=>{
            if(error)
            {
                res.send({"status":error})}
            else
            {
                res.send(data)
               }   
           })   
           })
          
          
           app.post("/api/delete",(req,res)=>{
        var getId=req.body
        collegemodel.findOneAndDelete(getId,(error,data)=>{
            if(error){
    res.send({"status":error})
            }
            else{
     res.send({"status":"success"})       
    
            }
        })
    })

app.post("/api/faculty",(req,res)=>{
    var data=req.body
    let ob=new FacultyModel(data)
    ob.save((error,data)=>{
        if(error){
            res.send({"status":"error","error":error})

        }
        else{
res.send({"status":"success","data":data})
        }
    })
})
var collegemodel=Mongoose.model("colleges",new Mongoose.Schema(
    {

name:String,
rollno:String,
address:String,
admissionno:String,
mobileno:String,
class:String,
parentsname:String,

    }
   

))

Mongoose.connect("mongodb+srv://gopika:1234@cluster0.2q4qp.mongodb.net/collegeappdb")
app.post("/collegeapp",(req,res)=>{
    var getname=req.body.name
    var getrollno=req.body.rollno
    var getaddress=req.body.address
    var getadmission=req.body.admission
    var getmobileno=req.body.mobileno
    var getsclass=req.body.class
    var getparentsname=req.body.parentsname

    data={"name":getname,"rollno":getrollno,"address":getaddress,"admissionno":getadmission,"mobileno":getmobileno,
    "class":getsclass,"parentsname":getparentsname}
    let mycollege=new collegemodel(data)
    mycollege.save((error,data)=>{
        if(error){
            res.send({"status":"error","data":error})
        }
        else{
            res.send({"status":"success","data":data}) 
        }
     } )



})



   
app.listen(5020,()=>{
    console.log("server is running")
})