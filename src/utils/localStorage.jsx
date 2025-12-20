const employees = [
  {
    employees: [
      {
        id: 1,
        email: "employee1@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Prepare monthly report",
            description: "Compile and prepare the monthly performance report",
            date: "2025-01-05",
            category: "Reporting",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Update client data",
            description: "Update CRM with latest client information",
            date: "2024-12-20",
            category: "Data Management",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Server backup",
            description: "Take weekly backup of server",
            date: "2024-12-15",
            category: "IT",
          },
        ],
      },
      {
        id: 2,
        email: "employee2@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Design landing page",
            description: "Create UI design for new landing page",
            date: "2025-01-08",
            category: "Design",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Fix navbar bug",
            description: "Resolve responsiveness issue in navbar",
            date: "2024-12-22",
            category: "Development",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Cross-browser testing",
            description: "Test UI on all major browsers",
            date: "2024-12-18",
            category: "Testing",
          },
        ],
      },
      {
        id: 3,
        email: "employee3@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "API integration",
            description: "Integrate payment gateway API",
            date: "2025-01-10",
            category: "Backend",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Database optimization",
            description: "Optimize queries for faster response",
            date: "2024-12-28",
            category: "Database",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Auth module refactor",
            description: "Refactor authentication module",
            date: "2024-12-14",
            category: "Security",
          },
        ],
      },
      {
        id: 4,
        email: "employee4@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "Content writing",
            description: "Write blog content for homepage",
            date: "2025-01-06",
            category: "Content",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "SEO audit",
            description: "Audit website SEO performance",
            date: "2024-12-26",
            category: "Marketing",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Keyword research",
            description: "Research new SEO keywords",
            date: "2024-12-16",
            category: "SEO",
          },
        ],
      },
      {
        id: 5,
        email: "employee5@example.com",
        password: "123",
        tasks: [
          {
            active: true,
            newTask: true,
            completed: false,
            failed: false,
            title: "User feedback analysis",
            description: "Analyze feedback from recent survey",
            date: "2025-01-07",
            category: "Analysis",
          },
          {
            active: false,
            newTask: false,
            completed: true,
            failed: false,
            title: "Support ticket resolution",
            description: "Resolve pending customer tickets",
            date: "2024-12-24",
            category: "Support",
          },
          {
            active: false,
            newTask: false,
            completed: false,
            failed: true,
            title: "Live chat monitoring",
            description: "Monitor live chat for customer issues",
            date: "2024-12-17",
            category: "Customer Service",
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
      email: "admin@example.com",
      password: "123",
    },
  },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employeesData = localStorage.getItem("employees")
    // const adminData = JSON.parse(localStorage.getItem("admin"));
    // return { employeesData };
    console.log(JSON.parse(employeesData))
};
