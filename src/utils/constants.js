import parrotPicture1 from '../images/about-us-picture-kira-and-me.jpg';
import parrotPicture2 from '../images/about-us-pic-kira2.jpg';
import parrotPicture3 from '../images/about-us-pic-kira3.jpg';

const ARTICLE_ABOUT_US = {
  title: 'About us',
  pictures: [parrotPicture1, parrotPicture2, parrotPicture3],
  content: [
    {
      id: 1,
      paragraph: [
        'Hello! This site was built by me. My name is Dasha, and I am a frontend developer with a passion for parrots. In the past, I worked as a journalist, but my love for these beautiful creatures led me to combine my skills in web development with my expertise in parrot care. At the heart of my journey is Kira, my beloved 9-year-old female Cockatiel.',
      ],
    },
    {
      id: 2,
      paragraph: [
        'As a hand-reared bird, Kira has become an integral part of my life. She adores carrots, and cucumbers, and spends quality time perched on my shoulder. Her favorite toy is a little bell that brings out her playful nature.',
      ],
    },
    {
      id: 3,
      paragraph: [
        "Through this website, I aim to share my knowledge and experience in parrot care. Whether you're a new parrot owner or an experienced enthusiast, my blog platform is here to provide valuable insights, tips, and resources on maintaining a happy and healthy bond with your feathered companion.",
      ],
    },
    {
      id: 4,
      paragraph: [
        'Join me on this adventure as we explore the intricacies of parrot care together. Together, we can create a thriving community of parrot enthusiasts, dedicated to providing the best possible care for our beloved avian.',
      ],
    },
  ],
  type: 'default',
};

