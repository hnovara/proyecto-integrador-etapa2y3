import React, { useState } from 'react';
import Text from '../components/Text';
import Form from '../components/Form';
import Banner from '../components/Banner';
import InputGroup from '../components/InputGroup';
import { useForm } from "../hooks/useForm";
import { postMessage } from '../util/api';
import { validateStrings, validateStgLength, validateEmails } from '../util/validation';

const INITIAL_STATE = {
    name: "",
    email: "",
    subject: "",
    body: ""
}

function Contacto() {
    const { values, handleInputChange, resetForm } = useForm(INITIAL_STATE);
    const [loadingForm, setLoadingForm] = useState(false);

    const handleSubmit = () => {
        const errores = {};

        const nombreError = validateStgLength(values.name, 3, 50);
        if (nombreError !== true) {
            errores.name = nombreError;
        } else if (!validateStrings(values.name)) {
            errores.name = 'El nombre solo puede contener letras y espacios';
        }

        if (!validateEmails(values.email)) {
            errores.email = 'El email ingresado no es válido';
        }

        if (Object.keys(errores).length > 0) {
            mostrarErrores(errores, inputProps);
            return;
        }

        setLoadingForm(true);
        postMessage(values)
            .then(data => {
                console.log(data);
                alert('Mensaje enviado correctamente');
            })
            .catch(err => {
                console.error(err);
                alert('Error al enviar el mensaje');
            })
            .finally(() => {
                setLoadingForm(false);
                resetForm();
            });
    };

    const inputProps = {
        name: {
            inputLabel: "Nombre",
        },
        email: {
            inputLabel: "Email",
            inputType: "email"
        },
        subject: {
            inputLabel: "Asunto",
        },
        body: {
            inputLabel: "Comentarios",
            inputType: "textarea"
        }
    };

    const mostrarErrores = (errores, inputProps) => {
        let mensaje = 'Por favor corrija los siguientes errores:\n\n';
        for (let key in errores) {
            const inputLabel = inputProps[key] ? inputProps[key].inputLabel : key;
            mensaje += `${errores[key]} en ${inputLabel}\n`;
        }
        alert(mensaje);
    };

    return (
        <div className='contact__container'>
            <Banner/>
            <div className='contact__container__sec'
                style={{ 
                backgroundImage: `url(${process.env.PUBLIC_URL}/img/fondo-toys.jpg)` 
                }}>
                <Text renderAs="h2" content="Contacto"/>
                <Form 
                    onSubmit={handleSubmit}
                    labelButton="Enviar comentarios"
                    loading={loadingForm}
                    >
                    {
                        Object.entries(inputProps)
                            .map(
                                ([key, props]) =>
                                    <InputGroup
                                        key={key}
                                        id={key}
                                        onChange={handleInputChange}
                                        values={values}
                                        {...props}
                                    />
                            )
                    }
                </Form>
            </div>
        </div>
    )
}

export default Contacto;