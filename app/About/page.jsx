
export default function About() {
    return (
        <div className="w-full min-h-auto bg-white flex flex-col justify-center items-center p-4 m-4">
            <div className="w-[1400] h-[400] p-4 mt-16 border border-gray-200 ">

  <h2 className="text-5xl flex justify-center text-shadow-gray-900 mt-16">
    About Us
  </h2>

  <p className="text-sm flex justify-center text-gray-500 mt-4">
    We focus on building simple, reliable, and user-friendly web solutions.
    Our goal is to create meaningful digital experiences with clarity and purpose.
  </p>

  <div className="flex justify-center gap-6 mt-6">

    <div className="w-[260px] h-[140px] border border-gray-200 rounded-lg
                    flex flex-col justify-center items-center text-center
                    hover:bg-gray-50 transition">
      <h3 className="text-lg text-gray-900">Our Mission</h3>
      <p className="text-sm text-gray-500 mt-2">
        Deliver clean, effective, and accessible web experiences.
      </p>
    </div>

    <div className="w-[260px] h-[140px] border border-gray-200 rounded-lg
                    flex flex-col justify-center items-center text-center
                    hover:bg-gray-50 transition">
      <h3 className="text-lg text-gray-900">Our Vision</h3>
      <p className="text-sm text-gray-500 mt-2">
        Build digital products that users truly enjoy using.
      </p>
    </div>

    <div className="w-[260px] h-[140px] border border-gray-200 rounded-lg
                    flex flex-col justify-center items-center text-center
                    hover:bg-gray-50 transition">
      <h3 className="text-lg text-gray-900">Our Values</h3>
      <p className="text-sm text-gray-500 mt-2">
        Simplicity, honesty, and attention to detail.
      </p>
    </div>

    <div className="w-[260px] h-[140px] border border-gray-200 rounded-lg
                    flex flex-col justify-center items-center text-center
                    hover:bg-gray-50 transition">
      <h3 className="text-lg text-gray-900">Our Approach</h3>
      <p className="text-sm text-gray-500 mt-2">
        Thoughtful design combined with clean, scalable code.
      </p>
    </div>

  </div>
  </div>
</div>

    );
}