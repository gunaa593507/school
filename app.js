alert("сайн байна уу \nта 5р сургуулын сайтад орж ирлээ");
var nowBrith = prompt("та төрсөн оноо оруулна уу");

var nas = 2023 - nowBrith;

nas >= 18
  ? alert("ta nasand hursen hun baina\ntanii nas : " + nas)
  : alert("ta nasand hureegui hun baina\ntanii nas :" + nas);

switch (true) {
  case ner === "gantulga":
    alert(
      "erhem " +
        ner +
        " taniig manai sited tavtai morilhyg husch baina\n enter darsnaar tanii medeelel garj ireh bolno"
    );
    break;
  case ner === "javka":
    alert(
      "erhem " +
        ner +
        " taniig manai sited tavtai morilhyg husch baina\n enter darsnaar tanii medeelel garj ireh bolno"
    );
    break;
  case ner === "chinbat":
    alert(
      "erhem " +
        ner +
        " taniig manai sited tavtai morilhyg husch baina\n enter darsnaar tanii medeelel garj ireh bolno"
    );
    break;
  case ner === "anar":
    alert(
      "erhem " +
        ner +
        " taniig manai sited tavtai morilhyg husch baina\n enter darsnaar tanii medeelel garj ireh bolno"
    );
  default:
    alert(
      "tanii ner manai programd baigui bainaa ta manai web huudsaas zailnuu"
    );
}

var ner = prompt("ta neree oruulna uu");

var medeelel1 = {
  neer: "gantulga",
  nas: "19",
  hobby: "morin huur togloh",
  ajil: "progammist",
};
var medeelel2 = {
  neer: "javka",
  nas: "21",
  hobby: "nom unshih",
  ajil: "programmist",
};

var medeelel3 = {
  neer: "chinbat",
  nas: "19",
  hobby: "tuguldur huur",
  ajil: "programmist",
};

var medeelel4 = {
  neer: "anar",
  nas: "19",
  hobby: "kod bichih ",
  ajil: "GS25",
};

switch (true) {
  case ner === "gantulga":
    alert(
      "ner :" +
        medeelel1.neer +
        "\nnas :" +
        medeelel1.nas +
        "\nhobby :" +
        medeelel1.hobby +
        "\najil :" +
        medeelel1.ajil
    );
    break;
  case ner === "javka":
    alert(
      "ner :" +
        medeelel2.neer +
        "\nnas :" +
        medeelel2.nas +
        "\nhobby :" +
        medeelel2.hobby +
        "\najil :" +
        medeelel2.ajil
    );
    break;
  case ner === "chinbat":
    alert(
      "ner :" +
        medeelel3.neer +
        "\nnas :" +
        medeelel3.nas +
        "\nhobby :" +
        medeelel3.hobby +
        "\najil :" +
        medeelel3.ajil
    );
    break;
  case ner === "anar":
    alert(
      "ner :" +
        medeelel4.neer +
        "\nnas :" +
        medeelel4.nas +
        "\nhobby :" +
        medeelel4.hobby +
        "\najil :" +
        medeelel4.ajil
    );
    break;
  default:
    alert("uuchlaarai tanii ner manai sited baihgui baina");
}
