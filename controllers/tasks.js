module.exports = app => {
    const Tasks = app.models.tasks;

    ///////////////////////////////////////////////
    // Routes 
    ///////////////////////////////////////////////
    app.get('/tasks', (req, res) => {
        let params = null;
        Tasks.findAll(params, function(tasks){
            res.json(tasks);
        });        
    });

    app.get('/tasks/:id', (req, res) => {
        let id = req.params.id;
        Tasks.findOne(id, function(task){
            res.json(task);
        });
    });  

    app.post('/tasks', (req, res) => {
        let name = req.body.name;
        Tasks.save(name, function(task){
            res.json(task);
        });        
    });

    app.put('/tasks', (req, res) => {
        let id = req.body.id;
        let name = req.body.name;
        Tasks.update(id, name, function(task){
            res.json(task);
        });
    });

    app.delete('/tasks/:id', (req, res) => {
        let id = req.params.id;
        Tasks.delete(id, function(){
            res.json({});
        });            
    });

};