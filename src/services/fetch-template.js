import { readUrl, rpp } from '../config';
import request from '../utils/request';

/**
 * Fetches template data from Jotform API.
 */
const fetchTemplateData = async (p) => {
  try {
    const s = p * rpp;
    const url = `${readUrl}?rpp=${rpp}&start=${s}&curr_page=${p}`;
    const response = await request(url);
    return response;
  } catch (error) {
    throw error;
  }
};

export default fetchTemplateData;
