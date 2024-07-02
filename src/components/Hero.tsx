import React from 'react'

export default function Hero() {
  return (
    <section className="pt-32">
      <div className="max-w-sm mb-6">
        <h1 className="text-5xl font-bold ">
          Slogan de que esto  <br />
          es lo mejor
        </h1>
        <h2 className="text-gray text-xl mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem impedit quaerat nostrum tenetur, eveniet ratione harum blanditiis reiciendis nisi nobis quisquam. Sequi voluptates.
        </h2>
      </div>

      <form className="inline-flex items-center shadow-sm">
        <span className="py-2 bg-white pl-4">streamlink.com/</span>
        <input
          type="text"
          className="py-2 outline-none"
          placeholder="nombredeusuario"
        />
        <button
          className="bg-green text-white py-2 px-6"
          type="submit"
        >
          Unete gratis
        </button>
      </form>
    </section>
  )
}
