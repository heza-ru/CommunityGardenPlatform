import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Seasonal Maintenance`,
      desc: `Keep your garden healthy and vibrant year-round with customized maintenance plans for each season.`,
   },
   {
      imgUrl: guideImg,
      title: `Community Building`,
      desc: `Build strong connections within your community by hosting garden events and engaging with neighbors.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Volunteer Management',
      desc: `Easily manage your volunteers with tools for scheduling, communication, and task assignments.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList