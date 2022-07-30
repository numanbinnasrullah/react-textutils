import React, {useState} from 'react';


const TextForm = (props) => {
    const [text , setText] = useState("Enter Your Text For Conversion");
    
    const onChangeHandler = (e) => {
        // console.log("On Change Handler");
        setText(e.target.value);
    }
    
    const ConvertToUpcase = () => {
        let ConvertToUpcase = text.toUpperCase();
        setText(ConvertToUpcase);
        console.log("Converted to Upper Case Successfully");
    }

    const ConvertToLocase = () => {
        let ConvertToLocase = text.toLowerCase();
        setText(ConvertToLocase);
        console.log("Converted to Lower Case Successfully");
    }

    const TextReset = () => {
        let textreset = "";
        setText(textreset);
        console.log("Your Text Area is Clear Now");
    }


  return (
    <>
        <div className="container my-2" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <h1 className="">Enter Your Text Below</h1>
            <div className="mb-3">
                <textarea className="form-control" id="textforconversion" value={text} onChange={onChangeHandler} style = {{backgroundColor : props.mode === 'dark' ? '#140646' : 'white' , color : props.mode === 'dark' ? 'white' : 'black'}} rows="15" ></textarea>
            </div>

            <button type="button" className="btn btn-info mx-2 mt-2" onClick={ConvertToUpcase}>Convert To UpperCase</button>
            <button type="button" className="btn btn-success mx-2 mt-2" onClick={ConvertToLocase}>Convert To LowerCase</button>
            <button type="button" className="btn btn-warning mx-2 mt-2" onClick={TextReset}>Clear Now</button>
        </div>

        <div className="container" style = {{color : props.mode === 'dark' ? 'white' : 'black'}}>
            <div className="row d-flex justify-content-between">
                <div className='col-md-6'>
                    <h3 className="my-4">Text Conversion Summery :-</h3>
                    <span className="me-4 text-success">{text.split(" ").length} Words </span> 
                    <span className="me-4"> <b>And</b> </span>
                    <span className="text-success">{text.length} Characters</span>
                </div>
                <div className='col-md-6'>
                <h3 className="my-4">Time Taken To Read Content :-</h3>
                <span className="me-4 text-success"> Approximately <b className="me-4 text-danger">{Math.round(0.008 * text.split(" ").length)}</b>Minute Required To Read This Content</span> 
                </div>
                
            </div>
        </div>

        

    </>
  )
}

export default TextForm;