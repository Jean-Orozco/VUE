// src/stores/games.js
import { defineStore } from 'pinia'

// Importa aquí todas las imágenes que vas a usar
import ina1 from '@/assets/inazuma/ina1.jpg'
import ina2 from '@/assets/inazuma/ina2.jpg'
import ina3 from '@/assets/inazuma/ina3.jpg'
import ingo from '@/assets/inazuma/inazumago.jpg'
import ingo2 from '@/assets/inazuma/inazumago2.jpg'
import ingo3 from '@/assets/inazuma/inazumago3.jpg'
import istrikers from '@/assets/inazuma/inazumastrik.webp'
import ares from '@/assets/inazuma/inazumasw.webp'

export const useGamesStore = defineStore('games', {
  state: () => ({
    games: [
      { title: "Inazuma Eleven",            year: 2008, image: ina1,     description: "El primer joc, on comença tot amb l'equip Raimon." },
      { title: "Inazuma Eleven 2: Ventisca...", year: 2009, image: ina2,     description: "Una nova amenaça alienígena amenaça el futbol!" },
      { title: "Inazuma Eleven 3",            year: 2010, image: ina3,     description: "El mundial de futbol juvenil amb equips d'arreu del món." },
      { title: "Inazuma Eleven GO",           year: 2012, image: ingo,     description: "Nova generació de jugadors liderats per Arion Sherwind." },
      { title: "Inazuma Eleven GO Chrono...", year: 2013, image: ingo2,    description: "Viatges en el temps per salvar el futur del futbol!" },
      { title: "Inazuma Eleven GO Galaxy",    year: 2014, image: ingo3,    description: "L'equip Earth ha de defensar la Terra en un torneig galàctic." },
      { title: "Inazuma Eleven Strikers",     year: 2011, image: istrikers,description: "Versió d'acció per a Wii amb partits ràpids i espectaculars." },
      { title: "Inazuma Eleven Ares",         year: 2018, image: ares,    description: "Nova línia temporal després d'Inazuma Eleven original. Només al Japó." },
    ]
  }),
  actions: {
    updateGame(index, { title, year, description }) {
      if (this.games[index]) {
        this.games[index].title = title
        this.games[index].year = year
        this.games[index].description = description
      }
    }
  }
})
