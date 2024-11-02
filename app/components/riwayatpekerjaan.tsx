export default function RiwayatPekerjaan() {
  return (
    <div className="container mx-auto p-2 text-center pt-20">
      <h2 className="text-black font-bold"> Riwayat Pekerjaan</h2>
      <div className="border-2 border-indigo-400/75 rounded-lg bg-stone-200 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">
              Januari 2021 - Desember 2021 (1 tahun)
            </div>
            <div className="col-span-12 md:col-span-4">
              PT. Digital Solusi Nusantara
            </div>
            <div className="col-span-12 md:col-span-4">
              Junior Web Developer
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-indigo-400/75 rounded-lg bg-stone-200 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">
              Januari 2022 - Agustus 2022 (8 bulan)
            </div>
            <div className="col-span-12 md:col-span-4">
              PT. Tekno Kreatif Indonesia
            </div>
            <div className="col-span-12 md:col-span-4">Backend Developer</div>
          </div>
        </div>
      </div>
      <div className="border-2 border-indigo-400/75 rounded-lg bg-stone-200 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">
              September 2022 - Maret 2023 (7 bulan)
            </div>
            <div className="col-span-12 md:col-span-4">
              CV. Solusi Media Teknologi
            </div>
            <div className="col-span-12 md:col-span-4">Frontend Developer</div>
          </div>
        </div>
      </div>
      <div className="border-2 border-indigo-400/75 rounded-lg bg-stone-200 p-2 my-5">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-12 md:col-span-4">
              April 2023 - Sekarang
            </div>
            <div className="col-span-12 md:col-span-4">
              {" "}
              PT. Inovasi Digital Mandiri
            </div>
            <div className="col-span-12 md:col-span-4">
              Full Stack Developer
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface RowRiwayatProps {
  tahun: string;
  instansi: string;
  jabatan: string;
}

function RowRiwayat(props: RowRiwayatProps) {
  return (
    <div className="border-2 border-indigo-600/75 rounded-lg bg-pink-800 p-2 my-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-1">
          <div className="col-span-12 md:col-span-4">{props.tahun}</div>
          <div className="col-span-12 md:col-span-4">{props.instansi}</div>
          <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
        </div>
      </div>
    </div>
  );
}
