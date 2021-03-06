import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

//actions
import { fetchWeather, MinuteData, HourlyData } from '../actions/index'

class SearchBar extends Component {
    constructor(props) {
        super(props)

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }
    
    onInputChange(event) {
        this.setState({ term: event.target.value })
    }

    onFormSubmit(event) {
        event.preventDefault()

        //go and fetch weather data
        this.props.actions.fetchWeather(this.state.term)
        this.props.actions.MinuteData(this.state.term)
        this.props.actions.HourlyData(this.state.term)
        this.setState({ term: '' })
    }
    
    render() {
        return (
            <form 
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input 
                    placeholder="Get daily, weekly and monthly charts for your favorite Crypto"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            fetchWeather: bindActionCreators(fetchWeather, dispatch),
            MinuteData: bindActionCreators(MinuteData, dispatch),
            HourlyData: bindActionCreators(HourlyData, dispatch)
        }
    }
     
}

export default connect(null, mapDispatchToProps)(SearchBar)