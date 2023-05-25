import productImg01 from "../images/feeds-dogs-01.jpg";
import productImg02 from "../images/feeds-dogs-02.jpg";
import productImg03 from "../images/feeds-cats-03.jpg";
import productImg04 from "../images/feeds-cats-04.jpg";
import productImg05 from "../images/feeds-birds-05.jpg";
import productImg06 from "../images/feeds-birds-06.jpg";
import productImg07 from "../images/feeds-rodents-07.jpg";
import productImg08 from "../images/feeds-rodents-08.jpg";

import productImg09 from "../images/toys-dogs-09.jpg";
import productImg10 from "../images/toys-dogs-10.jpg";
import productImg11 from "../images/toys-cats-11.jpg";
import productImg12 from "../images/toys-cats-12.jpg";
import productImg13 from "../images/toys-birds-13.jpg";
import productImg14 from "../images/toys-birds-14.jpg";

import productImg15 from "../images/toys-rodents-15.jpg";
import productImg16 from "../images/toys-rodents-16.jpg";

const products = [
  {
    id: "01",
    productName: "Royal Canin Maxi Adult",
    imgUrl: productImg01,
    category: "dogs",
    category2: "Best Sales",
    price: 67,
    shortDesc:
      "Balanced dry food for large dogs (26-45 kg) from 15 months to 5 years, supports a healthy immune system and joint function, extra large granules, facilitates weight control.",
    description:
      "The Royal Canin quality promise All Royal Canin products undergo important quality control to ensure optimal food quality to meet your dog's individual nutritional needs and lifestyle. This means that with Royal Canin Maxi Adult you offer your dog a high-quality and balanced diet.",
    reviews: [
      {
        rating: 4.7,
        text: "The best feed I ever bought!",
      },
    ],
    avgRating: 4.5,
  },

  {
    id: "02",
    productName: "Rocco Chings dried meat snacks",
    imgUrl: productImg02,
    category: "dogs",
    category2: "Best Sales",
    price: 5,
    shortDesc:
      "A favorite treat of many dogs and for good reason: the delicious slices of tender meat fillets are grain-free, low in fat and easy to digest. A real classic snack!",
    description:
      "Rocco Chings are made exclusively from fresh meat - no meat meal, and also contain no animal by-products. The slices are carefully air-dried. High-quality chicken, duck or beef meat is low-fat and very easily digestible. Meat slices do not contain grains and contain only one source of protein. Thanks to this, the slices are also suitable for sensitive or allergic dogs. With Rocco Chings, you will provide your dog with a tasty treat made from pure meat, free of dyes, preservatives and aromas.Thanks to the practical resealable packaging, Rocco Chings dried meat stays fresh for an extra long time, which is why it is an ideal snack between meals: You can just open the package and reward yourself again!",
    reviews: [
      {
        rating: 4.8,
        text: "The best feed I ever bought!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "03",
    productName: "Felix Fantastic 48x85g",
    imgUrl: productImg03,
    category: "cats",
    category2: "Trending Products",
    price: 25,
    shortDesc:
      "Balanced wet food for adult cats, tasty pieces with vegetables in jelly, high-quality ingredients, without artificial colors and preservatives, practical pockets to preserve freshness!",
    description:
      "Cat food is made from high-quality ingredients and does not contain any artificial colors or preservatives. Delicate pieces in jelly look delicious and taste excellent. Even demanding cats will not be persuaded for long. Depending on the selected variant, Felix pouches contain different types of meat or fish, or a combination thereof.",
    reviews: [
      {
        rating: 4.6,
        text: "The best feed I ever bought!",
      },
      {
        rating: 4.9,
        text: "My cat is happy!",
      },
    ],
    avgRating: 4.7,
  },
  
  {
    id: "04",
    productName: "Royal Canin Sterilized in sauce",
    imgUrl: productImg04,
    category: "cats",
    category2: "Best Sales",
    price: 18,
    shortDesc:
      "Royal Canin Sterilized complete wet food for adult, neutered cats from 1 year, fine pieces, supports a healthy urinary system, helps maintain an ideal weight, tastes great.",
    description:
      "Neutered cats generally tend to be overweight, and therefore have special nutritional requirements. Royal Canin Sterilized is specially adapted to the needs of your adult neutered cat. The reduced fat and calorie content facilitates weight control and helps stabilize weight, while the modified mineral content supports urinary tract health. In addition, the unmistakable taste of the food will ensure that even the pickiest individuals run to the bowl.",
    reviews: [
      {
        rating: 4.6,
        text: "My cat is happy!",
      },
      {
        rating: 4.9,
        text: "The best feed I ever bought!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "05",
    productName: "Prestige food for parrots",
    imgUrl: productImg05,
    category: "birds",
    price: 10,
    shortDesc:
      "Food intended for larger parrots, a balanced mix of grains for proper nutrition, supports beautiful plumage and a long, healthy life.",
    description:
      "The quality mix of seeds in the Prestige food for larger parrots is a balanced food that contains all the vital vitamins. This feed creates the best conditions for strong feathers, beautiful, natural colors and a long and healthy life.",
    reviews: [
      {
        rating: 4.6,
        text: "So pleased with this product, the communication, service and super fast delivery. We will be back for more. Thank you.",
      },
      {
        rating: 4.9,
        text: "Always buy this product. The birds love it and there is less mess to clear up because they eat everything! Always excellent delivery and service. Wouldn’t buy from anywhere else.",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "06",
    productName: "Bucktons Wild Bird Food",
    imgUrl: productImg06,
    category: "birds",
    price: 25,
    shortDesc:
      "Our Premium high energy no mess blend will attract a wide range of popular garden birds.",
    description:
      "Bucktons has become rewound for its commitment to quality and consistency in the 200 years it has been selling products. Quality raw materials, sourced from reputable growers across the world ensure a final product boasting superior quality.",
    reviews: [
      {
        rating: 4.6,
        text: "Always buy this product. The birds love it and there is less mess to clear up because they eat everything! Always excellent delivery and service. Wouldn’t buy from anywhere else.",
      },
      {
        rating: 4.9,
        text: "So pleased with this product, the communication, service and super fast delivery. We will be back for more. Thank you.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "07",
    productName: "Versele-Laga Complete Ferret",
    imgUrl: productImg07,
    category: "rodents",
    category2: "Best Sales",
    price: 18.99,
    shortDesc:
      "Food for ferrets Ferret Complete is a complete and tasty food made from extruded pellets, without the content of cereals and gluten, with taurine.",
    description:
      "Food for ferrets Ferret Complete is a complete and tasty food for ferrets, which consists of easily digestible, extruded granules. Many ferrets choose only the parts of the feed mixtures that they like best. In this case, there is a danger that the animal does not receive all the important nutrients it needs for a healthy life. With Ferret Complete, this selection can be prevented by grinding all the ingredients and using a special process to form small granules. The shape, size and structure of the granules are perfectly adapted to the needs of ferrets. Each granule contains the same balanced composition of all necessary nutrients and is, among other things, enriched with vitamins, amino acids, minerals and proteins.",
    reviews: [
      {
        rating: 4.6,
        text: "The best feed I ever bought!",
      },
      {
        rating: 4.9,
        text: "Fast delivery and good quality!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "08",
    productName: "Versele-Laga Cuni Adult Complete",
    imgUrl: productImg08,
    category: "rodents",
    price: 15.99,
    shortDesc:
      "Extruded complete food for rabbits from Versele Laga, with long, unground fibers, high fiber content and low starch content, without cereal grains.",
    description:
      "Specially adapted extrudates allow healthy and balanced feeding of your animal without selecting only some feed components. It is adapted to the nutritional physiology of rabbits and contains only a small amount of starches, because no cereal grains are added to the feed. Thanks to the special processing of the granules, the pieces are particularly digestible and tasty. Long fibers guarantee healthy digestion and help the necessary wear of the teeth.",
    reviews: [
      {
        rating: 4.6,
        text: "The best food for a rabbit.",
      },
      {
        rating: 4.9,
        text: "My bunny goes crazy over this food. He likes it from the start. I highly recommend :)",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "09",
    productName: "Whistling hen made of latex",
    imgUrl: productImg09,
    category: "dogs",
    price:  2.29,
    shortDesc:
      "This toy - a hen, squeaks when pressed or bitten. Fun guaranteed!",
    description:
      "The latex toy is especially suitable for young dogs. These dogs still have very sharp teeth and tend to not only bite the toy around, but try to chew it completely and swallow it at the same time. Latex is easily digestible, which means that even if your dog swallows a small piece of chicken, it does not pose any problem for him. However, it should not be forgotten that any more or less chewed toy should be replaced before the dog eats any part of it.",
    reviews: [
      {
        rating: 4.6,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.7,
  },

  {
    id: "10",
    productName: "Rubber tennis ball toy",
    imgUrl: productImg10,
    category: "dogs",
    category2: "Trending Products",
    price: 5.49,
    shortDesc:
      "A solid ball for dogs with a whistle, a knob-shaped rubber cover and a tennis ball inside, it bounces and is suitable for fetching and other activities.",
    description:
      "Two balls in one for double the fun: A bright yellow tennis ball is hidden inside the solid purple rubber cover. When pressed or bitten, the ball makes a whistling sound because it has a built-in whistle. Thanks to the elastic material, the ball bounces restlessly when it hits the ground.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "11",
    productName: "Aumüller mouse Baldi",
    imgUrl: productImg11,
    category: "cats",
    category2: "Trending Products",
    price: 3.19,
    shortDesc:
      "Ecological toy for cats filled with selected valerian root (valerian) in medical quality and spelled, encouraging.",
    description:
      "The strongly scented Baldi mouse from Aumüller is filled with approx. 5 grams of finely chopped valerian, which has an irresistible aroma. Your cat will want to keep playing with it and playing and playing, you'll see for yourself... It is suitable for every cat and is an ideal alternative, e.g. to a plush mouse with catnip.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "12",
    productName: "Game board for cats",
    imgUrl: productImg12,
    category: "cats",
    price: 7.49,
    shortDesc:
      "A cat toy with faux fur, feathers and a mouse on a coil, with a beeping microchip and with eyes that glow red, reacting to movement.",
    description:
      "A wild toy for wild domestic tigers! An untamed mouse that will surely arouse your four-legged pet's interest in the game and hunting instinct. The toy with feathers, a beeping microchip and fiery red eyes imitates the real behavior of a live mouse.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "13",
    productName: "Trixie Natur natural swing",
    imgUrl: productImg13,
    category: "birds",
    price: 2.99,
    shortDesc:
      "Swing made of natural wood for hanging in a cage.",
    description:
      "Give your bird a home that will provide him with enough colorful entertainment to live a happy bird life. Swings belong to those accessories that should not be missing in the cage.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "14",
    productName: "Trixie playground for parrots",
    imgUrl: productImg14,
    category: "birds",
    price: 14.99,
    shortDesc:
      "Wooden playground for parrots and other small birds.",
    description:
      "The Natural Living playground is an ideal playground for games and climbing. At the Natural Living playground, your feathered friend will be able to satisfy his curiosity effortlessly and work on his acrobatic skills.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "15",
    productName: "Trixie's Cork Burrow",
    imgUrl: productImg15,
    category: "rodents",

    category2: "Trending Products",
    price: 10.99,
    shortDesc:
      "Natural cork play and hide burrow for dwarf rabbits, rodents and reptiles.",
    description:
      "True nature in a rodent's cage: every pet needs a cork burrow: the burrow is intended for hiding and for rest, thanks to the uneven surface it is attractive for climbing. Since the burrow is made of 100% natural cork, it can be digested without any problems.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

  {
    id: "16",
    productName: "Leif's house",
    imgUrl: productImg16,
    category: "rodents",
    price: 12.49,
    shortDesc:
      "House for playing and resting for hamsters!",
    description:
      "The arrangement of the chambers of this house resembles natural underground burrows, and therefore the house can also serve as a pantry for food supplies. A labyrinth exactly as a hamster imagines! Your little friend will thus retain part of his natural behavior. This playhouse has 4 chambers, 2 of which are darker and suitable for sleeping and resting.",
    reviews: [
      {
        rating: 4.8,
        text: "Fast delivery and good quality!",
      },
      {
        rating: 4.9,
        text: "My pet looks pleased. Thank you!",
      },
    ],
    avgRating: 4.8,
  },

];

export default products;
