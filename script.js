var co = require('co');
var rp = require("request-promise");


function callApi() {
  var options = { method: 'DELETE',
  url: 'https://martjack-poc.servicebus.windows.net/98d18d82-ba59-4957-9c92-3f89207a34f6/subscriptions/magility-SHIPMENT-831087920a737a6c7c50484684a6ec27/messages/head',
  headers: 
   { 
     Authorization: 'SharedAccessSignature sr=https%3A%2F%2Fmartjack-poc.servicebus.windows.net%2F98d18d82-ba59-4957-9c92-3f89207a34f6&sig=jXXds%2FD6RBznt%2FUpLJcp2Q%2BGkMcf01J%2BC31sbsjSPVA%3D&se=1519655743&skn=magility',
     Accept: 'application/json',
     'Content-Type': 'application/x-www-form-urlencoded' } };

  return rp(options)
}

co( function* (){
  for(var i=0;i< 500; i++){
    var result = yield callApi()
    console.log(`result of ${i} `);
  }
}).catch(err => {
  console.log(err)
})