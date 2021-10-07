import React, {Component} from 'react';
import BoardService from "../service/BoardService";

class ListBoardComponent extends Component {
    constructor(props) {
        super(props)
        // # 1.
        this.state = {
            envInfos: [],
            diffStatus: [],
            apiInfos: []
        }

    }

    // # 2.
    componentDidMount() {
        BoardService.getEnvInfos().then((res) => {
            this.setState({envInfos: res.data});
        });

        BoardService.getDiffStatus().then((res) => {
            this.setState({diffStatus: res.data.list});
        });

        BoardService.getApiInfos().then((res) => {
            this.setState({apiInfos: res.data});
        });

    }

    // # 3.
    render() {
        return (
            <div>
                <h2 className="text-center">Env List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>env</th>
                            <th>url</th>
                            <th>date</th>
                            <th>user</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.envInfos.map(
                                envInfo =>
                                    <tr key={envInfo.id}>
                                        <td> {envInfo.id} </td>
                                        <td> {envInfo.env} </td>
                                        <td> {envInfo.url}</td>
                                        <td> {envInfo.date} </td>
                                        <td> {envInfo.user} </td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>

                <h2 className="text-center">ApiInfo List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                        <tr>
                            <th>id</th>
                            <th>collection</th>
                            <th>displayName</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.apiInfos.map(
                                apiInfo =>
                                    <tr key={apiInfo.id}>
                                        <td> {apiInfo.id} </td>
                                        <td> {apiInfo.collection} </td>
                                        <td> {apiInfo.displayName}</td>
                                    </tr>
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListBoardComponent;