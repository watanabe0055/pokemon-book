export const fetchPokemonData = async () => {
  const path = "http://localhost:8787/v1/pokemon?id=1&status=1";
  const getData = await fetch(path);
  const data = await getData.json();
  console.log(data);
};
