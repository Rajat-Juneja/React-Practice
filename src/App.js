import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {AddSection} from './Childs/Left/AddProduct/Add';
import {Products} from './Childs/Right/Products/Products';

export default class App extends Component{
  constructor(){
    super();
    this.state={mobiles:[]};
    this.id='';
    this.name='';
    this.price='';
    this.url='';
  }
  doAjax(){
    var url = 'https://raw.githubusercontent.com/brainmentorspvtltd/myserverdata/master/mobiles.json';
    fetch(url).then(response=>{
      response.json().then(data=>{
        if(!data.mobiles.length<this.state.mobiles.length){
        this.setState({'mobiles':data.mobiles});
      }
        // this.showItems();
      }).catch(err=>{
        console.log("INVALID JSON");
      })
    }).catch(err=>{
      console.log("ERROR IN AJAX CALL");
    });
  }
  // showItems(){

  // }
  getId(event){
    this.id=event.target.value;
    console.log(event.target.value);
  }
  getName(event){
    this.name=event.target.value;
    console.log(event.target.value);
  }
  getPrice(event){
    this.price=event.target.value;
    console.log(event.target.value);
  }
  getUrl(event){
    this.url=event.target.value;
    console.log(event.target.value);
  }
  addProduct(){
    if(!this.id || !this.name || !this.price || !this.url){
      alert("Please Provide all the details");
      return;
    }
    var obj={};
    obj.id=this.id;
    obj.name=this.name;
    obj.price=this.price;
    obj.url=this.url;
    console.log(this.state);
    this.setState({'mobiles': this.state.mobiles.concat(obj)});
    console.log(this.state);
  }
  addAndDisable(val){
    console.log("Called",val);
    // this.setState({count:this.state.count+1});
  }
  render(){
    return(
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12">
          <AddSection load={this.doAjax.bind(this)} data={this.state.mobiles} id={this.getId.bind(this)} name={this.getName.bind(this)} price={this.getPrice.bind(this)} url={this.getUrl.bind(this)} addObj={this.addProduct.bind(this)}/>
        </div>

        <div className="col-md-6 col-sm-12 col-12">
          <Products data={this.state.mobiles} sendData={this.addAndDisable.bind(this)}/>
        </div>
      </div>
    </div>
    )
  }
}