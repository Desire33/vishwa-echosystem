import {Col, Row, Pagination, Popover, Input, Modal} from 'antd';
import './index.css'
import {CheckSquareFilled, BorderOutlined, ClearOutlined, MenuOutlined, DownOutlined} from '@ant-design/icons';
import iconCategorie from './../../assets/image/icon_categorie.png'
import iconTag from './../../assets/image/icon_tag.png'
import iconSearch from './../../assets/image/icon_search.png'
import logo from './../../assets/image/logo.png'
import icon1 from './../../assets/image/icon1.png'
import icon2 from './../../assets/image/icon2.png'
import icon3 from './../../assets/image/icon3.png'
import React, {useEffect, useState} from 'react';
import type1 from "../../assets/image/trans_type1.png";
const mockList  = [
  {
  id: 1,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: 'Garden Saturn',
  content: 'Saturn is an Agentic Lending DAO:Innovative lending for RAWf, poweredby the agent framework..',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Lending',
      url: ''
    }, {
      themeColor: '#E2E9FF',
      sizeColor: '#000',
      name: 'DAO',
      url: ''
    }, {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Agent',
      url: ''
    }, {
      themeColor: '#E2E9FF',
      sizeColor: '#000',
      name: 'RAWf',
      url: ''
    }
  ]
}, {
  id: 2,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: 'Vish Swap',
  content: 'First DEX on Vishwa.',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Application',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'DEX',
      url: ''
    }
  ]
}, {
  id: 3,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: 'AstroLend',
  content: 'Lending for vBTC',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Application',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'Lending',
      url: ''
    }
  ]
}, {
  id: 4,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: 'Dokodemo',
  content: 'Agentic Alh Lending on ICP',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Application',
      url: ''
    }, {
      themeColor: '#FF8030',
      sizeColor: '#fff',
      name: 'Lending',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'DAO',
      url: ''
    }, {
      themeColor: '#E2E9FF',
      sizeColor: '#000',
      name: 'RWAf',
      url: ''
    }
  ]
}, {
  id: 5,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: 'Hamster',
  content: 'One-stop Development AutomationExperience with Process Safety andPrivacy',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Infra',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'Development',
      url: ''
    }
  ]
}, {
  id: 6,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: '0G Lab',
  content: 'Garden is an intents-based Bitcoinbridge that has facilitated over $1billion in BTC swaps to date. Offering a10x speed improvement over existingbridges, Garden enables users to swapBitcoin to any asset in as little as 30seconds.',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Infra',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'Development',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'AI',
      url: ''
    }
  ]
}, {
  id: 7,
  icon: 'https://citrea.xyz/_next/image?url=https%3A%2F%2Fcms.testnet.citrea.xyz%2Fmedia%2Fnamoshi_logo_squared.png&w=128&q=75',
  title: 'Babylon',
  content: 'Garden is an intents-based Bitcoinbridge that has facilitated over $1billion in BTC swaps to date, Offering a10x speed improvement over existingbridges, Garden enables users to swapBitcoin to any asset in as little as 30seconds.',
  tagList: [
    {
      themeColor: '#8B5BFF',
      sizeColor: '#fff',
      name: 'Social',
      url: ''
    }, {
      themeColor: '#00AEFF',
      sizeColor: '#fff',
      name: 'NFT Create',
      url: ''
    }
  ]
}
]
const mockTagList = [
  {
    id: 1,
    checked: false,
    name: 'Oracle'
  }, {
    id: 2,
    checked: false,
    name: 'DEX'
  }, {
    id: 3,
    checked: false,
    name: 'EOA'
  }, {
    id: 4,
    checked: false,
    name: 'Wallet'
  }, {
    id: 5,
    checked: false,
    name: 'Collectibles'
  }, {
    id: 6,
    checked: false,
    name: 'E-Cash'
  }, {
    id: 7,
    checked: false,
    name: 'Bridges'
  },{
    id: 7,
    checked: false,
    name: 'Data'
  },{
    id: 8,
    checked: false,
    name: 'Perpetual DEX'
  },{
    id: 9,
    checked: false,
    name: 'Hardware Wallet'
  },{
    id: 10,
    checked: false,
    name: 'NFT Market'
  },{
    id: 11,
    checked: false,
    name: 'CDP'
  },{
    id: 12,
    checked: false,
    name: 'Abstraction'
  },{
    id: 13,
    checked: false,
    name: 'Node'
  },{
    id: 14,
    checked: false,
    name: 'Money Market'
  },{
    id: 15,
    checked: false,
    name: 'Custodian'
  },{
    id: 16,
    checked: false,
    name: 'NFT Create'
  },{
    id: 17,
    checked: false,
    name: 'LSD-Backed'
  },{
    id: 18,
    checked: false,
    name: 'Messaging'
  },{
    id: 16,
    checked: false,
    name: 'API'
  },{
    id: 17,
    checked: false,
    name: 'Lending'
  },{
    id: 18,
    checked: false,
    name: 'AA Wallet'
  },{
    id: 19,
    checked: false,
    name: 'NFT Aggregator'
  },{
    id: 20,
    checked: false,
    name: 'Fiat-Backed'
  },{
    id: 21,
    checked: false,
    name: 'Atomic Swaps'
  },{
    id: 22,
    checked: false,
    name: 'RPC'
  },{
    id: 23,
    checked: false,
    name: 'Options'
  }, {
    id: 24,
    checked: false,
    name: 'Multisig'
  }, {
    id: 25,
    checked: false,
    name: 'Ordinals'
  }, {
    id: 26,
    checked: false,
    name: 'USD-Pegged'
  }, {
    id: 27,
    checked: false,
    name: 'Trustless'
  }, {
    id: 28,
    checked: false,
    name: 'Security'
  }, {
    id: 29,
    checked: false,
    name: 'Liquid Staking'
  }, {
    id: 30,
    checked: false,
    name: 'Domain'
  }, {
    id: 31,
    checked: false,
    name: 'Institutional'
  }, {
    id: 32,
    checked: false,
    name: 'EURO-Pegged'
  }, {
    id: 33,
    checked: false,
    name: 'Trust-Minimized'
  }, {
    id: 34,
    checked: false,
    name: 'Indexer'
  }, {
    id: 35,
    checked: false,
    name: 'Gaming'
  },{
    id: 36,
    checked: false,
    name: 'Gold-Pegged'
  }, {
    id: 37,
    checked: false,
    name: 'Cross-Chain'
  },{
    id: 38,
    checked: false,
    name: 'DevTool'
  }, {
    id: 39,
    checked: false,
    name: 'Yield'
  },{
    id: 40,
    checked: false,
    name: 'Sports'
  }, {
    id: 41,
    checked: false,
    name: 'Interest Bearing'
  }, {
    id: 42,
    checked: false,
    name: 'Aggregator'
  },{
    id: 43,
    checked: false,
    name: 'SoFi'
  }, {
    id: 44,
    checked: false,
    name: 'Payment App'
  },{
    id: 45,
    checked: false,
    name: 'Privacy'
  }, {
    id: 46,
    checked: false,
    name: 'Prediction Market'
  },{
    id: 47,
    checked: false,
    name: 'POAP'
  }, {
    id: 48,
    checked: false,
    name: 'Ramping'
  },{
    id: 49,
    checked: false,
    name: 'RaaS'
  },{
    id: 50,
    checked: false,
    name: 'Derivatives'
  }, {
    id: 51,
    checked: false,
    name: 'Social App'
  },{
    id: 52,
    checked: false,
    name: 'No-Code Tools'
  }, {
    id: 53,
    checked: false,
    name: 'RWA'
  },{
    id: 54,
    checked: false,
    name: 'Social Token'
  }, {
    id: 55,
    checked: false,
    name: 'Bots'
  },{
    id: 56,
    checked: false,
    name: 'DAO'
  },{
    id: 57,
    checked: false,
    name: 'Launchpad'
  }
]
const mockCategorieList = [
  {
    id: 1,
    checked: false,
    name: 'Infra'
  }, {
    id: 2,
    checked: false,
    name: 'Application'
  }, {
    id: 3,
    checked: false,
    name: 'Custody'
  }, {
    id: 4,
    checked: false,
    name: 'Social'
  },{
    id: 5,
    checked: false,
    name: 'Payments'
  },{
    id: 6,
    checked: false,
    name: 'Interoperability'
  },{
    id: 7,
    checked: false,
    name: 'Others'
  }]
