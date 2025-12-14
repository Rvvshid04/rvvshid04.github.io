const ViewAllProjects = () => (
  <section className="py-12 bg-background font-sans">
    <div className="flex flex-col items-center">
      <p className="text-text-light text-lg mb-4">Want to see more?</p>
      <a href="#projects" className="bg-background-light text-text font-mono text-xl px-8 py-4 rounded-lg flex items-center gap-2 border border-primary/10 hover:bg-primary/10 transition-all">
        View all projects <span className="text-2xl">→</span>
      </a>
    </div>
  </section>
)

export default ViewAllProjects 