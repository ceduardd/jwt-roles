import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/companydb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(db => console.log('DB is connect'))
  .catch(err => console.error(err));
