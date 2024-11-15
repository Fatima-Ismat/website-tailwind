import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full h-80 bg-pink mt-0">
      {/* Background Image */}
      <Image
        src="/footer.png"
        alt="Footer Background"
        fill
        className="object-cover"
      />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center px-4">
  <p className="text-primary text-sm md:text-lg font-semibold text-center">
    <i className="bx bx-copyright"></i> 2024 Made With
    <i className="bx bx-heart mx-1"></i> by Ismat Fatima | All rights reserved.
  </p>
</div>

    </footer>
  );
}