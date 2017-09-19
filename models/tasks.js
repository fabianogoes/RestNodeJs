var uuid = require('uuid/v4');

module.exports = app => {
    
    //************************************************************************************
    // aqui estamos criadno nossa lista temporária que ira simular nosso Banco de Dados
    //************************************************************************************
    var tasks = Array.apply(null, Array(5)).map( () => {
        return {
            "id": uuid(),
            "name": Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
        };
    });

    return {
        findAll: (params, callback) => {
            return callback(tasks);
        },
        findOne: (id, callback) => {
            let task = tasks.filter(task => task.id === id)[0];
            return callback(task);
        },
        save: (name, callback) => {
            let task = {
                "id": uuid(),
                "name": name
            };
            tasks.push(task);
            return callback(task);
        },
        update: (id, name, callback) => {
            let index = tasks.findIndex((task => task.id === id));
            tasks[index].name = name;
            task = tasks[index];
            return callback(task);
        },
        delete: (id, callback) => {
            let index = tasks.findIndex((task => task.id === id));
            tasks.pop(index);
            return callback(id);
        }        
    };
};