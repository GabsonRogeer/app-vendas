"use client";

import {useState} from 'react'

export default function Form () {
    const [sku, setSku] = useState('')
    const [preco, setPreco] = useState('')
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')

    const submit = () => {
        const product = {
            sku, preco, nome, descricao
        }
        console.log(product)
    }
    return (
        <>
        <div className="columns">
                <div className="field is-half column">
                    <label htmlFor="inputSku" className="label">SKU: *</label>
                    <div className="control">
                        <input className="input" type="text"
                            id="inputSku" value={sku} onChange={event => setSku(event.target.value)}
                            placeholder="Digite o SKU do produto" />
                    </div>
                </div>
                <div className="field is-half column">
                    <label htmlFor="inputPreco" className="label">Preço: *</label>
                    <div className="control">
                        <input className="input" type="text"
                            id="inputPreco" value={preco} onChange={event => setPreco(event.target.value)}
                            placeholder="Digite o Preço do produto" />
                    </div>
                </div>
            </div>

            <div className="columns">
                <div className="field column is-full">
                    <label htmlFor="inputNome" className="label">Nome do Produto: *</label>
                    <div className="control">
                        <input className="input" type="text"
                            id="inputNome" value={nome} onChange={event => setNome(event.target.value)}
                            placeholder="Digite o Nome do produto" />
                    </div>
                </div>
            </div>
            
            <div className="field">
                <label htmlFor="inputDescricao" className="label">Nome do Produto: *</label>
                <div className="control">
                    <textarea className="textarea"
                        id="inputDescricao" value={descricao} onChange={event => setDescricao(event.target.value)}
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