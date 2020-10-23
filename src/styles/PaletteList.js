export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        background: "#2980b9 url('https://static.tumblr.com/03fbbc566b081016810402488936fbae/pqpk3dn/MRSmlzpj3/tumblr_static_bg3.png') repeat 0 0",
        animation: `$animate 10s infinite linear`,

    },

    "@keyframes animate": {
        from: {backgroundPosition:"0 0"},
        to: {backgroundPosition: "500px 0"}
    },
    container: {
        width: "50%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3,30%)",
        gridGap: "5%"
    },
    nav: {
        color: "white",
        display: "flex",
        width: "100%",
        justifyContent: "space-between"
    }
};