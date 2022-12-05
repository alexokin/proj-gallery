"use strict";

var gProjs = [
  {
    id: "minesweeper",
    name: "Minesweeper",
    title: "Better push those boxes",
    desc: "lorem ipsum lorem ipsum lorem ipsum",
    url: "https://alexokin.github.io/minesweeper-sprint1/",
    publishedAt: 1448693940000,
    labels: ["Matrixes", "keyboard events"],
  }
];


function getProjs() {
    return gProjs
}

function getProjById(projId) {
    var project = gProjs.find(project => projId === project.id)
    return project
}