import fetchTemplateData from '../../services/fetch-template';
import fetchTemplateError from './error';
import fetchTemplate from './request';
import fetchTemplateSuccess from './success';

const fetchData = page => (dispatch: Function) => {
  dispatch(fetchTemplate(page));
  return fetchTemplateData(page)
    .then(templateInfo => dispatch(fetchTemplateSuccess(templateInfo)))
    .catch(() => dispatch(fetchTemplateError()));
};

export default fetchData;
