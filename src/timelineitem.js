import React,{useState,useEffect} from 'react';
import './App.css';
import {renderToString} from 'react-dom/server';
const TimelineItem = ({ data }) => {
 
    const[svg,setSvg]=useState(null);

    useEffect(() => {
        
        fetch(data.svgUrl)
            .then(res => res.text())
            .then(setSvg)
            
             }, [data]);
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
