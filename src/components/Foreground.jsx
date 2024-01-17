import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {

  const ref = useRef(null);
  const data = [
    {
      desc: "This is the Background color of the card that will be displayed",
      filesize:".9mb",
      close:true,
      tag:{isOpen:true, tagTitle: "Download Now", tagColor:"green"},
    },
    {
      desc: "This is the Background color of the card that will be displayed",
      filesize:".9mb",
      close:true,
      tag:{isOpen:false, tagTitle: "download", tagColor:"green"},
    },
     {
      desc: "This is the Background color of the card that will be displayed",
      filesize:".9mb",
      close:true,
      tag:{isOpen:true, tagTitle: "Upload", tagColor:"blue"},
    },
  ];
  return (
    <div>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap">
         {data.map((item, index) => (
          <Card data={item} reference={ref} />
         ))}
      </div>
      
    </div>
  )
}

export default Foreground
