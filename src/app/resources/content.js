import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Abdul',
    lastName:  'Aziz',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Full Stack Developer',
    avatar:    '/images/avatar.jpg',
    location:  'Asia/Karachi',        
    languages: ['English', 'Bahasa']  
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/once-ui-system/nextjs-starter',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/once-ui/',
    },
    {
        name: 'X',
        icon: 'x',
        link: '',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:example@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Full Stack Developer and Innovator</>,
    subline: <>I'm Aziz, a Frontend Developer skilled in React, Angular, and Next.js<InlineCode>FLY</InlineCode>I create responsive and user-friendly websites that enhance digital experiences. In my free time, I explore new technologies and build personal projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Aziz Is a Frontend Developer skilled in React, Angular, and Next.js<InlineCode>FLY</InlineCode>I create responsive and user-friendly websites that enhance digital experiences. In my free time, I explore new technologies and build personal projects.</>
    },
    work: {
        display: true,
        title: 'Work Experience',
        experiences: [
            {
                company: "Tetralogicx Internship",
                timeframe: "2022 - Present",
                role: "Frontend Developer",
                achievements: [
                    "Developed custom websites using HTML and CSS during a 6-month internship."
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: "Tetralogicx Pvt LTD",
                timeframe: "2022 - Present",
                role: "Frontend Developer",
                achievements: [
                "Transitioned to a full-time Frontend Developer role, focusing on React.js and Shopify, including building Shopify apps and integrating APIs.",
                "Created a Project Management System (PMS) to enhance project task handling and operational efficiency within the company."
            ],
                images: [ 
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
        
            {
                company: 'Funpulse',
                timeframe: '2018 - 2022',
                role: 'Frontend React Developer',
                achievements: [
                    <>Built multiple websites using React.js within a 4-month tenure, focusing on enhancing user experience and functionality.</>
                ],
                images: [ ]
            },
            {
                company: "ICT Nust University",
                timeframe: "Current",
                role: "Frontend Developer",
                achievements: [
                    "Learning Angular and working on university administration panel projects, including an HR recruitment portal."
                ],
                images: [ 
                    {
                        src: '/images/projects/project-01/cover-01.jpg',
                        alt: 'Once UI Project',
                        width: 16,
                        height: 9
                    }
                ]
            }, 
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'ARID Institute And Managment Sciences',
                description: <>Studied BSCE(Compounter Sciences)</>,
            },
            {
                name: 'Govrnment Islamia Collage ',
                description: <>Studied Intermidiate In Computer Science</>,
            },
            {
                name: 'Govrnment Central Modal High School',
                description: <>Studied Matic In Computer Science</>,
            }
        ]
    },
    technical: {
        display: true, 
        title: 'Technical skills',
        skills: [
                {
                title: "HTML & CSS",
                    description: "Expert in creating highly responsive and optimized websites using advanced CSS techniques and HTML5 standards.",
                    images: [
                        {
                            src: '/images/projects/project-01/cover-02.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                        {
                            src: '/images/projects/project-01/cover-03.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: "JavaScript & jQuery",
                    description: <>Skilled in leveraging JavaScript and jQuery to enhance user interactions through custom animations and dynamic content integration.</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: "React.js & Next.js",
                    description: <>Specialize in developing scalable single-page applications using React.js, and static and server-rendered apps with Next.js, focusing on performance optimization and modular design.</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: "Angular",
                    description: <>Proficient in building robust, maintainable web applications with Angular, implementing complex features like dynamic form builders and custom directive handlers.</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: "Nuxt.js",
                    description: <>Experienced in using Nuxt.js for creating server-side rendered Vue.js applications, enhancing SEO and optimizing page load times.</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },
                {
                    title: "Shopify & Liquid",
                    description: <>Advanced knowledge in developing e-commerce solutions with Shopify, customizing storefronts using Liquid templating and API integrations for enhanced shopping experiences.",
                    enhancing SEO and optimizing page load times.</>,
                    images: [
                        {
                            src: '/images/projects/project-01/cover-04.jpg',
                            alt: 'Project image',
                            width: 16,
                            height: 9
                        },
                    ]
                },

        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };