import React,{useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
 const handleUpClick = () => {
    // console.log("Upper case was clicked" + text)
    setText(text.toUpperCase())
    props.showAlert('Converted to upper case','success');

}


const handlelowClick = () => {
    // console.log("Upper case was clicked" + text)
    setText(text.toLowerCase())
    props.showAlert('Converted to lower case','success');

}

 const handleOnChange = (event) => {
    // console.log("On change")
    setText(event.target.value);
 }
 const handleclear = () => {
    // console.log("On change")
    setText('');
    props.showAlert('TextBox Cleared','success');

 }




    const [text,setText] = useState('');

// if(document.getElementById('mybox').value == ''){
//     document.getElementById('checker').innerHTML = '0';
// }
// let checker  = 0;
// if(text.split(' ').length === 0){
//     checker=  0;
// }


    return (
        <>
<div className='container'>
<h1 className={`text-${props.mode==='light'?'dark':'light'}`} >{props.heading}</h1>
<div className='mb-3'>
<textarea className={`form-control bg-${props.mode==='light'?'light':'dark'} text-${props.mode==='light'?'dark':'light'}`} id='mybox' rows="10" value={text} onChange={handleOnChange}></textarea>
</div>
<button className="btn btn-primary mx-2" onClick={handleUpClick}>
    Convert to upper case
</button>
<button className="btn btn-primary mx-2 " onClick={handlelowClick}>
    Convert to lower case
</button>

<button className="btn btn-primary mx-2 " onClick={handleclear}>
    Clear
</button>





</div>



<div className="container my-5">
{/* 0.008 */}
    <h1 className={`text-${props.mode==='light'?'dark':'light'}`}>Your text summery</h1>
    <p id="checker" className={`text-${props.mode==='light'?'dark':'light'}`}>{text.trimEnd(' ').split(' ').length===1?0:text.trimEnd(' ').split(' ').length} words, {text.trimEnd(' ').length} characters</p>
<p className={`text-${props.mode==='light'?'dark':'light'}`}>Total Read Time: {(text.trimEnd(' ').split(' ').length===1?0:text.trimEnd(' ').split(' ').length)*0.008} minutes</p>
<h2 className={`text-${props.mode==='light'?'dark':'light'}`}>Preview</h2>
<p className={`text-${props.mode==='light'?'dark':'light'}`}>{text.length>0?text:"Enter somethings to preview it here"  }</p>
</div>


</>
  )
}


TextForm.prototype = {
    heading : PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: "Enter your text"
}