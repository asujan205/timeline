import React,{useState,useEffect} from 'react';
import './App.css';
import {renderToString} from 'react-dom/server';
const TimelineItem = ({ data ,valid}) => {

  const [svg, setSvg] = useState(null);
   
    
    const svgRegex=/^\s*(?:<\?xml[^>]*>\s*)?(?:<!doctype svg[^>]*\s*(?:\[?(?:\s*<![^>]*>\s*)*\]?)*[^>]*>\s*)?(?:<svg[^>]*>[^]*<\/svg>|<svg[^/>]*\/\s*>)\s*$/;
      ;
         
    const detectSvg=(input)=>{
      if(!svgRegex.test(input)){
        alert("pleaseinput proper svg");
      }
      else{
        setSvg(input);
      }

    }

    useEffect(() => {
      if(valid===true){
        fetch(data.svgUrl)
            .then(res => res.text())
            .then(setSvg)
      }
          
          else{
            detectSvg(data.svgUrl);
          }  
           
    }, [data.svgUrl]);
    return(
      <div className="timeline">
                        <div className="timeline-content">
                            <div classNmae="timeline-icon">
                                <div className="newicon">
                                <div className="icon" dangerouslySetInnerHTML={{ __html:svg}} />  
                                </div>
                            </div>
                            <div className="inner-content" style={{backgroundColor:data.bgColor}}>
                                <div className="date"><h3 class="title">{data.dateTime}</h3>
                                </div>
                                <div className="description">
                          
                                    {data.name}
                                  
                                
                
                                 
                            
                            </div>
                            </div>
                        </div>
                    </div>
                    
    
    
    );
}

export default TimelineItem;
