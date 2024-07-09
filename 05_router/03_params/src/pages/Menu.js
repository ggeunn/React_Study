import {useEffect,useState} from 'react';
import {searchMenu} from '../api/MenuAPI';
import {getMenuList} from '../api/MenuAPI'
import MenuItem from '../components/MenuItem';
import boxStyle from './Menu.module.css';
import {useNavigate} from 'react-router-dom';
/* 쿼리 스트링으로 작성한 url 요청을 도와줄 수 있는 hooks */
import MenuSearchResult from './MenuSearchResult';

function Menu(){

    const [menuList,setMenuList] = useState([]);
    const [searchValue,setSearchValue] = useState('');
    const navigate = useNavigate();

    const onClickHandler = () => {

        /* 
            검색 버튼을 누르면 쿼리스트링 형태로 검색어를 전달할 수 있게 만듦
            useNavigate 훅을 이용해서 링크를 이동시킬 수 있다.
        */
        navigate(`/menu/search?menuName=${searchValue}`)
    }

    useEffect(()=>{

        console.log('fsdfasd',getMenuList());
        setMenuList(getMenuList());

    },[])

    const onChangeHandler = e => {
        
        setSearchValue(e.target.value);
       
        setMenuList(searchMenu(e.target.value))
      
        console.log('동작함?', e.target.value)

    }
    console.log(searchValue)
    return(
      <>
      <input type='text' name='menuName' onChange={onChangeHandler}/>
            {
                searchValue ?
                <div>
                    <h2>메뉴 검색 결과</h2>
                    <div className={boxStyle.MenuBox}>
                        {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu}/>)}
                    </div>  
                </div>:  
                <div>
                    <h1>판매 메뉴 목록</h1>
                    {/* <div>
                        <input type='search' name='menuName' onChange={e => setSearchValue(e.target.value)}/>
                        <button onClick={onClickHandler}>메뉴이름 검색</button>
                    </div> */}
                    <div className={boxStyle.MenuBox}>
                        {menuList.map(menu => <MenuItem key={menu.menuCode} menu={menu} />)}
                    </div>
                </div>
            }
          
          </>
    );

}

export default Menu;