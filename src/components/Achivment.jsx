import React, { useState, useEffect } from 'react';

const Achievement = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [projectsCount, setProjectsCount] = useState(0);
  const [completedProjectsCount, setCompletedProjectsCount] = useState(0);

  useEffect(() => {
    const clientsInterval = setInterval(() => {
      if (clientsCount < 200) {
        setClientsCount(prevCount => prevCount + 1);
      }
    }, 10);

    const projectsInterval = setInterval(() => {
      if (projectsCount < 50) {
        setProjectsCount(prevCount => prevCount + 1);
      }
    }, 20);

    const completedProjectsInterval = setInterval(() => {
      if (completedProjectsCount < 100) {
        setCompletedProjectsCount(prevCount => prevCount + 1);
      }
    }, 30);

    return () => {
      clearInterval(clientsInterval);
      clearInterval(projectsInterval);
      clearInterval(completedProjectsInterval);
    };
  }, [clientsCount, projectsCount, completedProjectsCount]);

  return (
    <section className="py-20 text-center bg-gray-100">
      <h2 className="text-6xl font-bold text-[#E95E19] mb-8">Services !</h2>
      <div className="flex flex-col items-center justify-around md:flex-row">
        <div className="m-4">
          <h3 className="text-5xl font-bold text-[#E95E19]">{clientsCount}+</h3>
          <p className="text-lg text-gray-600">Clients</p>
        </div>
        <div className="m-4">
          <h3 className="text-5xl font-bold text-[#E95E19]">{projectsCount}+</h3>
          <p className="text-lg text-gray-600">Running Projects</p>
        </div>
        <div className="m-4">
          <h3 className="text-5xl font-bold text-[#E95E19]">{completedProjectsCount}+</h3>
          <p className="text-lg text-gray-600">Projects Completed</p>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
