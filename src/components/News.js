import React, {useEffect,useState,useRef} from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News =(props)=> {
    const effectRun=useRef(false);
    const[articles,setArticles]=useState([]);
    const[loading,setLoading]=useState(false);
    const[page,setPage]=useState(1);
    const[total,setTotal]=useState([]);
    const updatenews=async()=>{
        props.setPro(0);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
        setLoading(true);
        let data=await fetch(url);
        props.setPro(30);
        let parseddata=await data.json();
        props.setPro(70);
        setArticles(parseddata.articles);
        setLoading(false);
        setTotal(parseddata.totalResults);
        props.setPro(100);
    }
    const updatenews2=async()=>{
        props.setPro(0);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pagesize}`;
        //setLoading(true);
        console.log("loading");
        let data=await fetch(url);
        props.setPro(30);
        let parseddata=await data.json();
        props.setPro(70);
        setArticles(parseddata.articles);
        //setLoading(false);
        console.log("not loading");
        setTotal(parseddata.totalResults);
        props.setPro(100);
    } 
    useEffect(()=>{
        if(effectRun.current===false){
            console.log("content");
            updatenews();
            effectRun.current=true;
        }
    },[])
    useEffect(()=>{
        console.log("a");
        updatenews2();
    },[props.country])
    /*async componentDidMount(){
        props.setPro(0);
        let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9c7fb93456b4a5eae609066eb4bb7eb&page=${page}&pageSize=${props.pagesize}`;
        setLoading(true);
        setState({loading:true});
        let data=await fetch(url);
        props.setPro(30);
        let parseddata=await data.json();
        props.setPro(70);
        setArticles(parseddata.articles);
        setLoading(false);
        setTotal(parseddata.totalResults);
        setState({articles:parseddata.articles, total:parseddata.totalResults, loading:false})
        props.setPro(100);
    }*/
    /*const handlenext=async()=>{
        if(!(page+1>Math.ceil(total/props.pagesize))){
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9c7fb93456b4a5eae609066eb4bb7eb&page=${page+1}&pageSize=${props.pagesize}`;
            setLoading(true);
            let data=await fetch(url);
            let parseddata=await data.json();
            setArticles(parseddata.articles);
            setPage(page+1);
            setLoading(false);
        }
    }
    const handleprev=async()=>{
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f9c7fb93456b4a5eae609066eb4bb7eb&page=${page-1}&pageSize=${props.pagesize}`;
            setLoading(true);
            let data=await fetch(url);
            let parseddata=await data.json();
            setArticles(parseddata.articles);
            setPage(page-1);
            setLoading(false);
    }*/
    const fetchMoreData = async() => {
            let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pagesize}`;
            setPage(page+1);
            let data=await fetch(url);
            let parseddata=await data.json();
            setArticles(articles.concat(parseddata.articles))
      };
    return (
      <>
        <h1 className='text-center' style={{margin:"40px", marginTop:"90px"}}>{props.category==="general"?"Top Headlines":`${props.category.charAt(0).toUpperCase()+props.category.slice(1)} Headlines`}</h1>
        {loading&&<Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==total}
          loader={page+1<=Math.ceil(total/props.pagesize)&&<Spinner/>}
        >
        <div className="container">
        <div className="row">
            {!loading&&articles.map((element)=>{
            return <div className="col-md-4" key={element.url}>
                <Newsitem title={element.title?element.title:""} description={element.description?element.description:""} imageurl={element.urlToImage} newsUrl={element.url} Author={element.author} date={element.publishedAt} source={element.source.name}/>
            </div>})}
        </div>
        </div>
        </InfiniteScroll>
        {/*<div className="container my-5 d-grid gap-2 d-md-flex justify-content-md-end">
            <button disabled={page<=1} type="button" className="btn btn-outline-primary mx-2" onClick={handleprev}>&larr; Prev</button>
            <button disabled={page+1>Math.ceil(total/props.pagesize)} type="button" className="btn btn-outline-primary mx-2" onClick={handlenext}>Next &rarr;</button>
        </div>*/}
      </>
    )
}
News.defaultProps={
    country:'us',
    pagesize:6,
    category:'general'
}
News.propTypes={
    country:PropTypes.string,
    pagesize:PropTypes.number,
    category:PropTypes.string
}
export default News