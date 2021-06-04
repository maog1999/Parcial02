class Pelicula{
    constructor(pelicula){
        this.pelicula = pelicula;
    }

    draw = () =>{
        //Espacioo para crear componentes
        let comp = document.createElement('div');
        comp.id = "compContainer";

        let comp2 = document.createElement('div');
        comp2.id = "compContainer2";

        let ratingContainer = document.createElement('div');
        ratingContainer.id = "ratingContainer"

        let movieName = document.createElement('h3');
        movieName.innerHTML = this.pelicula.nameP;

        let rating = document.createElement('h3');
        rating.innerHTML = this.pelicula.rate;

        let btnRate1 = document.createElement('button');
        btnRate1.innerHTML = '<img src="imagenes/'+"star"+'.png">';

        let btnRate2 = document.createElement('button');
        btnRate2.innerHTML = '<img src="imagenes/'+"star"+'.png">';

        let btnRate3 = document.createElement('button');
        btnRate3.innerHTML = '<img src="imagenes/'+"star"+'.png">';

        let btnRate4 = document.createElement('button');
        btnRate4.innerHTML = '<img src="imagenes/'+"star"+'.png">';

        let btnRate5 = document.createElement('button');
        btnRate5.innerHTML = '<img src="imagenes/'+"star"+'.png">';

        btnRate1.addEventListener('click', () =>{
            let puntaje = {
                rate : 1,
            }
            database.ref('Nominadas/voto/'+this.pelicula.nameP).push().set(puntaje);
            alert('Ha votado con exito!');
        });

        btnRate2.addEventListener('click', () =>{
            let puntaje = {
                rate : 2,
            }
            database.ref('Nominadas/voto/'+this.pelicula.nameP ).push().set(puntaje);
            alert('Ha votado con exito!');
        });
        btnRate3.addEventListener('click', () =>{
            let puntaje = {
                rate : 3,
            }
            database.ref('Nominadas/voto/'+this.pelicula.nameP).push().set(puntaje);
            alert('Ha votado con exito!');
        });
        btnRate4.addEventListener('click', () =>{
            let puntaje = {
                rate : 4,
            }
            database.ref('Nominadas/voto/'+this.pelicula.nameP  ).push().set(puntaje);
            alert('Ha votado con exito!');
        });
        btnRate5.addEventListener('click', () =>{
            let puntaje = {
                rate : 5,
            }
            database.ref('Nominadas/voto/'+this.pelicula.nameP ).push().set(puntaje);
            alert('Ha votado con exito!');
        });

        comp2.appendChild(movieName);
        comp2.appendChild(rating);

        ratingContainer.appendChild(btnRate1);
        ratingContainer.appendChild(btnRate2);
        ratingContainer.appendChild(btnRate3);
        ratingContainer.appendChild(btnRate4);
        ratingContainer.appendChild(btnRate5);

        comp.appendChild(comp2);
        comp.appendChild(ratingContainer);

        return comp;

    }
}