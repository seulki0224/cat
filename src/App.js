/* eslint-disable */
import './App.css';
import {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let [Search, Search_set] = useState(['Search', 'Reset'])
  let [IMG_NUM, setIMG_NUM] = useState(0);
  const DefaultIMG = ['0XYvRd7oD','ozEvzdVM-','hBXicehMA','xnsqonbjW','JFPROfGtQ','8D--jCd21','k71ULYfRr','_6x-3TiCA','13MkvUreZ','5AdhMjeEu','HOrX5gwLS','5iYq9NmT1','7isAO4Cav','s4wQfYoEk','4lXnnfxac','jvg3XfEdC','B1ERTmgph','TR-5nAd_S','j6oFGLpRG','vJ3lEYgXr','IFXsxmXLm','oSpqGyUDS','unX21IBVB','3dbtapCWM','tJbzb7FKo','3KG57GfMW','BQMSld0A0','TuSyTkt2n','YnPrYEmfe','njK25knLH','CDhOtM-Ig','xoI_EpOKe','165ok6ESN','NZpO4pU56M','aKbsEYjSl','OOD3VXAQn','fhYh2PDcC','j5cVSqLer','OGTWqNNOt','06dgGmEOV','JAx-08Y0n','LutjkZJpH','z7fJRNeN6','SMuZx-bFM','oGefY4YoG','Rhj-JsTLP','a8nIYvs6S','o9t0LDcsa','II9dOZmrw','ai6Jps4sx','3bkZAjRh1','Qtncp2nRe','MK-sYESvO','EPF2ejNS0','BDb8ZXb1v','KBroiVNCM','O3F3_S1XN','7CGV6WVXq','sxIXJax6h','0SxW2SQ_S']
  const catName = ['Abyssinian','Aegean','American Bobtail','American Curl','American Shorthair','American Wirehair','Arabian Mau','Australian Mist','Balinese','Bambino','Bengal','Birman','Bombay','British Longhair','British Shorthair','Burmese','Burmilla','California Spangled','Chantilly-Tiffany','Chartreux','Chausie','Cheetoh','Colorpoint Shorthair','Cornish Rex','Cymric','Cyprus','Devon Rex','Donskoy','Dragon Li','Egyptian Mau','European Burmese','Exotic Shorthair','Havana Brown','Himalayan','Japanese Bobtail','Javanese','Khao Manee','Korat','DbwiefiaY.png','Kurilian','LaPerm','Maine Coon','Malayan','Manx','Munchkin','Nebelung','Norwegian Forest Cat','Ocicat','Oriental','Persian','Pixie-bob','Ragamuffin','Ragdoll','Russian Blue','Savannah','Scottish Fold','Selkirk Rex','Siamese','Siberian','Singapura','Snowshoe','Somali','Sphynx','Tonkinese','Toyger','Turkish Angora','Turkish Van']
  const catExplanation = ['Balinese are curious','den eyes and ','and toler','Balinese are curious','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','and toler','Balinese are curious','den eyes and ','and toler','Balinese are curious','den eyes and ','and toler']
  const tag = ['tabby','point','silver','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','tabby','point','silver','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','tabby','point','silver','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos','white','solid','caos']
  const tagList = ['Affectionate','Curious','United Arab Emirates','AustraliaAustralia','Lively','Alert','FranceFrance','Gentle','United Kingdom','Burma','Easy Going','Canada','CyprusCyprus','Highly interactive','Russia','Playful','China','Agile','uropean Burmese','Sweet','Dependent','Devoted','Thailand','Calm','Loyal','Independent','Adaptable','IndependentMalayan','Isle of ManIsle of Man','Norway','Energetic','Iran (Persia)','Singapore','Somalia','Mischievous','Turkey','Friendly','Curious','Gentle','Affectionate','Friendly','Demanding','Independent','Loyal','Easy Going','Devoted','Adaptable','Social','Tenacious','Agile','Affectionate','Curious','United Arab Emirates','AustraliaAustralia','Lively','Alert','FranceFrance','Gentle','United Kingdom','Burma','Easy Going','Canada','CyprusCyprus','Highly interactive','Russia','Playful','China','Agile','uropean Burmese','Sweet','Dependent','Devoted','Thailand','Calm','Loyal','Independent','Adaptable','IndependentMalayan','Isle of ManIsle of Man','Norway','Energetic','Iran (Persia)','Singapore','Somalia','Mischievous','Turkey','Friendly','Curious','Gentle','Affectionate','Friendly','Demanding','Independent','Loyal','Easy Going','Devoted','Adaptable','Social','Tenacious','Agile']
  let [catList_Detail, setCatList_Detail] =  useState(false);

  return (
    <div className="App">
      
      <div className="App-header">
        <h1>😻 고양이 사전 😻</h1>
      </div>

      <div className="nav_menu">
        <>
          <Form.Control style={{height:'38px',verticalAlign: 'middle'}}  className='text_search' type="text" placeholder="고양이 이름을 입력해주세요" />
          <Button style={{height:'38px'}} variant="primary">Search</Button>{' '}
        </>
      </div> 
      
      <div className="container">
        <div className="row">
          <CatList setIMG_NUM={setIMG_NUM} catList_Detail = {catList_Detail} setCatList_Detail= {setCatList_Detail}  IMG_NUM={IMG_NUM} DefaultIMG={ DefaultIMG } catName={catName} catExplanation={catExplanation} tag={tag} tagList={tagList}/>
          {
            catList_Detail == true
            ? <CatList_Detail setIMG_NUM={setIMG_NUM}  catList_Detail = {catList_Detail} setCatList_Detail= {setCatList_Detail} IMG_NUM={IMG_NUM} DefaultIMG={ DefaultIMG } catName={catName} catExplanation={catExplanation} tag={tag} tagList={tagList}/>
            : null
          }
        </div>
      </div>

    </div>
  );
}

function CatList(props){
  return (
    <div className='CatList'>
      {
        props.DefaultIMG.map((value, index) => {
          return (
            <div 
              className = 'CatList_box'
              key       = { [index] }
              onClick   = { () => { 
                props.setCatList_Detail((!props.catList_Detail)); 
                props.setIMG_NUM(index) } 
              }
            >
              {/* <div onClick={ () => { props.setCatList_Detail((!props.catList_Detail)); props.catName[props.IMG_NUM]} }> */}
              <div>               
                <img src={`https://cdn2.thecatapi.com/images/${props.DefaultIMG[index]}.jpg`}/>
                <h4 style={{fontSize:'20px', fontWeight:'bold', marginBottom:'20px'}}>{props.catName[index]}</h4>
                <p>{props.catExplanation[index]}</p>
                <p>{props.tag[index]}</p>
                <h5 className='tagList'>
                  <span>{props.tagList[index]}</span>
                  <span>{props.tagList[index+1]}</span>
                  <span>{props.tagList[index+2]}</span>
                </h5>              
              </div>
            </div>
          )
        })
      }
    </div>    
  )  
}

function CatList_Detail(props){
  return (
    <div className='catList_Detail' onClick={()=>{props.setCatList_Detail(false)}}>
      <h3>{props.catName[props.IMG_NUM]}</h3>
      <span>{props.catExplanation[props.IMG_NUM]}</span>
      <h4>{props.tag[props.IMG_NUM]}</h4>
    </div>
  )
}

export default App;