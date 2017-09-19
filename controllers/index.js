module.exports = app => {
    console.log('controllers.index /');
    app.get('/', (req, res) => {
        res.send('REST API /');
    });
};