import PouchDB from 'pouchdb';
import p from 'pouchdb-upsert';
import CONST from '../consts';


PouchDB.plugin(p);

const db = ((url,uid,pwd)=>{
    console.log('DBURL: '+ CONST.dburl+':'+CONST.dbuid+':'+CONST.dbpwd);
    const opts = {
        name:url,
        auth:{
            username:uid,
            password:pwd
        },
        skip_setup:true,
    }
    return new PouchDB(opts);
})(CONST.dburl,CONST.dbuid,CONST.dbpwd);

export default db;


