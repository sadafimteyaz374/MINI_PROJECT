

export default function Home() {
  return (

    <div className="w-full min-h-auto bg-white flex flex-col justify-center p-4 m-4">

      <div className="w-[1400] h-[300] flex flex-col justify-center border border-gray-300 rounded-lg p-12 m-4">
        <h1 className="text-5xl flex justify-center text-shadow-gray-900 mt-6">
          Hello, Welcome to my website
        </h1>
        <p className="text-sm flex justify-center text-gray-500 mt-4">
          We build simple, clean, and user-friendly web experiences.
          Focused on creating modern, responsive, and meaningful digital solutions.
          Designed to deliver clarity, simplicity, and a great user experience.
          Turning ideas into clean and functional web interfaces.
          Crafting reliable and easy-to-use web solutions.
          Built with care, clarity, and modern design principles.
          Where ideas meet simple and effective design.
          Focused on performance, usability, and clean code.
        </p>
        <div className="flex flex-row justify-center p-12 gap-8">
          <button className="w-[150] h-[50] bg-green-800 text-white border rounded-lg hover:bg-green-600">
            Get started
          </button>
          <button className="w-[150] h-[50] bg-gray-200 text-gray-600 border rounded-lg hover:bg-gray-100">
            Read more
          </button>
        </div>
      </div>

      <div className="w-[1400] h-[300] flex flex-col justify-center border border-gray-300 rounded-lg p-12 m-4">
        <h2 className="text-3xl text-center text-gray-900 mb-8">
          let's Work Together
        </h2>

        <div className="flex justify-center gap-6">
          <div className="w-[260px] h-[120px] border border-gray-200 rounded-lg flex flex-col justify-center items-center text-center hover:bg-gray-50 transition">
            <h3 className="text-lg text-gray-900">Clean Design</h3>
            <p className="text-sm text-gray-500 mt-2">
              Simple and modern layouts that feel natural.
            </p>
          </div>

           <div className="w-[260px] h-[120px] border border-gray-200 rounded-lg flex flex-col justify-center items-center text-center hover:bg-gray-50 transition">
              <h3 className="text-lg text-gray-900">Responsive Layout</h3>
              <p className="text-sm text-gray-500 mt-2">
                Works smoothly.
            </p>
           </div>

          <div className="w-[260px] h-[120px] border border-gray-200 rounded-lg
                    flex flex-col justify-center items-center text-center
                    hover:bg-gray-50 transition">
              <h3 className="text-lg text-gray-900">Performance Focused</h3>
              <p className="text-sm text-gray-500 mt-2">
                   Fast loading and optimized experiences.
               </p>
          </div>

          <div className="w-[260px] h-[120px] border border-gray-200 rounded-lg
                    flex flex-col justify-center items-center text-center
                    hover:bg-gray-50 transition">
              <h3 className="text-lg text-gray-900">Reliable Support</h3>
              <p className="text-sm text-gray-500 mt-2">
                  Clear communication with contact.
              </p>
          </div>

        </div>

      </div>
    </div>
  );
}
