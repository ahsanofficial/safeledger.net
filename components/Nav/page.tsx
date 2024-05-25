"use client"
import { Fragment, useState } from 'react'
import Link from 'next/link';
import { Dialog, Disclosure, Listbox, Transition } from '@headlessui/react'
import { Bars3Icon, CheckIcon, ChevronDownIcon, ChevronUpDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import style from './style.module.css'
import logo from '@/public/logo2.png';
import ForumIcon from '@mui/icons-material/Forum';
import { Web, MobileFriendly, DesignServices, Create, Cloud, Engineering, DataUsage, Security, Storefront, BuildCircle } from '@mui/icons-material';
import { Menu } from '@headlessui/react';

const services = [
  { name: 'London Registered Office', href: '/services/1', icon: <Web /> },
  { name: 'Company Address Explained', href: '/services/2', icon: <MobileFriendly /> },
  { name: 'London Business Address', href: '/services/3', icon: <DesignServices /> },
  { name: 'Dormant Company Accounts', href: '/services/4', icon: <DataUsage /> },
  { name: 'Company Dissolution in UK', href: '/services/5', icon: <DesignServices /> },
  { name: 'Company Name Change in UK', href: '/services/6', icon: <Create /> },
  { name: 'Company Secretary Services in UK', href: '/services/7', icon: <Cloud /> },
  { name: 'Issue of Shares', href: '/services/8', icon: <Engineering /> },
  { name: 'Transfer of Shares', href: '/services/9', icon: <DataUsage /> },
  { name: 'Certificate of Good Standing', href: '/services/10', icon: <Security /> },
  { name: 'Apostilled Documents Services in UK', href: '/services/11', icon: <MobileFriendly /> },
  { name: 'Telephone Answering Service', href: '/services/12', icon: <Create /> },
  { name: 'London Service Address', href: '/services/13', icon: <Storefront /> },
  { name: 'VAT Registration in UK', href: '/services/14', icon: <BuildCircle /> },
];

const people = [
  {
    id: 1,
    name: 'Wade Cooper',
    avatar: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png',
  },
  {
    id: 2,
    name: 'Arlene Mccoy',
    avatar: 'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg',
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selected, setSelected] = useState(people[0])
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const [isDropdownHovered, setIsDropdownHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsServicesHovered(true)
  }

  const handleMouseLeave = () => {
    if (!isDropdownHovered) {
      setIsServicesHovered(false)
    }
  }

  const handleDropdownMouseEnter = () => {
    setIsDropdownHovered(true)
    setIsServicesHovered(true)
  }

  const handleDropdownMouseLeave = () => {
    setIsDropdownHovered(false)
    setIsServicesHovered(false)
  }

  return (
    <header className={style.bgColor}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-4" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/">
            <p className="-m-1.5 p-1.5">
              <img className={` ${style.logo} h-8 w-auto`} src={logo.src} alt="Your Company Logo" />
            </p>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/" className="text-sm font-semibold leading-6 text-gray-900">
            HOME
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900 inline-flex items-center"
            >
              SERVICES
              <ChevronDownIcon className="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
            </Link>
            {(isServicesHovered || isDropdownHovered) && (
              <div
                className="absolute z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0 lg:left-1/2 lg:-translate-x-1/2"
                onMouseEnter={handleDropdownMouseEnter}
                onMouseLeave={handleDropdownMouseLeave}
              >
                <div className={`${style.drop} overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5`} >
                  <div className=" relative grid gap-6 bg-white p-5 lg:grid-cols-2" >
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className="flex items-start rounded-lg p-1 hover:bg-gray-50"
                      >
                        {service.icon}
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">{service.name}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <Link href="/aboutus" className="text-sm font-semibold leading-6 text-gray-900">
            ABOUT US
          </Link>
          <Link href="/contactus" className="text-sm font-semibold leading-6 text-gray-900">
            CONTACT US
          </Link>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ForumIcon className={`${style.fz35} text-blue-400`} />
          <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 text-blue-400 pr-2">
            Get Consultation  <br /><span >+44 20 3318 1326</span>
          </Link>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <div className="relative mt-2">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                    <span className="flex items-center">
                      <img src={selected?.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                    </span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave="transition ease-in duration-100"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                      {people.map((person) => (
                        <Listbox.Option
                          key={person.id}
                          className={({ active }) =>
                            classNames(
                              active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                              'relative cursor-default select-none py-2 pl-3 pr-9'
                            )
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <div className="flex items-center">
                                <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                <span
                                  className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                >
                                  {person.name}
                                </span>
                              </div>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? 'text-white' : 'text-indigo-600',
                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                  )}
                                >
                                  <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </>
            )}
          </Listbox>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <img
                className="h-8 w-auto"
                src={logo.src}
                alt="Your Company Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>

                    </>
                  )}
                </Disclosure>
                <Link
                  href="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  HOME
                </Link>
                {/* <Link
                  href="/services/1"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  SERVICES
                </Link> */}
                <div className="">
                  <Menu as="div" className="relative inline-block text-left">
                    <Menu.Button className="inline-flex justify-center w-full rounded-lg text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                      SERVICES
                      <ChevronUpDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                    </Menu.Button>

                    <Menu.Items className={`${style.new} absolute mt-2 w-full origin-top-right bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} >
                      {services.map((service) => (
                        <Menu.Item key={service.name}>
                          {({ active }) => (
                            <a
                              href={service.href}
                              className={`${active ? 'bg-gray-100 text-gray-900' : 'text-gray-900'
                                } block px-4 py-2 text-sm font-semibold`}
                            >
                              <div className="flex items-center">
                                {service.icon}
                                <span className="ml-2">{service.name}</span>
                              </div>
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Menu>
                </div>
                <Link
                  href="/aboutus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  ABOUT US
                </Link>
                <Link
                  href="/contactus"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  CONTACT US
                </Link>
              </div>
              <div className="py-6">
                <ForumIcon className={`${style.fz35} text-blue-400`} />
                <Link href="#" className="text-sm font-semibold leading-6 text-gray-900 text-blue-400 pr-2">
                  Get Consultation  <br /><span >+44 20 3318 1326</span>
                </Link>
                <Listbox value={selected} onChange={setSelected}>
                  {({ open }) => (
                    <>
                      <div className="relative mt-2">
                        <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
                          <span className="flex items-center">
                            <img src={selected?.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                          </span>
                          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                          </span>
                        </Listbox.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          leave="transition ease-in duration-100"
                          leaveFrom="opacity-100"
                          leaveTo="opacity-0"
                        >
                          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person) => (
                              <Listbox.Option
                                key={person.id}
                                className={({ active }) =>
                                  classNames(
                                    active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                                    'relative cursor-default select-none py-2 pl-3 pr-9'
                                  )
                                }
                                value={person}
                              >
                                {({ selected, active }) => (
                                  <>
                                    <div className="flex items-center">
                                      <img src={person.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                                      <span
                                        className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                                      >
                                        {person.name}
                                      </span>
                                    </div>

                                    {selected ? (
                                      <span
                                        className={classNames(
                                          active ? 'text-white' : 'text-indigo-600',
                                          'absolute inset-y-0 right-0 flex items-center pr-4'
                                        )}
                                      >
                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                      </span>
                                    ) : null}
                                  </>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        </Transition>
                      </div>
                    </>
                  )}
                </Listbox>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
