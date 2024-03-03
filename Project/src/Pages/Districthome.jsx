import React, { useState } from 'react'
import Navbardistrict from '../Components/Navbar/Navbardistrict';
import Districtpro from '../Components/District/Districtpro';
import Districttab from '../Components/District/Districttab';
import Districtpie from '../Components/District/Districtpie';
import Districtagebar from '../Components/District/Districtage';
import Districtgen from '../Components/District/Districtgen';
import Disticticom from '../Components/District/Disticticom';
import Districtdist from '../Components/District/Districtdist';
import Disschwise from '../Components/District/Disschwise';
import Districtsuggestion from '../Components/District/Districtsuggestion';
import Districtintruction from '../Components/District/Districtintruction';
import Districtapp from '../Components/District/Districtapp';


const Districthome = () => {
  const [content, setContent] = useState('info'); // Default content is 'info'

  const showContent = (contentType) => {
    setContent(contentType);
  };

  return (
    <>

<Navbardistrict showContent={showContent} />
      <div className="content">
        {content === 'info' && (
          <div>
          <Districtpro />
          </div>
        )}
        {content === 'district-table' && (
          <div>
           <Districttab />
          </div>
        )}
        {content === 'dropout_analysis_District_Wise' && (
          <div>
            <Districtpie />
          </div>
        )}
        {content === 'dropout_analysis_Age_Wise' && (
          <div>
           <Districtagebar />
          </div>
        )}
        {content === 'dropout_analysis_Gender_Wise' && (
          <div>
          <Districtgen />
          </div>
        )}
        {content === 'dropout_analysis_Income_Wise' && (
          <div>
           <Disticticom />
          </div>
        )}
         {content === 'dropout_analysis_School_Wise' && (
          <div>
           <Disschwise />
          </div>
        )}
         {content === 'dropout_analysis_Distance_Wise' && (
          <div>
          <Districtdist />
          </div>
        )}
         {content === 'suggestion' && (
          <div>
           <Districtsuggestion />
          </div>
        )}
         {content === 'instruction' && (
          <div>
          <Districtintruction />
          </div>
        )}
         {content === 'approved' && (
          <div>
            <Districtapp />
          </div>
        )}
      </div>
    
    
    
    
    
    </>
  )
}

export default Districthome
