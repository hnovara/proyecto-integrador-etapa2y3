import React, { useState } from 'react';
import Text from '../components/Text';
import Form from '../components/Form';
import Banner from '../components/Banner';
import InputGroup from '../components/InputGroup';
import { useForm } from '../hooks/useForm';
// import { postMessage } from '../util/api';
import { postProducts } from '../util/api';
import { validarFormulario, mostrarErrores, mostrarProductoCargado } from '../util/validation';

const INITIAL_STATE = {
    name: '',
    price: '',
    stock: '',
    category: '',
    brand: '',
    ageFrom: '',
    ageTo: '',
    shortDesc: '',
    longDesc: '',
    delivery: '',
};

function Alta() {
    const { values, handleInputChange, resetForm } = useForm(INITIAL_STATE);
    const [loadingForm, setLoadingForm] = useState(false);

    const handleSubmit = () => {
        const errores = validarFormulario(values);

        if (Object.keys(errores).length === 0) {
            setLoadingForm(true);
            postProducts(values)
                .then(data => {
                    console.log(data);
                    mostrarProductoCargado();
                })
                .catch(err => {
                    console.error(err);
                    alert('Error al cargar el producto');
                })
                .finally(() => {
                    setLoadingForm(false);
                    resetForm();
                });
        } else {
            mostrarErrores(errores, inputProps);
        }
    };

    const inputProps = {
        name: {
            inputLabel: "Nombre",
        },
        price: {
            inputLabel: "Precio",
            inputType: "number"
        },
        stock: {
            inputLabel: "Stock",
            inputType: "number"
        },
        category: {
            inputLabel: "Categoría",
        },
        brand: {
            inputLabel: "Marca",
        },
        ageFrom: {
            inputLabel: "Edad desde",
            inputType: "number"
        },
        ageTo: {
            inputLabel: "Edad hasta",
            inputType: "number"
        },
        shortDesc: {
            inputLabel: "Descripción corta",
        },
        longDesc: {
            inputLabel: "Descripción larga",
            inputType: "textarea"
        },
        image: {
            inputLabel: "Foto del producto",
            inputType: "file",
            accept: "image/*"
        },
        delivery: {
            inputLabel: "Envío sin cargo",
            inputType: "checkbox"
        }
    };

    return (
        <div className='alta__container'>
            <Banner />
            <div
                className='alta__container__sec'
                style={{
                    backgroundImage: `url(${process.env.PUBLIC_URL}/img/fondo-toys2.jpg)`,
                }}
            >
                <Text renderAs='h2' content='Alta' />
                <Form
                    onSubmit={handleSubmit}
                    labelButton='Enviar comentarios'
                    loading={loadingForm}
                >
                    {Object.entries(inputProps).map(([key, props]) => (
                        <InputGroup
                            key={key}
                            id={key}
                            onChange={handleInputChange}
                            values={values}
                            {...props}
                        />
                    ))}
                </Form>
            </div>
        </div>
    );
}

export default Alta;