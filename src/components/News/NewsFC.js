import React from 'react'
import { Container, Tab, Tabs } from 'react-materialize'
import "./News.css";
import { ThemeContext } from "../ThemeContext";
import { useContext } from "react";
export default function NewsFC() {
     const { theme } = useContext(ThemeContext);
  return (
     <Container style={{padding: "100px 0", color: theme.color}}>
     <Tabs
     className="tab-demo z-depth-1"
     scope="tabs-22"
   >
     <Tab
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 1"
     >
      <div className='news-card'>
       <div className='news-card-container'>
          <div className='news-card-img'>
               IMG
          </div>
          <div className='news-card-content'>
               <h1 className='news-cart-title'>News</h1>
               <p className='news-cart-release'>Release</p>
               <p className='news-cart-info'>Cubi</p>
          </div>
       </div>
      </div>
     </Tab>
     <Tab
       active
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 2"
     >
       Test 2
     </Tab>
     <Tab
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 3"
     >
       Test 3
     </Tab>
     <Tab
       options={{
         duration: 300,
         onShow: null,
         responsiveThreshold: Infinity,
         swipeable: false
       }}
       title="Test 4"
     >
       Test 4
     </Tab>
   </Tabs>
     </Container>
  )
}
