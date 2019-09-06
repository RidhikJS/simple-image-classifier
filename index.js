let net;

async function app() {
  console.log('Loading mobilenet..');

  // Load the model.
  net = await mobilenet.load();
  console.log('Sucessfully loaded model');

  // Make a prediction through the model on our image.
  const imgEl = document.getElementById('img');
  const result = await net.classify(imgEl);
  //declaring i
  var i;
  //ruuning loop on console.log() to make results look more appealing
  for(i=0;i<3;i++){
  console.log("Class : ",result[i].className," \t Probability",result[i].probability);
 }
}
app();
