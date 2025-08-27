import React from 'react'

const MyProjectCard = (props:any) => {
  return (
    <div className='flex flex-col space-y-4 bg-gray-200 border p-4 rounded-lg shadow-lg'>
        <img className="w-full obeject-cover rounded-lg" src={props.image} alt="Mein Blog" />
        <h3 className='text-3xl'>{props.title}</h3>
        <p>{props.description}</p>
        <a  href={props.link} className="text-blue-600 hover:underline">Erfahre mehr  →</a>
    </div>
  )
}

export default MyProjectCard