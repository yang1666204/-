'use strict';
const cors = require('cors')

module.exports = app => {

  const { router, controller } = app;
  //增加一条list
  router.post('/index/create', controller.list.create);
  //删除一条list
  router.delete('/index/delete/:id', controller.list.destroy);
  //查找全部
  router.get('/index/selectAll', controller.list.selectAll);
  //修改
  router.post('/index/update', controller.list.update);
  //清空
  router.delete('/index/deleteAll',controller.list.delall)
};
