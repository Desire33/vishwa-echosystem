import { Modal, InputNumber, Input, Popover } from 'antd';
import './index.css'
import { DownOutlined, CheckCircleFilled} from '@ant-design/icons';
import logo from './../../assets/image/logo.png'
import React, {useEffect, useState} from 'react';
import iconSearch from "../../assets/image/icon_search.png";
const mockHistoryList = [
  {
    id: '3-0',
    url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
    name: 'Ox Protocol Token3',
    shortName: 'OPT',
    desc: 'MINCH'
  }, {
    shortName: 'ETH',
    name: 'Ethereum3',
    id: '3-1',
    url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
    desc: 'MINCH'
  }, {
    shortName: 'ETH',
    name: 'Ethereum3',
    id: '3-4',
    url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
    desc: 'MINCH'
  }
]
const mockNetworkList = [
  {
    id: 0,
    name: 'All-networks',
    checked: true,
    rate: 0.002,
    tokenList: []
  }, {
    id: 1,
    name: 'Ethereum',
    checked: false,
    rate: 0.002,
    url: 'https://assets.coingecko.com/coins/images/34786/thumb/aenodex_200x200.png?1706028151',
    tokenList: [
      {
        id: '1-0',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ox Protocol Token1',
        desc: 'MINCH'
      },  {
        id: '1-1',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum1',
        desc: 'MINCH'
      },  {
        id: '1-2',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum1',
        desc: 'MINCH'
      }, {
        id: '1-3',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ox Protocol Token1',
        desc: 'MINCH'
      },  {
        id: '1-4',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum1',
        desc: 'MINCH'
      },  {
        id: '1-5',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum1',
        desc: 'MINCH'
      }
    ]
  }, {
    id: 2,
    name: 'Ethereum2',
    rate: 0.002,
    url: 'https://assets.coingecko.com/coins/images/15217/thumb/att1YJDb_400x400.jpg?1696514872',
    checked: false,
    tokenList: [
      {
        id: '2-0',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ox Protocol Token2',
        desc: 'MINCH'
      },  {
        id: '2-1',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum2',
        desc: 'MINCH'
      },  {
        id: '2-2',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum2',
        desc: 'MINCH'
      }, {
        id: '2-3',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ox Protocol Token2',
        desc: 'MINCH'
      },  {
        id: '2-4',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum2',
        desc: 'MINCH'
      },  {
        id: '2-5',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum2',
        desc: 'MINCH'
      }
    ]
  }, {
    id: 3,
    name: 'Ethereum3',
    rate: 0.002,
    url: 'https://assets.coingecko.com/coins/images/39874/thumb/ADE_%282%29.png?1724617141',
    checked: false,
    tokenList: [
      {
        id: '3-0',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ox Protocol Token3',
        desc: 'MINCH'
      },  {
        id: '3-1',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum3',
        desc: 'MINCH'
      },  {
        id: '3-2',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum3',
        desc: 'MINCH'
      }, {
        id: '3-3',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ox Protocol Token3',
        desc: 'MINCH'
      },  {
        id: '3-4',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum3',
        desc: 'MINCH'
      },  {
        id: '3-5',
        url: 'https://assets.coingecko.com/coins/images/27347/thumb/1MT.png?1696526394',
        name: 'Ethereum3',
        desc: 'MINCH'
      }
    ]
  }
]
const Swap = () => {
  const [currentRate,setCurrentRate] = useState(0.002)
  const [currentToToken,setCurrentToToken] = useState({})
  const [currentFromToken,setCurrentFromToken] = useState({})
  const [inputValue, setInputValue] = useState('');
  const [historyList,setHistoryList] = useState(mockHistoryList);
  const [currentNetwork,setCurrentNetwork] = useState(0);
  const [networksList,setNetworksList] = useState(mockNetworkList)
  const [tokenList,setTokenList] = useState([]);
  const [open, setOpen] = useState(false);
  const [fromValue,setFromValue] = useState();
  const [toValue,setToValue] = useState();
  const [currentType, setCurrentType] = useState();

  useEffect(()=>{
    let defaultTokenItem = []
    if(currentNetwork===0){
      networksList.map((item)=>{
        defaultTokenItem.push(...item.tokenList)
      })
      setTokenList(defaultTokenItem)
    }else{
      defaultTokenItem = networksList[currentNetwork].tokenList
      setTokenList(defaultTokenItem)
    }
    setCurrentToToken(defaultTokenItem[1])
    setCurrentFromToken(defaultTokenItem[0])
  },[currentNetwork])

  useEffect(()=>{
    if(inputValue){
      const list = tokenList.filter(item=>item.name.includes(inputValue))
      setTokenList(list)
    }else{
      let defaultTokenItem = []
      mockNetworkList.map((item)=>{
        defaultTokenItem.push(...item.tokenList)
      })
      setTokenList(defaultTokenItem)
    }
  },[inputValue])

  useEffect(()=>{
    if(fromValue&&currentToToken.name&&currentFromToken.name){
      setToValue(fromValue*currentRate*100)
    }
  },[fromValue])

  const handleTrans = ()=>{
    setToValue(fromValue)
    setFromValue(toValue)
    setCurrentToToken(currentFromToken)
    setCurrentFromToken(currentToToken)
  }

  // 点击to的右侧选择token
  const handleChooseToToken = ()=>{
    setCurrentType('to');
    setOpen(true)
  }

  // 点击from的右侧选择token
  const handleChooseFromToken = ()=>{
    setCurrentType('from');
    setOpen(true)
  }

  const handleInput = (value)=>{
    setFromValue(value)
  }

  const handleInput2 = (value)=>{
    setToValue(value)
  }

  // 点击搜索
  const handleSearch = (e)=>{
    const value = e.target.value;
    setInputValue(value); // 更新状态
  }

  // 选择网络
  const handleCheckNetwork = (item,index)=>{
    setCurrentNetwork(index)
    const networksLists = [...networksList]
    networksLists.map((item)=>item.checked = false)
    networksLists[index].checked = true
    setNetworksList(JSON.parse(JSON.stringify(networksLists)))
  }

  // 选择network的render Div
  const networksContent = <div className="radio-check-list">
    {
      networksList.map(((item,index) =>
          <div className="check-item flex-just" key={'check'+item.id} onClick={()=>handleCheckNetwork(item,index)}>
            <div className="flex check-item-left">
              {
                item.url ? <img src={item.url}/>:null
              }
              <span>{item.name}</span>
            </div>
            {
              item.checked?<CheckCircleFilled />:null
            }
          </div>
      ))
    }
  </div>;


  // 点击选择token
  const handleChooseToken = (item,index)=>{
    if(currentType==='to'){
      setCurrentToToken(item)
    }else if(currentType==='from'){
      setCurrentFromToken(item)
    }
    setOpen(false)
  }
  return (
    <div className="swap-container">
      <div className="swap-nav flex">
        <div className="swap-logo">
          <img src={logo}/>
        </div>
        <div className="swap-btn">
          Connect Wallet
        </div>
      </div>

      <div className="swap-content">
        <div className="content-title">Exchange</div>
        <div className='content-form'>
          <div className="content-form-from content-form-item">
            <div className="item-title">From</div>
            <div className="item-box flex-just">
              <div className="item-box-name flex">
                <InputNumber
                  value={fromValue}
                  placeholder="0.0"
                  step="0.1"
                  style={{flex: 1, border: 'none', backgroundColor: 'transparent'}}
                  onChange={(e) => handleInput(e)}
                  controls={false}
                />
              </div>
              <div className="flex-just item-box-select" onClick={() => handleChooseFromToken()}>
                <div className="flex item-box-select-content">
                  <img src={currentFromToken.url}/>
                  <span>{currentFromToken.name || 'Select Token'}</span>
                </div>
                <DownOutlined style={{color: "#000", fontSize: '12px'}}/>
              </div>

            </div>
          </div>

          <div className="content-form-gap-wrap" onClick={() => handleTrans()}>
            <div className="content-form-gap"/>
          </div>

          <div className="content-form-to content-form-item">
            <div className="item-title">To</div>
            <div className="item-box flex-just">
              <div className="item-box-name">
                <InputNumber
                  value={toValue}
                  step="0.1"
                  placeholder="0.0"
                  style={{flex: 1, border: 'none', backgroundColor: 'transparent'}}
                  onChange={(e) => handleInput2(e)}
                  controls={false}
                />
              </div>
              <div className="flex-just item-box-select" onClick={() => handleChooseToToken()}>
                <div className="flex item-box-select-content">
                  <img src={currentToToken.url}/>
                  <span>{currentToToken.name || 'Select Token'}</span>
                </div>
                <DownOutlined style={{color: "#000", fontSize: '12px'}}/>
              </div>
            </div>
          </div>
        </div>
        <div className='content-btn'>Connect Wallet /Get started</div>
      </div>

      <Modal
        title="Select a token"
        centered
        open={open}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={400}
      >
        <div className="modal-wrap">
          <div className="modal-search flex">
            <Input size="large" bordered={false} allowClear value={inputValue} onChange={(e) => handleSearch(e)} placeholder="Search by name..."
                   prefix={<img style={{width: '16px', height: '16px'}} src={iconSearch}/>}/>
            <Popover trigger="click" content={networksContent}>
              <DownOutlined className="icon-arrow-select" style={{color: "#555555", fontSize: '14px'}}/>
            </Popover>
          </div>
          <div className="modal-history flex">
            {
              historyList.map((item,index) => (
                <div className="history-item flex-center" key={'history'+item.id} onClick={()=>handleChooseToken(item,index)}>
                  <div className="history-item-icon flex-center">
                    <img src={item.url}/>
                  </div>
                  <div className="history-item-name">{item.shortName}</div>
                </div>
              ))
            }
          </div>
          <div className="modal-list-title">Tokens</div>
          <div className="modal-list">
            {
              tokenList.map((item,index) => (
                <div className="token-item flex" key={'token'+item.id} onClick={()=>handleChooseToken(item,index)}>
                  <div className="token-item-img">
                    <img src={item.url}/>
                  </div>
                  <div className="token-item-value">
                    <div className="value-name">{item.name}</div>
                    <div className="value-desc">{item.desc}</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Swap;