const express = require ('express');
const mongoose = require ('mongoose');
const cors = require ('cors');
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
/* connect to the mongodb database */
mongoose.connect('mongodb+srv://abdallah:abdallah@cluster0.ohze7.mongodb.net/<dbname>?retryWrites=true&w=majority',{useNewUrlParser : true , useCreateIndex : true})
        .then(()=>console.log('MongoDB database connection established successfully ...'))
        .catch(err=>console.log(err))
/* add routes as middelwares  */
const productRouter = require('./routes/productsRoutes');
app.use('/products',productRouter);
/* run server on port */
app.listen(port,()=>{
    console.log(`server listened on ${port}`)
})