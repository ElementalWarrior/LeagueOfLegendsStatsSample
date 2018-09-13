
import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import Link from '../../components/Link';

class Home extends React.Component {
    state = {
        summonerName: 'BFY Meowington',
        loading: false
    };
    inputChange = (event) => {
        this.setState({ summonerName: event.target.value });
    }
    click = () => {
        this.setState({ loading: true });
    }
    render() {
        return (
        <div className={s.root}>
        {this.state.loading && <div>Loading...</div>}
        {!this.state.loading &&  
            <div className={s.container}>
            <h1>Enter your summoner name</h1>

                    <input type="text" value={this.state.summonerName} onChange={this.inputChange} />
                    &nbsp;<Link to={"summoner/"  + this.state.summonerName } onClick={this.click}>Show my history</Link>
            </div>
        }
        </div>
        )
    }
}

export default withStyles(s)(Home);