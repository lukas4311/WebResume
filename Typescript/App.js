"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const ReactDOM = __importStar(require("react-dom"));
class AppComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("h1", null, "AHOJ"));
    }
}
ReactDOM.render(React.createElement(AppComponent, null), document.getElementById('#app'));
//# sourceMappingURL=App.js.map