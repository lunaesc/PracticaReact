export const routes = [
    {
        name:"Home",
        link:"/",
    },
    {
        name:"Services",
        link:"/services",

        subRoutes: [
            {
                name:"Web Development",
                link:"/services/web-development",

                subRoutesWebDeve: [
                    {
                        name:"Tecnologías",
                        link:"/services/web-development/Tecnologías",  
                    },
                    {
                        name:"Tecnologías2",
                        link:"/services/web-developmentt/Tecnologías2",  
                    },
                ]
            },
            {
                name:"Mobile development",
                link:"/service/Mobile-development",
            },
            {
                name:"UI/UX Design",
                link:"/service/ui-ux-design",
            },  
        
         
        ]
    },
    {
        name:"Products",
        link:"/products",
    },
    {
        name:"Contact Us",
        link:"/contact",
    },

]