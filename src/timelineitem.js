import React,{useState,useEffect} from 'react';
import './App.css';
import useLinksvg from './svg Components/useLinksvg.js';
import useSvgCodeCheck from './svg Components/useSvgCodeCheck.js';
import useValidSvg from './svg Components/useValidSvg.js'
const TimelineItem = ({ data }) => {
 const[valid,setValid]=useLinksvg(data.svgUrl);
 const[detect,setDetect]=useSvgCodeCheck(data.svgUrl);
  const [svg,setSvg] = useValidSvg(valid,detect,data.svgUrl);

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
