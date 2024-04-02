export default function FinalStep() {
  return (
    <>
      <div className="pt-6 w-4/5 md:flex justify-between items-center">
        <video autoPlay loop width="320" height="240">
          <source src="/videos/final-step.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="md:w-1/2 space-y-4 text-center md:text-left">
          <h2 className="text-3xl font-medium mb-10">You're on your way!</h2>
          <div className="text-4xl text-yellow-600">★★★★★</div>
          <p className="text-md text-gray-700 italic">
            “If you like bending your mind over interesting problems or want to
            explore a rich world full of beautiful mysteries, this app will be a
            sure thing for you.”
          </p>
          <p className="text-md text-gray-700">— Bob V.</p>
        </div>
      </div>
    </>
  );
}
