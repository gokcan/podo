import { connect } from 'react-redux';
import HomeScreen from '../../components/home/HomeScreen';
import { getTemplateSelector } from '../../reducers/templateReducer';
import fetchData from '../../actions/FetchTemplate/';

const mapStateToProps = (state: Object) => getTemplateSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: page => dispatch(fetchData(page)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
