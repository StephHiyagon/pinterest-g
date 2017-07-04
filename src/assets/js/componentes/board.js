const Board=(update)=>{
  console.log("portada board123");
  console.log(state.pin);
  // console.log(state.page);
  console.log(state.page.next);
const div= $('<div class="pin"></div>')


$.get(state.page.next, (data2) => {

      if (!data2) { return alert('no hay data');}

      state.pin2 = data2.data;
      state.page2= data2.page;
      console.log("HolaSteph");

    });
}

setTimeout(function(){
  console.log(state.pin2);
  console.log(state.page2);
}, 1000);
