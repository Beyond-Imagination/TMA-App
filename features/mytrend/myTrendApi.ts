import {Trend} from './MyTrendSlice';

const initialData: Trend[] = [
  {
    title: '주택',
  },
  {
    title: '환경',
  },
  {
    title: '건강',
  },
];

export const myTrendApi = {
  async fetchAll() {
    return new Promise<{data: Trend[]}>(resolve =>
      setTimeout(() => {
        resolve({data: initialData});
      }, 1000),
    );
  },
};