const POP_CULTURE_ARTICLE = {
  id: 'parrots_pop_culture',
  type: 'extended',
  tags: ['top10'],
  title:
    'Parrots in Popular Culture: 10 Most Famous birds In Media, Movies, Cartoons + Books ',
  subTitle:
    'This article is presented in partnership with the "MassCult" Podcast ',
  leadParagraph:
    'We will delve into the captivating world of parrots in mass media, exploring the artistic expressions and literary tales that have elevated these feathered wonders to cultural icons.',
  pictures: [
    'https://static.toiimg.com/thumb/msid-99791574,imgsize-45974,width-800,height-600,resizemode-75/99791574.jpg',
  ],
  content: [
    {
      id: 1,
      headline: 'Paulie',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTYwMzIwNTYxMV5BMl5BanBnXkFtZTcwMzc4MzA3NA@@._V1_.jpg',
      paragraph: [
        "In the heartwarming film 'Paulie' (1998), a chatty parrot, recounts his extraordinary voyage while seeking his beloved owner. Paulie is a rare case of a live-action movie headlined by a parrot. Released in 1998, Paulie spins the yarn of a talking parrot that goes on a globe-trotting journey, touching the lives of everybody he meets. Through his witty quips and resourceful escapades, Paulie showcases the profound companionship between humans and animals.",
      ],
    },
    {
      id: 2,
      headline: 'Dead Parrot',
      picture:
        'https://i0.wp.com/hwfielding.com/wp-content/uploads/2022/01/AndNowForSomethingCompletelyDifferent-uhpfENeh-subtitled.jpeg?fit=700%2C394&ssl=1',
      paragraph: [
        "Dead Parrot Sketch (Monty Python's Flying Circus) is one of the most popular Monty Python sketches and in general in the history of British television humor. The comedic masterpiece features a customer attempting to return a deceased parrot to a pet shop. The sketch's absurdity and wordplay have made it an iconic moment in comedy history.",
      ],
    },
    {
      id: 3,
      headline: 'Iago',
      picture:
        'https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/04/SNL-Cast-Voices-Gilbert-Gottfried-1.jpg',
      paragraph: [
        'Is any fictional parrot more beloved and celebrated than Iago, the mischievous red lory from Disney’s animated classic Aladdin? The incarnation of the character voiced by Gilbert Gottfried is firmly ingrained in the fabric of pop culture. Iago is a veritable treasure trove of memorable moments and quotable lines from his numerous appearances in movies, cartoons, and video games. He’s arguably the most famous parrot of all time.',
      ],
    },
    {
      id: 4,
      headline: 'Blu and Jewel',
      picture:
        'https://c4.wallpaperflare.com/wallpaper/357/258/340/blu-jewel-in-rio-2-wallpaper-preview.jpg',
      paragraph: [
        'Rio was a 2011 animated movie that revolves around Blu and Jewel, a pair of Spix’s macaws voiced by Jesse Eisenberg and Anne Hathaway, that must escape being smuggled out of Brazil as part of an illegal bird trade. A sequel followed in 2014 that investigated the fundamental differences between life in the wild and captivity for parrots. Both movies make interesting viewing for youngsters, highlighting serious avian issues among the bright colors and catchy songs.',
      ],
    },
    {
      id: 5,
      headline: "Cotton's Parrot",
      picture:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVAJfLGYV51WIpGtttEzosUj2TFAKI4mKCvdmMmysDZ3qFSfTJS17eMgiM65mwWpvM7w&usqp=CAU',
      paragraph: [
        "Cotton's Parrot is a character in the Pirates of the Caribbean film series. He serves as the sidekick of his owner Cotton who helps him talk ever since he was unable to talk. Cotton's parrot shows loyalty to his master, Cotton. Like parrots in real life, he is seen on his shoulder. He is also known to use various nautical catchphrases such as 'Shiver me timbers' or 'Dead men tell no tales'. Whenever he says, 'Wind in your sails,' it indicates he agrees. The parrot appeared to be more intelligent than many other crew members of the Black Pearl.",
      ],
    },
    {
      id: 6,
      headline: 'Bonito',
      picture:
        'https://www.fridakahlo.org/images/paintings/self-portrait-with-bonito.jpg',
      paragraph: [
        "Frida Kahlo once said, 'I never paint dreams or nightmares. I paint my own reality'. At the age of 6 she battled polio causing her to endure complications with her right leg. Shortly after Frida was involved in a life threatening trolley crash which would lead her to be in a constant state of physical pain for the rest of her life. She couldn’t have children due to her chronic medical conditions. She decided to take care of her many pets instead. Frida had monkeys, dogs, a deer, and a variety of birds. Some of these birds included parakeets, macaws, hens, and sparrows. However, the bird she often painted was her parrot named Bonito.",
      ],
    },
    {
      id: 7,
      headline: 'Captain Flint',
      paragraph: [
        'If Iago is the most famous parrot in the movies, Captain Flint is the most iconic bird in literature. Caption Flint perches on the shoulder of the infamous pirate Long John Silver in Robert Louis Stevenson’s adventure classic Treasure Island. Claimed to be 200 years old by Silver, Captain Flint only utters a handful of phrases in the novel, but they have become firmly associated with parrots.Sentences like “pieces of eight” are linked to parrots, thanks to Captain Flint.',
      ],
    },
    {
      id: 8,
      headline: 'Poll',
      picture: '',
      paragraph: [
        'Daniel Defoe’s famous 18th Century castaway befriends a small parrot named Poll in Robinson Crusoe as part of his life on an abandoned island. Poll doesn’t speak but offers Crusoe the essential comfort of companionship while he is shipwrecked and alone.',
      ],
    },
    {
      id: 9,
      headline: 'Alex',
      picture:
        'https://allthatsinteresting.com/wordpress/wp-content/uploads/2018/06/pepperberg_alex.jpg',
      paragraph: [
        'The final parrot is known as Alex and is the subject of the book Alex and Me by Irene M. Pepperberg. Alex was an African grey that was inseparable from its owner for three decades.',
        "Alex entered history as he demonstrated the intense intelligence of parrots, forming a vast vocabulary and speaking in complex sentences – including his final words, 'I love you, be good.'",
        'As per Biological Theory, Alex is still held up as a landmark test case in animal cognition, and arguably, the popularity of Pepperberg’s book dealing with their relationship sowed seeds for the popularity of pet parrots today.',
      ],
    },
    {
      id: 10,
      headline: 'Charlie the Curser',
      paragraph: [
        'Charlie was a macaw that allegedly lived with Winston Churchill throughout the second world war, remaining a beloved pet until the politician died in 1965. Charlie lived with new owners for many years after Churchill’s passing.',
        "The name 'Charlie the Curser' comes from the legend that Churchill taught the bird numerous profane words and insults directed at Adolf Hitler, which Charlie continued to use in front of its new owners.",
      ],
    },
  ],
};

