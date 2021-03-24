const ol = document.querySelector("ol");
const movies = [
    {
        name: "Captian America: The First Avenger",
        year: 2011,
        director: "Joe Johnston",
        picture:"https://images-na.ssl-images-amazon.com/images/I/91zlVmXTLOL._SL1500_.jpg",
    },
    {
        name: "Black Panther",
        year: 2018,
        director: "Ryan Coogler",
        picture:"https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
    },
    {
        name: "Jumanji: Welcome to the Jungle",
        year: 2017,
        director: "Jake Kasdan",
        picture:"https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/jumanji-welcome-to-the-jungle_rating.jpg?itok=uaeK2rbI",
    }
]

const template = movies.map(movies => `
<li>
    <P>Name: ${movies.name}</p>
    <P>Year: ${movies.year}</p>
    <P>Director: ${movies.director}</p>
    <image src = "${movies.picture}" height = "400">
</li>
`);

ol.innerHTML = template.join("");