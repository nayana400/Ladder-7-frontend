// Local image imports from Blog.jsx to stay consistent
import Tech1 from "../../assets/Images/blog/tech1.png";
import Tech2 from "../../assets/Images/blog/tech2.png";
import ChristmasCelebration from "../../assets/Images/blog/Christmas-celebration.jpg";
import IndependenceDayCelebration from "../../assets/Images/blog/IndependenceDay-celebration.png";
import OnamCelebration from "../../assets/Images/blog/Onam-celebration.jpeg";

export const technicalBlogs = [
    {
        id: 1,
        image: Tech1,
        date: "18-12-2024",
        author: "Admin",
        title: "Tips for Collaborating with AI Tools in Web Development Teams",
        desc: "Maximize the potential of AI tools in web development by selecting the right tools and fostering AI literacy within teams.",
        category: "Artificial Intelligence",
        stats: { readTime: "5 min", views: "1.2k" }
    },
    {
        id: 2,
        image: Tech2,
        date: "18-12-2024",
        author: "Admin",
        title: "The Role of AI in Personalizing Web User Experiences",
        desc: "AI is transforming web experiences by enabling personalized content, recommendations and user interactions.",
        category: "UX/UI Design",
        stats: { readTime: "8 min", views: "2.4k" }
    },
];

export const events = [
    {
        id: 1,
        image: ChristmasCelebration,
        date: "19-12-2024",
        author: "Admin",
        title: "Lux Noel: A Magical Christmas Celebration",
        desc: "Ladder7 transformed into a winter wonderland for 'Lux Noel,' our spectacular Christmas celebration that brought magic and joy to every corner of the office. The evening was filled with laughter, festive music, and the warm aroma of seasonal treats. Employees participated in a spirited Secret Santa exchange, revealing thoughtful gifts and strengthening our team bonds. The highlight was a beautifully decorated tree that served as the centerpiece for our group photos. This event wasn't just about festivities; it was a celebration of our collective achievements throughout the year, fostering a sense of community and shared purpose as we looked forward to the opportunities of the coming New Year.",
    },
    {
        id: 2,
        image: IndependenceDayCelebration,
        date: "14-08-2024",
        author: "Admin",
        title: "Celebrating Unity and Responsibility",
        desc: "On the eve of India's Independence Day, the team at Ladder7 gathered to honor the spirit of freedom and the profound responsibility we hold as citizens. The office was adorned in vibrant shades of saffron, white, and green, reflecting our national pride. We shared stories of courage and progress, reflecting on how our technological innovations contribute to the nation's growth. The celebration included a poignant flag-hoisting ceremony and cultural performances that showcased the rich diversity within our team. It was a powerful reminder that unity is our greatest strength, inspiring us to work harder towards building a brighter, more sustainable future for our community and the country at large.",
    },
    {
        id: 3,
        image: OnamCelebration,
        date: "05-09-2024",
        author: "Admin",
        title: "Vibrant Onam Festivities at Ladder7",
        desc: "The vibrant Spirit of Onam took center stage at Ladder7 as we celebrated the harvest festival with traditional grandeur. The office entrance was graced by a spectacular 'Pookalam' (floral carpet), painstakingly designed by our talented team members. Dressed in elegant traditional attire, employees enjoyed a sumptuous 'Onasadya' feast, served on banana leaves, which brought everyone together in a true sense of fellowship. The day was packed with energy, featuring traditional games and cultural songs that echoed through the halls. This celebration was a testament to our commitment to honoring cultural heritage while fostering an inclusive environment where every tradition is celebrated with equal enthusiasm and joy.",
    },
];
