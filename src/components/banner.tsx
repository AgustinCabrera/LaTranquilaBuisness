export default function Banner() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <img
        src="/principal/banner.png"
        alt="La Tranquila - Vista al río"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
        <h1 className="text-white text-4xl md:text-5xl font-bold drop-shadow-lg">
          ¡Bienvenidos!
        </h1>
      </div>
    </div>
  );
}
