'use strict';

const BaseEntityMongoDb = require('../../../core/base-entity-mongodb');
const model = require('../../../helpers/constants').MONGODB.INSTANCES.INVITEE;
const schema = require('../../../domains/mongodb/schemas').SCHEMAS.INVITEE;

class AccountEntity extends BaseEntityMongoDb {

    constructor() {
        super(model, schema);
    }

    list() {
        return this._model.find({}).sort([['_id', -1]]);

    }

    findById(id) {
        return this._model.findById(id);
    }

    add(data) {
        let newObj = new this._model(data);
        return newObj.save();
    }

    remove(id) {
        return this._model.deleteOne({ _id: id });
    }

    update(id, fieldObj) {
        return this._model.findByIdAndUpdate(id, {
            '$set': fieldObj
        }, { upsert: true });
    }

}

module.exports = AccountEntity;
