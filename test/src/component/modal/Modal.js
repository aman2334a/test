import React from 'react';
import './modal.css'

export default function Modal(props) {
    const submitFunction=(e)=>{
        e.preventDefault()
        props.updateObject(props.dataForUpdate,props.indexForUpdate)
    }

    return (
        <>
            <div className='modal-main-wrapper'>
                <div className="close-btn"   >
                    <svg onClick={props.openModalHandler}  id="exit" xmlns="http://www.w3.org/2000/svg" width="23.38" height="23.38" viewBox="0 0 23.38 23.38">
                        <path id="Path_24" data-name="Path 24" d="M31.2,4.5H29.25V27.88H31.2Z" transform="translate(-29.25 -4.5)" />
                        <path id="Path_25" data-name="Path 25" d="M14.812,21.562l3.494-3.493H4.5V16.121H18.306l-3.493-3.493L16.19,11.25l5.845,5.845L16.19,22.94Z" transform="translate(1.345 -5.405)" />
                    </svg>

                </div>

                <div className='detail-edit-form-section'>

                    <h3 className='edit-form-heading'>Edit Form</h3>

                    <form onSubmit={submitFunction}>

                        <label htmlFor="fname">First Name</label>
                        <input type="text" id="fname" name="firstname"  value={props.dataForUpdate.fname&&props.dataForUpdate.fname} placeholder="Your name.." 
                        onChange={(e)=>{
                            props.updateInputFunction((old)=>{
                                old.fname=e.target.value
                                return {...old}
                            })
                        }}
                        />

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" id="lname" name="lastname" value={props.dataForUpdate.lname&&props.dataForUpdate.lname} placeholder="Your last name.." 
                        onChange={(e)=>{
                            props.updateInputFunction((old)=>{
                                old.lname=e.target.value
                                return {...old}
                            })
                        }}
                        />

                        <label htmlFor="age">Age</label>
                        <input type="number" id="age" name="age" value={props.dataForUpdate.age&&props.dataForUpdate.age} placeholder="Your Age" 
                        onChange={(e)=>{
                            props.updateInputFunction((old)=>{
                                old.age=e.target.value
                                return {...old}
                            })
                        }}
                        />

                        <label htmlFor="Gender">Last Name</label>
                        <input type="text" id="gender" name="gender" value={props.dataForUpdate.gender&&props.dataForUpdate.gender} placeholder="Your last gender.." 
                        onChange={(e)=>{
                            props.updateInputFunction((old)=>{
                                old.gender=e.target.value
                                return {...old}
                            })
                        }}
                        />

                        <input type="submit" value="Submit"></input>
                    </form>


                </div>

            </div>
        </>
    )
}