const ARTICLES = [
  POP_CULTURE_ARTICLE,
  {
    id: 'сockatiel_profile',
    tags: ['breeds', 'profiles'],
    title: 'Cockatiel',
    pictures: [
      'https://facts.net/wp-content/uploads/2021/04/Adult-male-cockatiel-730x487.jpg',
    ],
    content: [
      {
        id: 5,
        paragraph: [
          'The Corella Parrot is a small and intelligent parrot species known for its playful personality and vibrant colors. Native to Australia, these birds have captured the hearts of bird enthusiasts around the world.',
        ],
      },
      {
        id: 6,
        paragraph: [
          'With their distinctive crest and expressive eyes, Corella Parrots are a joy to behold. They come in various color mutations, including the popular pied and lutino varieties.',
        ],
      },
      {
        id: 7,
        paragraph: [
          'In terms of temperament, Corella Parrots are social and affectionate companions. They thrive on human interaction and enjoy being part of the family. With proper training and socialization, they can develop impressive talking abilities and mimic various sounds.',
        ],
      },
      {
        id: 8,
        paragraph: [
          'Corella Parrots have a varied diet consisting of fruits, vegetables, seeds, and pellets. Providing a balanced diet is essential for their health and well-being.',
        ],
      },
      {
        id: 9,
        paragraph: [
          'These parrots are also known for their playful nature and love for toys. Providing them with a range of toys and mental stimulation is important to prevent boredom.',
        ],
      },
      {
        id: 10,
        paragraph: [
          'When it comes to housing, Corella Parrots require a spacious cage that allows for exercise and movement. They also benefit from supervised out-of-cage time to explore and interact with their surroundings.',
        ],
      },
      {
        id: 11,
        paragraph: [
          "If you're considering adding a Corella Parrot to your family, it's crucial to research and understand their specific care needs. Responsible ownership and providing a loving environment are key to ensuring their happiness.",
        ],
      },
    ],
    listItems: [
      'Talented Talkers And Whistlers',
      'Males Also Look After Their Young',
      'You Can Sense a Cockatiel Mood Using Its Crest',
    ],
    listType: 'green',
    type: 'default',
  },
  {
    id: 'kakapo_profile',
    tags: ['breeds', 'profiles'],
    title: 'Kakapo',
    pictures: ['https://zooclub.org.ua/uploads/2021/04/20/kakapo4.webp'],
    content: [
      {
        id: 12,
        paragraph: [
          "The Kakapo Parrot is a unique and fascinating species that holds the title of being the world's only flightless parrot. Native to New Zealand, these rare birds are known for their friendly nature and distinct features.",
        ],
      },
      {
        id: 13,
        paragraph: [
          'Kakapos are critically endangered and highly protected due to their small population size. Efforts are being made to preserve and increase their numbers through conservation programs.',
        ],
      },
      {
        id: 14,
        paragraph: [
          'One of the most remarkable traits of the Kakapo is its extraordinary mating ritual. The males gather in special areas called leks, where they compete to attract females by emitting booming calls and performing impressive displays.',
        ],
      },
      {
        id: 15,
        paragraph: [
          'Kakapo Parrots have a distinctive odor described as a combination of flowers, honey, and beeswax. This unique scent adds to their allure and makes them even more intriguing.',
        ],
      },
      {
        id: 16,
        paragraph: [
          'In terms of diet, Kakapos are herbivores, feeding mainly on native New Zealand plants, fruits, and seeds. They have a slow metabolism, which requires them to consume a large amount of food to meet their energy needs.',
        ],
      },
      {
        id: 17,
        paragraph: [
          'These parrots have a long lifespan and can live up to 90 years in captivity. They are nocturnal creatures, spending most of their time on the ground.',
        ],
      },
      {
        id: 18,
        paragraph: [
          'If you ever have the opportunity to encounter a Kakapo, consider yourself lucky. These gentle and charismatic birds are a true marvel of nature.',
        ],
      },
    ],
    listItems: [
      'Critically endangered with unique mating ritual',
      "It's the world's only flightless parrot",
      "Smell nice! It's distinctive odor of flowers and honey",
    ],
    listType: 'yellow',
    type: 'default',
  },
  {
    id: 'Budgie_profile',
    tags: ['breeds', 'profiles'],
    title: 'Budgie',
    pictures: [
      'https://www.omlet.us/images/originals/blue_and_green_budgie_pair.jpg',
    ],
    content: [
      {
        id: 19,
        paragraph: [
          'The Budgie, also known as the Budgerigar or Parakeet, is one of the most popular pet parrot species worldwide. These small and colorful birds have captured the hearts of bird enthusiasts with their playful and sociable nature.',
        ],
      },
      {
        id: 20,
        paragraph: [
          'Budgies are native to Australia and are widely recognized for their vibrant plumage. They come in a variety of colors, including blue, green, yellow, and white, making them a delightful sight to behold.',
        ],
      },
      {
        id: 21,
        paragraph: [
          'One of the remarkable traits of Budgies is their ability to mimic human speech and various sounds. With time, patience, and proper training, these intelligent parrots can develop an impressive vocabulary.',
        ],
      },
      {
        id: 22,
        paragraph: [
          'In terms of care, Budgies require a balanced diet consisting of high-quality pellets, fresh fruits, and vegetables. They also enjoy occasional treats like millet spray. Providing a variety of toys, perches, and mental stimulation is essential for their well-being.',
        ],
      },
      {
        id: 23,
        paragraph: [
          "Budgies are highly social birds and thrive on interaction. They enjoy spending time with their human companions and can form strong bonds. It's important to dedicate daily time for play, training, and bonding activities.",
        ],
      },
      {
        id: 24,
        paragraph: [
          'When it comes to housing, Budgies need a spacious cage with plenty of room for flight and exercise. They also benefit from supervised out-of-cage time to explore and stretch their wings.',
        ],
      },
      {
        id: 25,
        paragraph: [
          "Whether you're a first-time bird owner or a seasoned enthusiast, Budgies make wonderful companions and bring joy to any household. Their cheerful chirping and playful antics can brighten up your day.",
        ],
      },
    ],
    listItems: [
      'One of the most popular pet birds in the world',
      'Can See Ultraviolet Light, We Cannot',
      'Capable of learning to talk better than some bigger parrots',
    ],
    listType: 'grey',
    type: 'default',
  },
  {
    id: 'Lovebird_profile',
    tags: ['profiles', 'breeds'],
    title: 'Lovebird',
    pictures: [
      'https://betterpetslife.com/wp-content/uploads/2022/12/Love-birds.webp',
    ],
    content: [
      {
        id: 26,
        paragraph: [
          'Lovebirds are small and colorful parrots known for their affectionate nature and strong bond with their mates. These charming birds have captured the hearts of bird enthusiasts around the world.',
        ],
      },
      {
        id: 27,
        paragraph: [
          'Native to Africa, Lovebirds are named for their strong monogamous pairings and the affectionate behaviors they display towards their partners. They are often seen cuddling, preening, and feeding each other.',
        ],
      },
      {
        id: 28,
        paragraph: [
          'Lovebirds come in various vibrant colors, including green, blue, yellow, and peach-faced varieties. Their colorful plumage and playful personalities make them a joy to observe and interact with.',
        ],
      },
      {
        id: 29,
        paragraph: [
          'In terms of care, Lovebirds require a balanced diet consisting of high-quality pellets, fresh fruits, vegetables, and occasional treats. Providing a variety of toys, perches, and regular out-of-cage time is essential for their physical and mental well-being.',
        ],
      },
      {
        id: 30,
        paragraph: [
          'Lovebirds are highly social birds and enjoy the company of their human companions. They thrive on interaction, so spending time playing, training, and bonding with them is important for their happiness.',
        ],
      },
      {
        id: 31,
        paragraph: [
          'These parrots are known for their curious and active nature. They love exploring their surroundings and can be quite mischievous. Providing a safe and enriching environment with plenty of toys and opportunities for exercise is key.',
        ],
      },
      {
        id: 32,
        paragraph: [
          'Lovebirds have a melodic chirp and can learn to mimic sounds and simple words with training and repetition. Their vocalizations add a lively and charming ambiance to any home.',
        ],
      },
    ],
    listItems: [
      'Lovebirds mate for life',
      'Sex of these birds is impossible to determine with the naked eye',
      'Some endemic species of lovebirds are in danger of becoming extinct',
    ],
    listType: 'green',
    type: 'default',
  },
  {
    id: 'African_grey_parrot_profile',
    tags: ['profiles'],
    title: 'African grey parrot',
    pictures: [
      'https://cdn.pixabay.com/photo/2022/10/17/08/44/parrot-7527071_1280.jpg',
    ],
    content: [
      {
        id: 33,
        paragraph: [
          'The African Grey Parrot is a highly intelligent and captivating parrot species that has gained popularity for its exceptional talking and mimicking abilities. Native to the rainforests of West and Central Africa, African Grey Parrots are known for their remarkable cognitive skills.',
        ],
      },
      {
        id: 34,
        paragraph: [
          'African Grey Parrots have a distinctive grey plumage with a striking red tail. They possess a remarkable ability to mimic human speech and various sounds with astounding accuracy. Their extensive vocabulary and ability to understand and use words in context have made them highly sought after as companion parrots.',
        ],
      },
      {
        id: 35,
        paragraph: [
          'These parrots thrive on mental stimulation, and providing them with puzzles, toys, and interactive activities is essential for their well-being. They also require a balanced diet consisting of high-quality pellets, fresh fruits, vegetables, and nuts to support their nutritional needs.',
        ],
      },
      {
        id: 36,
        paragraph: [
          'African Grey Parrots are highly social and form strong bonds with their human companions. They crave social interaction and mental engagement, so spending quality time with them is crucial. Daily training sessions, socialization, and regular exercise are important aspects of their care.',
        ],
      },
      {
        id: 37,
        paragraph: [
          'In addition to their remarkable intelligence, African Grey Parrots have a complex and sensitive nature. They can be sensitive to changes in their environment and require a stable and enriched living environment to thrive. Providing them with a spacious cage, plenty of toys, and a quiet retreat space is essential.',
        ],
      },
    ],
    listItems: [
      'Is considered to be one of the most accomplished mimics',
      'They can outlive their human owners',
      'Brain development comparable to children between the ages of 3 and 6',
    ],
    listType: 'yellow',
    type: 'default',
  },
  {
    id: 'Cockatoo_profile',
    tags: ['profiles'],
    title: 'Cockatoo',
    pictures: [
      'https://media.cnn.com/api/v1/images/stellar/prod/230615072150-yellow-crested-cockatoo-yuen-po-bird-market.jpg?c=original',
    ],
    content: [
      {
        id: 38,
        paragraph: [
          'The Cockatoo is a group of parrots that includes several species known for their striking appearance and entertaining personality. This group comprises various Cockatoo species, such as the Sulphur-crested Cockatoo, Moluccan Cockatoo, and Rose-breasted Cockatoo, each with its unique characteristics and charm.',
        ],
      },
      {
        id: 39,
        paragraph: [
          'The Cockatoo is a magnificent and charismatic parrot known for its striking appearance and entertaining personality. With their distinctive crests and vibrant plumage, Cockatoos are a favorite among bird enthusiasts around the world.',
        ],
      },
      {
        id: 40,
        paragraph: [
          'Cockatoos belong to the family of parrots known for their intelligence and social nature. They are highly expressive birds and can communicate through a wide range of vocalizations, including screeches, whistles, and even mimicry of human speech.',
        ],
      },
      {
        id: 41,
        paragraph: [
          'These parrots require a loving and dedicated owner who can provide them with plenty of mental and physical stimulation. Cockatoos thrive on social interaction and require regular exercise, playtime, and opportunities for foraging to keep them happy and healthy.',
        ],
      },
      {
        id: 42,
        paragraph: [
          'Cockatoos are known for their playful and affectionate personalities. They form strong bonds with their human companions and enjoy being showered with attention and affection. Their lively antics and entertaining behaviors make them a delightful addition to any household.',
        ],
      },
      {
        id: 43,
        paragraph: [
          'Caring for a Cockatoo involves providing a balanced diet that includes high-quality pellets, fresh fruits, vegetables, and occasional treats. Their living environment should offer ample space for them to spread their wings and engage in natural behaviors.',
        ],
      },
    ],
    listItems: [
      'Having a cockatoo is a lot like having a rambunctious toddler',
      'Typically live from 40 to 70 years',
      'There Are 21 Different Cockatoo Species',
    ],
    listType: 'grey',
    type: 'default',
  },
];

