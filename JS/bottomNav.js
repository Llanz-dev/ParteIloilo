let navContent = () => {
  $(".nav-main").click(function () {
    num = 1;
    currentLink(num);
    disappearShow();
  });
  $(".nav-dinagyang").click(function () {
    num = 2;
    currentLink(num);
    disappearShow();
  });
  $(".nav-paraw").click(function () {
    num = 3;
    currentLink(num);
    disappearShow();
  });
};

$(".nav-button").click(function () {
  disappearShow();
});

let disappearShow = () => {
  $(".nav-content").toggle();
  $("body").toggleClass("disableScrollbar");
  navContent();
};

let currentLink = (num) => {
  switch (num) {
    case 1:
      location.href = "main.html";
      break;
    case 2:
      location.href = "dinagyang.html";
      break;
    case 3:
      location.href = "paraw.html";
      break;
    default:
      return;
  }
};
