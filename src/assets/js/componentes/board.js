const Board=(update)=>{
  console.log("portada board");
  console.log(state.pin);
  console.log(state.pin[2]);
  console.log(state.page.next);
  var titulo;
  console.log(state.pin[2].metadata.article);

  if(state.pin[2].metadata.article=="undefined"){
    titulo=state.pin[2].note;
    console.log(titulo);
  }else{
    titulo=state.pin[2].note;
  }


  $.get('https://api.pinterest.com/v1/users/arabelyuska/?access_token=AS5yFQ7Fwzlb9cckakl1q9cybiC6FM5EIvFRH11EItsdIWA_dQAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cimage', (dataI) => {

      if (!dataI) { return alert('no hay data');}

      state.image = dataI.data;
      console.log(state.image.image);

    });

const section= $('<section class="board"></section>');
const item=$('<div class="item"></div>');
const item_stack=$('<div class="item_stack"></div>');
const image=$('<img src="'+state.pin[2].image.original.url+'" class="item_stack--image" alt="imagen"/>');
const item_info=$('<div class="item_info"></div>');
const pin_count=$('<div class="item_info--pin-count"></div>');
const i=$('<i class="fa fa-thumb-tack" aria-hidden="true">');
const titles=$('<div class="item_info--titles">'+titulo+'</div>');
const h3=$('<h3 class="item-title"></h3>');
const subt=$('<div class="item-subtl"></div>');
const user=$('<div class="item_info--user"></div>');
const avatar=$('<div class="item-avatar"></div>');
const data=$('<div class="item-data"></div>');
const name=$('<div class="item-data_dataname">'+state.pin[2].creator.first_name+'</div>');
const tagline=$('<div class="item-data_tagline">'+state.pin[2].board.name+'</div>');

section.append(item);
item.append(item_stack);
item_stack.append(image);
item.append(item_info);
item_info.append(pin_count);
pin_count.append(i);
item_info.append(titles);
titles.append(h3);
titles.append(subt);
item_info.append(user);
user.append(avatar);
user.append(data);
data.append(name);
data.append(tagline);



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


    return section;
}
