module.exports = {
    create: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      const {name, description, price, imageUrl} = req.body;
  
      dbInstance.create_product([ name, description, price, imageUrl])
        .then( () => res.sendStatus(200) )
        .catch( error => {
          res.status(500).send({errorMessage: "error"});
          console.log(error)
        });
    },

    getOne: (req, res, next)=> {
        const dbInstance = req.app.get('db')
        const {params} = req;

        dbInstance.read_product(params.id)
        .then(product => res.status(200).send(product))
        .catch(error => {
            res.status(500).send({errorMessage: "error"});
            console.log(error)
        });
    },

    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db')


        dbInstance.read_products()
        .then(products => res.status(200).send(products))
        .catch(error => {
            res.status(500).send({errorMessage: "error"});
            console.log(error)
        });
    },

    update: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        
        dbInstance.update_product([ params.id, query.desc ])
          .then( () => res.sendStatus(200) )
          .catch( error => {
            res.status(500).send({errorMessage: "error"});
            console.log(error)
          } );
      },
    

    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {params} = req;

        dbInstance.delete_product(params.id)
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send({error})
            console.log(error);
        })
    }
}