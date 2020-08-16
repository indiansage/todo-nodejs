module.exports.add = (req, res) => {
    let initialData = {
        categoryList:[{name:'Personal',color:'red'},{name:'Work',color:'green'}]
    }
    res.render('add', initialData);
};
module.exports.pending = (req, res) => {
    let initialData = {
        taskList:[{id:1,name:'Task1 Task1 Task1 Task1Task1 Task1 Task1 Task1Task1 Task1 Task1 Task1Task1 Task1 Task1 Task1Task1 Task1 Task1 Task1Task1 Task1 Task1 Task1',category:{name:'Personal',color:'red'},dueDate:'21 Jan 2020', state:'done'},
        {id:2,name:'Task2',category:{name:'Work',color:'green'},dueDate:'22 Jan 2020', state:'pending'},]
    }
    res.render('pending', initialData);
};
