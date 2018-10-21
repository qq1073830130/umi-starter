import Mock from 'mockjs';

export default {
  'GET /api/user/getinfo': {
    name: 'lxj',
    age: 24
  },
  'GET /api/user/getinfoList': (req, res) => {
    let mackData = [];
    for (let i = 0; i < 10; i++) {
      mackData.push({
        id: Mock.mock('@increment()'),
        name: Mock.mock('@cname()'),
        avatar: Mock.Random.image('100x100'),
        joinTime: Mock.mock('@date("yyyy-MM-dd hh:mm:ss")')
      });
    }

    return res.json(mackData);
  }
};
