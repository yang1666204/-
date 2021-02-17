'use strict';

const Controller = require('egg').Controller;
class ListController extends Controller {
  handleSuccess() {
    const { ctx } = this;
    ctx.body = {
      code: 200,
      msg: "Success"
    }
  }
  handleError() {
    const { ctx } = this;
    ctx.body = {
      code: 404,
      msg: "error"
    }
  }
  async create() {
    const { ctx, service } = this;
    let { msg } = ctx.request.body
    let result = await service.todolist.create(msg);
    result ? this.handleSuccess() : this.handleError();
  }
  async destroy() {

    const { ctx, service } = this;
    let { id } = ctx.params;
    let result = await service.todolist.delete(id);
    result ? this.handleSuccess() : this.handleError();
  }
  async delall() {
    const { service, ctx } = this;
    let result = await service.todolist.deleteall();
    result ? this.handleSuccess() : this.handleError();
  }
  async selectAll() {
    console.log("aa")
    const { service, ctx } = this;
    let result = await service.todolist.selectAll();
    ctx.body = {
      code: 200,
      status: "Successhhh",
      content: result
    }
  }
  async update() {
    const { service, ctx } = this;
    let temp = ctx.request.body;
    let result = await service.todolist.update(temp);
    result ? this.handleSuccess() : this.handleError();
  }
}

module.exports = ListController;
