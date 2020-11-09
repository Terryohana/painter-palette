export default {
    NavBar: {
        display: "flex",
        alignItems: "center",
        height: "6vh",
        "& a":{
            fontWeight: "bold"
        }
    },
    NavBarLogo: {
        padding: "0 15px",
        fontSize: "22px",
        height: "100%",
        marginRight: "1rem",
        display: "flex",
        alignItems: "center",
        borderRight: ".1px solid gray",
        "& a": {
            color: "black",
            paddingLeft: "10px",
            textDecoration: "none",
        },
        "& img": {
            width: "2em"
        }
    },
    paletteSlider: {
        width: "350px",
        margin: "0 10px",
        display: "inline-block",
        "& .rc-slider-track":{
            backgroundColor: "transparent"
        },
        "& .rc-slider-rail":{
            height: "8px"
        },
        "& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{
            border: "2px solid #03a2ec",
            outline: "none",
            backgroundColor: "#03a2ec",
        },
    },
    selectContainer: {
        marginRight: "1rem",    
        marginLeft: "auto"
    },
  };