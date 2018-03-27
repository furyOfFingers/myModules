const path = require("path");
module.exports = {
    devtool:"source-map", 
    entry:"./js/main.js",
    output:{
        path: path.join(__dirname, "build"),
        filename:"ready.js",
        publicPath: "/build/"
    },
    module:{
        rules:[
            {
                test:/\.js/,
                use:[
                    {
                        loader:"babel-loader",
                        options:{ presets:["env"]}
                    }
                ]
            }
        ]
    }
}