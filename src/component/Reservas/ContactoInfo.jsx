import React, { useState } from 'react';
import { useAuth } from '../../Context/AuthContext'; // Asegúrate de que la ruta sea correcta
import "./ContactoInfo.css";

const ContactForm = () => {
  const { sendRegistrationEmail } = useAuth(); // Accede a la función desde el contexto
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    message: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await sendRegistrationEmail(formData); // Envía los datos usando la función del contexto
        alert('Email sent successfully!'); // Mensaje de éxito
        // Reiniciar el formulario
        setFormData({
            firstName: '',
            email: '',
            message: '',
        });
        setError(''); // Limpiar el error si fue exitoso
    } catch (error) {
        console.error('Error sending email:', error);
        // Manejo de error más robusto
        setError('Error sending email. Please try again later.'); // Mostrar mensaje de error
    }
};

  return (
    <div className='containe'>
      <div className='row'>
        <div className='col-md-6'>
          <h3>Formulario de contacto</h3>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='firstName'>Nombre:</label>
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Correo electrónico:</label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Mensaje:</label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Enviar
            </button>
            {error && <p className="error-message">{error}</p>} {/* Mostrar mensaje de error */}
          </form>
        </div>
        {/* <div className='col-md-6'>
          <h3>Ubicación</h3>
          <div className='map'>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108571.44351549147!2d-60.66261985636464!3d-31.747087362699528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b44df2b9835231%3A0x554ebde0aa5cfa9a!2zUGFyYW7DoSwgRW50cmUgUsOtb3M!5e0!3m2!1ses-419!2sar!4v1732981817005!5m2!1ses-419!2sar"
              width="600"
              height="450"
              style={{ border: '0' }}  // Corregido el estilo
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div> 
        </div>*/}
      </div>
    </div>
  );
};

export default ContactForm;

