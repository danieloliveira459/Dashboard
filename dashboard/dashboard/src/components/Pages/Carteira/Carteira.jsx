import React from "react";
import "./Carteira.css";
import { FiSearch } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Carteira = () => {
  return (
    <div className="carteira-container">
      <h1 className="titulo">Sua carteira</h1>

      <div className="top-bar">
        <div className="search-box">
          <FiSearch className="search-icon" />
          <input
            type="text"
            placeholder="Buscar por cliente, documento..."
          />
        </div>

        <div className="filtro">
          Segmento ▼
        </div>
      </div>

      <div className="tabela-container">
        <table>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Status</th>
              <th>Segmento</th>
              <th>Etapa</th>
              <th>Valor</th>
              <th>Data</th>
              <th>Linha de Crédito</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                Fazenda do Gigante <span className="badge a">A</span>
              </td>
              <td>
                <span className="status ok">
                  <span className="dot"></span> OK
                </span>
              </td>
              <td>🌾 Rural</td>
              <td>3. Análise de Crédito</td>
              <td>R$ 270.000.000</td>
              <td>17/11/2025</td>
              <td>FNO - Agro</td>
              <td><FiChevronRight /></td>
            </tr>

            <tr>
              <td>
                Fernando Fagundes <span className="badge aa">AA</span>
              </td>
              <td>
                <span className="status atraso">
                  <span className="dot"></span> ATRASO
                </span>
              </td>
              <td>🌾 Rural</td>
              <td>3. Análise de Crédito</td>
              <td>R$ 270.000.000</td>
              <td>15/11/2025</td>
              <td>FNO - Agro</td>
              <td><FiChevronRight /></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="paginacao">
        {"<<"} {"<"} <span className="ativa">1</span> 2 3 {">"} {">>"}
      </div>
    </div>
  );
};

export default Carteira;