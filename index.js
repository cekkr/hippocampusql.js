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

    getTable(name){
        var table = new Table(this, name);
        return table;
    }
}

class Table {
    constructor(db, name){
        this.db = db;
        this.name = name;
    }

    newRow(){
        var row = new Row(this);
        return row;
    }
}

class Row {
    constructor(table){
        this.table = table;
    }
}

class Field {
    constructor(parent){
        this.parent = parent;
    }
}

exports.HippocampuSQL = HippocampuSQL;