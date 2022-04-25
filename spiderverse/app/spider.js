class spiderActor {
    constructor (name, edad, actor, numMovies, studio) {
      this.name = name
      this.edad = edad
      this.actor = actor
      this.numMovies = numMovies
      this.studio = studio
    }

    getInfo(name,studio) {
        
        return `Soy ${this.actor} de ${this.studio}`
    }

  }

  
  // Esta línea nos permite exportar nuestra clase
  module.exports = spiderActor //Exportar modulo