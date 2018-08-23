module.exports = {
  create: ( req, res, next ) => {
    const database = req.app.get('db');
    const { name, description, price, imageurl } = req.body;

    database.create_product([ name, description, price, imageurl ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getOne: ( req, res, next ) => {
    const database = req.app.get('db');
    const { params } = req;

    database.read_product([ params.id ])
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  getAll: ( req, res, next ) => {
    const database = req.app.get('db');

    database.read_products()
      .then( product => res.status(200).send( product ) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  update: ( req, res, next ) => {
    const database = req.app.get('db');
    const { params, query } = req;

    database.update_product([ params.id, query.desc ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  },

  delete: ( req, res, next ) => {
    const database = req.app.get('db');
    const { params } = req;

    database.delete_product([ params.id ])
      .then( () => res.sendStatus(200) )
      .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
      } );
  }
};