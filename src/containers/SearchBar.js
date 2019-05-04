import { connect } from 'react-redux'
import SearchBar from '../components/SearchBar'
import { updateSearch, updateResult } from '../actions'

const mapStateToProps = state => ({
  city: state.search.city,
  limit: state.search.limit,
  result: state.result
})

const mapDispatchToProps = (dispatch) => ({
  updateSearch: (city, limit) => dispatch(updateSearch(city, limit)),
  updateResult: (result) => dispatch(updateResult(result))
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)