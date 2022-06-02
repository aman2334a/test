import React from 'react'
import Table from './Table';
import ImportedData from './../data.json'

export default function LandingPage() {
    const [data, setdata] = React.useState(ImportedData)
    const deletedata = (id) => {
        console.log(id)
        const modifiedData = data.filter((element) => element.id !== id);
        console.log(modifiedData)
        setdata(modifiedData)

    }
    const updateData = (updatedObject, index) => {
        console.log(index)
        //  console.log(updatedObject)
        setdata((old) => {
            old[index] = updatedObject
            return [...old]
        })
    }
    React.useEffect(() => {

    }, [])
    return (
        <div>
            <Table
                data={data}
                columsNamesToDisplay={[`First Name`, `Last Name`, `Age`, `Gender`]} //Array Of Headings
                keysToGetDataFromObject={[`fname`, `lname`, `age`, `gender`]} // Array of keys for getting value from object
                deletefun={deletedata} // for delete a record
                save={updateData} // for update complete data
            />
        </div>
    )
}
