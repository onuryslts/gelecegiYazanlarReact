import React, {useState} from 'react'

function Form() {
    const [form, setForm] = useState({name:"",surname:"",gender:"0"});
    const handleChange =(e) =>{
        setForm((prev) => ({...prev,[e.target.name]: e.target.value}));
    }
  return (
    <div>
        <div>
            <div>İsim Alanı</div>
            <input placeholder='İsim' name='name' value={form.name} onChange={handleChange}/>
            <input placeholder='İsim' name='surname' value={form.surname} onChange={handleChange}/>
            
        </div>
        <br/>
        <div>
            <div>Cinsiyet</div>
            <select value={form.gender} onChange={handleChange} name='gender'>
                <option value="0">ERKEK</option>
                <option value="1">KADIN</option>
            </select>
        </div>
        <hr/>
            <div>
                İsim : 
            <strong> {form.name} {form.surname}</strong>
            </div>
            <div>
                Cinsiyet : 
            <strong> {form.gender === '0' ? 'ERKEK':'KADIN'}</strong>
            </div>

    </div>
  )
}

export default Form