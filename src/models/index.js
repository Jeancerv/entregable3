const Actor = require("./Actor");
const Director = require("./Director");
const Movie = require("./Movie");
const genre = require("./genre");

Movie.belongsToMany(Director, {through: "MovieDirector"})
Director.belongsToMany(Movie, {through: "MovieDirector"})

Movie.belongsToMany(genre, {through: "Moviegenre"})
genre.belongsToMany(Movie, {through: "Moviegenre"})

Movie.belongsToMany(Actor, {through: "MovieActor"})
Actor.belongsToMany(Movie, {through: "MovieActor"})