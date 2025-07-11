import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <div className="p-10">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold">Nikita Sinha</h1>
          <p className="text-lg mt-2">Firmware Developer who is turning real time challenges into real world solutions</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="https://www.linkedin.com/in/nikita-sinhaa/" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-blue-600 text-white rounded">LinkedIn</button>
            </a>
            <a href="https://github.com/nikita-sinhaa" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-gray-800 text-white rounded">GitHub</button>
            </a>
            <a href="mailto:nikitaa.sinhaa@gmail.com">
              <button className="px-4 py-2 bg-green-600 text-white rounded">Email</button>
            </a>
          </div>
        </header>

        <section id="projects" className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ProjectCard
              title="Smart Faucet Controller"
              description="Built a smart water-saving system using Raspberry Pi and Alexa."
              tech="Python, AWS IoT, Raspberry Pi"
            />
            <ProjectCard
              title="FPGA Object Detection"
              description="Real-time YOLOv3 object detection on FPGA using Python and VHDL."
              tech="Python, VHDL, Xilinx"
            />
            <ProjectCard
              title="Cloud Home Security"
              description="Cloud-enabled home security system with Alexa & NodeMCU."
              tech="C++, AWS IoT, Alexa"
            />
          </div>
        </section>

        <section id="resume" className="mb-10 text-center">
          <h2 className="text-2xl font-semibold mb-4">Resume</h2>
          <a href="/resume.pdf" download>
            <button className="px-6 py-2 bg-purple-700 text-white rounded">Download Resume</button>
          </a>
        </section>
      </div>
    </div>
  );
}
