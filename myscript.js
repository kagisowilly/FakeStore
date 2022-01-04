fetch('https://fakestoreapi.com/products').then(response => {
  console.log('resolve', response);
  return response.json();
}).then(data => {
  console.log(data);


data.forEach((data) => {
  //   for (let key in artist) {
  
  document.write(
    '<div class="w3-card-4">\
    <img style=" height:200px; width:200px;" src="' +
      data.image +
      '" alt="Alps">\
    <div class="w3-container w3-center" style="margin:0px !important;">\
      <p>' +
      data.category +
      "<br>" +
      data.price +
      " <br> " +
      data.title +
      "</p>\
    </div>\
  </div>\
  "
  

    //'<img src="'+artist.image+'" > '+ artist.name+' : '+artist.age + '<br>');
    //}
  );
})

}).catch((err) => {
  console.log('resolve', err);
});