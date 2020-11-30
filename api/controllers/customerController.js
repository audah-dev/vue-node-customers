const Customer = require('../models/Customer')

// Handle errors
const handleErrors = (error) => {
  let errMessage = '';

  if (error.message.includes('required')) {
    errMessage = 'Please fill in all required fields!'
  }

  return errMessage;
}

// Get all customers
module.exports.customer_get_all = async (req, res) => {
  try {
    const customers = await Customer.find({});
    res.status(200).json({ body: customers });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }  
}

// Get single customer
module.exports.customer_get = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findById(id);
    res.status(200).json({ body: customer});
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}

// Post customer
module.exports.customer_post = async (req, res) => {
  try {
    const data = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone: req.body.phone,
      email: req.body.email,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state
    }
    const customer = await Customer.create(data);
    res.status(200).json({ body: customer._id });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
}

// Update customer
module.exports.customer_update = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    const customer = await Customer.findByIdAndUpdate(id, body);
    res.status(200).json({ body: customer });
  } catch (err) {
    const error = handleErrors(err);
    res.status(400).json({ error });
  }
}

// Delete customer
module.exports.customer_delete = async (req, res) => {
  try {
    const id = req.params.id;
    const customer = await Customer.findByIdAndDelete(id);
    res.status(200).json({ body: customer });
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
}