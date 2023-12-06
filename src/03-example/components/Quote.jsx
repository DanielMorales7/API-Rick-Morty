import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({name='', image=''}) => {

  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width:0, height:0})

  useLayoutEffect(() => {

  const {height, width} = pRef.current.getBoundingClientRect();
  setBoxSize({height, width })

  }, [image])

  return (
       <>
        <div>
          <img src={image} alt="" />
          <blockquote className="blockquote text-end"
          style={{display:"flex"}}
          >
            <p ref={pRef} className="mb-1">{name}</p>
            {/* <footer className="blockquote-footer ">Daniel</footer> */}
          </blockquote>
        </div>
        <code>{JSON.stringify(boxSize)}</code>
       </>
  )
}
