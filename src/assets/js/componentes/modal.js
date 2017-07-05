const Modal=(update)=>{

  console.log("portada Modal");

  // console.log(state.pin);
  // console.log(state.pin[2]);
  // console.log(state.page.next);

  // console.log(state.pin[2].metadata.article);
  // console.log(state.pin[2].note);

  // console.log(state.pin[2].metadata.article);
  var titulo;
  console.log(state.titulo);
  console.log(state.data);
  if(state.titulo==undefined){
    titulo=state.data.note;
    // console.log(titulo);
  }

  if(state.titulo!=undefined){
    // tituloO=state.pin[2].metadata.article;
    titulo=state.titulo.name;
  }
  // if(state.pin[2].metadata.article=="undefined"){
  //   titulo=state.pin[2].note;
  // }
  // }else if (state.pin[2].metadata.article.name!="undefined"){
  //   titulo=state.pin[2].metadata.article.name;
  //   console.log(titulo);
  // }
// setTimeout(function(){
//   console.log("formando modal");
  const section= $('<section class="modal"></section>');
  const item=$('<div class="item"></div>');
  const close=$('<span id="close">X</span>');
  const item_stack=$('<div class="item_stack"></div>');
  const image=$('<img src="'+state.image+'" class="item_stack--image" alt="imagen" />');
  const item_info=$('<div class="item_info"></div>');
  const pin_count=$('<div class="item_info--pin-count"></div>');
  const i=$('<i class="fa fa-thumb-tack" aria-hidden="true">');
  const titles=$('<div class="item_info--titles">'+titulo+'</div>');
  const h3=$('<h3 class="item-title"></h3>');
  const subt=$('<div class="item-subtl"></div>');
  const user=$('<div class="item_info--user"></div>');
  const avatar=$('<img class="item-avatar" src="https://s-media-cache-ak0.pinimg.com/avatars/arabelyuska_1476548892_60.jpg"/>');
  const data=$('<div class="item-data"></div>');
  const name=$('<div class="item-data_dataname">'+state.creator+'</div>');
  const tagline=$('<div class="item-data_tagline">'+state.nameBoard+'</div>');

  section.append(item);
  item.append(close);
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

  close.on('click',function(e){
    console.log(e.target);
    state.modal=null;
    update();
  });

  return section;
//
// },8000);



// $.get(state.page.next, (data2) => {
//
//       if (!data2) { return alert('no hay data');}
//
//       state.pin2 = data2.data;
//       state.page2= data2.page;
//
//
//     });
//
//     setTimeout(function(){
//       console.log(state.pin2);
//       console.log(state.page2);
//     }, 1000);


}
