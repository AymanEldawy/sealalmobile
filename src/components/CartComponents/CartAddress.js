
import { LanguageContext } from '@/context/LangContext';
import React, { useContext, useState } from 'react'
import { fetchWord } from '@/lang/fetchWord';
import CustomSelectField from '../Forms/CustomSelectField';
import { Button } from '../Global/Button/Button';
import { InputField } from '../Forms/InputField';
import { TextField } from '../Forms/TextField';

const options = [

]
export const CartAddress = ({setStage}) => {
  const { lang } = useContext(LanguageContext);
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');
  const [cartAddressInfo, setCartAddressInfo] = useState({
    first_name: "",
    last_name: "",
    Country_Region: "",
    Town: "",
    Street_address: "",
    Phone: "",
    Order_note: "",
  });
  const handelChangeField = (e) => {
    setAddress(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const onSubmit = () => {
    setStage('payment')
  }
  return (
    <div className=" py-4">
      <div className="container">
        <h2 className='font-semibold text-xl capitalize mb-4 text-secondary'>
          {fetchWord('send_message', lang)}
        </h2>
        {error ? <p className='text-red-500 my-4 text-sm bg-red-200 p-1 rounded-md text-center'>{error}</p> : null}
        {msg ? <p className='text-green-500 my-4 text-sm bg-green-200 p-1 rounded-md text-center'>{msg}</p> : null}
        <form>
          <div className='grid gap-4 md:grid-cols-2 mb-4'>
            <InputField
              containerClassName="!mb-0"
              label={fetchWord('first_name', lang)}
              placeholder={fetchWord('first_name', lang)} value={cartAddressInfo?.first_name} name="first_name" onChange={handelChangeField}
            />
            <InputField
              containerClassName="!mb-0"
              label={fetchWord('last_name', lang)}
              placeholder={fetchWord('last_name', lang)} value={cartAddressInfo?.last_name} name="last_name" onChange={handelChangeField}
              
              />
              </div>
            <CustomSelectField
              label={fetchWord('Country_Region', lang)}
              list={options}
              placeholder={fetchWord('Country_Region', lang)}
              value={cartAddressInfo?.Country_Region} name="Country_Region" onChange={handelChangeField}
            />
            <CustomSelectField
              label={fetchWord('Town', lang)}
              list={options}
              placeholder={fetchWord('Town', lang)}
              value={cartAddressInfo?.Town} name="Town" onChange={handelChangeField}
            />
            <CustomSelectField
              label={fetchWord('Street_address', lang)}
              list={options}
              placeholder={fetchWord('Street_address', lang)}
              value={cartAddressInfo?.Street_address} name="Street_address" onChange={handelChangeField}
            />
            <InputField
              containerClassName=""
              label={fetchWord('Phone', lang)}
              placeholder={fetchWord('Phone', lang)} value={cartAddressInfo?.Phone} name="Phone" onChange={handelChangeField}
            />
            <TextField
              containerClassName=""
              label={fetchWord('Order_note', lang)}
              placeholder={fetchWord('Order_note', lang)} value={cartAddressInfo?.Order_note} name="Order_note" onChange={handelChangeField}
            />
          
            <Button onClick={onSubmit} classes="px-6 mt-8 mb-12 w-full max-w-[313px] mx-auto block !p-3">{fetchWord('Place_order', lang)}</Button>
        </form>
      </div>
    </div>
  )
}
