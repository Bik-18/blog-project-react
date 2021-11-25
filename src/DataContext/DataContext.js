import React, {  createContext } from "react";


const datas = [
    {
        id: 1,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "nature",
        pika: "./images/nature/f1.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },

    {
        id: 2,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "nature",
        pika: "./images/nature/f2.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 3,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "nature",
        pika: "./images/nature/f3.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 4,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "nature",
        pika: "./images/nature/f4.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 5,
        title: "ras malai",
        para: 29,
        category: "nature",
        pika: "./images/nature/f5.jpg",
        datee:"August 21 2021",
        mark:"top"
    },
    








    
    {
        id: 6,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f1.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"latest"
    },
    {
        id: 7,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f2.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"latest"
    },
    {
        id: 8,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f3.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"latest"
    },
    {
        id: 9,
        title: "Punjabi Food : Butter Chicken",
        para: "Butter Chicken is the crowning jewel food of Punjab. No celebration is complete without this dish. Juicy chicken pieces bathed in a creamy gravy of butter and the chicken is lightly spiced and paired up with either naan or rumaali roti. Butter chicken is high in calories.",
        category: "food",
        pika: "./images/food/f4.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"latest"
    },
    {
        id: 10,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f5.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id:11,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f6.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 12,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f7.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 13,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f8.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 14,
        title: "the picture of mountain",
        para: "Find the best mountain pictures and mountain images available on our site. High-quality pictures of mountain and mountain photos for you to download and use",
        category: "food",
        pika: "./images/food/f9.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 15,
        title: "All About Litti Chokha",
        para: "Evolving with time, the Litti Chokha has grown with taste and finesse while preserving its origin and culture",
        category: "food",
        pika: "./images/food/f10.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"

    },









    {
        id: 16,
        title: "RWJ Fitness and Wellness - Hamilton",
        para: "Blog Archives - RWJ Fitness and Wellness Center - Hamilton",
        category: "fitness",
        pika: "./images/fitness/f1.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 17,
        title: "guy bodybuilder tired in gym and listen music with headset",
        para: "listening to music with headset while working out is just a exciting things",
        category: "fitness",
        pika: "./images/fitness/f2.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 18,
        title: "Gym Equipment",
        para: "Fitness and Wellness Center - Hamilton Equipment are essential needs for all gymers",
        category: "fitness",
        pika: "./images/fitness/f3.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 19,
        title: "Eat Big to Get Big?",
        para: "As I fought to hit the last rep on my less than perfect bench press, I sat up to see a guy had been watching my struggle from across the gym. I’d only been training a few weeks and my form was pretty shaky. My lack of technical skill led me to just heave the bar up and hope for the best.",
        category: "fitness",
        pika: "./images/fitness/f4.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },
    {
        id: 20,
        title: "Lypko Oleksandr BOG 20.1 Rx",
        para: "Lypko Oleksandr BOG 20.1 Rx this is the yt video wanna watch then get out from your bed",
        category: "fitness",
        pika: "./images/fitness/f5.jpg",
        key: "Travel",
        datee:"August 21 2021",
        mark:"top"
    },









    {
        id: 21,
        title: "Rich Tributes to Rajesh Khanna – The Original Superstar of Bollywood",
        para: "jesh Khanna was the original superstar, the romance king, and a doyen among the actors. His performances made one gasp for breath and others found it difficult to grasp how he did it nonchalantly and with so much ease.",
        category: "bollywood",
        pika: "./images/bollywood/f1.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"top"
    },
    {
        id: 22,
        title: "Filmy escape:Travel through Bollywood",
        para: "Bollywood movies are not just a means of entertainment for us, but they also invoke myriad emotions. They inspire us to love, hate, care, and also travel by train. If you’ve grown up on a staple diet of Bollywood movies, you would definitely agree that there is no better ‘prop’ than a fast chugging train in our movies. ",
        category: "bollywood",
        pika: "./images/bollywood/f2.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"top"
    },
    {
        id: 23,
        title: "Latest Bollywood Movies That Inspire Us to Travel",
        para: "Bollywood has been trying each and every day to produce fresh content for the viewers. Remember the time when the movie industry was all about romantic movies or action films? However, that is not the case right now. Bollywood has been trying to come up with new themes, the favourite among them being the travel theme. Travelling has become a part of daily lives, and hence these recent Bollywood movies are also concentrating on it to fetch amazing results at the box office. ",
        category: "bollywood",
        pika: "./images/bollywood/f3.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"top"
    },
    {
        id: 24,
        title: "Top 10 fittest bollywood actors fitness secret revealed",
        para: "As I fought to hit the last rep on my less than perfect bench press, I sat up to see a guy had been watching my struggle from across the gym. I’d only been training a few weeks and my form was pretty shaky. My lack of technical skill led me to just heave the bar up and hope for the best.",
        category: "bollywood",
        pika: "./images/bollywood/f4.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"top"
    },
    {
        id: 25,
        title: "Bollywood Stars Who Studied Abroad",
        para: "Studying comprehensive vocational or degree courses from a world-class university has its own perks. Apart from gaining international exposure, you also get a platform to build strong connections. Over the years, students have started pursuing higher education from top universities in the world and our beloved Bollywood is no different. ",
        category: "bollywood",
        pika: "./images/bollywood/f5.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"latest"
    },
    {
        id: 26,
        title: "Manoj Bajpayee",
        para: "Manoj Bajpayee isnt someone born with a silver spoon in his mouth. In fact his reality was way from that.",
        category: "bollywood",
        pika: "./images/bollywood/f6.jpg",
        key: "Intertainment",
        datee:"July 21 2021"
    },
    {
        id: 27,
        title: "9 Upcoming Bollywood Remakes Inspired by Tamil Cinema",
        para: "The trend of remakes from one film industry to another is not going away anytime soon. Let us look at some of the Tamil movies that are currently being remade in Bollywood.",
        category: "bollywood",
        pika: "./images/bollywood/f7.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"latest"
    },
    {
        id: 28,
        title: "Journey of the 100-Crore Bollywood Film",
        para: "Now, what really is this 100-crore film that seems to have become the new benchmark in Bollywood, and that which gets producers and distributors to leave no stone unturned in their attempt to break the barrier?",
        category: "bollywood",
        pika: "./images/bollywood/f8.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"latest"
    },
    {
        id: 29,
        title: "Why Is Bollywood Parks In Dubai A Must Visit For Cinephiles?",
        para: "Got some filmy keeda in you? If yes, it’s time to nurture it by visiting the Bollywood parks in Dubai. The one of a kind Bollywood theme parks boasts by celebrating the legendary film industry of Mumbai each day. From romance to comedy, action, adventure, food, music, dance, attractive sets- this place has everything to amaze you.",
        category: "bollywood",
        pika: "./images/bollywood/f9.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"latest"
    },
    {
        id: 30,
        title: "An Inventory Of The 40 Best Bollywood Movies You Can Watch Online",
        para: "Say what you will about Bollywood films, I'm willing to bet that all of India's population has fallen prey to the charms of at least one movie at some point. In fact, the spell of Bollywood movies stretches far beyond the Indian subcontinent, with loyal fans sprouting in almost every corner of the globe.",
        category: "bollywood",
        pika: "./images/bollywood/f10.jpg",
        key: "Intertainment",
        datee:"July 21 2021",
        mark:"latest"
    },






    {
        id: 31,
        title: "Film Review: Once Upon a Time in Hollywood",
        para: "To celebrate the launch of our new movie themed TV advert…  Boiler Man is off to Hollywood…and he wants to take you with him!",
        category: "hollywood",
        pika: "./images/hollywood/f1.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"latest"
    },
    {
        id: 32,
        title: "WIN a trip to Hollywood",
        para: "To celebrate the launch of our new movie themed TV advert…  Boiler Man is off to Hollywood…and he wants to take you with him!",
        category: "hollywood",
        pika: "./images/hollywood/f2.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"latest"
    },
    {
        id: 33,
        title: "Classic Film: Montgomery Clift & Other Great Actors",
        para: "The eight most natural classic film actors from the Golden Age of Hollywood. These actors blend perfectly into their characters without showing obvious signs of acting. They dissolve into the character rather than each character being a version of themselves. Who are these eight standout classic film actors?",
        category: "hollywood",
        pika: "./images/hollywood/f3.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"latest"
    },
    {
        id: 34,
        title: "5 Weird Women of Old Hollywood",
        para: "Unlike today, where stars are heavily showcased and their scandals spilled across the headlines of supermarket tabloids, Old Hollywood was rife with incognito lovers, abortions, and double lives in foreign countries. Among the legions of golden haired beauties with scarlett lips lay weird women in hiding, beautiful and seductive yet secretly very interesting and intelligent.",
        category: "hollywood",
        pika: "./images/hollywood/f4.jpg",
        key: "Intertainment",
        datee:"may 5 2020"
    },
    {
        id: 35,
        title: "Boulevards of Movie Dreams Part One: Imagineering Hollywood",
        para: "Two beloved boulevards are celebrating anniversaries this year at Disney’s Hollywood Studios.Thirty years ago, the glamorous entry to an all-new Disney park “…dedicated to Hollywood,” as the opening day plaque reads, “not a place on a map, but a state of mind that exists wherever people dream and wonder and imagine.",
        category: "hollywood",
        pika: "./images/hollywood/f5.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"top"
    },
    {
        id: 36,
        title: "3 times Hollywood took whitewashing to a whole new level",
        para: "The #OscarsSoWhite hashtag trended during the 2016 Oscars. 2016. Think about that. This is supposed to be one of the most progressive industries in America.",
        category: "hollywood",
        pika: "./images/hollywood/f6.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"top"
    },
    {
        id: 37,
        title: "Emma Watson, Hollywood, Before, After, Before and After",
        para: "Emma Watson, Hollywood, Before, After, Before and After, Finest actress of the era.",
        category: "hollywood",
        pika: "./images/hollywood/f7.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"top"
    },
    {
        id: 38,
        title: "DID HOLLYWOOD CLEAN UP ANCIENT ROME?",
        para: "Hollywood movies depict Imperial Rome as a city of gleaming marble and gold. But by the 1st century AD, more than 1 million inhabitants were squeezed into the city—a population density that would not be equaled until 19th-century Manhattan.",
        category: "hollywood",
        pika: "./images/hollywood/f8.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"top"
    },
    {
        id: 39,
        title: "How Japan has Influenced Hollywood, and Vice Versa",
        para: "You might think that nothing is more quintessentially western than the world of Hollywood. The stories that it tells are generally rooted in American culture, whether it’s the comic-book worlds of Marvel and DC, or more arthouse movies like Three Billboards Outside Ebbing, Missouri.",
        category: "hollywood",
        pika: "./images/hollywood/f9.jpg",
        key: "Intertainment",
        datee:"may 5 2020",
        mark:"top"
    },






    {
        id: 40,
        title: "Internet Communication",
        para: "In today's world, a person's personality and interests can be easily identified by observing how active he or she is on the various social media platforms, and what they post. Although social media was fundamentally created for connecting people across the world and allowing them to share their thoughts and opinions, these platforms have now become an extensive medium for building businesses and promoting oneself.",
        category: "tech",
        pika: "./images/tech/f1.jpg",
        key: "Technology",
        datee:"may 5 2020",
        mark:"latest"
    },
    {
        id: 41,
        title: "Can technology help mitigate the impact of COVID-19?",
        para: "The last few weeks have witnessed heightened awareness of the threat from the outbreak of COVID-19 (coronavirus). As the virus spreads around the world, we also need to understand what it means for the education systems of Europe and Central Asia.",
        category: "tech",
        pika: "./images/tech/f2.jpg",
        key: "Technology",
        datee:"may 6 2020",
        mark:"latest"
    },
    {
        id: 42,
        title: "Women, Technology, and the Future of Work",
        para: "The way we work is changing at an unprecedented rate. Digitalization, artificial intelligence, and machine learning are eliminating many jobs involving low and middle-skill routine tasks through automation.",
        category: "tech",
        pika: "./images/tech/f3.jpg",
        key: "Technology",
        datee:"may 7 2020",
        mark:"latest"
    },
    {
        id: 43,
        title: "If transistors can’t get smaller, then coders have to get smarter",
        para: "MIT CSAIL researchers say improving computing technology after Moore's Law will require more efficient software, new algorithms, and specialized hardware.",
        category: "tech",
        pika: "./images/tech/f4.jpg",
        key: "Technology",
        datee:"may 8 2020",
        mark:"latest"
    },
    {
        id: 44,
        title: "India ranked top exporter of information and communication technology services: UN report",
        para: "United Nations: India has been ranked the top exporter of information and communication technology services in a new UN report which highlighted the rise of the country as an emerging innovation center in Asia.",
        category: "tech",
        pika: "./images/tech/f5.jpg",
        key: "Technology",
        datee:"may 9 2020",
        mark:"top"
    },
    {
        id: 45,
        title: "16 Advantages of Digital Technology",
        para: "Digital technology has transformed nearly every aspect of modern life. Travel, work, shopping, entertainment, and communications are just some of the areas that have been revolutionized in recent decades. It's now rare to find an electronic device or piece of machinery that doesn't incorporate digital technology in some way.",
        category: "tech",
        pika: "./images/tech/f6.jpg",
        key: "Technology",
        datee:"may 10 2020",
        mark:"top"
    },
    {
        id: 46,
        title: "Tech giants' profits soar as pandemic boom continues",
        para: "Apple's profits nearly doubled to $21.7bn (£15.6bn) in the three months to 30 June as customers bought pricier 5G iPhones.Microsoft saw a $16.5bn profit at the same time - up 47% year-on-year, due to demand for cloud services and games.Analysts warned that the figures may lead to calls for tech company curbs.",
        category: "tech",
        pika: "./images/tech/f7.jpg",
        key: "Technology",
        datee:"may 11 2020",
        mark:"top"
    },
    {
        id: 47,
        title: "South Asians Are Shaping the Future of Science and Technology",
        para: "Each year, the MIT Technology Review publishes a list of outstanding innovators under 35. They come from fields as diverse as biotechnology, robotics, artificial intelligence, nanotechnology, energy, the web, transportation, communications, materials and computer hardware. Their innovations are recognized as having the potential to provide solutions with global ramifications and make a big difference in the way people live, work, heal and think.",
        category: "tech",
        pika: "./images/tech/f8.jpg",
        key: "Technology",
        datee:"may 5 2020",
        mark:"top"
    },
];

export const DataContext = createContext()

export const DataProvider = (props) => {

    return (
        <DataContext.Provider value={datas}>
            {props.children}
        </DataContext.Provider>
    );
}