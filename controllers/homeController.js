module.exports.add = (req, res) => {
    let initialData = {
        categoryList:[{name:'Personal',color:'red'},{name:'Work',color:'green'}]
    }
    res.render('add', initialData);
};
module.exports.pending = (req, res) => {
    res.render('pending');
};
