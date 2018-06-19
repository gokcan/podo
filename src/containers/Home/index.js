import { connect } from 'react-redux';
import HomePage from '../../components/HomePage'
import { getTemplateSelector } from '../../reducers/templateReducer';
import { fetchData } from '../../actions/FetchTemplate';

const mapStateToProps = (state: Object) => getTemplateSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({
  fetchData: (id) => dispatch(fetchData(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
