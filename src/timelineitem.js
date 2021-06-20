import React,{useState,useEffect} from 'react';
import './App.css';
import  useCheckSvgIsValid from './Hooks/useLinksvg.js';
import useCheckSvgCodeIsValid from './Hooks/useSvgCodeCheck.js';
import useCheckValidSvg from './Hooks/useValidSvg.js';
const TimelineItem = ({ data }) => {
 const[valid,setValid]= useCheckSvgIsValid(data.svgUrl);
 const[detect,setDetect]=useCheckSvgCodeIsValid(data.svgUrl);
  const [svg,setSvg] = useCheckValidSvg(valid,detect,data.svgUrl);

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
