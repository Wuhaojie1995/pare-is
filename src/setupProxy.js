module.exports=app=>{
    app.use((req,res,next)=>{
        res.header('Access-Cointrol-Allow-Origin','*');
        next();
    })
};