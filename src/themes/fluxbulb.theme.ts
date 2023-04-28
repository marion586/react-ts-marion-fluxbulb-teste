export const Colors = {
  primary: "#7367F0",
  secondary: "#ECAE00",
  success: "#0F9855",
  default: "#989595",
  danger: "#D44235",
  warning: "#FE9D0C",
  grayBlue: "#949fb5",
  darkBlue: "#14223c",
  gray: "#f2f2f2",
  grayIcon: "#606060",
  strokeGray: "#d6d6d6",
  alertStrRose: "#ff8282",
  colorGreen: "#67cd84",
  colorRed: "#ff6a00",
  colorWarn: "#ff9800",
  borderWarn: "#f17b27",
  grayBlack: "#a39f9f",
  link: "#2f70e9",
  alertStrRoseOpacity: "#ff828226",
  redIcon: "#EF7960",
  white: "#ffffff",
  grayLabel: "#c7c7c7",
  blueFooter: "#5890FF",
  lightWarn: "#f8e1bf",
  lightSuccess: "#d3ecda",
};

export const Background = {
  white: {
    backgroundColor: "#FFF",
  },
  paleBlue: {
    backgroundColor: "#eff6ff",
  },
  darkBlue: {
    backgroundColor: "#070A52",
  },
};

export const Font = {
  family: "inter",
};

export const Theme = {
  title: {
    fontWeight: "900",
    fontFamily: Font.family,
  },
  titleCard: {
    fontWeight: "600",
    fontFamily: Font.family,
  },
  button: {
    primary: {
      backgroundColor: Colors.primary,
      borderColor: Colors.primary,
      color: "#FFFFFF",
    },
    secondary: {
      backgroundColor: Colors.secondary,
      borderColor: Colors.secondary,
      color: "#FFFFFF",
    },
    success: {
      backgroundColor: Colors.success,
      borderColor: Colors.success,
      color: "#FFFFFF",
    },
    default: {
      backgroundColor: Colors.default,
      borderColor: Colors.default,
      color: "#FFFFFF",
    },
    warning: {
      backgroundColor: Colors.warning,
      borderColor: Colors.warning,
      color: "#FFFFFF",
    },
    danger: {
      backgroundColor: Colors.danger,
      borderColor: Colors.danger,
      color: "#FFFFFF",
    },
  },
  borderBase: {
    borderRadius: "4px",
    border: "0.10000000149011612px solid rgb(221, 217, 217)",
  },
  roundedButton: {
    md: {
      borderRadius: "10px",
    },
    lg: {
      borderRadius: "15px",
    },
    xl: {
      borderRadius: "24px",
    },
  },
};

export const Positioning = {
  start: {
    display: "flex",
    justifyContent: "start",
  },
  end: {
    display: "flex",
    justifyContent: "flex-end",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  between: {
    display: "flex",
    justifyContent: "space-between",
  },
  around: {
    display: "flex",
    justifyContent: "space-around",
  },
  evenly: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};
