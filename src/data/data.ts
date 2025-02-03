interface Experience {
  title: string;
  description: string;
  bullets: string[];
  technologies?: string;
}

export const EXPERIENCES: Record<string, Experience> = {
  salesloft: {
    title:
      'SALESLOFT, Software Development Engineer in Test, 10/2022 to 9/2024',
    description:
      'Authored, maintained and contributed automated UI and API tests to a high-quality playwright codebase. Salesloft, a leading sales engagement platform, helps sales teams guide customers towards the best outcomes.',
    bullets: [
      `Translated manual UI tests out of a complex and vague test library housed in Practitest to fully functional automated UI tests`,
      `Worked in parallel with developers to have E2E UI and API tests prepared in sync for production`,
      `Authored E2E API tests using API documentation in conjunction with manually reverse engineering API calls through the browser`,
      `Acted as Pod Champion providing cross team, pod wide test automation support to Quality Assurance Engineers as well as dev teams without QAE’s on their team`,
    ],
    technologies: `Playwright, Typescript, Javascript, Github Actions`,
  },
  davinci_education: {
    title: 'DAVINCI EDUCATION, Test Automation Engineer, 09/2019 to 08/2022',
    description:
      'Achieved and maintained a consistently high quality of code in all solutions. Built automation framework and test harness from scratch and the ground up. DaVinci’s flagship product (Leo) is the premier enterprise software platform for healthcare education',
    bullets: [
      `Developed hundreds of front-end automated code tests, preventing thousands of bugs from escaping into the production pipeline and increasing the overall quality of released code`,
      `Audited the Leo application and made changes to meet WCAG 2.1 accessibility requirements`,
      `Freed developers’ time to focus on writing new code without troubleshooting issues`,
      `Engaged directly with customers to assess server capacity and upgrade eligibility, then coordinated all aspects of the upgrade`,
    ],
    technologies: `Cucumber, Selenium, RSpec, WATIR, Jenkins`,
  },
  fibonacci_solutions: {
    title: 'FIBONACCI SOLUTIONS, Lead Quality Engineer, 12/2018 to 09/2019',
    description:
      'Designed and implemented test strategy for a large, blockchain-based application. Fibonacci offers software product development solutions that help companies create and commercialize mobility solutions, cloud services, and other next-generation products',
    bullets: [
      `Provided application testing services to Thalr (a silver bullion-supported proof-of-work cryptocurrency company) during their fundraising stage`,
      `Tested four applications using both manual and automated test approaches`,
      `Assisted design personnel with UI/UX design and proof-of-concept of new, tokenized supply chain applications`,
      `Developed repeatable QA processes from the ground up, including test plans, QA SOPs, test cases, and automated test cases`,
    ],
    technologies: `Python, PyTest, Jira, Adobe Suite, Sketch`,
  },
  unspecified: {
    title:
      'UNSPECIFIED, LLC, Co-Founder and Lead Quality Engineer, 06/2017 to 12/2018',
    description:
      'Established and scaled a consulting firm that assists enterprise companies with developing modern software development, testing, and delivery practices using “container-as-build-steps” automation strategy to achieve security, availability, and auditability',
    bullets: [
      `With the other two founders, assisted in the development of a digital wallet that could hold not only cryptocurrencies, but also any digital asset`,
      `Actively pursued new business opportunities by engaging in the greater tech community`,
      `Wrote/executed manual and automated test cases and developed white papers`,
      `Using a homegrown cryptocurrency, supported full-scope design and testing on the Emblem wallet application`,
      `Created business development documents to track potential clients and current projects`,
      `Mentored and onboarded three employees`,
    ],
    technologies: `Python, PyTest, Jira, JavaScript, Ruby`,
  },
  ibm: {
    title: 'IBM, Test Automation Engineer, 02/2017 to 06/2017',
    description:
      'In a four-person team, converted 45 manual regression suite test cases to automated tests, then executed tests for monthly production builds. Supported a product called eClinicalOS, which was an application for dispensing medication to healthcare workers in the medical field',
    bullets: [
      `Developed and executed automated test cases using Selenium WebDriver`,
      `Created and maintained test data`,
      `Executed manual test cases as needed`,
    ],
    technologies: `Ruby, Selenium WebDriver, RSpec, Jira, Confluence`,
  },
  smashing_boxes: {
    title: 'SMASHING BOXES, Lead Quality Engineer, 03/2015 to 02/2017',
    description:
      'Leading a four-person QA team, developed and executed plans to implement automated test across all platforms, operating systems, and web applications. Smashing Boxes is a design-centered software product development firm primarily serving the healthcare, blockchain, and IoT markets',
    bullets: [
      `Led an initiative to adopt automation best practices from scratch, including choosing frameworks and defining which projects would be automated`,
      `Advocated for investments to improve reporting capabilities and defect report insights`,
      `Standardized the company’s QA process, which reduced spin-up time for QA artifacts when beginning new projects`,
    ],
    technologies: `Cucumber, Appium, Ruby, RSpec, Git, Jira, Rails, Jenkins`,
  },
  allscripts: {
    title:
      'Allscripts Healthcare Solutions, Multiple Roles, 02/2005 to 03/2015',
    description:
      'Earned four performance-based promotions in 10-year tenure, taking an increasingly active role in development of Allscripts’s most innovative and profitable technical solutions. Won the CLEAR Award (2007, 2010, 2011), SPOT Award (2009, 2010), and Employee of the Month Award (June 2012).',
    bullets: [
      `Quality Engineer, 08/2012 to 03/2015`,
      `Associate Project Manager and Offshore Trainer, 06/2012 to 08/2012`,
      `Senior Technical Consultant, 07/2011 to 06/2012`,
      `Senior Technical Consultant and Offshore Team Lead, 05/2011 to 07/201`,
      `Technical Consultant, 02/2005 to 05/2011`,
    ],
    technologies: `Agile, Scrum, VMmanager, SQL`,
  },
};
