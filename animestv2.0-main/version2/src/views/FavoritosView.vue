<template>
  <main>
    <div id="my-fav">
      <h2>Meus favoritos</h2>
    </div>
    <div id="blocos-fav">
      <div id="favs-prin">
        <img src="../components/img/anime-gaiken.jpeg" />
      </div>
      <div id="favs">
        <img src="../components/img/anime-7.jpeg" />
      </div>
      <div id="favs">
        <img src="../components/img/anime-6.jpeg" />
      </div>
      <div id="favs">
        <img src="../components/img/anime-3.jpeg" />
      </div>
      <div id="favs">
        <img src="../components/img/anime-9.jpeg" />
      </div>
      <div id="favs">
        <img src="../components/img/anime-1.jpeg">
      </div>
      <div id="favs-ult">
        <img src="../components/img/anime-8.jpeg" />
      </div>
    </div>
  </main>  
</template>
<style>
#main{
  padding-right: 150px;
}
#my-fav h2 {
  color: #ffffff;
  margin-top: 40px;
  margin-left: 30px;
  font-family: Arial, Helvetica, sans-serif;
  display: block;
}
#blocos-fav {
  display: flex;
}
#favs img{
  margin-left: 30px;
  margin-top: 30px;
  margin-right: 35px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}
#favs-prin img{
  margin-left: 30px;
  margin-top: 30px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}
#favs-ult img{
  margin-left: 30px;
  margin-right: 35px;
  margin-top: 30px;
  width: 200px;
  height: 260px;
  border-radius: 10px;
}
</style>