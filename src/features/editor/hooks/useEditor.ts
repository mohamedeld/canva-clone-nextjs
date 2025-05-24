
import { useCallback } from "react"
import {fabric} from "fabric"
interface IData{
    initialCanvas:fabric.Canvas;
    initialContainer:HTMLDivElement
}

const useEditor = () => {
  const init = useCallback(({initialCanvas,initialContainer}:IData)=>{
    fabric.Object.prototype.set({
        cornerColor:'#fff',
        cornerStyle:'circle',
        borderColor:'#3b82f6',
        borderScaleFactor:1.5,
        transparentCorners:false,
        borderOpacityWhenMoving:1,
        cornerStrokeColor:'#3b82f6'
    })
    const initialWorkspace = new fabric.Rect({
        width:900,
        height:1200,
        name:'clip',
        fill:'white',
        selectable:false,
        hasControls:false,
        shadow:new fabric.Shadow({
            color:'rgba(0,0,0,0.8)',
            blur:5
        })
    });

    initialCanvas.setWidth(initialContainer.offsetWidth);
    initialCanvas.setHeight(initialContainer.offsetHeight)
    initialCanvas.add(initialWorkspace);
    initialCanvas.centerObject(initialWorkspace);
    initialCanvas.clipPath = initialWorkspace;
    
  },[])
  
  return {init}
}

export default useEditor