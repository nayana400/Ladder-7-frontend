function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-10">
          Projects
        </h3>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 shadow rounded-xl">
            <h4 className="font-bold mb-2">Project 1</h4>
            <p className="text-gray-600">React Resume Builder</p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h4 className="font-bold mb-2">Project 2</h4>
            <p className="text-gray-600">Blog Application</p>
          </div>

          <div className="bg-white p-6 shadow rounded-xl">
            <h4 className="font-bold mb-2">Project 3</h4>
            <p className="text-gray-600">E-commerce Mini Project</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
