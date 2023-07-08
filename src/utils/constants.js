import parrotPicture1 from '../images/about-us-picture-kira-and-me.jpg';
import parrotPicture2 from '../images/about-us-pic-kira2.jpg';
import parrotPicture3 from '../images/about-us-pic-kira3.jpg';

const ARTICLE_ABOUT_US = {
  title: 'About us',
  pictures: [parrotPicture1, parrotPicture2, parrotPicture3],
  text: [
    'Hello! This site was built by me. My name is Dasha, and I am a frontend developer with a passion for parrots. In the past, I worked as a journalist, but my love for these beautiful creatures led me to combine my skills in web development with my expertise in parrot care. At the heart of my journey is Kira, my beloved 9-year-old female Cockatiel.',
    'As a hand-reared bird, Kira has become an integral part of my life. She adores carrots, and cucumbers, and spends quality time perched on my shoulder. Her favorite toy is a little bell that brings out her playful nature.',
    "Through this website, I aim to share my knowledge and experience in parrot care. Whether you're a new parrot owner or an experienced enthusiast, my blog platform is here to provide valuable insights, tips, and resources on maintaining a happy and healthy bond with your feathered companion.",
    'Join me on this adventure as we explore the intricacies of parrot care together. Together, we can create a thriving community of parrot enthusiasts, dedicated to providing the best possible care for our beloved avian.',
  ],
};

