import React from 'react';
import Profile from "../assets/img-1.jpg"

const AboutMe = () => {
  return (
    <div className="max-w-4xl mx-auto mt-5 p-6 m-5">
      <div className="flex justify-center">
        <img src={Profile} alt="Foto Profil" className="rounded-full w-40 h-40 object-cover border-4 border-white"/>
      </div>

      <div className="text-center mt-6">
        <h1 className="text-3xl font-semibold text-white">Delvia Mareta Dealova</h1>
        <p className="text-xl text-slate-300 mt-2">Informatics Engineering Student</p>
      </div>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">Education</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-lg text-slate-300">
            <strong>Dian Nuswantoro University</strong> - Bachelor Degree of Informatics Engineering (2024-current)
          </li>
          <li className="text-lg text-slate-300">
            <strong>SMA Negeri 2 Mranggen</strong> - Mathematics & Science (2021-2024)
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">Certification</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-lg text-slate-300">
            <strong>Multimedia Division - Basic Training Next Generation</strong> (2024)
            <p className="text-slate-300">Learn to create user-friendly application UIs and interactive prototypes.</p>
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">Other Activities</h2>
        <ul className="mt-4 space-y-2">
          <li className="text-lg text-slate-300">
            <strong>Freelance Model</strong> - Click Management Model Agency
          </li>
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-bold text-white">Contact</h2>
        <div className="mt-4 space-y-2">
          <p className="text-lg text-slate-300">Email : <a href="mailto:delviadealova@gmail.com" className="text-slate-300">delviadealova@gmail.com</a></p>
          <p className="text-lg text-slate-300">Instagram : <a href="https://www.instagram.com/delviamrt/profilecard/?igsh=ajF5cTYyZ295cjlt" className="text-slate-300">@delviamrt</a></p>
          <p className="text-lg text-slate-300">GitHub : <a href="https://github.com/delviamareta" className="text-slate-300">github.com/delviamareta</a></p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
