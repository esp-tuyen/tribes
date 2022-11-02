import { atom } from 'recoil';

import { IBanner } from './banner.type';

const bannerList = atom<IBanner[]>({
  key: 'banner_list',
  default: [],
});

const BannerAtom = { bannerList };

export default BannerAtom;
