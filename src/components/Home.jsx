import React from 'react'
import "./home.css";
function Home() {
    return (
        <>
            <div className='bg-slate-900 h-screen text-white grid place-content-center'>
                <div className=''>
                    <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800'>

                        <div>
                            <img className='rounded-t-lg' src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div class="p-5 text-center">
                            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Rudra Mondal</h5>
                            <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">TailWind - CSS</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home