import axios, {
  Method,
  ResponseType,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';
import { Storage, StorageConst } from '~services/storage';
import { IResponse } from './type';

const instance = axios.create({
  baseURL: 'https://tribes-be-stag.eastplayers-client.com/api',
  timeout: 15000,
  validateStatus: status => status < 400,
});

instance.interceptors.request.use(async (config: any) => {
  const token = await Storage.getItem(StorageConst.ACCESS_TOKEN);
  if (token) {
    return {
      ...config,
      headers: {
        ...config.headers,
        authorization: `Bearer ${token}`,
      },
    };
  } else {
    return {
      ...config,
    };
  }
});

const Api = async <T>({
  url,
  method = 'POST',
  data,
  params,
  responseType,
  headers,
}: {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
  responseType?: ResponseType;
  headers?: AxiosRequestHeaders;
}): Promise<T> => {
  return instance
    .request({
      method,
      url,
      data,
      params,
      responseType,
      headers,
    })
    .then((resp: AxiosResponse<any>) => {
      return resp.data;
    })
    .catch(err => {
      const errResponse: IResponse = err?.response?.data;

      if (errResponse) {
        throw errResponse;
      }

      throw err;
    });
};

export default Api;
