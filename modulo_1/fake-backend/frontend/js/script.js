function start() {
  fetch('http://localhost:3001/countries').then(function (resource) {
    console.log('Obtive resource');
    resource.json().then(function (json) {
      console.log('Obtive o json');
      console.log(json);
    });
  });

  console.log('Fora da promise');
}

async function start2() {
  var resource = await fetch('http://localhost:3001/countries');
  var json = await resource.json();

  console.log(json);
}

//start();
start2();
