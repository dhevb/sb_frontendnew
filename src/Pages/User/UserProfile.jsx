import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../../components/Footer/footer'
import userpofile from "../../assets/userprofile.jpg"
import Navbar from '../../components/Navbar/Navbar'
import SingleBanner from '../../components/Banners/SingleBanner'
import UserSidebar from '../../components/UserProfile/UserSidebar'
import AccountSetting from '../../components/UserProfile/AccountSettings'
import './userprofile.css'
import ChangePassword from '../../components/UserProfile/ChangePassword'
import YourOrder from '../../components/UserProfile/YourOrders'
import UserAddress from '../../components/UserProfile/UserAddress'
import LegalNotice from '../../components/UserProfile/LegalNotice'


const UserProfile = () => {

    const {activepage} = useParams()


    // alert(activepage)
  return (
    <div className='userprofile'>
        <Navbar/>
        <SingleBanner 
        heading={`My Profile`}x
        bannerImage = {userpofile} 
        />
        {/* UserProfile , showing {activepage}
         */}

         <div className='userprofilein'>
            <div className='left'>
              <UserSidebar activepage={activepage}/>
            </div>
            <div className='right'>
              {activepage === 'accountsettings' && <AccountSetting/>}
              {activepage === 'changepassword' && <ChangePassword/>}
              {activepage === 'yourorders' && <YourOrder/>}
              {activepage === 'address' && <UserAddress/>}
              {activepage === 'legalnotice' && <LegalNotice/>}
            </div>
         </div>
         <Footer/>
        </div>
  )
}

export default UserProfile