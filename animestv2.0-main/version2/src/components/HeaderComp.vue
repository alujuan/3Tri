<template>
  <header>
    <div id="logo">
      <img class="anime" src="../components/img/anime-TV.jpeg" alt="" />
    </div>
    <div class="links-categorias">
      <span><RouterLink to="/">Home</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/animes">Animes</RouterLink></span>
      <span>|</span>
      <span><RouterLink to="/favoritos">Favoritos</RouterLink></span>
    </div>
    <div class="pesquisa">
      <input placeholder="Buscar..." type="text" />
      <button type="submit" class="search">
        <img src="../components/img/lupa.png">
      </button>
    </div>  
  </header>
  <hr/>
</template>
<style>
header span {
  padding: 0px 20px;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.anime {
 width: 75px;
 margin: 0;
 position: relative;
}
.pesquisa {
  float: right;
  align-items: center;
  padding: 15px 24px;
}
.pesquisa img{
  width: 35px;
}
.pesquisa input{
  height: 25px;
  padding-left: 5px;
  font-family:'Times New Roman', Times, serif;
  font-size: 15px;
  border-radius: 10px;
  border: none;
}
.search{
  background: transparent;
  border: none;
  margin-left: -35px; 
}
.search img{
  width: 20px;
  height: 2 0px;
  object-fit: cover;
  margin-right: 10px;
  cursor: pointer;
}

</style>
