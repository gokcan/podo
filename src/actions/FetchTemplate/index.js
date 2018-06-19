import { fetchTemplateData } from '../../services/fetch-template';
import { fetchTemplateError } from './error';
import { fetchTemplate } from './request';
import { fetchTemplateSuccess } from './success';

export const fetchData = () => (
  (dispatch: Function) => {
    dispatch(fetchTemplate());
    return fetchTemplateData()
      .then((templateInfo) => dispatch(fetchTemplateSuccess(templateInfo)))
      .catch(() => dispatch(fetchTemplateError()));
  }
);


