export default {
    up(){},
    size(input){
        const screenSize = {
            xs: "575.98px",
            sm: "767.98px",
            md: "991.98px",
            lg: "1199.98px",
            xl: "1600px"
          };
          return `@media (max-width: ${screenSize[input]})`
    }
}