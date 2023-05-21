import { Button } from '@/components/Global/Button/Button';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useEffect, useState } from 'react'

import { ProfileTitle } from '../ProfileTitle'
import { PaymentCardVisa } from './PaymentCardVisa';
import { AddNewCard } from './AddNewCard';

export const MyCards = () => {
  const { lang } = useContext(LanguageContext)
  const [cards, setCards] = useState([]);
  const [updatedCard, setUpdatedCard] = useState(false);
  const [stage, setStage] = useState('display')
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    // setCards(allCards);
  }, [])

  const handleDeleteCard = (cardId) => {

  }
  return (
    <div>
      <div className="flex justify-between gap-4 items-center mb-4">
        <ProfileTitle title={fetchWord(stage !== 'create' ? 'My_saved_cards' : !!updatedCard ? 'Update_card' : 'add_new_card', lang)} />
        {
          stage !== 'create' ?
            <Button onClick={() => setStage('create')} classes="text-sm capitalize  border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('add_new_card', lang)}</Button>
            : null
        }
      </div>
      {
        stage === 'create' ? (
          <AddNewCard onClickCancel={() => setStage('display')}/>
        ) : (
          <div className='grid md:grid-cols-3 gap-4'>
            {
              Array(4).fill(9).map((item, index) => (
                <PaymentCardVisa key={index} />
              ))
            }
          </div>
        )
      }
    </div>
  )
}
