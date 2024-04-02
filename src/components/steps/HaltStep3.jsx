export default function HaltStep() {
  return (
    <>
      <div className="pt-20 w-4/5 flex justify-between items-center">
        <video autoPlay loop width="320" height="240">
          <source src="/videos/step3-banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="w-1/2 space-y-4">
          <h2 className="text-2xl font-medium">You're in the right place</h2>
          <p className="text-sm text-gray-500">
            Brilliant gets you hands-on with a whole universe of concepts in
            math, science, and computer science. You'll solve fun problems while
            growing your critical thinking skills.
          </p>
        </div>
      </div>
    </>
  );
}
