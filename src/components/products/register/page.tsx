import { Layout } from "../../layout"

export const ProductRegistration:React.FC = () => {
    return (
        <Layout title="Produtos">
            <div className="field">
                <label htmlFor="inputSku" className="label">SKU: *</label>
                <div className="control">
                    <input className="input" type="text"
                        id="inputSku"
                        placeholder="Digite o SKU do produto" />
                </div>
            </div>
            <div className="field">
                <label htmlFor="inputPreco" className="label">Preço: *</label>
                <div className="control">
                    <input className="input" type="text"
                        id="inputPreco"
                        placeholder="Digite o Preço do produto" />
                </div>
            </div>
            <div className="field">
                <label htmlFor="inputNome" className="label">Nome do Produto: *</label>
                <div className="control">
                    <input className="input" type="text"
                        id="inputNome"
                        placeholder="Digite o Nome do produto" />
                </div>
            </div>
            <div className="field">
                <label htmlFor="inputDescricao" className="label">Nome do Produto: *</label>
                <div className="control">
                    <textarea className="textarea"
                        id="inputDescricao"
                        placeholder="Digite a Descricao detalhada do produto" />
                </div>
            </div>

            <div className="field is-grouped">
                <div className="control is-link">
                    <button className="button">Salvar</button>
                </div>
                <div className="control is-link is-light">
                    <button className="button">Voltar</button>
                </div>
            </div>
        </Layout>
        
    )
}
