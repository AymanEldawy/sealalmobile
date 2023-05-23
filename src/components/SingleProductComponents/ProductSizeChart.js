import { LanguageContext } from '@/context/LangContext'
import { sizeChart } from '@/data/dummyData'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

export const ProductSizeChart = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div>
      <table className='border border-secondary border-collapse mt-8'>
        <thead className="bg-[#CCCCCC]">
          <tr>
            <th className="px-1 py-2 border-l border-r border-secondary text-center text-secondary capitalize text-xs">size</th>
            {Object.keys(sizeChart?.[0]?.measurements)?.map(head => (
              <th key={head} className="px-2 py-2 border-l border-r border-secondary text-center text-secondary capitalize text-xs">{fetchWord(head, lang)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizeChart?.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "" : "bg-[#ECECEC]"}>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.size_name}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.shoulder}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.length}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.sleeve_length}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.bust}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.waist_size}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.cuff}</td>
              <td className="text-xs px-1 text-center py-1 border-l border-r border-secondary">{item?.measurements?.bicep_length}</td>
            </tr>

          ))}
        </tbody>
      </table>
      <p className="text-[10px] mt-[2px]">{fetchWord('size_chart_msg', lang)}</p>
      <figure className='w-fit mx-auto my-4'>
        <Image src="/images/size-chart-jacket.png" alt="size-chart" height={414} width={352} />
      </figure>
      <div className=''>
        <h4 className="mb-8 text-primary font-semibold text-sm">{fetchWord('size_chart_msg1', lang)}</h4>
        <ul className='flex flex-col gap-2 text-xs'>
          <li className='flex flex-col gap-2'>
            <strong>1 Shoulder</strong>
            <p>Measure from where then shoulder seam meets the sleeve on one side to another side.</p>
          </li>
          <li className='flex flex-col gap-2'>
            <strong>2 Bust</strong>
            <p>Measure from the stitches below the armpits on one side to another.</p>
          </li>
          <li className='flex flex-col gap-2'>
            <strong>3 Length</strong>
            <p>Measure from where the shoulder seam meets the collar to the hem.</p>
          </li>
          <li className='flex flex-col gap-2'>
            <strong>4 Sleeves</strong>
            <p>Measure from where the shoulder seam meets armhole to the cuff.</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
