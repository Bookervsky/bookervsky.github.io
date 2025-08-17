// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-bookshelf",
          title: "bookshelf",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/books/";
          },
        },{id: "books-computer-networking-a-top-down-approach",
          title: 'Computer Networking A Top-Down Approach',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Computer_Networking/";
            },},{id: "books-convex-optimization",
          title: 'Convex Optimization',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Convex_Optimization/";
            },},{id: "books-effective-python",
          title: 'Effective Python',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Effective_Python/";
            },},{id: "books-hedge-fund-market-wizards",
          title: 'Hedge Fund Market Wizards',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Hedge_fund_Market_Wizards/";
            },},{id: "books-introduction-to-linear-optimization",
          title: 'Introduction to Linear Optimization',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/Introduction_to_Linear_Optimization/";
            },},{id: "news-i-just-finished-my-intern-as-an-algorithm-engineer-in-uhalean-information-technology-shanghai-co-ltd",
          title: 'I just finished my intern as an algorithm engineer in UHAlean Information Technology...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6C%79%75%62%75%6B%65@%67%6D%61%69%6C.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/bookervsky# your GitHub user name", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0001-5155-966X# your ORCID ID", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
