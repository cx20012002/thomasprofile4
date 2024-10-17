import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {
  return (
    <div className='content-container bg-[#f2f2f2]'>
      {children}
    </div>
  )
}
