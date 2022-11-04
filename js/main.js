function createGame(pais1, hora, pais2) {
  return `
  <li>
    <abbr title="${pais1}"><img src="svg/icon=${pais1}.svg" alt="bandeira ${pais1}"></abbr>
      <strong>${hora}</strong>
    <abbr title="${pais2}"><img src="svg/icon=${pais2}.svg" alt="bandeira ${pais2}"></abbr>
  </li>
  `
}
let delay = -0.4
function createCard(date, day, games) {
  delay += 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
        <ul>
              ${games}
        </ul>
    </div>
`
}

document.querySelector(".cards").innerHTML = 

        createCard(
          "24/11",
          "quinta",
          createGame("cameroon", "07:00", "switzerland") +
            createGame("uruguay", "10:00", "south korea") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
        ) +

        createCard(
          "28/11",
          "segunda",
          createGame("cameroon", "07:00", "serbia") +
            createGame("south korea", "10:00", "ghana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguay")
        ) +

        createCard(
          "02/12",
          "sexta",
          createGame("portugal", "12:00", "south korea") +
            createGame("ghana", "12:00", "uruguay") +
            createGame("serbia", "16:00", "switzerland") +
            createGame("brazil", "16:00", "cameroon")
        )
