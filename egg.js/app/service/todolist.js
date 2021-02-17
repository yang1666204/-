const { Service } = require('egg');
const uuid = require('node-uuid');
class todoService extends Service {
    async create(msg) {
        let Id = uuid.v1();
        const result = await this.app.mysql.insert('todolist', {
            Content: msg,
            Id: Id
        })
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
    async delete(id) {
        const result = await this.app.mysql.delete('todolist', {
            Id: id
        })
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
    async deleteall(){
        const result = await this.app.mysql.delete('todolist')
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
    async selectAll() {
        console.log("dsadas")
        const result = await this.app.mysql.select('todolist');
        const insertSuccess = result.affectedRows === 1;
        return result;
    }
    async update(temp){
        let row = {
            Content:temp.Content
        }
        let options = {
            where:{
                Id:temp.Id
            }
        }
        const result = await this.app.mysql.update('todolist',row,options)
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
}

module.exports = todoService;