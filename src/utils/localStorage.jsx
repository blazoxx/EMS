localStorage.clear();

const employees = [
  {
    employees: [
      // --------------------------------------------------------
      // EMPLOYEE 1 — Rohit
      // --------------------------------------------------------
      {
        id: 1,
        name: "Rohit",
        email: "rohit@me.co",
        password: "123",

        taskNumbers: {
          active: 1,
          newTask: 1,
          completed: 2,
          failed: 1,
          total: 4,
        },

        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            priority: "High",
            title: "Prepare sales performance report",
            description:
              "Compile detailed sales metrics and convert them into a clear monthly performance report for management analysis.",
            date: "2025-01-11",
            category: "Reporting",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Clean outdated company records",
            description:
              "Review old internal records and safely remove outdated entries from our company’s shared storage system.",
            date: "2024-12-19",
            category: "Data Management",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Organize project documentation",
            description:
              "Categorize all project-related files into clearly labeled folders to keep the documentation system highly organized.",
            date: "2024-12-28",
            category: "Documentation",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            priority: "Medium",
            title: "Weekly administrative tasks",
            description:
              "Complete recurring administrative responsibilities including updates, verifications, and task reviews scheduled for this week.",
            date: "2024-12-15",
            category: "Admin",
          },
        ],
      },

      // --------------------------------------------------------
      // EMPLOYEE 2 — Aman
      // --------------------------------------------------------
      {
        id: 2,
        name: "Aman",
        email: "aman@me.co",
        password: "123",

        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 1,
          total: 4,
        },

        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            priority: "High",
            title: "Design new dashboard UI",
            description:
              "Create a visually appealing and highly intuitive dashboard interface concept for the upcoming analytics product release.",
            date: "2025-01-14",
            category: "Design",
          },
          {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            priority: "High",
            title: "Revamp homepage layout",
            description:
              "Implement a cleaner layout with improved spacing, typography, and responsive adjustments for a better user experience.",
            date: "2025-01-09",
            category: "Design",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Fix hover animation glitch",
            description:
              "Resolve the inconsistent hover animation on multiple UI elements to improve interactivity and user responsiveness.",
            date: "2024-12-24",
            category: "Development",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            priority: "Medium",
            title: "Test layout compatibility",
            description:
              "Perform layout verification on all screen sizes to check spacing alignment and ensure proper responsiveness everywhere.",
            date: "2024-12-18",
            category: "Testing",
          },
        ],
      },

      // --------------------------------------------------------
      // EMPLOYEE 3 — Kunal
      // --------------------------------------------------------
      {
        id: 3,
        name: "Kunal",
        email: "kunal@me.co",
        password: "123",

        taskNumbers: {
          active: 2,
          newTask: 1,
          completed: 1,
          failed: 1,
          total: 4,
        },

        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            priority: "High",
            title: "Integrate new payment gateway",
            description:
              "Add support for the new payment gateway API and ensure secure handling of customer transaction operations.",
            date: "2025-01-10",
            category: "Backend",
          },
          {
            active: true,
            newTask: false,
            completed: false,
            failed: false,
            priority: "High",
            title: "Implement authentication refresh logic",
            description:
              "Add token refresh capabilities to the existing authentication flow, improving security and user session stability.",
            date: "2025-01-12",
            category: "Security",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Optimize database fetch calls",
            description:
              "Reduce the response time of major API endpoints by optimizing frequently accessed SQL database queries.",
            date: "2024-12-29",
            category: "Database",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            priority: "Medium",
            title: "Refactor notification module",
            description:
              "Rewrite the internal notification service to avoid redundant logic and improve message dispatching performance.",
            date: "2024-12-14",
            category: "Backend",
          },
        ],
      },

      // --------------------------------------------------------
      // EMPLOYEE 4 — Siddharth
      // --------------------------------------------------------
      {
        id: 4,
        name: "Siddharth",
        email: "siddharth@me.co",
        password: "123",

        taskNumbers: {
          active: 1,
          newTask: 1,
          completed: 2,
          failed: 1,
          total: 4,
        },

        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            priority: "High",
            title: "Write blog article on trends",
            description:
              "Prepare an engaging and well-researched article covering emerging industry trends relevant for our digital audience.",
            date: "2025-01-13",
            category: "Content",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Proofread landing page copy",
            description:
              "Review written content for errors, improve clarity, and ensure consistent tone across all landing page sections.",
            date: "2024-12-26",
            category: "Content",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Update website SEO titles",
            description:
              "Refresh outdated SEO titles and meta descriptions to improve search visibility and strengthen overall ranking.",
            date: "2024-12-27",
            category: "SEO",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            priority: "Medium",
            title: "Keyword pattern analysis",
            description:
              "Analyze keyword performance patterns to identify underperforming terms requiring strategic improvements next month.",
            date: "2024-12-16",
            category: "Marketing",
          },
        ],
      },

      // --------------------------------------------------------
      // EMPLOYEE 5 — Arjun
      // --------------------------------------------------------
      {
        id: 5,
        name: "Arjun",
        email: "arjun@me.co",
        password: "123",

        taskNumbers: {
          active: 1,
          newTask: 1,
          completed: 2,
          failed: 1,
          total: 4,
        },

        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            priority: "High",
            title: "Analyze customer satisfaction data",
            description:
              "Evaluate feedback trends from recent customer surveys and identify repeating issues affecting user satisfaction.",
            date: "2025-01-07",
            category: "Analysis",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Resolve pending support tickets",
            description:
              "Handle unresolved tickets requiring quick responses and ensure customer concerns are addressed professionally.",
            date: "2024-12-24",
            category: "Support",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            priority: "Low",
            title: "Prepare helpdesk summary report",
            description:
              "Summarize weekly helpdesk performance data and outline key areas for potential workflow improvements.",
            date: "2024-12-25",
            category: "Support",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            priority: "Medium",
            title: "Monitor live customer chats",
            description:
              "Respond to chat messages, identify common issues, and escalate high-priority concerns for urgent resolution.",
            date: "2024-12-17",
            category: "Service",
          },
        ],
      },
    ],
  },
];

const admin = [
  {
    admin: {
      id: 101,
      name: "Admin",
      email: "admin@me.co",
      password: "123",
    },
  },
];


export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employeesData = JSON.parse(localStorage.getItem("employees"))
    const adminData = JSON.parse(localStorage.getItem("admin"));

    return {employeesData, adminData}
};
