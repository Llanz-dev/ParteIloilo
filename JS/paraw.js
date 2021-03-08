const reviews = [
  {
    name: "Syden Alezand",
    profession: "Photographer",
    image: "parawPictures/person1.jpeg",
    text:
      '"  We are housed in Pototan an hour away from Iloilo City, it was a residency and I personally enjoyed the Paraw Regatta festival especially the way they living of ilonggo on speak softly and kindly. "',
  },
  {
    name: "Olivia Ava",
    profession: "Traveller",
    image: "parawPictures/person2.jpeg",
    text:
      '" Words are not enough to describe the beating of my heart in tune with the beatings of the drums. I was expecting the energy but I was not prepared for the joy it brought me watching the performers. It was astounding! "',
  },
  {
    name: "Emily Harper",
    profession: "Teller",
    image: "parawPictures/person3.jpeg",
    text:
      '" The Paraw Regatta Competition is the highlight of the Paraw Regatta Festival in Iloilo City, Philippines. I was lucky enough to get a good seat during this event and witness it first hand. "',
  },
  {
    name: "Eleanor Scarlett",
    profession: "Vlogger",
    image: "parawPictures/person4.jpeg",
    text:
      '" The Paraw Regatta festival is so joyful that makes the Iloilo great and it has an enormous tribes competition and the energy is so great. I feel blessed to experienced this kind of festival. I would love to participate every year. "',
  },
];

const previousButton = $("#previous-button");
const nextButton = $("#next-button");
const imageShow = $(".image");
const nameShow = $("#name");
const professionShow = $(".profession");
const textShow = $("#text-description");

let currentItem = 0;

let showInfo = () => {
  let item = reviews[currentItem];
  nameShow.text(item.name);
  nameShow.attr("class", "desc");
  imageShow.attr("src", item.image);
  professionShow.text(item.profession);
  textShow.text(item.text);
};

$(document).ready(function () {
  showInfo();
});

nextButton.click(function () {
  currentItem++;
  if (currentItem === reviews.length) {
    currentItem = 0;
  }
  showInfo();
});

previousButton.click(function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showInfo();
});
