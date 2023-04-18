import React, { useState } from 'react'
import TabsList from '../Tabs/TabsList'
import TabsContent from '../Tabs/TabsContent'
import NewOrders from '../NewOrders/NewOrders'
const list = [{ name: 'waiting_confirm' }, { name: 'waiting_approval' }]
const MyOffers = () => {
  const [activeTab, setActiveTab] = useState(list[0])
  return (
    <div className="">
      <div className="container">

      <TabsList
        list={list}
        keyName="name"
        setActiveTab={setActiveTab}
        activeTab={activeTab}
        containerClassName="justify-around pt-2 "
        activeClassName="border-b-2 font-medium !text-secondary border-secondary"
        itemClassName="border-b-2 text-black flex-1 !gap-2 px-4 text-center justify-center capitalize"
        />
        </div>
      <TabsContent activeTabName={activeTab?.name}>
        <NewOrders tabName="waiting_confirm" layout="waiting_confirm" />
        <NewOrders tabName="waiting_approval" layout="waiting_approval" />
      </TabsContent>
    </div>
  )
}

export default MyOffers