const Ecosystem = (props) => {
  // 使用 useState 来存储输入框的值
  const [open,setOpen]=useState(false);
  const [filterTags, setFilterTags] = useState([]);
  const [filterCategories, setFilterCategories] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [list,setList] = useState(mockList)
  const [tagList,setTagList] = useState(mockTagList);
  const [categorieList,setCategorieList] = useState(mockCategorieList);

  function handleCheckCategorie(item,index){
    const list = [...categorieList]
    list[index].checked = !list[index].checked
    const filterCategories = list.filter(item=>item.checked)
    const names = filterCategories.map(item => item.name);
    setFilterCategories(names)
    setCategorieList(JSON.parse(JSON.stringify(list)))
  }

  function handleCheckTag(item,index){
    const tagLists = [...tagList]
    tagLists[index].checked = !tagLists[index].checked
    const filterTags = tagLists.filter(item=>item.checked)
    const names = filterTags.map(item => item.name);
    setFilterTags(names)
    setTagList(JSON.parse(JSON.stringify(tagLists)))
  }

  useEffect(() => {
    if(filterTags.length||filterCategories.length||inputValue){
      // 使用 filter 和 some 方法筛选包含指定标签的对象
      let results = []
      if(filterTags.length>0&&filterCategories.length===0){
        results =  mockList.filter(item =>
            item.tagList.some(tag => filterTags.includes(tag.name))&&(item.title.includes(inputValue) || item.content.includes(inputValue))
        )
      }
      if(filterCategories.length>0&&filterTags.length===0){
        results =  mockList.filter(item =>
            item.tagList.some(tag => filterCategories.includes(tag.name))&&(item.title.includes(inputValue) || item.content.includes(inputValue))
        )
      }
      if(filterTags.length>0&&filterCategories.length>0){
        results =  mockList.filter(item =>
          item.tagList.some(tag => filterTags.includes(tag.name))&&filterCategories.length&&item.tagList.some(tag => filterCategories.includes(tag.name))&&(item.title.includes(inputValue) || item.content.includes(inputValue))
        )
      }
      if(filterTags.length===0&&filterCategories.length===0){
        results = mockList.filter(item=>(item.title.includes(inputValue) || item.content.includes(inputValue)))
      }
      setList(JSON.parse(JSON.stringify(results)))
    }else{
      setList(JSON.parse(JSON.stringify(mockList)))
    }
  }, [filterTags,filterCategories,inputValue]); // 监听 value prop 的变化

  const handleClearCategorie = ()=>{
    setFilterCategories([])
    const list = [...categorieList]
    list.map(item=>item.checked=false)
    setCategorieList(JSON.parse(JSON.stringify(list)))
  }

  const handleClearTag = ()=>{
    setFilterTags([])
    const list = [...tagList]
    list.map(item=>item.checked=false)
    setTagList(JSON.parse(JSON.stringify(list)))
  }

  const categorieContent = <div className="check-list">
    {
      filterCategories.length>0?(
        <div className="check-clear" onClick={()=>handleClearCategorie()}> <ClearOutlined /> Clear Selection</div>
      ):null
    }
    {
      categorieList.map(((item,index) =>
          <div className="check-item flex" key={index} onClick={()=>handleCheckCategorie(item,index)}>
            {
              item.checked?<CheckSquareFilled />:!item.checked?<BorderOutlined />:null
            }
            {item.name}
          </div>
      ))
    }
  </div>;

  const tagContent = <div className="check-list">
    {
      filterTags.length>0? (
        <div className="check-clear" onClick={() => handleClearTag()}><ClearOutlined/> Clear Selection</div>
      ):null
    }

    {
      tagList.map(((item, index) =>
          <div className="check-item flex" key={index} onClick={() => handleCheckTag(item, index)}>
            {
              item.checked ? <CheckSquareFilled/> : <BorderOutlined/>
            }
            {item.name}
          </div>
      ))
    }
  </div>;

  const handleSearch = (e)=>{
    const value = e.target.value;
    setInputValue(value); // 更新状态
  }

  return (
    <div className="container">
      <div className="ecosystem-nav flex">
        <div className="ecosystem-logo">
          <img src={logo}/>
        </div>
        <ul className="flex ecosystem-link">
          <li><a>Community</a></li>
          <li className="link-active"><a>Echosystem</a></li>
          <li><a>Doc</a></li>
          <li><a>About us</a></li>
          <li><a>Subscribe</a></li>
        </ul>
        <div className="flex nav-icon">
          <img src={icon1}/>
          <img src={icon2}/>
          <img src={icon3}/>
        </div>
        <div className="nav-menu">
          <MenuOutlined style={{fontSize: '24px'}} onClick={() => setOpen(true)}/>
        </div>
      </div>

      {
        !open?(
          <>
            <div className="ecosystem-operation">
              <Row gutter={[20, 20]}>
                <Col className="gutter-row" xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                  <Popover trigger="click" content={categorieContent}>
                    <div className="flex operation-item">
                      <img src={iconCategorie}/>
                      <span>Categories</span>
                      {
                        filterCategories.length > 0 ?
                          (
                            <div style={{marginLeft: '6px', color: 'rgb(234 95 43)'}}>
                              ({filterCategories.length})
                            </div>
                          ) : null
                      }
                    </div>
                  </Popover>
                </Col>
                <Col className="gutter-row" xs={12} sm={12} md={12} lg={5} xl={5} xxl={5}>
                  <Popover trigger="click" content={tagContent}>
                    <div className="flex operation-item">
                      <img src={iconTag}/>
                      <span>Tags</span>
                      {
                        filterTags.length > 0 ?
                          (
                            <div style={{marginLeft: '6px', color: 'rgb(234 95 43)'}}>
                              ({filterTags.length})
                            </div>
                          ) : null
                      }
                    </div>
                  </Popover>
                </Col>

                <Col className="gutter-row" xs={24} sm={24} md={24} lg={14} xl={14} xxl={14}>
                  <div className="ecosystem-operation-right">
                    <Input size="large" allowClear value={inputValue} onChange={(e) => handleSearch(e)}
                           placeholder="Search by name..."
                           prefix={<img style={{width: '24px', height: '24px'}} src={iconSearch}/>}/>
                  </div>
                </Col>
              </Row>
            </div>

            <div className='ecosystem-list'>
              <Row gutter={[40, 40]}>
                {
                  list.map((item, index) =>
                    <Col className="gutter-row" key={index} xs={24} sm={24} md={12} lg={12} xl={6}>
                      <div className="ecosystem-item">
                        <img src={item.icon} className="ecosystem-item-icon"/>
                        <h3 className="ecosystem-item-title">{item.title}</h3>
                        <p className="ecosystem-item-content">{item.content}</p>
                        <div className="ecosystem-item-tag flex">
                          {
                            item.tagList.map((item2, index2) => (
                              <div style={{
                                background: item2.themeColor,
                                color: item2.sizeColor
                              }} className="tags" key={index2}>{item2.name}</div>
                            ))
                          }
                        </div>
                      </div>
                    </Col>
                  )
                }
              </Row>

            </div>
          </>
        ):null
      }

      <Modal
        title=" "
        centered
        open={open}
        footer={null}
        closable={false}
        mask={false}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width="100%"
      >
        <div className="modal-wrap flex-column">
          <ul className="flex-column modal-ecosystem-link">
            <li><a>Community</a></li>
            <li className="link-active"><a>Echosystem</a></li>
            <li><a>Doc</a></li>
            <li><a>About us</a></li>
            <li><a>Subscribe</a></li>
          </ul>
          <div className="flex modal-nav-icon">
            <div className="icon-item flex"><img src={icon1}/></div>
            <div className="icon-item flex"><img src={icon2}/></div>
            <div className="icon-item flex"><img src={icon3}/></div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Ecosystem;