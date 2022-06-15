import React from 'react'
import { Delivery, Executation, Matching, Prototyping } from '../icons';

const tabs = [
    {name: 'matching', icon: <Matching />},
    {name: 'prototyping', icon: <Prototyping />},
    {name: 'executation', icon: <Executation />},
    {name: 'delivery', icon: <Delivery />},
]

type ActiveType = 'matching' | 'executation' | 'prototyping' | 'delivery';

const Tabs = () => {
    const [activeTab, setActiveTab] = React.useState<ActiveType>('matching');
    return (
        <div className="container">
            <div className='mx-auto max-w-[1010px]'>
                <div className="lg:grid lg:grid-cols-4 lg:gap-4 mdMax:flex mdMax:justify-between mdMax:snap-mandatory mdMax:snap-x mdMax:overflow-x-auto">
                    {tabs.map(({name, icon}) => (
                        <div className='snap-start' key={name}>
                            <div onClick={() => setActiveTab(name as ActiveType)} className={`flex justify-center cursor-pointer rounded-lg capitalize font-medium font-commissioner text-[21px] items-center h-[80px] px-4 ${name === activeTab ? 'text-white bg-secondary' : 'text-primary'} hover:bg-secondary hover:bg-opacity-50 hover:text-white transition-all`}>
                                <span className='mr-2'>
                                    {icon}
                                </span>
                                {name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-12 text-center'>
                    <div className='tab-bg p-10 rounded-xl overflow-hidden mdMax:p-4'>
                        {activeTab === 'matching' && (
                            <div className="bg-white rounded-xl p-8 overflow-y-auto snap-y max-h-[590px] hide-scrollbar mdMax:p-4">
                                <div className='max-w-[410px] mx-auto mb-6'>
                                    <h4 className='text-[17px] font-medium text-black font-commissioner mb-2'>Choice a team</h4>
                                    <p className='font-commissioner text-gray-400 text-[17px] mdMax:text-sm'>
                                        Get seasoned offshore developers without breaking the bank we train and manage our.
                                    </p>
                                </div>
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full' />
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full mt-4' />
                            </div>
                        )}
                        {activeTab === 'prototyping' && (
                            <div className="bg-white rounded-xl p-8 overflow-y-auto snap-y max-h-[590px] hide-scrollbar mdMax:p-4">
                                <div className='max-w-[410px] mx-auto mb-6'>
                                    <h4 className='text-[17px] font-medium text-black font-commissioner mb-2'>Choice a Prototype</h4>
                                    <p className='font-commissioner text-gray-400 text-[17px] mdMax:text-sm'>
                                        Get seasoned offshore developers without breaking the bank we train and manage our.
                                    </p>
                                </div>
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full' />
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full mt-4' />
                            </div>
                        )}
                        {activeTab === 'executation' && (
                            <div className="bg-white rounded-xl p-8 overflow-y-auto snap-y max-h-[590px] hide-scrollbar mdMax:p-4">
                                <div className='max-w-[410px] mx-auto mb-6'>
                                    <h4 className='text-[17px] font-medium text-black font-commissioner mb-2'>Choice a Executation</h4>
                                    <p className='font-commissioner text-gray-400 text-[17px] mdMax:text-sm'>
                                        Get seasoned offshore developers without breaking the bank we train and manage our.
                                    </p>
                                </div>
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full' />
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full mt-4' />
                            </div>
                        )}
                        {activeTab === 'delivery' && (
                            <div className="bg-white rounded-xl p-8 overflow-y-auto snap-y max-h-[590px] hide-scrollbar mdMax:p-4">
                                <div className='max-w-[410px] mx-auto mb-6'>
                                    <h4 className='text-[17px] font-medium text-black font-commissioner mb-2'>Choice a Delivery</h4>
                                    <p className='font-commissioner text-gray-400 text-[17px] mdMax:text-sm'>
                                        Get seasoned offshore developers without breaking the bank we train and manage our.
                                    </p>
                                </div>
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full' />
                                <img src="/img/tab.png" alt="tab" className='max-w-full object-cover w-full mt-4' />
                            </div>
                        )}
                    </div>
                    <p className='text-primary-black font-normal text-[17px] text-opacity-50 font-commissioner mt-4'>
                        Get matched to teams that fit your preferences and are excited.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Tabs;