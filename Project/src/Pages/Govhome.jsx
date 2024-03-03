import React, { useState } from 'react'
import Navbargov from '../Components/Navbar/Navbargov'
import Govpro from '../Components/Goverment/Govpro';
import Govpietot from '../Components/Goverment/Govpietot';
import Govagetot from '../Components/Goverment/Govagetot';
import Govgentot from '../Components/Goverment/Govgentot';
import Govicom from '../Components/Goverment/Govicom';
import Govcast from '../Components/Goverment/Govcast';
import Govermentcat from '../Components/Goverment/Govermentcat';
import Goversch from '../Components/Goverment/Goversch';
import Govermentdis from '../Components/Goverment/Govermentdis';
import Goverreas from '../Components/Goverment/Goverreas';
import GoverReport from '../Components/Goverment/GoverReport';
import Govtodistin from '../Components/Goverment/Govtodistin';
import Govertoschin from '../Components/Goverment/Govertoschin';
import Govdistosch from '../Components/Goverment/Govdistosch';
import Govertoappoved from '../Components/Goverment/Govertoappoved';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Govhome = () => {



  
  const [content, setContent] = useState('info'); // Default content is 'info'

  const showContent = (contentType) => {
    setContent(contentType);
  };
  return (
    
    <>

    <Navbargov showContent={showContent} />
          <div className="content">
            {content === 'info' && (
              <div>
              <Govpro />
              </div>
            )}
            {content === 'dropout-rate' && (
              <div>
              <Govpietot /> 
              </div>
            )}
            {content === 'dropout_analysis_Age_Wise' && (
              <div>
              <Govagetot />
              </div>
            )}
            {content === 'dropout_analysis_Gender_Wise' && (
              <div>
               <Govgentot />
              </div>
            )}
            {content === 'dropout_analysis_Cast_Wise' && (
              <div>
              <Govcast />
              </div>
            )}
            {content === 'dropout_analysis_Income_Wise' && (
              <div>
                <Govicom />
              </div>
            )}
             {content === 'dropout_analysis_Category_Wise' && (
              <div>
              <Govermentcat />
              </div>
            )}
             {content === 'dropout_analysis_School_Wise' && (
              <div>
            <Goversch />
              </div>
            )}
             {content === 'dropout_analysis_Area_Wise' && (
              <div>
             <Govermentdis />
              </div>
            )}
             {content === 'dropout_analysis_Reason_Wise' && (
              <div>
               <Goverreas />
              </div>
            )}
             {content === 'Report_state' && (
              <div>
              <GoverReport />
              </div>
            )}
            {content === 'instructions_to_distict' && (
              <div>
              <Govtodistin />
              </div>
            )}
            {content === 'instructions_to_school' && (
              <div>
              <Govertoschin />
              </div>
            )}
            {content === 'suggestion' && (
              <div>
               <Govdistosch />
              </div>
            )}
            {content === 'aproved' && (
              <div>
               <Govertoappoved />
              </div>
            )}
          </div>
        
        
        
        </>
  )
}

export default Govhome
