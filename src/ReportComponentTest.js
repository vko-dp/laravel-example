import React from "react";
import reportWebVitals from "./reportWebVitals";

class ReportComponentTest extends React.Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount() {
        reportWebVitals(o => {
            this.setState(state => ({
                items: state.items.concat(o)
            }));
            console.log(o);
        });
    }

    render() {
        return (
            <div>
                {this.state.items.map(item => (
                    <div key={item.id} className="t">
                        <h1>{item.name}</h1>
                        <ul>
                            <li>{item.id}</li>
                            <li>{item.value}</li>
                            <li>{item.delta}</li>
                        </ul>
                    </div>
                ))}
            </div>
        );
    }
}

export default ReportComponentTest;