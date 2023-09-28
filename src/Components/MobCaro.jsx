import React from 'react'
import "react-multi-carousel/lib/styles.css";
import Carouselc from './Carousel_';
import './Members_cont.css';


import Shreyas from '../assets/team_members/Shreyas.webp'
import Abdul from '../assets/team_members/Abdul.webp'
import Siddharath from '../assets/team_members/Siddharath.webp'
import Jagadhesh from '../assets/team_members/Jagadhesh.webp'
import Gagan from '../assets/team_members/Gagan.webp'
import mynew2 from '../assets/team_members/mynew2.jpg'
import Peshwar from '../assets/team_members/Peshwar.webp'
import Sruthika from '../assets/team_members/Sruthika.webp'
import Janani from '../assets/team_members/Janani.webp'
import Aadithya2 from '../assets/team_members/Aadhithya2.webp'
import Abhinanth from '../assets/team_members/Abhinanth.webp'
import akshayapriya from '../assets/team_members/akshayapriya.jpg'
import varshithanew from '../assets/team_members/varshithanew.jpg'
import Aswath from '../assets/team_members/Ashwath.webp'
import Adhiti from '../assets/team_members/Adhiti.webp'
import Amritha from '../assets/team_members/Amirtha.webp'
import Atchaya from '../assets/team_members/Atchaya.webp'
import Hari from '../assets/team_members/Hari.webp'
import Vasanth from '../assets/team_members/Vasanth.webp'
import Siddharat from '../assets/team_members/Siddharat.webp'
import Arman from '../assets/team_members/Arman.jpeg'
import SaiKrishna from '../assets/team_members/SaiKrishna.webp'
import HARISHVARAN from '../assets/team_members/HARISHWARAN.webp'
import shubham from '../assets/team_members/shubham.jpg'
import manogna from '../assets/team_members/manogna.jpg'
import meera from '../assets/team_members/meera.jpg'
import nivisha from '../assets/team_members/nivisha.jpg'
import harishk from '../assets/team_members/harishk.jpg'
import kiruba from '../assets/team_members/kiruba.jpg'
import bala from '../assets/team_members/bala.jpg'
import harish from '../assets/team_members/Harish.jpg'
import Akshay from '../assets/team_members/Akshay.jpg'
import manoj from '../assets/team_members/manoj .jpg'

const MobCaro = () => {
    
  const Leaders=[
    {pic:Shreyas,domain:"Web3",role:"President",id:1,name:"Shreyas Ravishankar"},
    {pic:Arman,domain:"Web3",role:"Secretary",id:2,name:"Arman Aurobindo"},
]

const Web3=[
    
    {pic:Abdul,domain:"Web3",role:"Member",id:3,name:"Abdul Haq"},
    {pic:Hari,domain:"Web3",role:"Member",id:4,name:"Hari Prasana"},
    {pic:Siddharath,domain:"Web3",role:"Lead",id:5,name:"Siddharatha Madhav "},
    {pic:Jagadhesh,domain:"Web3",role:"Member",id:6,name:"Jagadeeshwaran M"},
    {pic:shubham,domain:"Web3",role:"Member",id:67,name:"shubham"},
    {pic:manoj,domain:"Web3",role:"Member",id:40,name:"Manoj"}


]
const Web2=[
    {pic:Gagan,domain:"Web2",role:"Lead",id:7,name:"Gagan Khatri"},
    {pic:Siddharat,domain:"Web2",role:"Member",id:8,name:"Siddharath"},
    {pic:mynew2,domain:"Web2",role:"Member",id:9,name:"Harith"},
    {pic:SaiKrishna,domain:"Web2",role:"Member",id:10,name:"Sai Krishna"},
    {pic:Atchaya,domain:"Web2",role:"Member",id:12,name:"Atchaya S"},
    {pic:Vasanth,domain:"Web2",role:"Member",id:13,name:"Vasanth"},
    {pic:harish,domain:"Web2",role:"Member",id:35,name:"Harish Siddharth"},
    {pic:Akshay,domain:"Web2",role:"Member",id:37,name:"Vishnu Akshay"},
    
]



const Graphics=[
    {pic:Peshwar,domain:"Graphics",role:"Lead",id:19,name:"Peshwar Rajesh"},
    {pic:Sruthika,domain:"Graphics",role:"Member",id:15,name:"Sruthika Chezhian"},
    {pic:harishk,domain:"Graphics",role:"Member",id:30,name:"Harish kumar"},
    {pic:Aadithya2,domain:"Graphics",role:"Member",id:17,name:"Aadithya C"},
    {pic:Abhinanth,domain:"Graphics",role:"Member",id:18,name:"Abhinanth"},
    {pic:HARISHVARAN,domain:"Content Developer",role:"Member",id:28,name:"Harish Varan"},

]

const Content=[
  {pic:akshayapriya,domain:"Content Developer",role:"Member",id:26,name:"Akshaya Priya"},
  {pic:meera,domain:"Content Developer",role:"Member",id:27,name:"Meera Rajkumar"},
  {pic:Janani,domain:"Graphics",role:"Member",id:16,name:"Janani Sri S"},
  {pic:Aswath,domain:"Event & Promotions",role:"Lead",id:20,name:"Ashwath Krishna K"},
    {pic:manogna,domain:"Event & Promotions",role:"Member",id:21,name:"Manogna"},
    {pic:Amritha,domain:"Event & Promotions",role:"Member",id:22,name:"	Amritha S"},
    {pic:kiruba,domain:"Event & Promotions",role:"Member",id:31,name:"Kirubakaran"},
    {pic:bala,domain:"Event & Promotions",role:"Member",id:33,name:"Bala sharadha"},

]

  return (
    <div className='Members_cont'>
      <div>
        <div className='inline-block pl-4 font-Quantico md:text-6xl  text-white text-4xl mb-10  md:mb-5 mt-10' >Team Members </div>
            <Carouselc team={Leaders} teamname="Leads"/>
            <div className='max-sm:hidden'>
            
            <div className='grid grid-cols-4 '>
              
       
      </div>
      </div>
      <Carouselc team={Web3} teamname="Web 3"/>
            <Carouselc team={Web2} teamname="Web 2"/>
            <Carouselc team={Graphics} teamname="Graphics & Design"/>
            <Carouselc team={Content} teamname="Non Tech"/>
            
            
            
      </div>
    </div>
  )
}

export default MobCaro
