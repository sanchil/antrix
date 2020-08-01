import db from './index';
//import uuidv4 from 'uuid/v4';
import uniqid from 'uniqid';

//curl -X GET http://admin:admin@webapp.org/db/antrixdb/_all_docs?include_docs=true

export const testdb = ()=>{
    const _id = uniqid('antdb-') + "";
    console.log('unique id : '+ _id);
    return db.put({
        _id:_id,
        name:'hello',
        mesg:'world'

    });
}


export const addContact = (data)=>{
    data._id = uniqid('antdb-') + "";
    console.log('unique id : '+ JSON.stringify(data));
    return db.put(data);
}
