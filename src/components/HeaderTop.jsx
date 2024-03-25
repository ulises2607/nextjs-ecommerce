import React from 'react'
import {BsFacebook, BsTwitter, BsInstagram, BsLinkedin} from "react-icons/bs"

const HeaderTop = () => {
  return (
    <div className='border-b boder-gray-200 hidden sm:block'>
      <div className='container py-4'>
        <div className='flex justify-between item-center'>
          <div className='hidden lg:flex gap-1'>
            <div className='header_top__icon_wrapper'>
            <BsFacebook />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsTwitter />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsInstagram />
            </div>
            <div className='header_top__icon_wrapper'>
              <BsLinkedin />
            </div>
          </div>
          <div className='text-gray-500 text-[12px]'>
            <strong>FREE SHIPPING</strong>
            THIS WEEK ORDER OVER - $55
          </div>
          <div>
            <select name="currency" id="currency">
              <option value="USD $">USD $</option>
              <option value="EUR $">EUR €</option>
              <option value="PesoArg ARS">Peso ARS</option>
            </select>

            <select name="language" id="language">
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeaderTop