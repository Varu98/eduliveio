import uuid from "react-uuid";
/**
 * Videos Database can be added here.
 * You can add videos of your wish with different attributes
 * */

export const videos = [
  {
    id: "hQ5wo0nRgW8",
    author: "Tanay Pratap",
    categoryName: "Hiring",
    views: "3.5K views",
    title: "What are the skills to look in your next hire?",
    timestamp: "1 month ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/hQ5wo0nRgW8/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyOWMT8wwszfRDL7ki9c-KA3s2Fg",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "_L-UszPmy2A",
    author: "Tanay Pratap",
    categoryName: "Computer Programming",
    views: "111K views",
    title:
      "HOW to write your First CLI App: Intro to programming | Tanay Pratap",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/_L-UszPmy2A/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDGctbqQiLkRTgW4wkCgDqfBPR7NQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "fsQK27PjO8M",
    author: "Tanay Pratap",
    categoryName: "Jobs",
    views: "10K views",
    title: "Does CGPA matter for getting a job?",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/fsQK27PjO8M/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBeGNZ5EpUm9x5-SOveZoTMOSuosQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "Icr3pGbz3iE",
    author: "Tanay Pratap",
    categoryName: "Frontend Development",
    views: "12K views",
    title: "Getting started with React Hooks",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/Icr3pGbz3iE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCh23yCMm_AiwbBlxP5wkyc_mhfXQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLQnvobEXpzHCxB1g-q2aXbRDzSaznFVHo5OdFML=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "ZvbzSrg0afE",
    author: "Akshay Saini",
    categoryName: "Javascript",
    views: "395K views",
    title:
      "How JavaScript Works 🔥& Execution Context | Namaste JavaScript Ep.1",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/ZvbzSrg0afE/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDFwJD4Cho-oEqCrTpoW4_myaPzQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "zdp0zrpKzIE",
    author: "Akshay Saini",
    categoryName: "Javascript",
    views: "304K views",
    title: "map, filter & reduce 🙏 Namaste JavaScript Ep. 19 🔥",
    timestamp: "10 months ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/zdp0zrpKzIE/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzXC-vaGAHDVhLbABDiXhxg4rtnw",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "8zKuNo4ay8E",
    author: "Akshay Saini",
    categoryName: "Javascript",
    views: "340K views",
    title:
      "Asynchronous JavaScript & EVENT LOOP from scratch 🔥 | Namaste JavaScript Ep.15",
    timestamp: "10 months ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/8zKuNo4ay8E/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgkoBEXcqdo2nu1Ox8HZmqKLN0oA",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: uuid(),
    author: "Akshay Saini",
    categoryName: "Javascript",
    views: "286K views",
    title: "Closures in JS 🔥 | Namaste JavaScript Episode 10",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/qikxEIxsXco/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBBwtGPH_ev6sqzx50EDzwazP3p6g",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLR8gqN3fHHNYbehMcsJ49rapBPhJMGPYSrl6YQyNg=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "eKqY-oP1d_Y",
    author: "Apna College",
    categoryName: "Computer Programming",
    views: "1.2M views",
    title: "How to Start Coding? Learn Programming for Beginners",
    timestamp: "4 months ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/eKqY-oP1d_Y/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhPToDJ8WcQ3dgxRGyXK7Aec9dsQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "37Aiwud-Jks",
    author: "Apna College",
    categoryName: "College",
    views: "779K views",
    title:
      "How I would Code if I can get back in First Year of College? Software Development Placement",
    timestamp: "2 days ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/37Aiwud-Jks/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD88Gc98NhSA4296vAElm7RVJiIFA",
    author_miniImgUrl:
      "https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "qAeitQWjNNg",
    author: "Apna College",
    categoryName: "Computer Programming",
    views: "65K views",
    title:
      "Binary Search Trees | BST in One Video | Java Placement Course | Data Structures & Algorithms",
    timestamp: "2 days ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/qAeitQWjNNg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuOgZ2fzdNt9mRsd6KXIisunK1KQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "EFUD2MulXY0",
    author: "Apna College",
    categoryName: "College",
    views: "323K views",
    title: "5 Tools that make you Code Faster | using VSCode Extensions",
    timestamp: "5 months ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/EFUD2MulXY0/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCsnAjDzW8lA3qqE9Zj4aV9veHZ0g",
    author_miniImgUrl:
      "https://yt3.ggpht.com/O12gYmCwBASezJpxddXOj1PEirMgxCGX2gOiJ3plomaK4E0K1hr_iobbQEWz1e4QVMflTmug=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "7UlslIXHNsw",
    author: "Engineering with Utsav",
    categoryName: "Jobs",
    views: "109K views",
    title: "How to Prepare for Technical Interviews, Part 1 - Coding",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/7UlslIXHNsw/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAgjOebzvAW6v28XIQRi5O8-57Gsw",
    author_miniImgUrl:
      "https://yt3.ggpht.com/3dhST2suIfX5hbfWZixmdxRBUDyGx01B-_IE3wqBp2tBjgBpBWbF-m5rltC_RbWEq4_2pqlV=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "Peq4GCPNC5c",
    author: "freeCodeCamp.org",
    categoryName: "Jobs",
    views: "289K views",
    title: "10 Common Coding Interview Problems - Solved!",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/Peq4GCPNC5c/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBV9ySqwqzLWfGBD7sBpifRzFL_RA",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "cbSrsYiRamo",
    author: "mayuko",
    categoryName: "Backend Development",
    views: "291K views",
    title: "Backend Development explained in 2 minutes // Tech in 2",
    timestamp: "2 years ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/cbSrsYiRamo/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC2S8_5eeAPCpjIQPyd1xgr7yc-Vg",
    author_miniImgUrl:
      "https://yt3.ggpht.com/mjNkmL_jtTy0nEdVnjPw_xN4Bknadpv6_PkmO_B79yTr1xvyB5IVYYsklcR1PK3ez_d1AOKMPQ=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "qyHyFsT7Hig",
    author: "mayuko",
    categoryName: "Frontend Development",
    views: "202K views",
    title: "Backend Development explained in 2 minutes // Tech in 2",
    timestamp: "2 years ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/qyHyFsT7Hig/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCuArvvd7YPV3gb4fEwFxT6TdA40A",
    author_miniImgUrl:
      "https://yt3.ggpht.com/mjNkmL_jtTy0nEdVnjPw_xN4Bknadpv6_PkmO_B79yTr1xvyB5IVYYsklcR1PK3ez_d1AOKMPQ=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "-bjJetWnNZg",
    author: "Clever Programmer",
    categoryName: "Backend Development",
    views: "149K views",
    title: "Backend Developer Guide 2021",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/-bjJetWnNZg/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC6QCfWOJv1spFt1IdM04kqBJu8iQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "nknwAOtmtDk",
    author: "CodeWithHarry",
    categoryName: "College",
    views: "1.2M views",
    title: "How to Become a Full Stack Web Developer | Complete Roadmap",
    timestamp: "1 year ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/nknwAOtmtDk/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_Fa0KUziH-xUnq-kyKwm0fvY3Ow",
    author_miniImgUrl:
      "https://yt3.ggpht.com/ytc/AKedOLT3EnMXtIOvDT4CL7obl0-acSZCBhMuapXBQFksVQ=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "WfyQ7HhnGfQ&",
    author: "Career Leap",
    categoryName: "Frontend Development",
    views: "1.2M views",
    title:
      "How To Showcase Your Work As A Developer & Get Opportunities | Out Of Syllabus Ep - 01",
    timestamp: "3 months ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/WfyQ7HhnGfQ/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCyRcMDS9DxRUnHCGIW0tEBDx0cjQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/xPMi2J11x3IyCs_MuSw_Kea615PBgbvlhvt6yWoZdsR9G8LI8Swo2ODArBZ-BDSV6BcB9Vzlv60=s68-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "TGS0zeLEnkA&",
    author: "Git-up with Saumya",
    categoryName: "Frontend Development",
    views: "6.1K views",
    title: "How's she Building her own Startup from Scratch ft Yogini 🔥️",
    timestamp: "2 months ago",
    thumbnail_imgUrl:
      "https://i.ytimg.com/vi/TGS0zeLEnkA/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCl5q_2dKNoyNtuRk_T460LB4DItQ",
    author_miniImgUrl:
      "https://yt3.ggpht.com/rHjgRIGauy1ix1CTWdsnwo4eyfGmhFe_dXs3Hpnmm0rX-2T05lC7Nz66PAcA00KXJDWUNlWwEQ=s68-c-k-c0x00ffffff-no-rj",
  },
];
