/* eslint-disable */
import "./App.css";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { data, cat } from "./data";
import axios from "axios";

function App() {
  let [Search, Search_set] = useState(["Search", "Reset"]);
  let [IMG_NUM, setIMG_NUM] = useState(0);
  const DefaultIMG = [
    "0XYvRd7oD",
    "ozEvzdVM-",
    "hBXicehMA",
    "xnsqonbjW",
    "JFPROfGtQ",
    "8D--jCd21",
    "k71ULYfRr",
    "_6x-3TiCA",
    "13MkvUreZ",
    "5AdhMjeEu",
    "HOrX5gwLS",
    "5iYq9NmT1",
    "7isAO4Cav",
    "s4wQfYoEk",
    "4lXnnfxac",
    "jvg3XfEdC",
    "B1ERTmgph",
    "TR-5nAd_S",
    "j6oFGLpRG",
    "vJ3lEYgXr",
    "IFXsxmXLm",
    "oSpqGyUDS",
    "unX21IBVB",
    "3dbtapCWM",
    "tJbzb7FKo",
    "3KG57GfMW",
    "BQMSld0A0",
    "TuSyTkt2n",
    "YnPrYEmfe",
    "njK25knLH",
    "CDhOtM-Ig",
    "xoI_EpOKe",
    "165ok6ESN",
    "NZpO4pU56M",
    "aKbsEYjSl",
    "OOD3VXAQn",
    "fhYh2PDcC",
    "j5cVSqLer",
    "OGTWqNNOt",
    "06dgGmEOV",
    "JAx-08Y0n",
    "LutjkZJpH",
    "z7fJRNeN6",
    "SMuZx-bFM",
    "oGefY4YoG",
    "Rhj-JsTLP",
    "a8nIYvs6S",
    "o9t0LDcsa",
    "II9dOZmrw",
    "ai6Jps4sx",
    "3bkZAjRh1",
    "Qtncp2nRe",
    "MK-sYESvO",
    "EPF2ejNS0",
    "BDb8ZXb1v",
    "KBroiVNCM",
    "O3F3_S1XN",
    "7CGV6WVXq",
    "sxIXJax6h",
    "0SxW2SQ_S",
  ];
  const catName = [
    "Abyssinian",
    "Aegean",
    "American Bobtail",
    "American Curl",
    "American Shorthair",
    "American Wirehair",
    "Arabian Mau",
    "Australian Mist",
    "Balinese",
    "Bambino",
    "Bengal",
    "Birman",
    "Bombay",
    "British Longhair",
    "British Shorthair",
    "Burmese",
    "Burmilla",
    "California Spangled",
    "Chantilly-Tiffany",
    "Chartreux",
    "Chausie",
    "Cheetoh",
    "Colorpoint Shorthair",
    "Cornish Rex",
    "Cymric",
    "Cyprus",
    "Devon Rex",
    "Donskoy",
    "Dragon Li",
    "Egyptian Mau",
    "European Burmese",
    "Exotic Shorthair",
    "Havana Brown",
    "Himalayan",
    "Japanese Bobtail",
    "Javanese",
    "Khao Manee",
    "Korat",
    "DbwiefiaY.png",
    "Kurilian",
    "LaPerm",
    "Maine Coon",
    "Malayan",
    "Manx",
    "Munchkin",
    "Nebelung",
    "Norwegian Forest Cat",
    "Ocicat",
    "Oriental",
    "Persian",
    "Pixie-bob",
    "Ragamuffin",
    "Ragdoll",
    "Russian Blue",
    "Savannah",
    "Scottish Fold",
    "Selkirk Rex",
    "Siamese",
    "Siberian",
    "Singapura",
    "Snowshoe",
    "Somali",
    "Sphynx",
    "Tonkinese",
    "Toyger",
    "Turkish Angora",
    "Turkish Van",
  ];
  const catExplanation = [
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
    "Balinese are curious",
    "den eyes and ",
    "and toler",
  ];
  const tag = [
    "tabby",
    "point",
    "silver",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "tabby",
    "point",
    "silver",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "tabby",
    "point",
    "silver",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
    "white",
    "solid",
    "caos",
  ];
  const tagList = [
    "Affectionate",
    "Curious",
    "United Arab Emirates",
    "AustraliaAustralia",
    "Lively",
    "Alert",
    "FranceFrance",
    "Gentle",
    "United Kingdom",
    "Burma",
    "Easy Going",
    "Canada",
    "CyprusCyprus",
    "Highly interactive",
    "Russia",
    "Playful",
    "China",
    "Agile",
    "uropean Burmese",
    "Sweet",
    "Dependent",
    "Devoted",
    "Thailand",
    "Calm",
    "Loyal",
    "Independent",
    "Adaptable",
    "IndependentMalayan",
    "Isle of ManIsle of Man",
    "Norway",
    "Energetic",
    "Iran (Persia)",
    "Singapore",
    "Somalia",
    "Mischievous",
    "Turkey",
    "Friendly",
    "Curious",
    "Gentle",
    "Affectionate",
    "Friendly",
    "Demanding",
    "Independent",
    "Loyal",
    "Easy Going",
    "Devoted",
    "Adaptable",
    "Social",
    "Tenacious",
    "Agile",
    "Affectionate",
    "Curious",
    "United Arab Emirates",
    "AustraliaAustralia",
    "Lively",
    "Alert",
    "FranceFrance",
    "Gentle",
    "United Kingdom",
    "Burma",
    "Easy Going",
    "Canada",
    "CyprusCyprus",
    "Highly interactive",
    "Russia",
    "Playful",
    "China",
    "Agile",
    "uropean Burmese",
    "Sweet",
    "Dependent",
    "Devoted",
    "Thailand",
    "Calm",
    "Loyal",
    "Independent",
    "Adaptable",
    "IndependentMalayan",
    "Isle of ManIsle of Man",
    "Norway",
    "Energetic",
    "Iran (Persia)",
    "Singapore",
    "Somalia",
    "Mischievous",
    "Turkey",
    "Friendly",
    "Curious",
    "Gentle",
    "Affectionate",
    "Friendly",
    "Demanding",
    "Independent",
    "Loyal",
    "Easy Going",
    "Devoted",
    "Adaptable",
    "Social",
    "Tenacious",
    "Agile",
  ];
  let [catList_Detail, setCatList_Detail] = useState(false);

  return (
    <div className="App">
      <div className="App-header">
        <h5>Cat Libary</h5>
      </div>

      <div className="nav_menu">
        <>
          <Form.Control
            style={{ height: "38px", verticalAlign: "middle", marginRight: "3px" }}
            className="text_search"
            type="text"
            placeholder="Please enter the cat's name."
          />

          {/* <Button
            className="cat"
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log(
                //data cat에서 가져온 매개변수에서 return에 해당하는 것만 출력
                cat.filter(function (cat) {
                  return cat.catName == "Abyssinian";
                })
              );
            }}
          >
            filter.cat
          </Button> */}

          <Button
            className="cat"
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log(
                cat.flatMap(function (cat) {
                  return cat.catName == "Abyssinian";
                })
              );
            }}
          >
            flatMap.cat
          </Button>

          <Button
            style={{ height: "38px", marginRight: "3px" }}
            onClick={() => {
              console.log(
                cat.filter(function (cat) {
                  let catlist = cat.catName == "Abyssinian";
                  console.log(
                    catlist
                    // catlist.flatMap(function (catlist) {
                    //   return catlist;
                    // })
                  );
                })
              );
            }}
          >
            cat
          </Button>

          <Button
            className="cat"
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log(
                cat.filter(function (cat) {
                  return cat.catName == "Abyssinian";
                })
              );
            }}
          >
            Nested.cat
          </Button>

          {/* <Button
            className="cat"
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              let ladder = {
                step: 0,
                up() {
                  this.step++;
                  return this;
                },
                down() {
                  this.step--;
                  return this;
                },
                showStep: function () {
                  // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
                  console.log(this.step);
                  return this;
                },
              };
              console.log("ladder", ladder);
            }}
          >
            메서드체이닝
          </Button> */}

          {/*  <Button
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log("Search Click");
            }}
          >
            Search
          </Button> */}

          {/*
          <Button
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log("More Click");
              console.log(data);
            }}
          >
            Data
          </Button>

          <Button
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log(
                data.filter(function (data) {
                  return data.tagList == "Turfs";
                })
              );
            }}
          >
            More
          </Button>

          <Button
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log(
                data.flatMap(function (data) {
                  return data.tagList == "Turfs";
                })
              );
            }}
          >
            boolean
          </Button>
          <Button
            style={{ height: "38px", marginRight: "3px" }}
            variant="primary"
            onClick={() => {
              console.log(
                data.flatMap(function (data) {
                  return data.tagList;
                })
              );
            }}
          >
            Data Select
          </Button>
          */}
        </>
      </div>

      <div className="container">
        <div className="row">
          <CatList
            setIMG_NUM={setIMG_NUM}
            catList_Detail={catList_Detail}
            setCatList_Detail={setCatList_Detail}
            IMG_NUM={IMG_NUM}
            DefaultIMG={DefaultIMG}
            catName={catName}
            catExplanation={catExplanation}
            tag={tag}
            tagList={tagList}
          />
          {catList_Detail == true ? (
            <CatList_Detail
              setIMG_NUM={setIMG_NUM}
              catList_Detail={catList_Detail}
              setCatList_Detail={setCatList_Detail}
              IMG_NUM={IMG_NUM}
              DefaultIMG={DefaultIMG}
              catName={catName}
              catExplanation={catExplanation}
              tag={tag}
              tagList={tagList}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

function CatList(props) {}

function CatList_Detail(props) {
  return (
    <div
      className="catList_Detail"
      onClick={() => {
        props.setCatList_Detail(false);
      }}
    >
      <h3>{props.catName[props.IMG_NUM]}</h3>
      <span>{props.catExplanation[props.IMG_NUM]}</span>
      <h4>{props.tag[props.IMG_NUM]}</h4>
    </div>
  );
}

export default App;
