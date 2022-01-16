import React from 'react';
import {
    
    Routes,
    Route
  } from "react-router-dom";
import { Business } from '../components/screens/business/Business';





import { SearchScreen } from '../components/screens/search/SearchScreen';
import  { Technology } from '../components/screens/technology/Technology';
import { Sports } from '../components/screens/sports/Sports';

import { Navbar } from '../components/ul/Navbar';
import { Health } from '../components/screens/health/Health';
import { Article } from '../components/screens/article/Article';

export const DashboardRoutes = () => {
    return (
        
            <>
             
                
                <Navbar /> 
               
                <Routes>
                 

                   
                   <Route path="business" element={<Business />} />
                   <Route path="technology" element={<Technology />} />
                   <Route path="sports" element={<Sports />} />
                   <Route path="health" element={<Health />} />
                   <Route path="news/:titleId/:sectionId" element={<Article />} />
                   


                   <Route path="search" element={<SearchScreen />} />
                  


                </Routes>
               
           </>
            
       
    )
}
