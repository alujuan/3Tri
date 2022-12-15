<script>
import AnimesApi from "@/api/animes.js";
const animesApi = new AnimesApi();
export default {
  data() {
    return {
      anime: {},
      animes: [],
    };
  },
  methods: {
    async recarregar() {
      this.animes = await animesApi.buscarTodosOsAnimes();
    },
    // methods: {
    //   if (this.anime.id) {
    //     await animesApi
    //   }
    // }
  },
};
</script>

<template>
  <main>
    <div id="legen-pt">
      <h2>Animes legendados</h2>
    </div>
    <div id="blocos-leg">
      <div id="ani-prin">
        <img src="../components/img/anime-gaiken.jpeg" />
      </div>
      <div id="animes-len">
        <img src="../components/img/anime-7.jpeg" />
      </div>
      <div id="animes-len">
        <img src="../components/img/anime-6.jpeg" />
      </div>
      <div id="animes-len">
        <img src="../components/img/anime-3.jpeg" />
      </div>
      <div id="animes-len">
        <img src="../components/img/anime-7.jpeg" />
        <img src="../components/img/anime-6.jpeg" />
      </div>
      <div id="animes-len">
        <img src="../components/img/anime-9.jpeg" />
      </div>
      <div id="ani-ult">
        <img src="../components/img/anime-8.jpeg" />
      </div>
    </div>
    <br />
    <br />
    <div id="dub-pt">
      <h2>Animes dublados</h2>
    </div>
    <div id="blocos-dub">
      <div id="ani-prin">
        <img src="../components/img/anime-gaiken.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-7.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-6.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-3.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-7.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-9.jpeg" />
      </div>
      <div id="ani-ult">
        <img src="../components/img/anime-8.jpeg" />
      </div>
    </div>
    <br />
    <div id="blocos-dub">
      <div id="ani-prin">
        <img src="../components/img/anime-gaiken.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-7.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-6.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-3.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-9.jpeg" />
      </div>
      <div id="animes-dub">
        <img src="../components/img/anime-7.jpeg" />
      </div>
    </div>
  </main>
</template>

<style>
#main {
  padding-right: 150px;
}
#legen-pt h2 {
  color: #ffffff;
  margin-top: 40px;
  margin-left: 30px;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
}
#blocos-leg {
  display: flex;
}
#animes-len img {
  margin-left: 30px;
  margin-top: 30px;
  margin-right: 35px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}

#ani-prin img {
  margin-left: 30px;
  margin-top: 30px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}
#ani-ult img {
  margin-left: 30px;
  margin-right: 35px;
  margin-top: 30px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}

#dub-pt h2 {
  color: #ffffff;
  margin-top: 40px;
  margin-left: 30px;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
}
#blocos-dub {
  display: flex;
}
#animes-dub img {
  margin-left: 30px;
  margin-top: 30px;
  margin-right: 35px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}
</style>
