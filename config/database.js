const mongoose =  require('mongoose')

let connection = async()=>{
    try{
        mongoose.connect(
            process.env.DB_LINK,
            {
            useUnifiedTopology: true,
            useNewUrlParser: true
        })
        console.log('conected to data base');
    } catch(error){
        console.log(error.message);
    }
} 

connection()
