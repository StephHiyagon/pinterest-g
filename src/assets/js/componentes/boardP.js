const Board = (update)=>{
  const pins=state.pin;
  console.log(pins);
  const tam=state.pin.length;
  console.log(tam);
  const section= $('<section class="board"></section>');

  pins.forEach((p)=>{
    const item=$('<div class="item"></div>');
    const item_stack=$('<div class="item_stack"></div>');
    const image=$('<img src="'+ p.image.original.url+'" class="item_stack--image" alt="imagen"/>')

    section.append(item);
    item.append(item_stack);
    item_stack.append(image);
  })
  ;



  return section;

}
