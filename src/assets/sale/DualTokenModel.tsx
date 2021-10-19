function DualTokenModel(props) {
  return (
    <svg
      width="68"
      height="54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="20.25"
        cy="20.25"
        r="19.75"
        fill="url(#paint01_linear_DTM)"
        stroke="#002EFF"
      />
      <path
        d="M17.9833 40L40.5 0.999999L63.0167 40H17.9833Z"
        fill="url(#paint11_linear_DTM)"
        stroke="#E00389"
      />
      <mask
        id="a"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="17"
        y="0"
        width="47"
        height="41"
      >
        <path
          d="M17.9833 40L40.5 0.999999L63.0167 40H17.9833Z"
          fill="url(#paint21_linear_DTM)"
          stroke="#E00389"
        />
      </mask>
      <g mask="url(#a)">
        <circle
          cx="20.25"
          cy="20.25"
          r="19.75"
          fill="url(#paint31_radial_DTM)"
          stroke="#002EFF"
        />
      </g>
      <defs>
        <linearGradient
          id="paint01_linear_DTM"
          x1="20.25"
          y1="0"
          x2="20.25"
          y2="40.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002EFF" />
          <stop offset="1" stopColor="#002EFF" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint11_linear_DTM"
          x1="40.5"
          y1="0"
          x2="40.5"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80196" />
          <stop offset="1" stopColor="#F80196" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint21_linear_DTM"
          x1="40.5"
          y1="0"
          x2="40.5"
          y2="54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F80196" />
          <stop offset="1" stopColor="#F80196" stopOpacity="0" />
        </linearGradient>
        <radialGradient
          id="paint31_radial_DTM"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="rotate(110.298 13.4615 17.9228) scale(30.9043)"
        >
          <stop stopColor="#FFE600" />
          <stop offset="1" stopColor="red" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
}

export default DualTokenModel;
