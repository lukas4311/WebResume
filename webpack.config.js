module.exports = {
    mode: "production",
    //mode: "development",
    entry: {
        app: './Typescript/App.tsx'
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/wwwroot/js/"
    },
    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx"]
    },

    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            }
        ]
    },
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "react-transition-group": "CSSTransition",
        "react-transition-group": "TransitionGroup"
    }
};