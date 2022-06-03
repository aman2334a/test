import React, { useState } from 'react'
import Modal from './modal/Modal';

export default function Table(props) {

    const [modal, setModal] = useState(false);
    const [dataForUpdate, setDataForUpdate] = useState()
    const [idForUpdate, setIdForUpdate] = useState(``)

    const openModalHandler = (id, index) => {
        setIdForUpdate(index)
        setDataForUpdate({...props.data[index]})
        setModal(!modal)
    }



    return (
        <>
            <div className='mainTableDiv'>
                <div className='headingcolumns'>
                    {props.columsNamesToDisplay && props.columsNamesToDisplay.map((item, index) => {
                        return <div key={index} className='headings'>{item} </div>
                    })}
                    <div className='actionHeading'>Action</div>
                </div>
                {props.data && props.data.map((dataItem, dataIndex) => {
                    return <div key={dataIndex} className='row'>
                        {props.keysToGetDataFromObject && props.keysToGetDataFromObject.map((keyItem, keyIndex) => {
                            return <div key={keyIndex} className='headings'>{dataItem[keyItem]}</div>
                        })}
                        <div className='action' id={dataIndex}>  <button onClick={() => { openModalHandler(dataItem.id, dataIndex) }} className='customEditBtn'
                        >Edit</button> <button className='customDeleteBtn'
                            onClick={() => {
                                props.deletefun(dataItem.id)
                            }}

                        >Delete</button></div>

                    </div>
                })}



            </div>
            {
                modal ? <Modal updateObject={props.save} updateInputFunction={setDataForUpdate} indexForUpdate={idForUpdate} dataForUpdate={dataForUpdate} openModalHandler={openModalHandler} /> : ``
            }
        </>
    )
}
