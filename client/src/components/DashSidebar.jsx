import React, { useEffect, useState } from 'react'
import {Sidebar} from 'flowbite-react'
import {HiUser, HiArrowSmRight, HiDocumentText, HiOutlineUserGroup, HiAnnotation, HiChartPie} from 'react-icons/hi'
import { Link, useLocation } from 'react-router-dom'
import { signoutSuccess } from '../redux/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

export default function DashSidebar() {
  const location = useLocation()
  const [tab, setTab ] = useState('')
  const {currentUser} = useSelector(state=>state.user)
  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const tabFromUrl = urlParams.get('tab')
    if(tabFromUrl){
      setTab(tabFromUrl)
    }
  }, [location.search])

  const dispatch = useDispatch()
  const handleSignout = async()=>{
    try{
      const res= await fetch('/api/user/signout',{
        method:'POST',
      })
      const data = await res.json()
      if(!res.ok){
        console.log(data.message)
      }else{
        dispatch(signoutSuccess())
      }
    }catch(error){
      console.log(data.message)
    }
  }

  return (
    <Sidebar className='w-full md:w-56'>
      <Sidebar.Items>
        <Sidebar.ItemGroup className='flex flex-col gap-1'>
        {currentUser.isAdmin && (
            <Link to='/dashboard?tab=dash'>
              <Sidebar.Item active={tab==='dash' || !tab} icon={HiChartPie} as='div'>
                Dashboard
              </Sidebar.Item>
            </Link>
            
          )}
          <Link to='/dashboard?tab=profile'>
            <Sidebar.Item active={tab==='profile'} icon={HiUser} label={currentUser.isAdmin ? 'Admin': 'User'} labelColor='dark'
            as='div'>
              Profil
            </Sidebar.Item>
          </Link>
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=posts'>
              <Sidebar.Item avtive={tab ==='posts'} icon={HiDocumentText} as='div'>
                Yazılar
              </Sidebar.Item>
            </Link>
          )}
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=users'>
              <Sidebar.Item avtive={tab ==='users'} icon={HiOutlineUserGroup} as='div'>
                Kullanıcılar
              </Sidebar.Item>
            </Link>
            
          )}
          {currentUser.isAdmin && (
            <Link to='/dashboard?tab=comments'>
              <Sidebar.Item avtive={tab ==='comments'} icon={HiAnnotation} as='div'>
                Yorumlar
              </Sidebar.Item>
            </Link>
            
          )}
          
          <Sidebar.Item onClick={handleSignout}  icon={HiArrowSmRight} className='cursor-pointer' >
            Çıkış Yap
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}
