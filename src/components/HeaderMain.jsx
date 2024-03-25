import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {BiUser} from "react-icons/bi"
import {FiHeart} from "react-icons/fi"
import {HiOutlineShoppingBag} from "react-icons/hi"

const HeaderMain = () => {
  return (
    <div>
        <div>Title</div>

        <div>
            <input type="text"
            placeholder='Enter any product name...' />
            <BsSearch size={20} />
        </div>

        <div>
            <BiUser/>
            <div>
                <FiHeart/>
                <div>
                    0
                </div>
            </div>
            
            <div>
                <HiOutlineShoppingBag />
                <div>
                    0
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default HeaderMain