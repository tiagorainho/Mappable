import { Fragment, useState } from 'react'
import {
    CalendarIcon,
    CheckIcon,
    ChevronDownIcon,
    LinkIcon,
    MapPinIcon,
    PencilIcon,
    ChartBarIcon,
    MapIcon
} from '@heroicons/react/20/solid'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

interface Props {
    setMap: (mapType: any) => void,
    setTypeOfObjects: (types: string[]) => void,
}

const MapHandler = (props: Props) => {

    function updateType(obj: any) {
        const new_types = typesAvailable
        new_types.map(e => e.type)
        typesAvailable = new_types
        let a = []
        console.log(typesAvailable)
        for(let i=0;i<new_types.length;i++) {
            if(new_types[i].checked == "checked")
                a.push(new_types[i].type)
        }
        props.setTypeOfObjects(a)
    }
    
    let typesAvailable = [
        {'type': "Vehicle",'checked': ""},
        {'type': "ParkingSpot",'checked': "checked"}
    ]

    return (
    <div style={{position:'relative',zIndex:'1'}}>
        <div className="lg:flex lg:items-center lg:justify-between" >
            <div className="min-w-0 flex-1" >
                <div style={{width:'200px',backgroundColor:'white', padding:'20px', borderRadius:'20px'}}>
                    <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
                        Mappable
                    </h2>
                    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <MapPinIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            Live
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            <ChartBarIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                            18 &ndash; 65
                        </div>
                    </div>
                </div>
                <div>
                    
    

                    
                </div>

            </div>
            
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
                <div style={{ marginBottom: "30px" }}>
                    <span className="hidden sm:block">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"                            onClick={() => props.setMap()}
                        >
                            <MapIcon className="-ml-1 mr-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                            Change Map
                        </button>
                    </span>
                </div>
                {/* Dropdown */}
                <Menu as="div" className="relative ml-3 sm:hidden">
                    <Menu.Button className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        More
                        <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5 text-gray-500" aria-hidden="true" />
                    </Menu.Button>

                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        Edit
                                    </a>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <a
                                        href="#"
                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                    >
                                        View
                                    </a>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    </div>
)
}

export default MapHandler


/*

{typesAvailable.map((obj: any) => (
                        <div className="flex items-center mb-4">
                        <input onChange={() => updateType(obj.type)} defaultChecked={obj.checked} type="checkbox" value="yes" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{obj.type}</label>
                    </div>
                    ))}
                    */