const TAG_COLORS = {
  profiles: 'green',
  breeds: 'blue',
  top10: 'pink',
};

const QUIZ_QUESTIONS = [
  {
    question: 'How would you describe your personality? 🧚‍♂️',
    answers: [
      {
        type: 'Blue Macaw',
        content: 'Calm, confident, tricky',
      },
      {
        type: 'Kakapo',
        content: 'Cute, friendly, charming',
      },
      {
        type: 'Black Cockatoo',
        content: 'Bold, temperamental, refined',
      },
      {
        type: 'Kea',
        content: 'Curious, smart, playful',
      },
      {
        type: 'Grey parrot',
        content: 'Intelligent, loyal, independent',
      },
      {
        type: 'Cockatiel',
        content: 'Gentle, sensitive, outgoing',
      },
      {
        type: 'Caique',
        content: 'Energetic, creative, emotional',
      },
    ],
  },
  {
    question: 'What is your favorite way to spend your free time? 🧘🏼',
    answers: [
      {
        type: 'Blue Macaw',
        content: 'Exploring new places and trying interesting food ',
      },
      {
        type: 'Kakapo',
        content:
          "Sleeping! I don't like leaving the house. The best rest is on the couch!",
      },
      {
        type: 'Black Cockatoo',
        content: 'Crafting, wandering around IKEA, and decorating the house',
      },
      {
        type: 'Kea',
        content:
          "I can't imagine life without active days, sports, adventures, and thrills",
      },
      {
        type: 'Grey parrot',
        content:
          'I enjoy exercising my brain. Studying, reading books, and, at worst, playing board games or having intellectual conversations',
      },
      {
        type: 'Cockatiel',
        content: 'I like calm activities such as walks, movies, or sunbathing',
      },
      {
        type: 'Caique',
        content:
          "It doesn't matter what precisely, as long as I'm doing something. I find everything interesting!",
      },
    ],
  },
  {
    question: 'How would you describe your social life? 👯‍♀️',
    answers: [
      {
        type: 'Blue Macaw',
        content:
          'I often get out of the house but enjoy solitude. Balance is needed in everything!',
      },
      {
        type: 'Kakapo',
        content:
          "I'm generally an introvert, but I love dates. Just need people to come to my house, and it should be someone new each time",
      },
      {
        type: 'Black Cockatoo',
        content: "I spend all my time with family. I don't need anyone else",
      },
      {
        type: 'Kea',
        content: 'I hang out with a small circle of old friends',
      },
      {
        type: 'Grey parrot',
        content:
          "I enjoy social activities, but only if I'm accompanied by a partner or best friend",
      },
      {
        type: 'Cockatiel',
        content: "I have a significant other, and that's enough for me",
      },
      {
        type: 'Caique',
        content:
          'I love big, noisy companies. I always become the life of the party',
      },
    ],
  },
  {
    question: 'Choose an ideal habitat 🌎',
    answers: [
      {
        type: 'Blue Macaw',
        content: 'Dense tropical rainforest',
      },
      {
        type: 'Kakapo',
        content: 'Rocky deserted island in the ocean',
      },
      {
        type: 'Black Cockatoo',
        content: 'Tropical savannas and eucalyptus groves',
      },
      {
        type: 'Kea',
        content: 'Mountains and alpine meadows',
      },
      {
        type: 'Grey parrot',
        content: 'Thick trees growing in water',
      },
      {
        type: 'Cockatiel',
        content: 'Grasslands near rivers and lakes',
      },
      {
        type: 'Caique',
        content: 'Vast cornfields in rural areas',
      },
    ],
  },
  {
    question: 'What is your favorite color? 🌈',
    answers: [
      {
        type: 'Blue Macaw',
        content: 'Blue',
      },
      {
        type: 'Kakapo',
        content: 'Green',
      },
      {
        type: 'Black Cockatoo',
        content: 'Black',
      },
      {
        type: 'Kea',
        content: 'Orange',
      },
      {
        type: 'Grey parrot',
        content: 'Red',
      },
      {
        type: 'Cockatiel',
        content: 'Yellow',
      },
      {
        type: 'Caique',
        content:
          "It's impossible to choose just one—I love all the colors of the rainbow!",
      },
    ],
  },
];

