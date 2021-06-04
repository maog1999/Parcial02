const pelisContainer = document.getElementById('pelisContainer');



var starCountRef = firebase.database().ref('Nominadas/movies/Mank');
starCountRef.on('value', (snapshot) => {
  const data = snapshot.val();
  if (data == null){
    let peli1 = {
        nameP: "Mank",
        rate: 0,
    }

    database.ref('Nominadas/movies/'+"Mank").set(peli1);


    let peli2 = {
        nameP: "Minari",
        rate: 0,
    }

    database.ref('Nominadas/movies/'+"Minari").set(peli2);

    let peli3 = {
        nameP: "Nomadland",
        rate: 0,
    }

    database.ref('Nominadas/movies/'+"Nomadland").set(peli3);

    let peli4 = {
        nameP: "SoundOfMetal",
        rate: 0,
    }

    database.ref('Nominadas/movies/'+"SoundOfMetal").set(peli4);

    let peli5 = {
        nameP: "TheFather",
        rate: 0,
    }

    database.ref('Nominadas/movies/'+"TheFather").set(peli5);
    
}
});

database.ref('Nominadas/movies').on('value', function(data){
    pelisContainer.innerHTML = '';

    data.forEach(
        nomis =>{
            let infoNomi = nomis.val();
            let pelicula = new Pelicula(infoNomi);

            pelisContainer.appendChild(pelicula.draw());
        }
    )
});

database.ref('Nominadas/voto').on('value', function(data){
    data.forEach(pelis =>{
        
        let nameKey = pelis.key;

        database.ref('Nominadas/voto/' + nameKey).on('value', function(infoPeli){
            //Varibales contadoras
            let nPeliculas = 0;
            let pelisTotal = 0;
            let childPelis = 0;
            let ratingPromedio = 0;
            let nChilds = 0;

            infoPeli.forEach(function(user){
                childPelis = user.numChildren();
                let k = user.key;
                let v = user.val();

                nPeliculas = v.rate;

                pelisTotal = nPeliculas + pelisTotal;
                nChilds = childPelis + nChilds;
            });
            ratingPromedio = (pelisTotal/nChilds);
            //console.log(ratingPromedio);

            let actuPel = {
                nameP : nameKey,
                rate : ratingPromedio,
            }
            database.ref('Nominadas/movies/' + nameKey).set(actuPel);

        });
    });
});

