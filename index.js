var mysql = require('mysql');
var deasync = require('deasync');

class HippocampuSQL{
    constructor(opts){
        this.opts = opts;
        
        this.generateAsync();
        delete this.generateAsync;

        this.connect();
    }

    generateAsync(){
        //tothink
    }

    connect(){
        this.conn = mysql.createConnection({
            host     : this.opts.host,
            user     : this.opts.user,
            password : this.opts.password,
            database : this.opts.database
        });

        this.conn.connect();
    }
}

class Table {
    constructor(db){
        this.db = db;
    }
}

class Row {
    constructor(parent){
        this.parent = parent;
    }
}

class Field {
    constructor(parent){
        this.parent = parent;
    }
}

exports.HippocampuSQL = HippocampuSQL;