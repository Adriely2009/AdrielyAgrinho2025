let estado = 0; // 0-8: etapas anteriores, 9: milho maduro, 10: colheita
let sementes = [];
let plantas = [];
let contadorCrescimento = 0;
let milhoMaduro = false; // Variável para controlar se o milho está maduro

function setup() {
  createCanvas(600, 400);
  background(139, 69, 19);
}

function draw() {
  background(139, 69, 19);

  if (estado === 0) {
    mostrarCampoVazio();
    textoInstrucao("Clique para preparar o solo");
  } else if (estado === 1) {
    mostrarArado();
    textoInstrucao("Clique para nivelar o solo");
  } else if (estado === 2) {
    mostrarGradagem();
    textoInstrucao("Clique para adubar o solo (opcional)");
  } else if (estado === 3) {
    mostrarAdubacao();
    textoInstrucao("Clique para plantar as sementes");
  } else if (estado === 4) {
    mostrarPlantio();
    textoInstrucao("Clique para a germinação");
  } else if (estado === 5) {
    mostrarGerminacao();
    textoInstrucao("Clique para o crescimento");
  } else if (estado === 6) {
    mostrarCrescimento();
    textoInstrucao("Clique para a formação da espiga");
  } else if (estado === 7) {
    mostrarFormacaoEspiga();
    textoInstrucao("Clique para o desenvolvimento da espiga");
  } else if (estado === 8) {
    mostrarDesenvolvimentoEspiga();
    textoInstrucao("Clique para o amadurecimento do milho");
  } else if (estado === 9) {
    mostrarMilhoMaduro();
    textoInstrucao("Clique para colher o milho");
    milhoMaduro = true;
  } else if (estado === 10) {
    mostrarColheita();
    textoInstrucao("Colheita realizada!");
  }
}

function mousePressed() {
  if (estado < 10) {
    estado++;
    if (estado === 5) {
      iniciarGerminacao();
    } else if (estado === 6) {
      iniciarCrescimento();
    } else if (estado === 7) {
      iniciarFormacaoEspiga();
    } else if (estado === 8) {
      iniciarDesenvolvimentoEspiga();
    }
  }
}

function textoInstrucao(texto) {
  fill(255);
  textSize(16);
  textAlign(CENTER);
  text(texto, width / 2, height - 20);
}

function mostrarCampoVazio() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
}

function mostrarArado() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  stroke(0);
  for (let i = 60; i < width - 50; i += 20) {
    line(i, 50, i - 10, height - 50);
  }
  noStroke();
}

function mostrarGradagem() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let i = 60; i < width - 50; i += 15) {
    for (let j = 60; j < height - 50; j += 15) {
      point(i + random(-5, 5), j + random(-5, 5));
    }
  }
}

function mostrarAdubacao() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let i = 70; i < width - 70; i += 25) {
    for (let j = 70; j < height - 70; j += 25) {
      fill(255, 215, 0);
      ellipse(i, j, 5, 5);
    }
  }
}

function mostrarPlantio() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  sementes = [];
  fill(255, 255, 0);
  for (let i = 80; i < width - 80; i += 30) {
    for (let j = 80; j < height - 80; j += 30) {
      ellipse(i, j, 8, 8);
      sementes.push(createVector(i, j));
    }
  }
  plantas = [];
  contadorCrescimento = 0;
  milhoMaduro = false;
}

function iniciarGerminacao() {
  plantas = sementes.map(pos => ({
    pos: pos.copy(),
    altura: 5,
    cor: color(0, 150, 0),
    espiga: null
  }));
}

function mostrarGerminacao() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let planta of plantas) {
    fill(planta.cor);
    rect(planta.pos.x - 2, height - 50 - planta.altura, 4, planta.altura);
  }
}

function iniciarCrescimento() {
  // Podemos adicionar mais detalhes aqui
}

function mostrarCrescimento() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let planta of plantas) {
    planta.altura += 0.5;
    fill(planta.cor);
    rect(planta.pos.x - 3, height - 50 - planta.altura, 6, planta.altura);
    fill(0, 180, 0);
    ellipse(planta.pos.x, height - 60 - planta.altura, 8, 5);
  }
}

function iniciarFormacaoEspiga() {
  for (let planta of plantas) {
    planta.espiga = {
      altura: 5,
      cor: color(255, 255, 0)
    };
  }
}

function mostrarFormacaoEspiga() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let planta of plantas) {
    fill(planta.cor);
    rect(planta.pos.x - 4, height - 50 - planta.altura, 8, planta.altura);
    fill(0, 180, 0);
    ellipse(planta.pos.x, height - 60 - planta.altura, 10, 6);
    if (planta.espiga) {
      fill(planta.espiga.cor);
      rect(planta.pos.x - 2, height - 70 - planta.altura - planta.espiga.altura, 4, planta.espiga.altura);
    }
  }
}

function iniciarDesenvolvimentoEspiga() {
  // Podemos adicionar mais detalhes ao desenvolvimento da espiga
}

function mostrarDesenvolvimentoEspiga() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let planta of plantas) {
    planta.altura += 0.3;
    fill(planta.cor);
    rect(planta.pos.x - 5, height - 50 - planta.altura, 10, planta.altura);
    fill(0, 180, 0);
    ellipse(planta.pos.x, height - 60 - planta.altura, 12, 7);
    if (planta.espiga) {
      planta.espiga.altura += 1;
      fill(planta.espiga.cor);
      rect(planta.pos.x - 3, height - 70 - planta.altura - planta.espiga.altura, 6, planta.espiga.altura);
      fill(255, 230, 0);
      for (let i = -2; i <= 2; i += 2) {
        for (let j = -planta.espiga.altura / 2 + 5; j < planta.espiga.altura / 2; j += 3) {
          ellipse(planta.pos.x + i, height - 70 - planta.altura - j, 2, 2);
        }
      }
    }
  }
}

function mostrarMilhoMaduro() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  for (let planta of plantas) {
    fill(0, 120, 0);
    rect(planta.pos.x - 6, height - 50 - planta.altura - 10, 12, planta.altura + 10);
    fill(0, 150, 0);
    ellipse(planta.pos.x, height - 65 - planta.altura, 14, 8);
    if (planta.espiga) {
      fill(255, 200, 0);
      rect(planta.pos.x - 4, height - 75 - planta.altura - planta.espiga.altura - 5, 8, planta.espiga.altura + 5);
      fill(255, 230, 0);
      for (let i = -3; i <= 3; i += 1.5) {
        for (let j = -planta.espiga.altura / 2 + 5; j < planta.espiga.altura / 2 + 5; j += 2) {
          ellipse(planta.pos.x + i, height - 75 - planta.altura - j, 3, 3);
        }
      }
    }
  }
}

function mostrarColheita() {
  fill(101, 67, 33);
  rect(50, 50, width - 100, height - 100);
  fill(184, 134, 11); // Cor marrom claro para representar o milho colhido
  rect(width / 2 - 50, height / 2 - 30, 100, 60); // Desenha um retângulo para o milho colhido
  fill(255, 230, 0);
  for (let i = width / 2 - 40; i < width / 2 + 40; i += 15) {
    for (let j = height / 2 - 20; j < height / 2 + 20; j += 10) {
      ellipse(i, j, 8, 8); // Desenha alguns grãos de milho
    }
  }
}