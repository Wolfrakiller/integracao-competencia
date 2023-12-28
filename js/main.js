import { getAllBosses } from "./service.js";

const initGrafico = () => {

};

getAllBosses().then(bosses => {
  const sectionChefes = document.getElementById("chefes");
  bosses.forEach(boss => {
    let id = boss.id;
    Number(id);
    const bossElement = document.createElement("div");
    bossElement.innerHTML = `
        <div class="boss">
      <div>
        <H3>${boss.nome}</H3>
        <img class="fera" src="${boss.img}" alt="">
      </div>
      <div class="desc-e-menu">
        <p class="descricao">${boss.descricao}</p>
        


        <div class="menu">
          <div class="butao">
            <button id="${id}">criar</button>
            <button id="modificar-grafico${id}">Modificar</button>
            <button id="apagar-grafico${id}">Apagar</button>
          </div>


          <aside>
            <strong id="grafico${id}" class="grafico">
              <p>HP</p>
              <span>0 <progress id="hp${id}" value="0" max="100"></progress>${boss.HP}</span>
              <p>Dano</p>
              <span>0 <progress id="dano${id}" value="0" max="100"></progress>${boss.Dano}</span>
              <p>Resistencia</p>
              <span>0 <progress id="resistencia${id}" value="0" max="100"></progress>${boss.Resistencia}</span>
            </strong>
          </aside>
        </div>
      </div>

    </div>
        `;
    sectionChefes.appendChild(bossElement);
    let criar = document.getElementById(id);
    let modificar = document.getElementById("modificar-grafico" + id);
    let apagar = document.getElementById("apagar-grafico" + id)
    let grafico = document.getElementById("grafico" + id);
    let hpValor = document.getElementById("hp" + id);
    let danoValor = document.getElementById("dano" + id);
    let resistenciaValor = document.getElementById("resistencia" + id);
    criar.onclick = () => {
      grafico.style.display = "initial"
    };
    modificar.onclick = () => {
      hpValor.value = boss.HPor;
      danoValor.value = boss.DanoPor;
      resistenciaValor.value = boss.ResistenciaPor;
    };
    apagar.onclick = () => {
      grafico.style.display = "none";
      hpValor.value = 0;
      danoValor.value = 0;
      resistenciaValor.value = 0;
    };
  });
});
