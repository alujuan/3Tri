import axios from "axios";
export default class AnimesApi {
  async buscarTodosOsAnimes() {
    const response = await axios.get("http://localhost:4000/animes");
    return response.data;
  }
  async pesquisarAnimes(id) {
    const response = await axios.get(
      `http://localhost:4000/animes/${id}`
    );
    return response.data;
  }
  async atualizarAnime(anime) {
    const response = await axios.get(
      "http://localhost:4000/animes/${anime.id}",
      anime
    );
    return response.data.results.slice(0, 4);
  }
}
