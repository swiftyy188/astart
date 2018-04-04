var mongoose = require('mongoose');
var AstartSchema = new mongoose.Schema({
	putWhatYouWant: String,
	example_name: String,
	example_price: Number
	
});

module.exports = mongoose.model("Astart", AstartSchema);