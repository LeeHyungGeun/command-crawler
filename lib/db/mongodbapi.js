import mongoose from 'mongoose';
class MongoDBAPI {
    constructor({
        errEvent = () => console.error,
        openEvent = () => console.log('Connected to mongod server.'),
        host = 'localhost',
        dbName = 'mongodb_command-crawler',
        modelName = 'page',
        Schema = {}
    } = {}) {
        // 1. Connection to Mongod Server
        const db = mongoose.connection;
        db.on('error', errEvent);
        db.once('open', openEvent);
        mongoose.connect(`mongodb://${host}/${dbName}`);

        // 2. Create a Schema
        const MSchema = mongoose.Schema;
        const schema = new MSchema(Schema);

        // 3. Create a Model
        const Model = mongoose.model(modelName, schema);
        this.Model = Model;
    }

    /**
     * 
     * @param {Object} data: by Schema model to save
     * @return {Promise<Object>} result: Promise Callback of result
     * @example m.save({ url: 'http://example.com' }).then(item => console.log(item));
     * 
     */
    save(data) {
        const d = new this.Model(data)
        return d.save();
    }

    /**
     * 
     * @param {Object} options: find queries
     * @return {Promise<Array>} result: Promise Callback of result
     * @example m.find({ url: 'http://www.example' }).
     */
    find(options = {}) {
        return this.Model.find(options);
    }
    /**
     * 
     * @param {Object} options: find queries
     * @return {Promise<Object>} result: Promise Callback of result
     * @example m.findOne({ url: 'http://www.example' }).
     */
    findOne(options = {}) {
        return this.Model.findOne(options);
    }

    /**
     * 
     * @param {Object} target query to target
     * @param {Object} option query to be changed as
     * @return {Promise<Object>} result: result data
     * @example m.update({ url: 'http://www.example.com' }, { url: 'http://www.to.com' }).then((output) { if (!output.n) => console.error('Not Found'); });
     */
    update(target = {}, option = {}) {
        const Model = this.Model;
        return this.Model.update(target, option);
    }

    /**
     * 
     * @param {Object} options query to remove
     * @return {Promise<Object>} result: result data
     * @example m.remove({ url: 'http://www.example.com' }).then(output => { if (!output.n || !output.ok) { return false; } });
     */
    remove(options = {}) {
        return this.Model.remove(options);
    }
}

export default MongoDBAPI;