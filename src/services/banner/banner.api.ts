import { setRecoil } from 'recoil-nexus';
import { get, isArray } from 'lodash';

import { Api } from '~services/api';
import BannerAtom from './banner.atom';

const getList = async () => {
  const res = await Api({
    url: '/banners',
    method: 'GET',
    params: {
      populate: '*',
    },
  });

  const bannerList = get(res, 'data');

  setRecoil(BannerAtom.bannerList, isArray(bannerList) ? bannerList : []);
};

const BannerApi = { getList };

export default BannerApi;
