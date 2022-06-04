import React from "react";
import SkillCard from "./SkillCard";

const Skill = () => {
  const expertise = [
    {
      id: 1,
      name: "Javascript",
      icon: <i className="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "HTML5",
      icon: <i className="fa-brands fa-html5"></i>,
      color: "text-red-500",
    },
    {
      id: 3,
      name: "CSS",
      icon: <i className="fa-brands fa-css3"></i>,
      color: "text-blue-500",
    },
    {
      id: 4,
      name: "React.Js",
      icon: <i className="fa-brands fa-react"></i>,
      color: "text-blue-500",
    },
    {
      id: 5,
      name: "ES6",
      icon: (
        <span className="text-[8px] pt-2 pl-2 pb-0.5 pr-0.5 rounded bg-yellow-500">
          <i className="fa-solid fa-e"></i>
          <i className="fa-solid fa-s"></i>
        </span>
      ),
      color: "text-black",
    },
    {
      id: 6,
      name: "Tailwind",
      icon: (
        <svg
          className="inline"
          width="18px"
          height="16px"
          viewBox="0 0 256 154"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient
              x1="-2.77777778%"
              y1="32%"
              x2="100%"
              y2="67.5555556%"
              id="linearGradient-1"
            >
              <stop stopColor="#2298BD" offset="0%"></stop>
              <stop stopColor="#0ED7B5" offset="100%"></stop>
            </linearGradient>
          </defs>
          <g>
            <path
              d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z"
              fill="url(#linearGradient-1)"
            ></path>
          </g>
        </svg>
      ),
      color: "",
    },
    {
      id: 7,
      name: "Rest API",
      icon: "",
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "Express.js",
      icon: (
        <span className="text-[8px] pt-2 pl-2 pb-0.5 pr-0.5 rounded bg-yellow-500">
          <i className="fa-solid fa-e"></i>
          <i className="fa-solid fa-x"></i>
        </span>
      ),
      color: "text-black",
    },
  ];

  const comfortable = [
    {
      id: 1,
      name: "Node.js",
      icon: <i className="fa-brands fa-node"></i>,
      color: "text-green-500",
    },
    {
      id: 2,
      name: "MongoDB",
      icon: <i className="fa-brands fa-envira"></i>,
      color: "text-green-500",
    },
    {
      id: 3,
      name: "Bootstrap",
      icon: (
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M0,222.991225 C0,241.223474 14.7785318,256 33.0087747,256 L222.991225,256 C241.223474,256 256,241.221468 256,222.991225 L256,33.0087747 C256,14.7765263 241.221468,0 222.991225,0 L33.0087747,0 C14.7765263,0 0,14.7785318 0,33.0087747 L0,222.991225 Z"
              fill="#563D7C"
            ></path>
            <path
              d="M106.157563,113.238095 L106.157563,76.9845938 L138.069328,76.9845938 C141.108559,76.9845938 144.039202,77.2378593 146.861345,77.7443978 C149.683488,78.2509362 152.179961,79.1554557 154.35084,80.4579832 C156.52172,81.7605107 158.258397,83.5695496 159.560924,85.8851541 C160.863452,88.2007585 161.514706,91.1675823 161.514706,94.7857143 C161.514706,101.298352 159.560944,106.001853 155.653361,108.896359 C151.745779,111.790864 146.752832,113.238095 140.67437,113.238095 L106.157563,113.238095 L106.157563,113.238095 Z M72.07493,50.5 L72.07493,205.5 L147.186975,205.5 C154.133788,205.5 160.899594,204.631661 167.484594,202.894958 C174.069594,201.158255 179.93088,198.480877 185.068627,194.862745 C190.206375,191.244613 194.294803,186.577293 197.334034,180.860644 C200.373264,175.143996 201.892857,168.37819 201.892857,160.563025 C201.892857,150.866431 199.541107,142.581033 194.837535,135.706583 C190.133963,128.832132 183.00635,124.020088 173.454482,121.270308 C180.401295,117.941627 185.647508,113.672295 189.193277,108.462185 C192.739047,103.252075 194.511905,96.7395349 194.511905,88.9243697 C194.511905,81.6881057 193.317939,75.6097352 190.929972,70.6890756 C188.542005,65.7684161 185.177193,61.8247114 180.835434,58.8578431 C176.493676,55.8909749 171.283644,53.756309 165.205182,52.4537815 C159.12672,51.151254 152.397096,50.5 145.016106,50.5 L72.07493,50.5 L72.07493,50.5 Z M106.157563,179.015406 L106.157563,136.466387 L143.279412,136.466387 C150.660401,136.466387 156.594049,138.166883 161.080532,141.567927 C165.567016,144.968971 167.810224,150.649353 167.810224,158.609244 C167.810224,162.661552 167.122789,165.990183 165.747899,168.595238 C164.373009,171.200293 162.527789,173.262597 160.212185,174.782213 C157.89658,176.301828 155.219203,177.387252 152.179972,178.038515 C149.140741,178.689779 145.956833,179.015406 142.628151,179.015406 L106.157563,179.015406 L106.157563,179.015406 Z"
              fill="#FFFFFF"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "React Query",
      icon: <i className="fa-brands fa-react"></i>,
      color: "text-red-500",
    },
    {
      id: 5,
      name: "Axios",
      icon: "",
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "DaisyUI",
      icon: <i className="fa-solid fa-fan"></i>,
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Stripe",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 256 256"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <linearGradient x1="100%" y1="58.356%" x2="0%" y2="0%" id="a">
              <stop stopColor="#2697D4" offset="0%" />
              <stop stopColor="#207BCB" offset="50%" />
              <stop stopColor="#2285CE" offset="100%" />
            </linearGradient>
            <filter
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
              id="b"
            >
              <feOffset
                dx="2"
                dy="2"
                in="SourceAlpha"
                result="shadowOffsetOuter1"
              />
              <feGaussianBlur
                stdDeviation="3.5"
                in="shadowOffsetOuter1"
                result="shadowBlurOuter1"
              />
              <feColorMatrix
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.185125113 0"
                in="shadowBlurOuter1"
                result="shadowMatrixOuter1"
              />
              <feMerge>
                <feMergeNode in="shadowMatrixOuter1" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path fill="url(#a)" d="M0 0h256v256H0z" />
          <path
            d="M139.688 111c-12.927-4.78-20.011-8.5-20.011-14.343 0-4.96 4.073-7.792 11.334-7.792 13.281 0 26.916 5.136 36.302 9.739l5.312-32.76c-7.438-3.542-22.667-9.385-43.74-9.385-14.874 0-27.27 3.895-36.124 11.156-9.21 7.614-13.99 18.594-13.99 31.875 0 24.083 14.698 34.354 38.604 43.031 15.406 5.49 20.542 9.386 20.542 15.406 0 5.844-4.96 9.208-13.99 9.208-11.157 0-29.572-5.489-41.615-12.572L77 187.677c10.27 5.844 29.395 11.864 49.23 11.864 15.76 0 28.864-3.718 37.718-10.801 9.916-7.792 15.052-19.302 15.052-34.177 0-24.615-15.052-34.886-39.313-43.562z"
            fill="#FFF"
            filter="url(#b)"
          />
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 8,
      name: "React Router",
      icon: (
        <svg
          width="18px"
          height="14px"
          viewBox="0 0 256 140"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M78.0659341,92.5875806 C90.8837956,92.5875806 101.274726,82.1966508 101.274726,69.3787894 C101.274726,56.5609279 90.8837956,46.1699982 78.0659341,46.1699982 C65.2480726,46.1699982 54.8571429,56.5609279 54.8571429,69.3787894 C54.8571429,82.1966508 65.2480726,92.5875806 78.0659341,92.5875806 Z M23.2087913,139.005163 C36.0266526,139.005163 46.4175825,128.614233 46.4175825,115.796372 C46.4175825,102.97851 36.0266526,92.5875806 23.2087913,92.5875806 C10.3909298,92.5875806 0,102.97851 0,115.796372 C0,128.614233 10.3909298,139.005163 23.2087913,139.005163 Z M232.791209,139.005163 C245.60907,139.005163 256,128.614233 256,115.796372 C256,102.97851 245.60907,92.5875806 232.791209,92.5875806 C219.973347,92.5875806 209.582418,102.97851 209.582418,115.796372 C209.582418,128.614233 219.973347,139.005163 232.791209,139.005163 Z"
              fill="#000000"
            ></path>
            <path
              d="M156.565464,70.3568084 C155.823426,62.6028163 155.445577,56.1490255 149.505494,51.6131676 C141.982638,45.8687002 133.461166,49.5960243 122.964463,45.8072968 C112.650326,43.3121427 105,34.1545727 105,23.2394367 C105,10.4046502 115.577888,0 128.626373,0 C138.29063,0 146.599638,5.70747659 150.259573,13.8825477 C155.861013,24.5221258 152.220489,35.3500418 159.258242,40.8041273 C167.591489,47.2621895 178.826167,42.5329154 191.362109,48.6517412 C195.390112,50.5026944 198.799584,53.4384578 201.202056,57.0769224 C203.604528,60.7153869 205,65.0565524 205,69.7183101 C205,80.633446 197.349674,89.7910161 187.035538,92.2861702 C176.538834,96.0748977 168.017363,92.3475736 160.494506,98.092041 C152.03503,104.551712 156.563892,115.358642 149.669352,126.774447 C145.756163,134.291567 137.802119,139.43662 128.626373,139.43662 C115.577888,139.43662 105,129.03197 105,116.197184 C105,106.873668 110.581887,98.832521 118.637891,95.1306146 C131.173833,89.0117889 142.408511,93.7410629 150.741758,87.2830007 C155.549106,83.5574243 156.565464,77.8102648 156.565464,70.3568084 Z"
              fill="#D0021B"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
  ];

  const familiar = [
    {
      id: 1,
      name: "Typescript",
      icon: (
        <span className="text-[8px] pt-2 pl-2 pb-0.5 pr-0.5 rounded bg-blue-500">
          <i className="fa-solid fa-t"></i>
          <i className="fa-solid fa-s"></i>
        </span>
      ),
      color: "text-white",
    },
    {
      id: 2,
      name: "React Native",
      icon: <i className="fa-brands fa-react"></i>,
      color: "text-blue-400",
    },
    {
      id: 3,
      name: "Mongoose",
      icon: <i className="fa-brands fa-js-square"></i>,
      color: "text-yellow-500",
    },
    {
      id: 4,
      name: "Next.Js",
      icon: (
        <svg
          height="15"
          viewBox=".145 .207 147.685 89.291"
          width="25"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m34.992 23.495h27.855v2.219h-25.301v16.699h23.792v2.219h-23.792v18.334h25.591v2.219h-28.145zm30.35 0h2.96l13.115 18.334 13.405-18.334 18.233-23.288-29.955 43.549 15.436 21.429h-3.076l-14.043-19.502-14.101 19.502h-3.018l15.552-21.429-14.507-20.261zm34.297 2.219v-2.219h31.742v2.219h-14.623v39.47h-2.554v-39.47h-14.564zm-99.494-2.219h3.192l44.011 66.003-18.188-24.313-26.346-38.537-.116 38.537h-2.553zm130.98 38.801c-.523 0-.914-.405-.914-.928 0-.524.391-.929.913-.929.528 0 .913.405.913.929 0 .523-.385.928-.913.928zm2.508-2.443h1.367c.019.742.56 1.24 1.354 1.24.888 0 1.391-.535 1.391-1.539v-6.356h1.391v6.362c0 1.808-1.043 2.849-2.77 2.849-1.62 0-2.732-1.01-2.732-2.556zm7.322-.08h1.379c.118.853.95 1.395 2.149 1.395 1.117 0 1.937-.58 1.937-1.377 0-.685-.521-1.097-1.708-1.377l-1.155-.28c-1.62-.38-2.36-1.166-2.36-2.487 0-1.602 1.304-2.668 3.26-2.668 1.82 0 3.15 1.066 3.23 2.58h-1.354c-.13-.828-.85-1.346-1.894-1.346-1.1 0-1.832.53-1.832 1.34 0 .642.472 1.01 1.64 1.284l.987.243c1.838.43 2.596 1.178 2.596 2.53 0 1.72-1.33 2.799-3.453 2.799-1.987 0-3.323-1.029-3.422-2.637z"
            fill="#fff"
          />
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "MaterialUI",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 256 204"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <polygon
              fill="#00B0FF"
              points="0 110.848 0 0 96 55.424 96 92.3733333 32 55.424 32 129.322667"
            ></polygon>
            <polygon
              fill="#0081CB"
              points="96 55.424 192 0 192 110.848 128 147.797333 96 129.322667 160 92.3733333 160 55.424 96 92.3733333"
            ></polygon>
            <polygon
              fill="#00B0FF"
              points="96 129.322667 96 166.272 160 203.221333 160 166.272"
            ></polygon>
            <path
              d="M160,203.221333 L256,147.797333 L256,73.8986667 L224,92.3733333 L224,129.322667 L160,166.272 L160,203.221333 Z M224,55.424 L224,18.4746667 L256,5.68434189e-14 L256,36.9493333 L224,55.424 Z"
              fill="#0081CB"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 6,
      name: "Framer Motion",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-framer"
        >
          <path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>
        </svg>
      ),
      color: "text-purple-500",
    },
  ];

  const tools = [
    {
      id: 1,
      name: "Firebase",
      icon: (
        <svg
          width="16px"
          height="18px"
          viewBox="0 0 256 351"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <path
              d="M1.25273437,280.731641 L2.85834533,277.600858 L102.211177,89.0833546 L58.0613266,5.6082033 C54.3920011,-1.28304578 45.0741245,0.473674398 43.8699203,8.18789086 L1.25273437,280.731641 Z"
              id="path-1"
            ></path>
            <filter
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
              id="filter-2"
            >
              <feGaussianBlur
                stdDeviation="17.5"
                in="SourceAlpha"
                result="shadowBlurInner1"
              ></feGaussianBlur>
              <feOffset
                dx="0"
                dy="0"
                in="shadowBlurInner1"
                result="shadowOffsetInner1"
              ></feOffset>
              <feComposite
                in="shadowOffsetInner1"
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                result="shadowInnerInner1"
              ></feComposite>
              <feColorMatrix
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.06 0"
                type="matrix"
                in="shadowInnerInner1"
              ></feColorMatrix>
            </filter>
            <path
              d="M134.417103,148.974235 L166.455722,116.161738 L134.417104,55.1546874 C131.374828,49.3635911 123.983911,48.7568362 120.973828,54.5646483 L103.26875,88.6738296 L102.739423,90.4175473 L134.417103,148.974235 Z"
              id="path-3"
            ></path>
            <filter
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
              id="filter-4"
            >
              <feGaussianBlur
                stdDeviation="3.5"
                in="SourceAlpha"
                result="shadowBlurInner1"
              ></feGaussianBlur>
              <feOffset
                dx="1"
                dy="-9"
                in="shadowBlurInner1"
                result="shadowOffsetInner1"
              ></feOffset>
              <feComposite
                in="shadowOffsetInner1"
                in2="SourceAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
                result="shadowInnerInner1"
              ></feComposite>
              <feColorMatrix
                values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.09 0"
                type="matrix"
                in="shadowInnerInner1"
              ></feColorMatrix>
            </filter>
          </defs>
          <g>
            <path
              d="M0,282.99762 L2.12250746,280.0256 L102.527363,89.5119284 L102.739423,87.4951323 L58.478806,4.35817711 C54.7706269,-2.60604179 44.3313035,-0.845245771 43.1143483,6.95065473 L0,282.99762 Z"
              fill="#FFC24A"
            ></path>
            <g>
              <use fill="#FFA712" fillRule="evenodd"></use>
              <use fill="black" fillOpacity="1" filter="url(#filter-2)"></use>
            </g>
            <path
              d="M135.004975,150.380704 L167.960199,116.629461 L134.995423,53.6993114 C131.866109,47.7425353 123.128817,47.7253411 120.032618,53.6993112 L102.421015,87.2880848 L102.421015,90.1487443 L135.004975,150.380704 Z"
              fill="#F4BD62"
            ></path>
            <g>
              <use fill="#FFA50E" fillRule="evenodd"></use>
              <use fill="black" fillOpacity="1" filter="url(#filter-4)"></use>
            </g>
            <polygon
              fill="#F6820C"
              points="0 282.99762 0.962097168 282.030396 4.45771144 280.60956 132.935323 152.60956 134.563025 148.178595 102.513123 87.1048584"
            ></polygon>
            <path
              d="M139.120971,347.551268 L255.395916,282.703666 L222.191698,78.2093373 C221.153051,71.8112478 213.303658,69.2818149 208.724314,73.8694368 L0.000254726368,282.997875 L115.608454,347.545536 C122.914643,351.624979 131.812872,351.62689 139.120971,347.551268"
              fill="#FDE068"
            ></path>
            <path
              d="M254.354084,282.159837 L221.401937,79.2179369 C220.371175,72.8684188 213.843792,70.2409553 209.299213,74.79375 L1.28945312,282.600785 L115.627825,346.509458 C122.878548,350.557931 131.709226,350.559827 138.961846,346.515146 L254.354084,282.159837 Z"
              fill="#FCCA3F"
            ></path>
            <path
              d="M139.120907,345.64082 C131.812808,349.716442 122.914579,349.714531 115.60839,345.635089 L0.93134768,282.014551 L0.000191044776,282.997875 L115.60839,347.545536 C122.914579,351.624979 131.812808,351.62689 139.120907,347.551268 L255.395853,282.703666 L255.111196,280.951785 L139.120907,345.64082 Z"
              fill="#EEAB37"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 2,
      name: "Heroku",
      icon: (
        <svg
          width="17px"
          height="18px"
          viewBox="0 0 256 285"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M230.4,0 C244.39552,0 255.77047,11.2315104 255.99657,25.1765997 L256,25.6 L256,258.844444 C256,272.839964 244.765005,284.214915 230.823296,284.441014 L230.4,284.444444 L25.6,284.444444 C11.60448,284.444444 0.2295296,273.209449 0.003430144,259.26774 L0,258.844444 L0,25.6 C0,11.60096 11.2349952,0.2294592 25.1767043,0.003429088 L25.6,0 L230.4,0 Z M230.4,14.2222222 L25.6,14.2222222 C19.426,14.2222222 14.3820625,19.169691 14.2259468,25.3068692 L14.2222222,25.6 L14.2222222,258.844444 C14.2222222,265.018444 19.169691,270.062382 25.3068692,270.218498 L25.6,270.222222 L230.4,270.222222 C236.5775,270.222222 241.618047,265.274753 241.774056,259.137575 L241.777778,258.844444 L241.777778,25.6 C241.777778,19.328 236.675556,14.2222222 230.4,14.2222222 Z M64,184.888889 L96,213.333333 L64,241.777778 L64,184.888889 Z M92.4444444,42.6666667 L92.4444444,123.416889 C106.645333,118.794667 126.496,113.777778 145.777778,113.777778 C163.36,113.777778 173.884444,120.689778 179.616,126.488889 C191.7248,138.738489 192.013158,154.309103 191.997015,156.385666 L191.996444,156.444444 L192,241.777778 L163.555556,241.777778 L163.555556,156.835556 C163.416889,150.197333 160.216889,142.222222 145.777778,142.222222 C117.146098,142.222222 85.0644658,156.478539 84.1117507,156.905113 L84.0924444,156.913778 L64,166.016 L64,42.6666667 L92.4444444,42.6666667 Z M192,42.6666667 C190.08,58.8231111 183.530667,74.3111111 170.666667,88.8888889 L170.666667,88.8888889 L142.222222,88.8888889 C153.400889,74.2222222 160.419556,58.7875556 163.555556,42.6666667 L163.555556,42.6666667 Z"
              fill="#430098"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 3,
      name: "Github",
      icon: <i className="fa-brands fa-github"></i>,
      color: "text-gray-500",
    },
    {
      id: 4,
      name: "Vs Code",
      icon: (
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <g>
            <path
              d="M191.97885,0 L191.97885,219.867316 L0,191.353848 L191.97885,255.998083 L255.97885,229.374998 L255.97885,30.592308 L256,30.5826932 L255.97885,30.5403853 L255.97885,26.6250001 L191.97885,0 Z M124.796158,37.4576925 L65.9942314,95.5826932 L30.5923079,68.9211553 L16.0019234,73.7942316 L52.0192315,109.398076 L16.0019234,145.000006 L30.5923079,149.875005 L65.9942314,123.211541 L65.9961553,123.211541 L124.794228,181.332699 L160.011538,166.369233 L160.011538,52.4211546 L124.796158,37.4576925 Z M124.794228,78.9307702 L124.794228,139.857695 L84.340386,109.394236 L124.794228,78.9307702 Z"
              fill="#016EC5"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 5,
      name: "Git",
      icon: <i className="fa-brands fa-git-alt"></i>,
      color: "text-orange-500",
    },
    {
      id: 6,
      name: "Netlify",
      icon: (
        <svg
          width="18px"
          height="18px"
          viewBox="0 0 256 256"
          version="1.1"
          preserveAspectRatio="xMidYMid"
        >
          <defs>
            <radialGradient
              cx="50%"
              cy="-50%"
              fx="50%"
              fy="-50%"
              r="99.999879%"
              id="radialGradient-1"
            >
              <stop stopColor="#20C6B7" offset="0%"></stop>
              <stop stopColor="#4D9ABF" offset="100%"></stop>
            </radialGradient>
          </defs>
          <g>
            <path
              d="M185.531657,88.8386745 L185.438083,88.7986152 C185.384611,88.7785856 185.33114,88.7585559 185.284353,88.71182 C185.128922,88.5450526 185.059783,88.3156671 185.097204,88.0909005 L190.263857,56.537508 L214.49299,80.7466915 L189.294692,91.4558836 C189.224664,91.4840915 189.149609,91.4977229 189.074123,91.4959429 L188.973865,91.4959429 C188.940445,91.4759132 188.907026,91.449207 188.840187,91.3824415 C187.90243,90.3394667 186.781011,89.4772625 185.531657,88.8386745 Z M220.675596,86.9158271 L246.582387,112.794149 C251.962925,118.175451 254.656536,120.859426 255.639069,123.9707 C255.786115,124.431382 255.906425,124.892064 256,125.3661 L194.087047,99.1739796 C194.053777,99.1602565 194.020356,99.1469026 193.986789,99.1339203 C193.739485,99.033772 193.452077,98.9202706 193.452077,98.6665615 C193.452077,98.4128525 193.746169,98.2926745 193.993473,98.1925262 L194.07368,98.1591434 L220.675596,86.9158271 Z M254.943944,133.671732 C253.607164,136.182117 251.000444,138.785972 246.589071,143.199174 L217.380434,172.369037 L179.603039,164.510734 L179.402522,164.470674 C179.068327,164.417262 178.714081,164.357173 178.714081,164.056728 C178.424059,160.910007 176.838377,158.025062 174.336127,156.091599 C174.182397,155.938039 174.222501,155.697683 174.269288,155.477357 C174.269288,155.443974 174.269288,155.410591 174.282656,155.383885 L181.38764,111.812696 L181.414376,111.665811 C181.454479,111.331984 181.514634,110.944744 181.81541,110.944744 C184.891098,110.562547 187.68443,108.962956 189.568732,106.504836 C189.628887,106.43807 189.66899,106.364628 189.749197,106.324569 C189.963082,106.22442 190.21707,106.324569 190.437639,106.41804 L254.93726,133.671732 L254.943944,133.671732 Z M210.663116,179.078974 L162.632621,227.056688 L170.853816,176.581943 L170.867184,176.515177 C170.873868,176.448412 170.887235,176.381646 170.907287,176.321557 C170.974126,176.16132 171.147907,176.094554 171.315005,176.027789 L171.395212,175.994406 C173.195291,175.227234 174.787364,174.044216 176.040521,172.542628 C176.200935,172.355684 176.394768,172.175417 176.642072,172.142034 C176.706258,172.131568 176.771719,172.131568 176.835905,172.142034 L210.656432,179.08565 L210.663116,179.078974 Z M152.466411,237.211726 L147.052453,242.619735 L87.198141,156.211777 C87.1764966,156.180172 87.1542123,156.149008 87.1313021,156.118306 C87.0377275,155.991451 86.937469,155.864597 86.9575207,155.717712 C86.9642046,155.610888 87.0310436,155.517416 87.1045665,155.437297 L87.1714054,155.350502 C87.3518707,155.08344 87.5056004,154.816378 87.6726978,154.529286 L87.8063758,154.295607 L87.8264275,154.275577 C87.9200021,154.11534 88.0068928,153.961779 88.1673063,153.874984 C88.3076682,153.808218 88.5015013,153.834924 88.6552309,153.868307 L154.966189,167.528536 C155.151602,167.557337 155.326509,167.6332 155.474165,167.748862 C155.561056,167.835657 155.581108,167.929129 155.601159,168.035954 C156.538781,171.579604 159.080685,174.481797 162.472207,175.880905 C162.659356,175.974376 162.579149,176.181349 162.492259,176.401676 C162.448907,176.498239 162.41532,176.598887 162.392,176.702121 C161.556513,181.776301 154.391374,225.427609 152.466411,237.211726 Z M141.157254,248.501779 C137.166967,252.447622 134.814235,254.537383 132.154043,255.378629 C129.531121,256.207124 126.716183,256.207124 124.093261,255.378629 C120.978565,254.390499 118.284953,251.706524 112.904415,246.325222 L52.796115,186.282975 L68.4965928,161.96029 C68.5701157,161.840112 68.6436385,161.733287 68.7639487,161.646492 C68.9310462,161.526314 69.1716665,161.579727 69.3721835,161.646492 C72.9758773,162.732509 76.8450731,162.536667 80.3204094,161.092338 C80.5008747,161.025573 80.6813399,160.978837 80.8217018,161.105691 C80.8918911,161.169689 80.9546672,161.241354 81.0088509,161.319341 L141.157254,248.508455 L141.157254,248.501779 Z M47.0011749,180.494403 L33.2122921,166.720673 L60.442495,155.116823 C60.5120976,155.086505 60.5871334,155.070606 60.6630636,155.070087 C60.8903162,155.070087 61.0239942,155.29709 61.1443043,155.504063 C61.4179565,155.924608 61.7078093,156.33441 62.0132111,156.732549 L62.1001018,156.839374 C62.1803086,156.952875 62.1268374,157.066376 62.0466306,157.173201 L47.0078588,180.494403 L47.0011749,180.494403 Z M27.1098927,160.624979 L9.66491737,143.199174 C6.69726639,140.234785 4.54505104,138.084934 3.04785776,136.235529 L56.091277,147.225136 C56.1579088,147.237472 56.2247588,147.248601 56.2917939,147.258519 C56.619305,147.311931 56.9802355,147.37202 56.9802355,147.679142 C56.9802355,148.01297 56.5858855,148.16653 56.2516906,148.293385 L56.0979609,148.36015 L27.1098927,160.624979 Z M0,127.275594 C0.0604502235,126.153061 0.262565974,125.042646 0.601550873,123.9707 C1.59076787,120.859426 4.2776951,118.175451 9.66491737,112.794149 L31.9891387,90.4944599 C42.2678594,105.395725 52.574449,120.277789 62.9088536,135.140574 C63.0893188,135.38093 63.2898358,135.647992 63.0826349,135.848289 C62.1067857,136.923214 61.1309365,138.098287 60.442495,139.373509 C60.3678094,139.537425 60.2528491,139.679819 60.1083,139.787455 C60.0214094,139.840868 59.9278348,139.820838 59.8275763,139.800809 L59.8142085,139.800809 L0,127.268917 L0,127.275594 Z M37.964544,84.5256209 L67.9819326,54.5412184 C70.8025378,55.7763809 81.069006,60.1094642 90.2526827,63.9818653 C97.2039372,66.9195489 103.540273,69.5901704 105.532075,70.4581223 C105.732592,70.538241 105.913057,70.6183596 105.999948,70.8186562 C106.053419,70.9388342 106.026683,71.0923949 105.999948,71.2192495 C105.034732,75.6158947 106.348462,80.2026244 109.495627,83.4239895 C109.696144,83.6242861 109.495627,83.911378 109.321845,84.1584104 L109.228271,84.2986181 L78.7496932,131.455117 C78.6694864,131.588648 78.5959636,131.702149 78.4622856,131.788944 C78.301872,131.889093 78.0746195,131.842357 77.8874703,131.795621 C76.7020471,131.485387 75.4834144,131.319494 74.2581134,131.301556 C73.161954,131.301556 71.97222,131.501852 70.7691183,131.722179 L70.7624344,131.722179 C70.6287564,131.742208 70.5084463,131.768915 70.4015039,131.688796 C70.2833886,131.592374 70.181798,131.477365 70.1007284,131.348292 L37.964544,84.5256209 Z M74.0442286,48.4855843 L112.904415,9.66810134 C118.284953,4.29347565 120.978565,1.60282452 124.093261,0.621371137 C126.716183,-0.207123712 129.531121,-0.207123712 132.154043,0.621371137 C135.26874,1.60282452 137.962351,4.29347565 143.342889,9.66810134 L151.764601,18.0805589 L124.126681,60.8372085 C124.058309,60.96168 123.965028,61.0707669 123.852641,61.1576831 C123.685543,61.2711845 123.451607,61.2244486 123.25109,61.1576831 C118.82732,59.8166713 114.026083,60.7408929 110.418005,63.628008 C110.237539,63.8149515 109.970184,63.7081266 109.742931,63.6079783 C106.133626,62.0389882 78.0612517,50.1881055 74.0442286,48.4855843 Z M157.633064,23.942573 L183.152189,49.4336549 L177.003003,87.4766576 L177.003003,87.5768059 C176.997512,87.6635077 176.979502,87.7489613 176.949531,87.8305149 C176.882692,87.964046 176.749014,87.9907522 176.615336,88.0308116 C175.300608,88.4286107 174.062357,89.0447985 172.95256,89.8535107 C172.904848,89.8874753 172.860126,89.925447 172.818882,89.9670121 C172.745359,90.0471308 172.671836,90.1205729 172.551526,90.133926 C172.453607,90.136948 172.356022,90.1210796 172.264118,90.0871901 L133.377196,73.5827495 L133.303674,73.5493667 C133.056369,73.4492184 132.762278,73.3290404 132.762278,73.0753314 C132.53371,70.9106875 131.825947,68.8239396 130.690269,66.9662848 C130.50312,66.6591633 130.295919,66.3386887 130.456333,66.0248907 L157.633064,23.942573 Z M131.351975,81.4009938 L167.805958,96.8238327 C168.006475,96.9173045 168.227044,97.0040997 168.313934,97.2110728 C168.348719,97.335548 168.348719,97.4671613 168.313934,97.5916364 C168.206992,98.1257607 168.113417,98.7333271 168.113417,99.34757 L168.113417,100.369083 C168.113417,100.622792 167.852745,100.729617 167.612125,100.829765 L167.538602,100.856471 C161.763714,103.320119 86.4629122,135.394283 86.3492859,135.394283 C86.2356596,135.394283 86.1153495,135.394283 86.0017232,135.280782 C85.8012062,135.080485 86.0017232,134.80007 86.1821885,134.546361 C86.2140937,134.502354 86.2452892,134.457838 86.275763,134.41283 L116.232997,88.0775474 L116.286468,87.9974288 C116.460249,87.7170135 116.660766,87.4032155 116.981593,87.4032155 L117.282369,87.4499514 C117.964126,87.5434231 118.565677,87.6302183 119.173912,87.6302183 C123.718963,87.6302183 127.929819,85.4202791 130.469701,81.6413497 C130.530215,81.5404379 130.606999,81.4502028 130.696953,81.3742876 C130.877418,81.2407565 131.144774,81.307522 131.351975,81.4009938 Z M89.6043445,142.725139 L171.682619,107.760028 C171.682619,107.760028 171.802929,107.760028 171.916556,107.873529 C172.364377,108.320858 172.745359,108.621303 173.112974,108.901718 L173.293439,109.01522 C173.460536,109.108691 173.627634,109.215516 173.641002,109.389107 C173.641002,109.455872 173.641002,109.495932 173.627634,109.556021 L166.596172,152.69991 L166.569437,152.873501 C166.52265,153.207328 166.475862,153.587892 166.161719,153.587892 C162.355867,153.844495 158.921931,155.960553 156.984726,159.242933 L156.951307,159.296345 C156.857732,159.449906 156.770841,159.59679 156.617112,159.676909 C156.47675,159.743674 156.296285,159.716968 156.149239,159.683585 L90.69382,146.196947 C90.626981,146.183594 89.6778674,142.731816 89.6043445,142.725139 Z"
              fill="url(#radialGradient-1)"
              fillRule="nonzero"
            ></path>
          </g>
        </svg>
      ),
      color: "text-yellow-500",
    },
    {
      id: 7,
      name: "Dev Tool",
      icon: <i className="fa-brands fa-chrome"></i>,
      color: "text-red-500",
    },
    {
      id: 8,
      name: "Figma",
      icon: <i className="fa-brands fa-figma"></i>,
      color: "text-teal-500",
    },
  ];

  return (
    <div id="skill" className="mt-16 text-accent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Expertise</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {expertise.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-down"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Comfortable</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {comfortable.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Familiar</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {familiar.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="skill-container"
        >
          <h2>Tools</h2>
          <div className="flex flex-wrap justify-center gap-5 pb-5">
            {tools.map((skill) => (
              <SkillCard key={skill.id} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
