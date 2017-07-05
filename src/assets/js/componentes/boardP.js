const Board = (update)=>{
  const pins=state.pin;
  console.log(pins);
  const tam=state.pin.length;
  console.log(tam);
  const section= $('<section class="js-board"></section>');

  pins.forEach((p)=>{
    const item=$('<div class="item"></div>');
    const item_stack=$('<div class="item_stack"></div>');
    const image=$('<img src="'+ p.image.original.url+'" id="'+p.id+'" class="item_stack--image" alt="imagen"/>')

    section.append(item);
    item.append(item_stack);
    item_stack.append(image);

  });

  section.on('click', (event)=>{
    console.log(event.target);
    if(event.target.className == "item_stack--image"){
      console.log(event.target);
      console.log('entraste al modal');
    }
    state.id=event.target.id;
    state.modal="modal";
    console.log(state.id);
    var url="https://api.pinterest.com/v1/pins/"+state.id+"/?access_token=Aa2YxXXEIidEuD9GjPBGjd2P-DgLFM591TrMQMBEItsdIWA_dQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Cimage%2Cmetadata%2Coriginal_link%2Ccreated_at%2Ccreator%2Ccounts%2Cmedia%2Cattribution%2Cboard%2Ccolor"
    console.log(url);

    $.get(url, (dataPin) => {

    if (!dataPin) { return alert('no hay data');}

    state.data = dataPin.data;
    console.log(state.data);
    state.image=state.data.image.original.url;
    state.creator=state.data.creator.first_name;
    state.nameBoard=state.data.board.name;
    state.titulo=state.data.metadata.article;

    update();
    });


  })


  return section;

}