const QUIZ_RESULTS = [
  {
    type: 'Blue Macaw',
    content: [
      'The Blue (or hyacinth)  Macaw is an endangered vibrant parrot from Brazil. It is one of the most giant parrots in the world. The macaw is very strong due to its powerful beak, which makes it almost invulnerable in the wild (except for humans, of course).',
      "Although the macaw leads a peaceful lifestyle, it is also cunning and can show its temper. For example, it can sneak onto a farm and bite and scatter all the fruits from the harvest, even if the macaw doesn't like them.",
      'Macaws enjoy spending time in the company of each other and gathering in small flocks of 6-12 individuals, but they also appreciate solitude. For instance, if a macaw discovers a tree with fruits, it starts behaving silently to avoid sharing with other parrots.',
    ],
    picture:
      'https://cff2.earth.com/uploads/2020/12/07120045/shutterstock_752619508.jpg',
  },
  {
    type: 'Kakapo',
    content: [
      'Kakapo from New Zealand is the heaviest, longest-living, and most pleasantly scented parrot in the world. These birds emit a fragrance of flowers and honey. They can weigh up to four kilograms and live up to 60 years! In 2019, there were only 147 individuals, but conservationists managed to slightly increase their population to 213 within a year.',
      "Kakapo leads a nocturnal lifestyle and lives a tranquil existence, becoming more active mainly during the breeding season. Unlike other parrots, male kakapos are true ladies' men, striving to attract multiple mates during the breeding season. The males stay in one place, emitting low-frequency sounds, waiting for the females to find them.",
      'The qualities that make kakapo such endearing and unique animals also put their lives at risk. Kakapos are highly trusting, reproduce slowly, nest on the ground, and their main defense mechanism is to blend in with the foliage.',
    ],
    picture:
      "https://2.bp.blogspot.com/-bj5sLA9LqXg/U7oDDaQkaJI/AAAAAAAAGfc/MdeYET-EETQ/s16000/Kakapo_is_the_world's_rarest_and_strangest_parrot_ritebook.in_002.jpg",
  },
  {
    type: 'Black Cockatoo',
    content: [
      'The Black (or palm) Cockatoo is considered the oldest and largest parrot on the Australian continent. Its entire body is covered in black feathers, except for the cheeks. It is precisely these areas that have made the cockatoos famous, as their color intensifies when their mood changes (when excited).',
      'The bird has a complex and capricious personality. It struggles to get along with other pets, tends to bite, and sometimes shows aggression even towards its owner. However, the Palm Cockatoo can be described as the most tender and caring parent and spouse among parrots.',
      'The Palm Cockatoo reaches sexual maturity very late. Male birds form relationships with females in their mature age, typically after the age of 6, but these relationships last a lifetime. To win over a female, the male builds a nest and demonstrates its durability by tapping on it with a stick. After courtship, the male actively participates in incubating, feeding, and raising the offspring.',
    ],
    picture:
      'https://sdzwildlifeexplorers.org/sites/default/files/2017-12/animal-hero-palm-cockatoo.jpg',
  },
  {
    type: 'Kea',
    content: [
      'These parrots from New Zealand are known for their intelligence and cleverness. Keas resemble falcons or small eagles with large heads and a predatory, downward-curved beak. Despite their relatively small size, keas possess remarkable strength and are excellent flyers. They inhabit both mountainous areas and urban environments.',
      "Accustomed to humans and extremely curious, these birds can cause quite a bit of trouble. They are renowned for their exploratory behavior and their adeptness at using their beaks, which, combined with their developed curiosity, makes them a nuisance for locals and a source of entertainment for tourists. Dubbed the 'clowns of the mountains,' they seize every opportunity to investigate the contents of backpacks or cars that catch their interest.",
      'The Birds are very sociable and playful. they like to tumble in the snow or swim in freshly thawed puddles.',
    ],
    picture:
      'https://i.pinimg.com/originals/7d/d4/3c/7dd43cb68fe2c8023dd07294a8775429.jpg',
  },
  {
    type: 'Caique',
    content: [
      "Your totem parrot is the Caique - a Brazilian bird that can't sit still and is constantly busy. It's a lively and playful bird, a celebration bird that always brings joy. Caiques are highly energetic and curious, they love to dance and mimic sounds (like your alarm clock). They want to be involved in everything that happens in the house. However, this species is known for its sharp mood swings. Bursts of activity can easily be followed by melancholy.",
      'In the wild, Caiques live in pairs or small families. During feeding times, they can gather in large groups and even join forces with other species for mutual assistance. During raids on cornfields, while most of them are eating, a few sentries keep watch to signal any danger.',
      'In captivity, Caiques often choose only one person from the family to have the closest and warmest relationship with. The bird will treat other family members in a friendly manner, but it will reserve special attention for its favorite person.',
    ],
    picture:
      'https://www.psittacology.com/wp-content/uploads/2020/12/White-bellied-caique-1.jpg',
  },
  {
    type: 'Grey parrot',
    content: [
      'These parrots are intelligent, independent, and moderately egocentric. Among parrots capable of mimicry, the Jaco is considered the most talented. On average, the bird can memorize over 150 words. Extensive studies with a grey parrot named Alex, conducted by Dr. Irene Pepperberg, showed that these birds can associate human language words with the objects they represent. They are also capable of perceiving concepts such as shape, color, ordinal numbers, and even the concept of zero.',
      'Scientific research has shown that the brain of adult grey parrots functions similarly to that of a five-year-old child.',
      "Grey parrots love to spend time on their owner's shoulder or in their hands. They are social birds that form strong attachments to their owners and require constant attention. You can read magazines, watch movies, prepare meals, or simply work on the computer with a parrot by your side. Over time, the parrot may start to mimic the owner's behavior, expressing joy, care, irritation, and so on in a similar manner.",
      'Interestingly, young grey parrots demonstrate respectful behavior towards older birds. And the young offspring learn from adult birds how to behave in various situations.',
    ],
    picture:
      'https://a-z-animals.com/media/2021/12/Emotional-Support-Animals-African-grey-parrot.jpg',
  },
  {
    type: 'Cockatiel',
    content: [
      'Cockatiels, also known as nymphs, are graceful and incredibly adorable medium-sized parrots from Australia. They quickly become tame and can learn individual words and even melodies. Male cockatiels are skilled singers, imitating street birds such as bluetits, magpies, and nightingales.',
      'Cockatiels are excellent flyers and very resilient. Like many other parrot species, they can cover vast distances in search of food and water. This is why they can sometimes be found in the most unlikely corners of Australia. Cockatiels spend their entire lives in flocks, making them highly social birds.',
      'As a pet, a cockatiel is very sweet and affectionate, much like a cat. If a cockatiel trusts its owner, it will offer its head, neck, and cheeks for scratching, rub against its fingers, and blissfully close its eyes. It enjoys being held and petted. Some cockatiels become so attached to humans that they start to fear their own kind and even their reflection in the mirror.',
    ],
    picture:
      'https://wereallaboutpets.com/wp-content/uploads/2019/12/Cute-and-Adorable-Cockatiel-Names-1.jpg',
  },
  {
    type: 'Budgerigar',
    content: [
      'The Budgerigar, also known as the budgie or parakeet, is a small and sociable parrot native to Australia. Budgerigars are popular pets due to their playful and friendly nature. They have a wide range of vibrant feather colors, including green, blue, yellow, and white.',
      'Budgerigars are highly intelligent and can be taught to perform tricks and mimic human speech. They enjoy interacting with their owners and can form strong bonds with them. Budgerigars are active birds and require regular mental stimulation and physical exercise.',
      'In the wild, budgerigars live in large flocks and are known for their acrobatic flight displays. They feed on a variety of seeds, grains, and vegetation. Budgerigars are excellent flyers and can cover long distances in search of food and water.',
    ],
    picture:
      'https://opis-cdn.tinkoffjournal.ru/ip/C7g_vjEX93kEKMg7h9Fgxl8VEBMUj7c3_9XblSfHkUY/w:1200/aHR0cHM6Ly9vcGlz/LWNkbi50aW5rb2Zm/am91cm5hbC5ydS9t/ZXJjdXJ5L21haW5f/aG93LW11Y2gtcGFy/cm90LnhvZTlxMWY1/YTYzbS5qcGc',
  },
];

export { ARTICLES, ARTICLE_ABOUT_US, TAG_COLORS, QUIZ_QUESTIONS, QUIZ_RESULTS };
