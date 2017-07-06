'use strict';
const Header  = ()=> {
  const header = $('<header class="header"></header>');
  const navBar = $('<nav class="header__nav row"><div class="col m1 header__nav--logo"><a href="https://www.pinterest.com/"><img src="assets/img/pinterest-logo.png" class="responsive-img" alt="Logo de Pinterest"><span>Inicio</span></a></div></nav>');
  const navSearch = $('<div class="header__nav--search col m9"><i class="material-icons" aria-hidden="true">search</i></div>');
  const input = $('<input class="input" type="text" placeholder="Buscar">');
  const divLinks = $('<div class="col m2 header__nav__link"></div>');
  const arrowLink = $('<div class="header__nav__link--arrow"><div class="img"></div></div>');
  const userLink = $('<div class="header__nav__link--profile"><div class= "img"></div></div>');
  const chatLink = $('<div class="header__nav__link--message"><div class="img"></div></div>');
  const overlay = $('<div class="overlay"></div>');
  const container = $('<div class="header__links row"></div>');
  const headerDivLink = $('<div class="header__links__container col m8 offset-m2"></div>');
  const share = $('<div class="header__links__container--share"><img src="assets/img/upload.png" class="icon"></div>');
  const name = $('<h5 class="header__links__container--title"></h5>');
  const btnFollow = $('<div class = "header__links__container--btn"><button class="btn waves-effect waves-dark">Seguir tablero</button></div>');
  const divInfo = $('<div class="header__info row"></div>');
  const divInfoContainer = $('<div class="header__info__container col m8 offset-m2"></div>');
  const divInfoTitle = $('<h3 class="header__info--title"></h3>');
  const divInfoNumber = $('<p class="header__info--pines"></p>');
  const divInfoFollow = $('<p class="header__info--followers"></p>');
  const divInfoFoto = $('<div class="header__info--photo"></div>');
  const img =$('<img src = "">');

  divLinks.append(arrowLink);
  divLinks.append(userLink);
  divLinks.append(chatLink);
  headerDivLink.append(share);
  headerDivLink.append(name);
  headerDivLink.append(btnFollow);
  navSearch.append(input);
  navBar.append(navSearch);
  navBar.append(divLinks);
  divInfoFoto.append(img);
  divInfoContainer.append(divInfoTitle);
  divInfoContainer.append(divInfoNumber);
  divInfoContainer.append(divInfoFollow);
  divInfoContainer.append(divInfoFoto);
  divInfo.append(divInfoContainer);
  container.append(overlay);
  container.append(headerDivLink);
  header.append(navBar);
  header.append(container);
  header.append(divInfo);


  input.on('focus', ()=> {
    $('.overlay').css("height","100%");
  });
  input.on('blur', ()=> {
    $('.overlay').css("height", "0%");
  });

  $(window).scroll(function(e) {
    const cursorY = $(window).scrollTop();
    console.log(cursorY);
    if (cursorY > 200) {
      name.slideDown("slow");
    } else {
      name.slideUp("slow");
    }
  });
  name.text(state.creator.name);
  divInfoTitle.text(state.creator.name);
  img.attr("src", state.user.image["60x60"].url);
  var pin = state.creator.counts.pins;
  var seguidor = state.creator.counts.followers;
  if(pin==1){
    divInfoNumber.text("Pin");
    divInfoNumber.prepend('<span>'+pin+'</span>');
  }
  if(pin>1){
    divInfoNumber.text("Pines");
    divInfoNumber.prepend('<span>'+pin+'</span>');

  }
  if(seguidor==1){
    divInfoFollow.text("Seguidor");
    divInfoFollow.prepend('<span>'+seguidor+'</span>');

  }
  if(seguidor>1){
    divInfoFollow.text("Seguidores");
    divInfoFollow.prepend('<span>'+seguidor+'</span>');

  }



  return header;
}

$(_=>{

  $.get('https://api.pinterest.com/v1/boards/arabelyuska/web-ui/?access_token=AYMIa2oLkXknBloAFiu4m4JgizYCFM6h7-Y-SZREIt2CCGA55wAAAAA&fields=id%2Cname%2Curl%2Ccounts%2Ccreator%2Cimage%2Ccreated_at%2Cdescription%2Cprivacy%2Creason', (data) => {
      if (!data) { return alert('no hay data');}
      state.creator = data.data;
    });
  $.get('https://api.pinterest.com/v1/users/arabelyuska/?access_token=AY63jaQ3e0B2yj9qHpP9E-Zsk0XvFM6kn4W6PzFEIt2CCGA55wAAAAA&fields=first_name%2Cid%2Clast_name%2Curl%2Cimage%2Caccount_type%2Cusername%2Cbio%2Ccounts%2Ccreated_at', (data) => {
      if (!data) { return alert('no hay data');}
      state.user = data.data;
    });
});
