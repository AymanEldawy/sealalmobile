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
            <th className="px-4 py-2 border-l border-r border-secondary text-secondary capitalize text-sm">size</th>
            {Object.keys(sizeChart?.[0]?.measurements)?.map(head => (
              <th key={head} className="px-4 py-2 border-l border-r border-secondary text-secondary capitalize text-sm">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizeChart?.map((item, index) => (
            <tr key={index} className={index % 2 === 0 ? "" : "bg-[#ECECEC]"}>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.size_name}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.shoulder}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.length}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.sleeve_length}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.bust}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.waist_size}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.cuff}</td>
              <td className="text-sm px-4 py-2 border-l border-r border-secondary">{item?.measurements?.bicep_length}</td>
            </tr>

          ))}
        </tbody>
      </table>
      <p className="text-[10px] mt-[2px]">{fetchWord('size_chart_msg', lang)}</p>
      <div className='mt-12 flex justify-between gap-4 flex-col md:flex-row'>
        <div className=''>
          <h4 className="mb-8 text-primary font-semibold text-xl">{fetchWord('size_chart_msg1', lang)}</h4>
          <ul className='flex flex-col gap-2'>
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
        <figure>
          <Image src="/images/size-chart-jacket.png" alt="size-chart" height={414} width={352} />
        </figure>










      </div>
    </div>
  )
}
