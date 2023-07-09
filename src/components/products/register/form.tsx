"use client";

import { FormInput } from '@/components/common';
import { useState } from 'react'
import { useProductService } from '@/app/services';
import { Products } from '@/app/models/products';  


export default function Form () {

    const service = useProductService()
    const [sku, setSku] = useState<string>('')
    const [price, setPrice] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [description, setDescription] = useState<string>('')

    const submit = () => {
        const product: Products = {
            sku,
            price: parseFloat(price),
            name,
            description
        }
        setSku('')
        setPrice('')
        setName('')
        setDescription('')

        service
            .save(product)
            .then(productResponse => console.log(productResponse))
    }
    return (
        <>
            <div className="columns">
                <FormInput onChange={setSku}
                    label='SKU *' 
                    id='inputSku'
                    placeholder='Digite o SKU do produto'
                    columnClasses='is-half'
                    value={sku} />

                <FormInput onChange={setPrice}
                    label='Preço *' 
                    id='inputPrice'
                    placeholder='Digite o preço do produto'
                    columnClasses='is-half'
                    value={price} />
            </div>

            <div className="columns">

            <FormInput onChange={setName}
                    label='Nome do Produto: *' 
                    id='inputName'
                    placeholder='Digite o Nome do produto'
                    columnClasses='is-full'
                    value={name} />
            
            </div>
            
            <div className="field">
                <label htmlFor="inputDescricao" className="label">Descrição detalhada do Produto: </label>
                <div className="control">
                    <textarea className="textarea"
                        id="inputDescricao" value={description} onChange={event => setDescription(event.target.value)}
                        placeholder="Digite a Descricao detalhada do produto" />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control is-link">
                    <button onClick={submit} className="button">Salvar</button>
                </div>
                <div className="control is-link is-light">
                    <button className="button">Voltar</button>
                </div>
            </div>
        </>
        
    )
}