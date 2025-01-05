import foto from "../pian.jpg";

function Profile() {
  return <img src={foto.src} alt="Novian Profile" className="fotoku" />;
}

export default function Hero() {
  return (
    <div className="container mx-auto p-2 text-center">
      <h1 className="text-black font-bold">CV ONLINE</h1>
      <h1 className="text-2xl:">Novian Fadhilah</h1>
      <Profile />
      <p>
        Nama saya Novian Fadhilah, lahir pada tahun 2003. Saya saat ini sedang
        menempuh pendidikan di Masoem University, jurusan Sistem Informasi, dan
        telah mencapai semester 5. Saya memiliki minat yang kuat dalam dunia
        teknologi dan bercita-cita menjadi seorang software engineer. Selain
        fokus dalam perkuliahan, saya aktif dengan hobi seperti bermain game,
        hiking, menonton film, dan membaca komik, yang membantu mengembangkan
        kreativitas dan ketahanan. Saya selalu antusias belajar hal baru di
        bidang pemrograman dan berkomitmen untuk mengasah keterampilan teknis
        saya demi mencapai cita-cita di dunia teknologi.
      </p>
    </div>
  );
}
