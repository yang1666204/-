import { List, Input, Button } from 'antd';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';
import { CloseOutlined } from '@ant-design/icons'

/*
安装了antd的包后一定要记得在index.js引入！引入！引入！
import 'antd/dist/antd.css';
*/


function App() {

  const initdata = [
    {
      Content: "",
      Id: ''
    }
  ]
  const [lists, getlist] = useState(initdata);
  const domRef = useRef()

  const setlists = () => {
    axios.get('http://127.0.0.1:7001/index/selectAll')
      .then((res) => {
        console.log(res.data.content)
        getlist(res.data.content.reverse())
      }).catch((err) => {
        console.log(err)
      })
  }
  const delAll = ()=>{
    axios.delete('http://127.0.0.1:7001/index/deleteAll')
    .then((res)=>{
      setlists()
      console.log(res)
    }).catch((err)=>{
      console.log(err)
    })
  }
  const addList = (inputValue) => {
    axios.post('http://127.0.0.1:7001/index/create', {
      msg: inputValue
    })
      .then((res) => {
        setlists()
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
  }
  useEffect(() => {
    setlists()
  }, [])
  const handleDelete = (e) => {
    let id = e.currentTarget.getAttribute("data-id");
    console.log(e.currentTarget.getAttribute("data-id"))
    axios.delete('http://127.0.0.1:7001/index/delete/'+id).then((res)=>{
      console.log(res)
      if(res.data.code == 200){
        setlists()
      }
    }).catch((err)=>{
      console.log(err)
    })
  }
  const getClick = () => {
    console.log(domRef.current.state.value)
    let { value } = domRef.current.state;
    addList(value)
  }

  const TopContent = () => {
    return (

      <div className='top'>
        <Input
          ref={domRef}
          placeholder='msg info'
          onPressEnter={()=>{getClick()}} />
        <Button size='large'  className='btnContent' onClick={() => { getClick() }} type='primary'>提&nbsp;交</Button>
      </div>

    )
  }

  const ListContent = (props) => {
    const { propslist } = props;
    return (
      <div>
        <List
          size="large"
          bordered
          pagination={{
            onChange: page => {
              console.log(page)
            },
            pageSize: 5
          }}
          footer={
            <div className='footbtn'>
              <Button onClick={()=>{delAll()}}>清空</Button>
            </div>
          }
          split="true"
          dataSource={propslist}
          renderItem={(item,i) =>
            <List.Item
              
              actions={[<a><CloseOutlined data-id={item.Id} onClick={(e) => { handleDelete(e) }} /></a>]}
            >
              {i+1} &nbsp;&nbsp;&nbsp;&nbsp;{item.Content}
            </List.Item>}
        />
      </div>


    )
  }

  return (
    <div className='bigContainer'>
      <TopContent />
      <ListContent  propslist={lists} />
    </div>
  )
}

export default App;
