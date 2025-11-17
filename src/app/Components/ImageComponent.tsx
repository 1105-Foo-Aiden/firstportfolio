import React from 'react'
import Image from 'next/image'
export default function ImageComponent({src, width, height, alt} :any ) {
    return (
    <div>
      <Image src={src} alt={alt} height={height} width={width}/>
    </div>
  )
}
