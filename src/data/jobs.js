// data/jobs.js
const jobs = [
    {
        company: 'Medtronic',
        position: 'iOS Developer and QA',
        description:
            'In my role as an iOS developer, I have been at the forefront of crafting fully native apps, ' +
            'collaborating closely with stakeholders to understand app requirements, user experiences, and ' +
            'UI expectations. My proficiency in SwiftUI and the latest version of Swift has been instrumental ' +
            'in ensuring a current and efficient codebase adhering to industry best practices. I have demonstrated ' +
            'excellence in integrating health-related functionalities using the HealthKit framework, enhancing ' +
            'user experiences seamlessly.',
        duration: '2023 - Present',
        logo: "/medtronic-logo.png",
        projects: [
            {
                title: "Medtronic iOS Application",
                location: "Minnesota",
                dates: "2023 - Present",
                description: "Developed a native iOS application for monitoring patient health post-procedure. Patients can track vitals, learn about their conditions, schedule appointments, and take health surveys. Utilized FHIR data and SwiftUI for seamless integration",
                image: "/medtronic-logo.png"
            }
        ]
    },
    {
        company: 'Optum',
        position: 'Associate Software Engineer',
        description:
            'During my tenure at Optum, I played a pivotal role in automating and deploying the implementation of the ' +
            'open-source developer portal Backstage.io. This initiative significantly improved efficiency and reduced ' +
            'time-to-market for new features. Integrating GitHub workflows with Spring Boot microservices, I enabled tracking ' +
            'changes in real-time and enhanced collaboration. My role also involved effective communication of project ' +
            'progress using Scrum and agile processes, aligning seamlessly with organizational goals.',
        duration: '2022 - 2023',
        logo: "/optum-logo.svg",
        projects: [
            {
                title: "Backstage.io",
                dates: "2022 - 2023",
                location: "Minnesota",
                description: "Led the automation of Backstage.io implementation using Java Spring Boot. This initiative resulted in improved efficiency, faster time-to-market for new features, and streamlined development processes.",
                image: "/backstage.png"
            }
        ]

    },
    {
        company: 'Meyer Contracting',
        position: 'Project Manager/Estimator',
        description:
            'As a project manager and estimator at Meyer Contracting, I concurrently managed multiple multi-million ' +
            'dollar projects, specializing in heavy civil earthwork, utility, and concrete structures. Beyond ' +
            'financial responsibilities, I actively contributed to the success of each project by creating and ' +
            'updating CPM schedules, mentoring interns, managing employees, and preparing bid proposals for ' +
            'diverse projects.',
        duration: '2016 - 2022',
        logo: "/meyer-logo.svg",
        projects: [
            {
                title: "Nicollet Mall Reconstruction Project",
                location: "Minneapolis, MN",
                dates: "June 2016 - November 2017",
                description: "Carried out for the City of Minneapolis with a contract amount of $32,000,000, this comprehensive project included pavement and sidewalk replacement, storm sewer and watermain replacement, new street lighting and traffic signal systems, wayfinding signage, engineered soil system, and site furnishings. " +
                    "Special attention was required to coordinate with all stakeholders, from business owners, citizens, corporate headquarters, transit, architects, and more",
                image: "/nicollet.jpg"
            },
            {
                title: "Leech Lake Veterans Cemetery",
                location: "Cass Lake, MN",
                dates: "April 2018 - September 2019",
                description: "Executed for the Leech Lake Band of Ojibwe, this project, totaling $2,400,000, involved earthwork and grading preparations, utilities installation, and landscaping.",
                image: "/ojibwe.jpg"
            },
            {
                title: "61st Street West Reconstruction",
                location: "Minneapolis, MN",
                dates: "June 2018 - November 2020",
                description: "Completed for the City of Minneapolis with a contract amount of $3,700,000, this project included storm sewer replacement, concrete pavement replacement, and coordination with high-pressure gas main replacement and railroad crossing replacement. " +
                    "Extra care was needed to avoid unforseen utility conflicts and tight schedules due to coordination with other stakeholders.",
                image: "/61st.jpg"
            },
            {
                title: "Mid-City Industrial Reconstruction",
                location: "Minneapolis, MN",
                dates: "August 2018 - November 2020",
                description: "Undertakenaken for the City of Minneapolis with a contract amount of $9,500,000, this project involved contaminated soil removal, infiltration basin construction, storm sewer, sanitary sewer, watermain, bituminous pavement, concrete pavement, and cast-in-place storm sewer structure. " +
                    "Massive amounts of unexpected contaminated soils were found and safetly disposed of per MPCA guidelines",
                image: "/midcity.jpg"
            },
            {
                title: "Barilla Rail Spur Improvements",
                location: "Ames, IA",
                dates: "May 2018 - July 2018",
                description: "Conducted for Barilla America, Inc., this project involved jack and bore operations for a new watermain under the UP Railroad as well as improving the rail spur for Barilla's North American factory. In total, there was about 12,700’ of track work",
                image: "/Barilla.png"
            },
            {
                title: "Met Transit Rail Replacement",
                location: "Minneapolis, MN",
                dates: "June 2018",
                description: "Executed for the Metropolitan Council with a contract amount of $50,000, this project involved the removal and replacement of light rail train tracks in multiple locations during a shutdown of light rail operations.",
                image: "/met-transit.jpg"
            },
            {
                title: "Woodbury Drive and Local Roads",
                location: "Woodbury, MN",
                dates: "April 2020 - October 2021",
                description: "Undertaken for Washington County with a contract amount of $17,400,000, this project encompassed bituminous pavement replacement, bituminous trail construction, signal systems installation, earthwork, storm sewer replacement, watermain replacement, infiltration basins, and irrigation systems. " +
                    "Delays caused by utility conflicts were overcome by creatively changing the stages in which work took place.",
                image: "/woodbury.jpg"
            },
            {
                title: "Penn Ave Reconstruction at Northpoint",
                location: "Minneapolis, MN",
                dates: "May 2021 - July 2021",
                description: "Completed for Hennepin County with a contract amount of $660,000, this project included sanitary service installation, storm sewer replacement, bituminous pavement replacement, sidewalk replacement, and landscaping.",
                image: "/penn.JPG"
            },
            {
                title: "RCD 4 Storm Sewer and Twin Lakes Trail",
                location: "Roseville, MN",
                dates: "April 2021 - October 2021",
                description: "Undertaken for the City of Roseville with a contract amount of $2,400,000, this project involved the installation of an 84” RCP storm sewer, 30,000 CY common embankment, bituminous trail construction, and the implementation of a lighting system. " +
                    "Special coordination was required to take place with private businesses due to the location of the project and adjacent construction.",
                image: "/roseville.jpg"
            },
        ]
    },
    {
        company: 'Schlumberger',
        position: 'Field Engineer',
        description:
            'My tenure as a field engineer at Schlumberger was marked by overseeing oil well cementing operations ' +
            'while ensuring complete customer satisfaction. I maintained a strong commitment to safety and procedural ' +
            'protocol, implementing management of change when necessary.',
        duration: '2014 - 2015',
        logo: "/SLB_Logo_2022.svg",
        projects: [
            {
                title: "Oil Well Cementing Operations",
                location: "Colorado, Wyoming, Utah",
                description: "Led day-to-day operations in oil well cementing, including casing cementing, squeeze jobs, and plug installations. Managed heavy vehicles and equipment, prioritizing safety and protocol adherence. Achieved complete customer satisfaction with zero incidents.",
                image: "/pipe.jpg.jpg"
            },
            {
                title: "DJ Basin Cement Slurry Design",
                location: "Colorado",
                description: "Designed and tested a groundbreaking cement slurry eliminating the need for separate tail and lead slurries. This innovation streamlined cementing procedures, enhancing efficiency and reducing costs.",
                image: "/workover.jpg"
            },
            {
                title: "Schlumberger WIT Operational School",
                location: "Tyumen, Russia",
                description: "Participated in an extensive project in Russia, focusing on education and operational training. Graduated 'Top of Class' at the six-week Schlumberger WIT operational school. Implemented learned skills in real-world scenarios, contributing to operational excellence.",
                image: "/russia.jpg"
            }
        ]
    },
];

export default jobs;
