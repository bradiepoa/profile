const mongoose = require('mongoose');

const connectDB = async () =>(
    try{
        // mongodb connections string

        const con = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useFindAndModify:false,
            UseCreatIndex:true
        })

        console.log('MongoDB connected: $(con.connection.host)');

    }catch(err){

    }
)