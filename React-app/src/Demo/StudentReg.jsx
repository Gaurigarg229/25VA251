import React from 'react'

function StudentReg() {
    const=[data, setData] = useState({ name: '', tel: '', email: '' });

    const handleChange = () => ((e) => {
        setData({ ...})
    })
    return (
        <>
            <div>StudentReg</div>
            <h1>Student Registration form </h1>
            <form submit={handleSubmit}>
                <input type='text' name='name' placeholder='Enter name' value={data.name} onChange={handleChange} />
                <input type='tel' name='tel' placeholder='Enter mobile' value={data.tel} onChange={handleChange} />
                <input type='email' name='email' placeholder='Enter email' value={data.email} onChange={handleChange} />
                <button type='submit'>Registration Here</button>

            </form>
        </>

    )
}

export default StudentReg