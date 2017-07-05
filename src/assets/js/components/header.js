'use strict';
const Header  = ()=> {
  const header = $('<header class="header">');
  const navBar = $('<nav class="header__nav"><img src="assets/img/pinterest-logo.png" class="header__nav--logo" alt="Logo de Pinterest"></nav>');
  const navSearch = $('<div class="header__nav--search"><i class="fa fa-search" aria-hidden="true"></i></div>');
  const input = $('<input type="text" placeholder="Buscar">');
  const images = $('<div><img src="assets/img/icon-profile.png" class="header__nav--profile" alt="Icono de persona"></div><div><img src="assets/img/menu-hamburguer.png" class="header__nav--menu" alt="Icono de menu"></div><div><img src="assets/img/message.png" class="header__nav--message" alt="Icono de mensaje"></div>');
  const headerLink = $('<div class="header__links"><div><img src="assets/img/upload-arrow.png" class="header__links--share" alt=""></div><div><img src="assets/img/menu-hamburguer.png" class="header__nav--menu" alt="Icono de menu"></div><div><img src="assets/img/menu-hamburguer.png" class="header__nav--menu" alt="Icono de menu"></div></div>');
  const headerLinkName = $('<h2 class="header__info--title">Web UI</h2>');
  const divInfo = $('<div class="header__info"><div class="header__info--photo"></div></div>')
  const divInfoTitle = $('<h1 class="header__info--title">Web UI</h1>');
  const divInfoNumber = $('<span class="header__info--pines"></span>');
  const divInfoFollow = $('<label for=""><span class="header__info--followers"></span>Seguidores</label>');

  navSearch.append(input);
  navBar.append(navSearch);
  navBar.append(images);
  headerLink.append(headerLinkName);

  return header;
}
