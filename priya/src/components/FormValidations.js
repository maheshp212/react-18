import { useState, useEffect } from 'react';
import './FormValidations.css'
const FormValidations = ()=>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isNameMin, setIsNameMin] = useState(false);
    const [isFormSubmit, setIsFormSubmit] = useState(false);
    const [isNameTouched, setIsNameTouched] = useState(false);
    const [isNameDirty, setIsNameDirty] = useState(false);

    useEffect(()=>{
        if(name.length >=6){
            setIsNameValid(true)
            setIsNameMin(true);
        } else if( name){
            setIsNameValid(true)
            setIsNameMin(false);
        } else {
            setIsNameValid(false);
            setIsNameMin(true);
        }
    },[name])

    const nameHandler = (event)=>{
        setName(event.target.value);
        setIsNameDirty(true);
    }

    const emailHandler = (event)=>{
        setEmail(event.target.value);
    }

    const contactHandler = (event)=>{
        setContact(event.target.value);
    }
    const nameBlurHandler = (event)=>{
        setIsNameTouched(true);
    }
    const frmSubmit = (event) =>{
        event.preventDefault();
        console.log(name);
        setIsFormSubmit(true);
    }
    return <div className="form-validation" >
        This is Form Validations page
        <form onSubmit={frmSubmit}>
            <div className='form-control'>
                <label> Name </label>
                <input type="text" onChange={nameHandler}  onBlur={nameBlurHandler}/>
                {/* {(isFormSubmit &&!isNameValid) && <div className='error'> name is mandatory</div>}
                {(isFormSubmit && !isNameMin) && <div className='error'> Name should have min 6 characters</div>} */}
                {/* {(isNameTouched &&!isNameValid) && <div className='error'> name is mandatory</div>}
                {(isNameTouched && !isNameMin) && <div className='error'> Name should have min 6 characters</div>}
            */}
                {(isNameDirty && !isNameValid) && <div className='error'> name is mandatory</div>}
                {(isNameDirty && !isNameMin) && <div className='error'> Name should have min 6 characters</div>}
               
            </div>
            <div className='form-control'>
                <label> Email </label>
                <input type="text" onChange={emailHandler}/>
            </div>
            <div className='form-control'>
                <label> Contact </label>
                <input type="text" onChange={contactHandler} />
            </div>

            <div className='form-control'>
                <button> Submit</button>
            </div>
        </form>
    </div>
}

export default FormValidations;