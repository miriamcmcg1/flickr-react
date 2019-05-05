import { connect } from "react-redux";
import GridImage from "../components/GridImage";

const mapStateToProps = state => ({
  result: state.result
});

export default connect(
  mapStateToProps,
  null
)(GridImage);
