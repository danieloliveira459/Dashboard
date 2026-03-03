import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* HEADER */}
      <div className="dashboard-header">
        <h1>Painel</h1>

        <div className="header-actions">
          
    
        </div>
      </div>

      {/* CARDS */}
      <div className="cards-grid">
        <div className="card">
          <p>A tratar</p>
          <h2>29</h2>
        </div>

        <div className="card">
          <p>Em aberto</p>
          <h2>R$ 2,27B</h2>
          <span className="success">+52%</span>
        </div>

        <div className="card">
          <p>Dentro do prazo</p>
          <h2>83%</h2>
        </div>

        <div className="card">
          <p>Congelados</p>
          <h2>19%</h2>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;