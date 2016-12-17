var mongoose = require('mongoose');
var mongoHost = process.env.OPENSHIFT_MONGODB_DB_HOST || 'localhost';
var mongoPort = process.env.OPENSHIFT_MONGODB_DB_PORT || '28017';
var dbName = process.env.OPENSHIFT_APP_NAME || 'halloffame';
var userName = process.env.OPENSHIFT_MONGODB_DB_USERNAME;
var password = process.env.OPENSHIFT_MONGODB_DB_PASSWORD;
if(userName){
    mongoose.connect('mongodb://' + userName + ':' + password+'@' + mongoHost +':' + mongoPort+'/'+dbName);
}else {
    mongoose.connect('mongodb://' + mongoHost + '/' + dbName);
}