"use strict";var Board=function(a){console.log("portada board"),console.log(state.pin),console.log(state.page.next),$.get(state.page.next,function(a){if(!a)return alert("no hay data");state.pin2=a.data,state.page2=a.page})};setTimeout(function(){console.log(state.pin2),console.log(state.page2)},1e3);var render=function(a){a.empty();var e=$('<div class="wrapper"></div>');e.append(Board(function(){render(a)})),a.append(e)},state={pin:null,page:null,pin2:null,page2:null};$(function(a){$.get("https://api.pinterest.com/v1/boards/arabelyuska/web-ui/pins/?access_token=AZ2i9KfK4bcYVlQFmQ2ZjB8JS7DRFM4qVqQ9s7REItsdIWA_dQAAAAA&fields=id%2Clink%2Cnote%2Curl%2Ccreated_at%2Ccounts%2Ccolor%2Cboard%2Cattribution%2Cmedia%2Cmetadata%2Coriginal_link%2Ccreator%2Cimage",function(a){if(!a)return alert("no hay data gg");state.pin=a.data,state.page=a.page;var e=$("#root");render(e),console.log("hola")})}),console.log("hola adios");