const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: "white"
  },
  hide: {
    display: "none"
  },
  navBar: {
    // transition: theme.transitions.create(["margin", "width"], {
    //     easing: theme.transitions.easing.sharp,
    //     duration: theme.transitions.duration.leavingScreen
    //   }),
    backgroundColor:"white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "64px"
  },
  navBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    // transition: theme.transitions.create("margin", {
    //   easing: theme.transitions.easing.easeOut,
    //   duration: theme.transitions.duration.enteringScreen
    // })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
 navBtns:{
    "& a":{
        textDecoration:"none"
    }
 },
  button: {
    margin: "0 0.5rem",
    textTransform: "capitalize",
    borderRadius: 3,
    border: 0,
    color: "white",
    height: 48,
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
},
});

export default styles;