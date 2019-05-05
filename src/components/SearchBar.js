import React, { Component } from "react"
import SearchIcon from '@material-ui/icons/SearchOutlined'
import IconButton from '@material-ui/core/IconButton'
import PropTypes from 'prop-types'
import {fetchSearchImages} from '../actions/fetch'
import './SearchBar.css'

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {city: this.props.city, limit: this.props.limit, result: this.props.result }
    this.onLimitChange = this.onLimitChange.bind(this)
    this.onCityChange = this.onCityChange.bind(this)
  }


  async handleSubmit(event) {
    event.preventDefault()
    if(this.state.city !== '' && this.state.limit !== '') {
      const images =  await fetchSearchImages(this.state.city, this.state.limit);
      localStorage.setItem('search', JSON.stringify({city: this.state.city, limit: this.state.limit}));
      this.props.updateSearch(this.state.city, this.state.limit)
      this.props.updateResult(images)
    }
  }

  async componentWillMount() {
    if (this.state.result.length === 0) {
      const images = await fetchSearchImages(this.state.city, this.state.limit);
      this.props.updateResult(images)
    }
  }

  onLimitChange = function(event) {
    this.setState({ limit: Number(event.target.value), city: this.state.city})
  }

  onCityChange = function(event) {
      this.setState({ limit: this.state.limit, city: event.target.value})
  }

  async onSubmitSearch(e) {
    if(this.state.city !== '' && this.state.limit !== '') {
      const images =  await fetchSearchImages(this.state.city, this.state.limit);
      localStorage.setItem('search', JSON.stringify({city: this.state.city, limit: this.state.limit}));
      this.props.updateSearch(this.state.city, this.state.limit)
      this.props.updateResult(images)
    }
  }

  render() {
    return (
      <form onSubmit={event => this.onSubmitSearch(event)}>
        <div className='searchbar-div'>
          
            <input className="country-input" type="text" defaultValue={this.props.city}  placeholder='City' onChange={event => this.onCityChange(event)} />
            <input className="limit-input" type="number" defaultValue={this.props.limit} onChange={event => this.onLimitChange(event)} min='0' max='100' step='1'/>
            <div>
                <IconButton className="search-icon" type="submit" value="Submit" size="small" onClick={event => this.onSubmitSearch(event)}>
                    <SearchIcon fontSize="small"/>
                </IconButton>
            </div>
        </div>
      </form>
    );
  }
}

SearchBar.propTypes = {
  city: PropTypes.string,
  limit: PropTypes.number,
  result: PropTypes.array,
  updateSearch: PropTypes.func.isRequired,
  updateResult: PropTypes.func.isRequired
}
export default SearchBar
