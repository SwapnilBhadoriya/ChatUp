const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://swapnildevelopshere:JCTU5i1PIk0HtJkv@cluster0.mgwqnwc.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
    console.log('Successfully connected to MongoDB');
  });


  

module.exports = mongoose;