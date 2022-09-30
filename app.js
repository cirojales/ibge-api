(async () => {
  const res = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/regioes?orderBy=nome"
  );
  const regioes = await res.json();
  let stringRegioes = `<option>-- Selecione --</option>`;
  regioes.forEach((cadaRegiao) => {
    stringRegioes += `
      <option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>
    `;
  });
  regiao.innerHTML = stringRegioes;
})();

regiao.addEventListener("change", async () => {
  const res = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${regiao.value}/estados?orderBy=nome`
  );
  const estados = await res.json();
  let stringEstados = `<option>-- Selecione --</option>`;
  estados.forEach((cadaEstado) => {
    stringEstados += `
      <option value="${cadaEstado.id}">${cadaEstado.nome}</option>
    `;
  });
  estado.innerHTML = stringEstados;
});

estado.addEventListener("change", async () => {
  const res = await fetch(
    `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado.value}/municipios?orderBy=nome`
  );
  const cidades = await res.json();
  let stringCidades = `<option>-- Selecione --</option>`;
  cidades.forEach((cadaCidade) => {
    stringCidades += `
      <option value="${cadaCidade.id}">${cadaCidade.nome}</option>
    `;
  });
  cidade.innerHTML = stringCidades;
});