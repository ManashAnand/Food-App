import React,{useEffect,useState} from 'react'

export default function Card(props) {
    const [search,setSearch] = useState("");
    const [btnValue,setbtnValue] = useState("orange");
    const apikey = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${btnValue}?query=${btnValue}&apiKey=96a3052c31c549b697f30aee47939b02`;

    const updateText = (e) => {
        setSearch(e.target.value);
    }
   
    const [mainData,setMainData] = useState([])
    useEffect(()=>{
        getData();
    },[btnValue])
    
    const handleSearch = () => 
    {
        setbtnValue(search);
        setSearch("");
    }
    
    
    const getData = async () =>
    {
        props.setProgress(70);
        const data = await fetch(apikey);
        props.setProgress(85);
        const JSONdata = await data.json();
        console.log(JSONdata);
        setMainData(JSONdata);
        props.setProgress(100);
    }
    
  return (
    <>
     <div className="head">Get your Fav Food item here.</div> 
     <div className="search-container">
     <div className='search-box'>
    <input type="text" placeholder='Search...' name="text" className='search-text' autoComplete='off' value={search} onChange={updateText} />
    <div className="btn" onClick={handleSearch}>Search</div>
      </div>
    </div>
        {
            mainData.map((maindata)=>{
                return(
                    <div className="mainContainer" >
                        <img src={maindata.image} alt="food image" />
                        <div className="heading">
                            <p>{maindata.title}</p>
                        </div>
                    </div>
                )
            })
        }
      
    </>
  )
}
