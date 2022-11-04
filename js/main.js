function createGame(pais1, hora, pais2) {
  return `
  <li>
    <img src="svg/icon=${pais1}.svg" alt="bandeira ${pais1}">
      <strong>${hora}</strong>
    <img src="svg/icon=${pais2}.svg" alt="bandeira ${pais2}">
  </li>
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
        <ul>
              ${games}
        </ul>
    </div>
`
}

document.querySelector("#app").innerHTML = `
      <header>  
        <img src="svg/logo-nlw-copa.svg" alt="logo da NLW">
      </header>
      <main class="cards">
        ${createCard(
          "24/11",
          "quinta",
          createGame("cameroon", "07:00", "switzerland") +
            createGame("uruguay", "10:00", "south korea") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
        )}

        ${createCard(
          "28/11",
          "segunda",
          createGame("cameroon", "07:00", "serbia") +
            createGame("south korea", "10:00", "ghana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguay")
        )}

        ${createCard(
          "02/12",
          "sexta",
          createGame("portugal", "12:00", "south korea") +
            createGame("ghana", "12:00", "uruguay") +
            createGame("serbia", "16:00", "switzerland") +
            createGame("brazil", "16:00", "cameroon")
        )}
      </main>
`
