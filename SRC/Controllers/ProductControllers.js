//importar a biblioteca do mongoose para fazer os bangs com bd
const mongoose = require('mongoose');
//importar  o modelo de produto do mongoose
const Product = mongoose.model("Product");
//importar a função que trabalha com o modelo de produto

//exportar 
module.exports = {
    //funcionalidade para fazer atividades assincronas 
    async index(req, res){
        const { page = 1} = req.query;
        //salvar em uma const todos os objs do metodo find de products
        //await faz somente executar a proxima linha apos ela ter sido executada 
        const products = await Product.paginate({}, {page, limite: 10});
        return res.json(products);
    },
    async show(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },
    async store(req, res){
        const product = await Product.create(req.body);
        return res.json(product);

    },
    async update(req,res){
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new:true});
        return res.json(product);
    },
    async destroy(req,res){
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    },
    async destroyall(req,res){
        //batatata
        await Product.deleteMany({}, function(err) {
            if (err) {
                console.log(err)
            } else {
                res.end('success');
            }
        }
    );
        return res.send();
    }
};
