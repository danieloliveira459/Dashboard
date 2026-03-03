import "./Simulador.css";
import { useState } from "react";

export default function Simulador() {
  const [produtoAtivo, setProdutoAtivo] = useState("Agro");

  return (
    <div className="simulador-container">
      <h1 className="titulo">Simulador</h1>
      <p className="subtitulo">
        Qual é o produto que melhor atende seu cliente?
      </p>

      {/* Cards de Produtos */}
      <div className="produtos">
        {["Agro", "Corporate", "Middle market", "Varejo"].map((produto) => (
          <div
            key={produto}
            className={`produto-card ${
              produtoAtivo === produto ? "ativo" : ""
            }`}
            onClick={() => setProdutoAtivo(produto)}
          >
            <span>{produto}</span>
          </div>
        ))}
      </div>

      {/* Formulário */}
      <div className="form-card">
        <div className="grid-2">
          <div>
            <label>Nome completo</label>
            <input placeholder="Escreva o nome do cliente..." />
          </div>

          <div>
            <label>CPF</label>
            <input placeholder="000.000.000-00" />
          </div>
        </div>

        <div className="grid-2">
          <div>
            <label>Razão social da empresa</label>
            <input placeholder="Escreva o nome da empresa do cliente..." />
          </div>

          <div>
            <label>CNPJ</label>
            <input placeholder="00.000.000/0000-00" />
          </div>
        </div>

        <div className="grid-3">
          <div>
            <label>CEP da empresa</label>
            <input placeholder="00000-000" />
          </div>

          <div>
            <label>Estado da empresa</label>
            <select>
              <option>UF</option>
              <option>SP</option>
              <option>RJ</option>
              <option>MG</option>
            </select>
          </div>

          <div>
            <label>Município da Empresa</label>
            <input placeholder="Cidade" />
          </div>
        </div>

        <div className="grid-2">
          <div>
            <label>Bairro</label>
            <input placeholder="Bairro" />
          </div>

          <div>
            <label>Endereço completo</label>
            <input placeholder="Rua, número, complemento" />
          </div>
        </div>

        <hr />

        <div className="grid-2">
          <div>
            <label>Valor do projeto</label>
            <input placeholder="R$ 0,00" />
          </div>

          <div>
            <label>Valor financiado</label>
            <input placeholder="R$ 50.000.000,00" />
          </div>
        </div>

        <button className="btn-simular">Simular Agora</button>
      </div>
    </div>
  );
}