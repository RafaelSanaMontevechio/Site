import React from 'react';

import project from '../assets/project.png';

const Projects = () => {
    const projects = [1, 2, 3, 4, 5];
    return (
        <div>
            <h2 className='p-8 py-2 text-2xl font-bold'>Pojetos</h2>
            <div className='flex flex-wrap '>
                {projects.map(() => {
                    return (
                        <div className='max-w-sm'>
                            <div className='m-2 rounded shadow-lg'>
                                <img src={project} alt='Projeto 1' />
                                <div className='px-6 py-4'>
                                    <p className='font-bolt text-xl mb-2'>Projetos</p>
                                    <p>Ut enim ad minim veniam</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects