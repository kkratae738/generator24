import React from "react";
import Input from '../../components/Input/Input';

import './Main.css'

import image1 from '../../assets/img/A.jpg';
import image2 from '../../assets/img/B.png';
import image3 from '../../assets/img/C.jpg';
import image4 from '../../assets/img/D.jpg';
import image5 from '../../assets/img/E.jpg';
import image6 from '../../assets/img/F.jpg';
import image7 from '../../assets/img/G.jpg';
import image8 from '../../assets/img/H.jpg';
import image9 from '../../assets/img/I.jpg';
import image10 from '../../assets/img/J.jpg';
import image11 from '../../assets/img/K.jpeg';
import image12 from '../../assets/img/L.jpg';
import image13 from '../../assets/img/M.jpg';
import image14 from '../../assets/img/N.jpg';
import image15 from '../../assets/img/O.jpeg';
import image16 from '../../assets/img/P.jpg';
import image17 from '../../assets/img/Q.jpg';
import image18 from '../../assets/img/R.jpg';
import image19 from '../../assets/img/S.jpg';
import image20 from '../../assets/img/T.jpg';
import image21 from '../../assets/img/U.jpg';
import image22 from '../../assets/img/V.jpg';
import image23 from '../../assets/img/W.jpg';
import image24 from '../../assets/img/X.jpg';
import image25 from '../../assets/img/Y.jpg';
import image26 from '../../assets/img/Z.jpg';


import Images from '../../components/Images/Images';
import ReactCanvas from '../../components/Canvas/ReactCanvas';
import CustomizationForm from '../../components/CustomizationForm/CustomizationForm'
import Button from '../../components/Button/Button';
import Info from '../../components/Info/Info';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';
import ConfirmationScreen from '../../components/ConfirmationScreen/ConfirmationScreen';

const imageCol = [image1,image2,image3,image4,image5,image6,image7,image8,image9,image10,image11,image12,image13,image14,
  image15,image16,image17,image18,image19,image20,image21,image22,image23,image24,image25,image26];

class MainComponent extends React.Component {

  render(){

    let main = (
    <div className = 'visualization'>
    <Input
    name = 'topText'
    position = 'Top'
    type = 'input'
    val = {this.props.topText}
    change = {(event)=>this.props.changeTopText(event.target.value)} 
    delete = {()=>this.props.changeTopText('')}
    description = 'Top text'/>
    <ReactCanvas 
    width = '400'
    height = '400'
    bottomText = {this.props.bottomText}
    topText = {this.props.topText}
    topFontSize = {this.props.topFontSize}
    bottomFontSize = {this.props.bottomFontSize}
    colorBottom = {this.props.colorBottom}
    colorTop = {this.props.colorTop}
    selectedImage = {this.props.selectedImage}
    isSaved = {this.props.isSaved}
    />
    <Input 
    name = 'bottomText'
    position = 'Bottom'
    type = 'input'
    val = {this.props.bottomText}
    delete = {()=>this.props.changeBottomText('')}
    change = {(event)=>this.props.changeBottomText(event.target.value)}
    description = 'Bottom text'/>
    <CustomizationForm/>
    <ConfirmationScreen/>
    <Button 
    type = 'success' 
    click = {this.props.saveImageRequest}>
      Generate!</Button>
    </div>
    );
    
    if(this.props.selectedImage === null){
      main = <Info/>
    }

    return (
      <main>
          <Images imageArray = {imageCol}/>
          {main}
      </main>
    )
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    saveImageRequest: () => dispatch(actions.saveImageRequest()),
    changeTopText: (text)=> dispatch(actions.changeTopText(text)),
    changeBottomText: (text)=>dispatch(actions.changeBottomText(text))
  }
}

const mapStateToProps = state =>{
  return{
    topText: state.topText,
    bottomText: state.bottomText,
    selectedImage: state.image,
    colorTop: state.colorTop,
    colorBottom: state.colorBottom,
    topFontSize: state.sizeTop,
    bottomFontSize: state.sizeBottom,
    isSaved: state.saveImage,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainComponent);
