import CustomSelectField from '@/components/Forms/CustomSelectField';
import { FileUpload } from '@/components/Forms/FileUpload';
import { InputField } from '@/components/Forms/InputField';
import { TextField } from '@/components/Forms/TextField';
import { Button } from '@/components/Global/Button/Button';
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { ProfileTitle } from '../ProfileTitle';

export const AddNewProduct = ({ setOperation }) => {
  const { lang } = useContext(LanguageContext);
  const [gallery, setGallery] = useState([]);
  const [files, setFiles] = useState([]);
  const [product_name, setProductName] = useState('');
  const [product_code, setProductCode] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [quantity, setQuantity] = useState('');

  const onFileChange = (e) => {
    let items = []
    for (const file of Array.from(e.target.files)) {
      items.push(URL.createObjectURL(file))
    }
    setFiles(prev => [...prev, ...e.target.files])
    setGallery(prev => [...prev, ...items])
    console.log(items)
  }

  return (
    <div className='px-2'>
      <ProfileTitle title={fetchWord('Add_new_product', lang)}  />
      <form>
        <h4 className="mb-2 capitalize text-sm">{fetchWord('upload_photos', lang)}</h4>
        <FileUpload onChange={onFileChange} classes="h-[240px] text-xs w-full" containerClass="!mb-0" />
        <div className="grid grid-cols-2 gird-row-2 my-4 gap-4">
          <Image src={gallery?.[0] || '/images/default-image.png'} alt="Gallery" height={106} width={158} className='max-h-[120px] object-center object-cover border-2 border-dashed rounded-md h-full w-full' />
          <Image src={gallery?.[1] || '/images/default-image.png'} alt="Gallery" height={106} width={158} className='max-h-[120px] object-center object-cover border-2 border-dashed rounded-md h-full w-full' />
          <Image src={gallery?.[2] || '/images/default-image.png'} alt="Gallery" height={106} width={158} className='max-h-[120px] object-center object-cover border-2 border-dashed rounded-md h-full w-full' />
          <Image src={gallery?.[3] || '/images/default-image.png'} alt="Gallery" height={106} width={158} className='max-h-[120px] object-center object-cover border-2 border-dashed rounded-md h-full w-full' />
          {
            gallery?.slice(4)?.map(img => (
              <Image key={img} src={img} alt="Gallery" height={106} width={158} className='max-h-[120px] object-center object-cover border-2 border-dashed rounded-md h-full w-full' />
            ))
          }
        </div>
        <CustomSelectField
          value={category}
          label={fetchWord('Category', lang)}
          onChange={e => setCategory(e.target.value)}
        />
        <div className="flex gap-4">
          <InputField
            value={product_name}
            label={fetchWord('Product_name', lang)}
            onChange={e => setProductName(e.target.value)}
          />
          <InputField
            value={product_code}
            label={fetchWord('Product_code', lang)}
            onChange={e => setProductCode(e.target.value)}

          />
        </div>
        <TextField
          value={description}
          label={fetchWord('Description', lang)}
          onChange={e => setDescription(e.target.value)}
          allowUploadText
        />
        <div className="flex gap-4">
          <InputField
            value={price}
            label={fetchWord('price', lang)}
            onChange={e => setPrice(e.target.value)}
          />
          <InputField
            value={quantity}
            label={fetchWord('quantity', lang)}
            onChange={e => setQuantity(e.target.value)}

          />
        </div>
        <div className="flex items-center justify-end mt-4 gap-4">
          <Button onClick={() => setOperation('')} classes="px-4 w-full max-w-[310px] !p-2 text-xs" outline>{fetchWord('Discard', lang)}</Button>
          <Button classes="px-2 w-full max-w-[310px] !p-2 text-xs">{fetchWord('Add_product', lang)}</Button>
        </div>
      </form>
    </div>
  )
}
