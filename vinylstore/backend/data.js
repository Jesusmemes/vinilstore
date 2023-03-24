import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Marco',
      email: 'marco@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Gigi',
      email: 'gigi@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Verdena ',
      slug: 'verdena',
      image: '/images/p1.jpg',
      brand: 'VERDENA',
      category: 'Grunge',
      description:
        'album di esordio, in pieno stile grunge, che ha lanciato la band verso il successo anche grazie alle leggendarie performance su MTV.',
      price: 25,
      countInStock: 10,
      rating: 3.5,
      numReviews: 10,
    },
    {
      // _id: '2',
      name: 'Jar of flies',
      slug: 'jar-of-flies',
      image: '/images/p2.jpg',
      brand: 'Alice in Chains',
      category: 'Grunge',
      description:
        'Jar of Flies è il terzo EP del gruppo statunitense Alice in Chains, pubblicato il 25 gennaio 1994 dalla Columbia Records.[1]\n\nÈ stato il primo EP della storia a raggiungere la posizione numero uno nella classifica statunitense Billboard 200.[5]\n\nIn alcuni paesi è stato distribuito come edizione limitata in doppio vinile insieme al precedente EP Sap (1992).',
      price: 49,
      countInStock: 0,
      rating: 4,
      numReviews: 10,
    },
    {
      // _id: '3',
      name: 'Ride the Lightning',
      slug: 'ride-the-lightning',
      image: '/images/p3.jpg',
      brand: 'Metallica',
      category: 'Trash Metal',
      description:
        "Ride the Lightning è il secondo album in studio del gruppo musicale statunitense Metallica, pubblicato il 27 luglio 1984 dalla Megaforce Records.\n\nSi tratta dell'ultimo disco pubblicato con la Megaforce Records, dopodiché il gruppo firmò per la Elektra Records il 12 settembre dello stesso anno, la quale ripubblicò il disco il 19 novembre.\n\nNel giugno del 2017 la rivista Rolling Stone ha collocato l'album alla undicesima posizione dei 100 migliori album metal di tutti i tempi.",
      price: 30,
      countInStock: 11,
      rating: 5,
      numReviews: 14,
    },
    {
      // _id: '4',
      name: 'Toxicity',
      slug: 'toxicity',
      image: '/images/p4.jpg',
      brand: 'System Of A Down',
      category: 'Nu Metal',
      description:
        "Toxicity è il secondo album in studio dei System of a Down, pubblicato il 4 settembre 2001 dalla Columbia Records. Toxicity, rispetto all'album d'esordio, presenta più melodia e parti cantate. Categorizzato principalmente come alternative metal e nu metal, Toxicity include anche elementi presi in prestito dal folk, dal progressive rock, dal jazz, dalla musica armena e greca, incluso l'uso prominente di strumenti come il sitar, il banjo, le tastiere e il piano. L'album contiene una vasta gamma di temi politici e non politici come la sovrappopolazione delle prigioni, la CIA, l'ambiente, il sesso di gruppo, la tossicodipendenza e le groupie.",
      price: 35,
      countInStock: 5,
      rating: 4.5,
      numReviews: 10,
    },
  ],
};
export default data;
