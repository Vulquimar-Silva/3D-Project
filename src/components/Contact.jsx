import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { toast, ToastContainer } from 'react-toastify';

import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { PlaneCanvas } from "./canvas";

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const notifySuccess = () => toast.success(`Olá ${form.name}, obrigado pelo contato, em breve responderei a sua mensagem!`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  const notifyError = () => toast.error("Ops, algo deu errado. Por favor, tente novamente.", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });


  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_SERVICE_ID,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: "Vulquimar Silva",
        email: form.email,
        to_email: "vuquimar@hotmail.com",
        message: form.message,
      },
      import.meta.env.VITE_APP_PUBLIC_KEY
    ).then(
      () => {
        setLoading(false);
        notifySuccess()

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        notifyError()
      }
    );
  };

  return (
    <div className={`xl:mt-2 flex xl:flex-row flex-col-reverse gap-1 overflow-hidden`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Fale comigo</p>
        <h3 className={styles.sectionHeadText}>Contato.</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu nome</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="Digite seu nome e sobrenome"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Seu email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="Digite o seu email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Escreva a sua mensagem</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Vamos dar vida as suas ideias?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              required
            />
          </label>

          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </motion.div>
      <ToastContainer />
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <PlaneCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "Contato");