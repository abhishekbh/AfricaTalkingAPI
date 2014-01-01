exports.read = function(req, res){
  var jsonSource = require('sampleMessages.json');
  res.render('read', { title: 'Africa Talking API - Read All Messages' });
  res.render(getAllMessages(jsonSource));
};

function getAllMessages(jsonSource){
  var parsedJSON = JSON.parse(jsonSource);
  


}
