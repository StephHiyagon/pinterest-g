const Board=(update)=>{
  console.log("portada board");
  console.log(state.pin);
  console.log(state.pin[2]);
  console.log(state.page.next);
const div= $('<div class="pin"></div>');
const image=$('<img src="'+state.pin[2].image.original.url+'"  alt="imagen"/>');

div.append(image);



$.get(state.page.next, (data2) => {

      if (!data2) { return alert('no hay data');}

      state.pin2 = data2.data;
      state.page2= data2.page;
      console.log("HolaSteph");

    });

    setTimeout(function(){
      console.log(state.pin2);
      console.log(state.page2);
    }, 1000);

    return div;
}
