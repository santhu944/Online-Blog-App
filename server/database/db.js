import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://user:codeforinterview@ac-vua5gfd-shard-00-00.76vti5o.mongodb.net:27017,ac-vua5gfd-shard-00-01.76vti5o.mongodb.net:27017,ac-vua5gfd-shard-00-02.76vti5o.mongodb.net:27017/?ssl=true&replicaSet=atlas-iu6lug-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useNewUrlParser: true })
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting to the database ', error);
    }
};

export default Connection;


//mongodb://user:codeforinterview@ac-vua5gfd-shard-00-00.76vti5o.mongodb.net:27017,ac-vua5gfd-shard-00-01.76vti5o.mongodb.net:27017,ac-vua5gfd-shard-00-02.76vti5o.mongodb.net:27017/?ssl=true&replicaSet=atlas-iu6lug-shard-0&authSource=admin&retryWrites=true&w=majority