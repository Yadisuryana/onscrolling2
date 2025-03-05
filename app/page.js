'use client';

import Image from 'next/image';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import './styles.css';

export default function Home() {
  return (
    <div className="container">
      {/* About Section */}
      <div className="about">
        <div className="about-text">
          <h1>Yadi Suryana</h1>
          <p>Front End Developer</p>
        </div>
        <Image
          className="profile-img2"
          src="/profil.jpg"
          alt="Profile Picture"
          width={120}
          height={120}
        />
      </div>
      
      {/* Two Column Layout */}
      <div className="two-column">
        {/* Left Column */}
        <div className="column">
          <Section title="DATA PRIBADI">
            <ul className="icon-list">
              <li className="icon-item"><Image src="/nama.png" alt="Nama" width={20} height={20} /> <span>Nama: Yadi Suryana</span></li>
              <li className="icon-item"><Image src="/status.png" alt="Status" width={20} height={20} /> <span>Tempat, tanggal lahir: Sumedang, 29 Agustus 2004</span></li>
              <li className="icon-item"><Image src="/gender.png" alt="Gender" width={20} height={20} /> <span>Jenis Kelamin: Laki-Laki</span></li>
              <li className="icon-item"><Image src="/alamat.png" alt="Alamat" width={20} height={20} /> <span>Alamat: Ds. Cibulakan Kec. Cimanggung Kab. Sumedang</span></li>
              <li className="icon-item"><Image src="/agama.png" alt="Agama" width={20} height={20} /> <span>Agama: Islam</span></li>
              <li className="icon-item"><Image src="/flag.png" alt="Kewarganegaraan" width={20} height={20} /> <span>Kewarganegaraan: Indonesia</span></li>
              <li className="icon-item"><Image src="/status.png" alt="Status" width={20} height={20} /> <span >Status: Belum Menikah</span></li>
            </ul>
          </Section>

          <Section title="PENDIDIKAN">
            <ul>
              <li>SDN Cikandang (2012 - 2017)</li>
              <li>SMP 314 Parakanmuncang (2017 - 2020)</li>
              <li>MA Wasilatul Huda (2020 - 2023)</li>
              <li>Universitas Ma'soem (2023 - Sekarang)</li>
            </ul>
          </Section>

          <Section title="HOBI">
            <ul className="icon-list">
              <li className="icon-item"><Image src="/book.png" alt="Membaca" width={20} height={20} /> <span>Membaca Buku</span></li>
              <li className="icon-item"><Image src="/badminton.png" alt="Badminton" width={20} height={20} /> <span>Badminton</span></li>
              <li className="icon-item"><Image src="/game.png" alt="Game" width={20} height={20} /> <span>Game</span></li>
              <li className="icon-item"><Image src="/music.png" alt="Musik" width={20} height={20} /> <span>Mendengarkan Musik</span></li>
            </ul>
          </Section>
        </div>

        {/* Right Column */}
        <div className="column">
          <Section title="KEAHLIAN">
            <ul>
              <li>HTML & CSS</li>
              <li>JavaScript</li>
              <li>React & Next.js</li>
              <li>Node.js</li>
              <li>MySQL</li>
              <li>Java</li>
              <li>Git & GitHub</li>
            </ul>
          </Section>

          <Section title="ORGANISASI">
            <ul>
              <li>Sekretaris OSIS MA Wasilatul Huda</li>
              <li>Anggota Pramuka MA Wasilatul Huda</li>
              <li>Pengurus Karsawasa (Karya Santri Wasilatul Huda)</li>
              <li>Anggota UKM Badminton Universitas Ma'soem</li>
            </ul>
          </Section>

          <Section title="LAYANAN">
            <ul>
              <li>UI/UX Design</li>
              <li>Web Development</li>
            </ul>
          </Section>
        </div>
      </div>

      {/* Contact Section */}
      <div className="contact">
        <h2>HUBUNGI SAYA</h2>
        <p>
          <FaEnvelope /> ydisryna@gmail.com
        </p>
        <p>
          <FaPhone /> +62 896 3002 4907
        </p>
      </div>
    </div>
  );
}

const Section = ({ title, children }) => (
  <div className="section">
    <h2>{title}</h2>
    <div className="content-box">{children}</div>
  </div>
); 