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
  const share = $('<div class="header__links__container--share"><div class="img"></div></div>');
  const name = $('<h5 class="header__links--title">Web UI</h5>');
  const btnFollow = $('<div><button>Seguir tablero</button></div>');
  const divInfo = $('<div class="header__info"></div>')
  const divInfoTitle = $('<h1 class="header__info--title">Web UI</h1>');
  const divInfoNumber = $('<p class="header__info--pines"></p>');
  const divInfoFollow = $('<p class="header__info--followers"></p>');
  const divInfoFoto = $('<div class="header__info--photo"></div>');

  divLinks.append(arrowLink);
  divLinks.append(userLink);
  divLinks.append(chatLink);
  headerDivLink.append(share);
  headerDivLink.append(name);
  headerDivLink.append(btnFollow);
  navSearch.append(input);
  navBar.append(navSearch);
  navBar.append(divLinks);
  divInfo.append(divInfoTitle);
  divInfo.append(divInfoNumber);
  divInfo.append(divInfoFollow);
  divInfo.append(divInfoFoto);

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
    if (cursorY > 100) {
      name.show();
    } else {
      name.hide();
    }
  });


  return header;
}
