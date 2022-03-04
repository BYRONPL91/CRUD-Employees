const Employee = require('../models/employee')
const employeeCtrl = {};

employeeCtrl.getEmployees = async (req, res) => {
    const employees = await Employee.find();
    res.json(employees)
}

employeeCtrl.createEmployee = async (req, res) => {
    const employee = new Employee ({
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    });
    await employee.save();
    //console.log(employee);
    res.json({
        'satus':'Employee saved'});
};

employeeCtrl.getEmployee = async(req, res) => {
    //console.log(req.params.id);   //Para visualiar en consola el id
    const employee = await Employee.findById(req.params.id); //Para encontrar un empleado con un ID específico
    res.json(employee)
};

employeeCtrl.editEmployee = async(req, res) => {
    const id = req.params.id;   //Para obtener el id a actualizar
    const employee = {
        name: req.body.name,
        position: req.body.position,
        office: req.body.office,
        salary: req.body.salary
    };
    await Employee.findByIdAndUpdate(id, {$set:employee}, {new: true}); //new es para crearlo en el caso que no exista
    res.json({'status':'Employee updated'})
};

employeeCtrl.deleteEmployee = async(req, res) => {
    await Employee.findByIdAndDelete(req.params.id); //findByIdAndDelete para eliminar empleado
    res.json({'status':'Employee deleted'})
};

module.exports = employeeCtrl