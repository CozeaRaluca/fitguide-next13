import { useState, Fragment } from 'react'
import Link from 'next/link';
import { Menu as TMenu, Dialog, Transition } from '@headlessui/react'
import { Bars3Icon, ChevronDownIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { SERVICES, SERVICE_CATEGORIES } from '../../constants';

const navigation = [
  { name: "About", href: "/about" },
  { name: SERVICES.physicalTherapy.title, href: SERVICES.physicalTherapy.href },
  { name: SERVICES.fitnessConsultancy.title, href: SERVICES.fitnessConsultancy.href },
  { name: SERVICES.onsitePT.title, href: SERVICES.onsitePT.href },
  { name: SERVICES.onlinePT.title, href: SERVICES.onlinePT.href },
  { name: SERVICES.trainingPrograms.title, href: SERVICES.trainingPrograms.href },
  { name: SERVICES.nutritionalPlans.title, href: SERVICES.nutritionalPlans.href },
]

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="px-6 pt-6 lg:px-8">
      <div>
        <nav className="flex h-9 justify-between items-center text-center" aria-label="Global">
          <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="font-bold hover:text-gray-200">Stefan Rusu</span>
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <TMenu as="div" className="hidden lg:flex lg:flex-row lg:min-w-0 lg:flex-1 lg:justify-center lg:items-center lg:gap-x-8">
            <div className="py-1 h-full">
              <TMenu.Item>
                {({ active }) => (
                  <Link
                    href="/about"
                    className={`${active ? 'bg-gray-900 text-gray-100 ' : ''}rounded-md block px-4 py-2 text-sm text-center`}
                  >
                    About
                  </Link>
                )}
              </TMenu.Item>
            </div>
            <div className="py-1 h-full">
              <TMenu.Item>
                {({ active }) => (
                  <Link
                    href={SERVICES.physicalTherapy.href}
                    className={`${active ? 'bg-gray-900 text-gray-100 ' : ''}rounded-md block px-4 py-2 text-sm whitespace-nowrap`}
                  >
                    {SERVICES.physicalTherapy.title}
                  </Link>
                )}
              </TMenu.Item>
            </div>
            <div className="py-1 h-full">
              <TMenu.Item>
                {({ active }) => (
                  <Link
                    href={SERVICES.fitnessConsultancy.href}
                    className={`${active ? 'bg-gray-900 text-gray-100 '  : ''}rounded-md block px-4 py-2 text-sm whitespace-nowrap`}
                  >
                    {SERVICES.fitnessConsultancy.title}
                  </Link>
                )}
              </TMenu.Item>
            </div>
            <div className="relative h-full">
              <TMenu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800 focus:outline-none">
                  {SERVICE_CATEGORIES.TRAINING}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </TMenu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <TMenu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white-100 rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <TMenu.Item>
                      {({ active }) => (
                        <Link
                          href={SERVICES.onsitePT.href}
                          className={`${active ? 'bg-gray-900 text-white-900 ' : ''}block px-4 py-2 text-sm`}
                        >
                          {SERVICES.onsitePT.title}
                        </Link>
                      )}
                    </TMenu.Item>
                  </div>
                  <div className="py-1 h-full">
                    <TMenu.Item>
                      {({ active }) => (
                        <Link
                          href={SERVICES.onlinePT.href}
                          className={`${active ? 'bg-gray-900 text-white-900 ' : ''}block px-4 py-2 text-sm`}
                        >
                          {SERVICES.onlinePT.title}
                        </Link>
                      )}
                    </TMenu.Item>
                  </div>
                </TMenu.Items>
              </Transition>
            </div>
            <div className="relative">
              <TMenu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-sm font-medium text-gray-200 shadow-sm hover:bg-gray-800 focus:outline-none">
                  {SERVICE_CATEGORIES.PROGRAMS}
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
              </TMenu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <TMenu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-white-100 rounded-md bg-gray shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <TMenu.Item>
                      {({ active }) => (
                        <Link
                          href={SERVICES.trainingPrograms.href}
                          className={`${active ? 'bg-gray-900 text-white-900' : 'text-white-700'} block px-4 py-2 text-sm`}
                        >
                          {SERVICES.trainingPrograms.title}
                        </Link>
                      )}
                    </TMenu.Item>
                  </div>
                  <div className="py-1">
                    <TMenu.Item>
                      {({ active }) => (
                        <Link
                          href={SERVICES.nutritionalPlans.href}
                          className={`${active ? 'bg-gray-900 text-white-900' : 'text-white-700'} block px-4 py-2 text-sm`}
                        >
                          {SERVICES.nutritionalPlans.title}
                        </Link>
                      )}
                    </TMenu.Item>
                  </div>
                </TMenu.Items>
              </Transition>
            </div>
          </TMenu>
          <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-200/20"
            >
              Log in
            </a>
          </div>
        </nav>
        <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 overflow-y-auto bg-gray-900 px-6 py-6 lg:hidden">
            <div className="flex h-9 items-center justify-between">
              <div className="flex">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Stefan Rusu</span>
                </a>
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-200 hover:bg-gray-400/10"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-gray-200 hover:bg-gray-400/10"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </div>
    </div>
  )
}