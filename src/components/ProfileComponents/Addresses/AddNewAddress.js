import CustomSelectField from '@/components/Forms/CustomSelectField';
import { InputField } from '@/components/Forms/InputField';
import { Button } from '@/components/Global/Button/Button';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useEffect, useState } from 'react'

const AddNewAddress = ({ setStage, address: oldValues, containerClassName, formClassName, operation, onClickCancel }) => {
  const { lang } = useContext(LanguageContext)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [options, setOptions] = useState([]);
  useEffect(() => {
    if (oldValues) {
      setAddress(prev => {
        return {
          ...prev,
          ...oldValues
        }
      })
    }
  }, [oldValues])
  const [address, setAddress] = useState({
    title: '',
    city: '',
    country: '',
    line_one: '',
    line_two: '',
    postal_code: '',
  })
  useEffect(() => {
    // getCountries().then(d => {
    //   setOptions(d)
    //   console.log(d)
    // })
  }, [])
  const handelChangeField = (e) => {
    setAddress(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = () => {
    if (address?.title && address?.city && address?.line_one && address?.country) {
      if (operation === 'update') {
        updateAddress(address).then(res => {
          if (!res?.error) {
            setMsg(fetchWord('address_update_msg', lang))
            setTimeout(() => {
              if (!!setStage)
                setStage('display')
            }, [3000])
          }
        })
      } else {
        addAddress(address).then(res => {
          if (!res?.error) {
            setMsg(fetchWord('address_added_msg', lang))
            setTimeout(() => {
              if (!!setStage)
                setStage('display')
            }, [3000])
          }
        })
      }
      setError('')
      if (!!onClickCancel) {
        onClickCancel()
      }
    } else {
      setMsg('')
      setError(fetchWord("error_fields", lang));
    }
  }

  return (
    <form>
      {error ? <p className='text-red-500 my-4 text-sm bg-red-200 p-1 rounded-md text-center'>{error}</p> : null}
      {msg ? <p className='text-green-500 my-4 text-sm bg-green-200 p-1 rounded-md text-center'>{msg}</p> : null}
      <div className='grid gap-4 md:grid-cols-2'>
        <InputField
          containerClassName="!mb-0"
          label={fetchWord('Title', lang)}
          placeholder={fetchWord('Title', lang)} value={address?.title} name="title" onChange={handelChangeField}
        />
        <InputField
          containerClassName="!mb-0"
          label={fetchWord('postal', lang)}
          placeholder='344110' value={address?.postal_code} name="postal_code" onChange={handelChangeField}

        />
        <InputField
          containerClassName="!mb-0"
          label={fetchWord('Address_Line_One', lang)}
          placeholder={fetchWord('Address_Line_One', lang)} value={address?.line_one} name="line_one" onChange={handelChangeField}
        />
        <InputField
          containerClassName="!mb-0"
          label={fetchWord('Address_Line_Two', lang)}
          placeholder={fetchWord('Address_Line_Two', lang)} value={address?.line_two} name="line_two" onChange={handelChangeField}
        />
        <CustomSelectField
          label={fetchWord('country', lang)}
          list={options}
          placeholder={fetchWord('country', lang)}
          value={address?.country} name="country" onChange={handelChangeField}
        />
        <InputField
          containerClassName="!mb-0"
          label={fetchWord('city', lang)}
          placeholder={fetchWord('city', lang)} value={address?.city} name="city" onChange={handelChangeField}
        />
      </div>
      <div className='flex gap-4 mt-4'>

        {!!onClickCancel ? (
          <button onClick={onClickCancel} className='border border-red-500 text-red-500 py-2 rounded-md px-4'>{fetchWord('cancel', lang)}</button>
        ) : null}
        <Button onClick={onSubmit} classes="px-6">{operation === 'update' ? fetchWord('Update_address', lang) : fetchWord('Add_new_address', lang)}</Button>
      </div>
    </form>


  )
}

export default AddNewAddress