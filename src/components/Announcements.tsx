import React from "react"

const Announcements = () => {
  return (
    <div className='bg-white p-4 rounded-md'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>Announcements</h1>
        <span className='text-sm text-gray-400'>View All</span>
      </div>
      <div className='flex flex-col gap-4 mt-4'>
        <div className='bg-devSkyLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>The Is Announcement #1</h2>
            <span className='text-sm text-gray-400 bg-white rounded-md px-1 py-1'>
              01-07-2025
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dolor quae laudantium quam ipsam, ullam repudiandae sapiente,
            molestias earum consectetur libero provident facilis!
          </p>
        </div>
        <div className='bg-devPurpleLightLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>The Is Announcement #2</h2>
            <span className='text-sm text-gray-400 bg-white rounded-md px-1 py-1'>
              01-07-2025
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dolor quae laudantium quam ipsam, ullam repudiandae sapiente,
            molestias earum consectetur libero provident facilis!
          </p>
        </div>
        <div className='bg-devYellowLight rounded-md p-4'>
          <div className='flex items-center justify-between'>
            <h2 className='font-medium'>The Is Announcement #3</h2>
            <span className='text-sm text-gray-400 bg-white rounded-md px-1 py-1'>
              01-07-2025
            </span>
          </div>
          <p className='text-sm text-gray-400 mt-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            dolor quae laudantium quam ipsam, ullam repudiandae sapiente,
            molestias earum consectetur libero provident facilis!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Announcements