const ARTICLES = [
  {
    id: 'сockatiel_profile',
    tags: ['breeds'],
    title: 'Cockatiel',
    pictures: [
      'https://facts.net/wp-content/uploads/2021/04/Adult-male-cockatiel-730x487.jpg',
    ],
    text: [
      'The Corella Parrot is a small and intelligent parrot species known for its playful personality and vibrant colors. Native to Australia, these birds have captured the hearts of bird enthusiasts around the world.',
      'With their distinctive crest and expressive eyes, Corella Parrots are a joy to behold. They come in various color mutations, including the popular pied and lutino varieties.',
      'In terms of temperament, Corella Parrots are social and affectionate companions. They thrive on human interaction and enjoy being part of the family. With proper training and socialization, they can develop impressive talking abilities and mimic various sounds.',
      'Corella Parrots have a varied diet consisting of fruits, vegetables, seeds, and pellets. Providing a balanced diet is essential for their health and well-being.',
      'These parrots are also known for their playful nature and love for toys. Providing them with a range of toys and mental stimulation is important to prevent boredom.',
      'When it comes to housing, Corella Parrots require a spacious cage that allows for exercise and movement. They also benefit from supervised out-of-cage time to explore and interact with their surroundings.',
      "If you're considering adding a Corella Parrot to your family, it's crucial to research and understand their specific care needs. Responsible ownership and providing a loving environment are key to ensuring their happiness.",
    ],
    listItems: [
      'Talented Talkers And Whistlers',
      'Males Also Look After Their Young',
      'You Can Sense a Cockatiel Mood Using Its Crest',
    ],
    listType: 'green',
  },
  {
    id: 'kakapo_profile',
    tags: ['breeds'],
    title: 'Kakapo',
    pictures: ['https://zooclub.org.ua/uploads/2021/04/20/kakapo4.webp'],
    text: [
      "The Kakapo Parrot is a unique and fascinating species that holds the title of being the world's only flightless parrot. Native to New Zealand, these rare birds are known for their friendly nature and distinct features.",
      'Kakapos are critically endangered and highly protected due to their small population size. Efforts are being made to preserve and increase their numbers through conservation programs.',
      'One of the most remarkable traits of the Kakapo is its extraordinary mating ritual. The males gather in special areas called leks, where they compete to attract females by emitting booming calls and performing impressive displays.',
      'Kakapo Parrots have a distinctive odor described as a combination of flowers, honey, and beeswax. This unique scent adds to their allure and makes them even more intriguing.',
      'In terms of diet, Kakapos are herbivores, feeding mainly on native New Zealand plants, fruits, and seeds. They have a slow metabolism, which requires them to consume a large amount of food to meet their energy needs.',
      'These parrots have a long lifespan and can live up to 90 years in captivity. They are nocturnal creatures, spending most of their time on the ground.',
      'If you ever have the opportunity to encounter a Kakapo, consider yourself lucky. These gentle and charismatic birds are a true marvel of nature.',
    ],
    listItems: [
      'Critically endangered with unique mating ritual',
      "It's the world's only flightless parrot",
      "Smell nice! It's distinctive odor of flowers and honey",
    ],
    listType: 'yellow',
  },
  {
    id: 'Budgie_profile',
    tags: ['breeds'],
    title: 'Budgie',
    pictures: [
      'https://www.omlet.us/images/originals/blue_and_green_budgie_pair.jpg',
    ],
    text: [
      'The Budgie, also known as the Budgerigar or Parakeet, is one of the most popular pet parrot species worldwide. These small and colorful birds have captured the hearts of bird enthusiasts with their playful and sociable nature.',
      'Budgies are native to Australia and are widely recognized for their vibrant plumage. They come in a variety of colors, including blue, green, yellow, and white, making them a delightful sight to behold.',
      'One of the remarkable traits of Budgies is their ability to mimic human speech and various sounds. With time, patience, and proper training, these intelligent parrots can develop an impressive vocabulary.',
      'In terms of care, Budgies require a balanced diet consisting of high-quality pellets, fresh fruits, and vegetables. They also enjoy occasional treats like millet spray. Providing a variety of toys, perches, and mental stimulation is essential for their well-being.',
      "Budgies are highly social birds and thrive on interaction. They enjoy spending time with their human companions and can form strong bonds. It's important to dedicate daily time for play, training, and bonding activities.",
      'When it comes to housing, Budgies need a spacious cage with plenty of room for flight and exercise. They also benefit from supervised out-of-cage time to explore and stretch their wings.',
      "Whether you're a first-time bird owner or a seasoned enthusiast, Budgies make wonderful companions and bring joy to any household. Their cheerful chirping and playful antics can brighten up your day.",
    ],
    listItems: [
      'One of the most popular pet birds in the world',
      'Can See Ultraviolet Light, We Cannot',
      'Capable of learning to talk better than some bigger parrots',
    ],
    listType: 'grey',
  },
  {
    id: 'Lovebird_profile',
    tags: ['profiles', 'breeds'],
    title: 'Lovebird',
    pictures: [
      'https://betterpetslife.com/wp-content/uploads/2022/12/Love-birds.webp',
    ],
    text: [
      'Lovebirds are small and colorful parrots known for their affectionate nature and strong bond with their mates. These charming birds have captured the hearts of bird enthusiasts around the world.',
      'Native to Africa, Lovebirds are named for their strong monogamous pairings and the affectionate behaviors they display towards their partners. They are often seen cuddling, preening, and feeding each other.',
      'Lovebirds come in various vibrant colors, including green, blue, yellow, and peach-faced varieties. Their colorful plumage and playful personalities make them a joy to observe and interact with.',
      'In terms of care, Lovebirds require a balanced diet consisting of high-quality pellets, fresh fruits, vegetables, and occasional treats. Providing a variety of toys, perches, and regular out-of-cage time is essential for their physical and mental well-being.',
      'Lovebirds are highly social birds and enjoy the company of their human companions. They thrive on interaction, so spending time playing, training, and bonding with them is important for their happiness.',
      'These parrots are known for their curious and active nature. They love exploring their surroundings and can be quite mischievous. Providing a safe and enriching environment with plenty of toys and opportunities for exercise is key.',
      'Lovebirds have a melodic chirp and can learn to mimic sounds and simple words with training and repetition. Their vocalizations add a lively and charming ambiance to any home.',
    ],
    listItems: [
      'Lovebirds mate for life',
      'Sex of these birds is impossible to determine with the naked eye',
      'Some endemic species of lovebirds are in danger of becoming extinct',
    ],
    listType: 'green',
  },
  {
    id: 'African_grey_parrot_profile',
    tags: ['profiles'],
    title: 'African grey parrot',
    pictures: [
      'https://cdn.pixabay.com/photo/2022/10/17/08/44/parrot-7527071_1280.jpg',
    ],
    text: [
      'The African Grey Parrot is a highly intelligent and captivating parrot species that has gained popularity for its exceptional talking and mimicking abilities. Native to the rainforests of West and Central Africa, African Grey Parrots are known for their remarkable cognitive skills.',
      'African Grey Parrots have a distinctive grey plumage with a striking red tail. They possess a remarkable ability to mimic human speech and various sounds with astounding accuracy. Their extensive vocabulary and ability to understand and use words in context have made them highly sought after as companion parrots.',
      'These parrots thrive on mental stimulation, and providing them with puzzles, toys, and interactive activities is essential for their well-being. They also require a balanced diet consisting of high-quality pellets, fresh fruits, vegetables, and nuts to support their nutritional needs.',
      'African Grey Parrots are highly social and form strong bonds with their human companions. They crave social interaction and mental engagement, so spending quality time with them is crucial. Daily training sessions, socialization, and regular exercise are important aspects of their care.',
      'In addition to their remarkable intelligence, African Grey Parrots have a complex and sensitive nature. They can be sensitive to changes in their environment and require a stable and enriched living environment to thrive. Providing them with a spacious cage, plenty of toys, and a quiet retreat space is essential.',
    ],
    listItems: [
      'Is considered to be one of the most accomplished mimics',
      'They can outlive their human owners',
      'Brain development comparable to children between the ages of 3 and 6',
    ],
    listType: 'yellow',
  },
  {
    id: 'Cockatoo_profile',
    tags: ['profiles'],
    title: 'Cockatoo',
    pictures: [
      'https://media.cnn.com/api/v1/images/stellar/prod/230615072150-yellow-crested-cockatoo-yuen-po-bird-market.jpg?c=original',
    ],
    text: [
      'The Cockatoo is a group of parrots that includes several species known for their striking appearance and entertaining personality. This group comprises various Cockatoo species, such as the Sulphur-crested Cockatoo, Moluccan Cockatoo, and Rose-breasted Cockatoo, each with its unique characteristics and charm.',
      'The Cockatoo is a magnificent and charismatic parrot known for its striking appearance and entertaining personality. With their distinctive crests and vibrant plumage, Cockatoos are a favorite among bird enthusiasts around the world.',
      'Cockatoos belong to the family of parrots known for their intelligence and social nature. They are highly expressive birds and can communicate through a wide range of vocalizations, including screeches, whistles, and even mimicry of human speech.',
      'These parrots require a loving and dedicated owner who can provide them with plenty of mental and physical stimulation. Cockatoos thrive on social interaction and require regular exercise, playtime, and opportunities for foraging to keep them happy and healthy.',
      'Cockatoos are known for their playful and affectionate personalities. They form strong bonds with their human companions and enjoy being showered with attention and affection. Their lively antics and entertaining behaviors make them a delightful addition to any household.',
      'Caring for a Cockatoo involves providing a balanced diet that includes high-quality pellets, fresh fruits, vegetables, and occasional treats. Their living environment should offer ample space for them to spread their wings and engage in natural behaviors.',
    ],
    listItems: [
      'Having a cockatoo is a lot like having a rambunctious toddler',
      'Typically live from 40 to 70 years',
      'There Are 21 Different Cockatoo Species',
    ],
    listType: 'grey',
  },
];

const TAG_COLORS = {
  profiles: 'green',
  breeds: 'blue',
};

export { ARTICLES, ARTICLE_ABOUT_US, TAG_COLORS };
