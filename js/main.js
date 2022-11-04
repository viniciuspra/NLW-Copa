function createGame(pais1, hora, pais2) {
  return `
    <img src="svg/icon=${pais1}.svg" alt="flag ${pais1}">
      <strong>${hora}</strong>
    <img src="svg/icon=${pais2}.svg" alt="flag ${pais2}">
  `
}

function createCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
        <ul>
          <li>
              ${games}
          </li>
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
          createGame("brazil", "16:00", "serbia")
        )}

        ${createCard(
          "28/11",
          "segunda",
          createGame("brazil", "13:00", "switzerland") 
        )}

        ${createCard(
          "02/12",
          "sexta",
          createGame("brazil", "16:00", "cameroon")
        )}
      </main>
`
