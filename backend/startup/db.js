const mongoose = require("mongoose");

module.exports = function() {
  // Connect to Mongodb
  try{
    await mongoose.connect("mongodb://localhost/students",{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useFindAndModify:false
    })
    console.log("Success! Connected to DB")
  }catch(err){
    console.log("Fail to connect to DB\n", err.message);
    process.exit(1)
  }
};
