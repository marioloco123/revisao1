/**
 * Página inicial com reflexão sobre capitalismo tardio e comunismo.
 */
function Home() {
  return (
    <>
      <style jsx>{`
        body {
          margin: 0;
          padding: 0;
        }

        .frame {
          min-height: 100vh;
          background: #2a1010;
          padding: 2rem;
          box-sizing: border-box;
        }

        .frame-inner {
          min-height: calc(100vh - 4rem);
          border: 1.5rem solid #4a2020;
          box-shadow:
            inset 0 0 0 3px #1a0808,
            inset 0 0 0 4px #6b3030,
            inset 0 0 20px rgba(0, 0, 0, 0.5),
            0 8px 16px rgba(0, 0, 0, 0.6);
          position: relative;
        }

        .frame-inner::before {
          content: "";
          position: absolute;
          top: 1rem;
          left: 1rem;
          right: 1rem;
          bottom: 1rem;
          border: 1px solid #8b4a4a;
          pointer-events: none;
        }

        .container {
          min-height: calc(100vh - 4rem);
          background: #6b1a1a;
          background-image: url("https://i0.wp.com/ruskinjournal.files.wordpress.com/2017/11/lenin-cdtr.jpg");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          background-blend-mode: multiply;
          color: #e8d5b7;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          padding: 4rem 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-sizing: border-box;
          position: relative;
        }

        .container::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(107, 26, 26, 0.75);
          z-index: 0;
        }

        .symbol,
        h1,
        .content {
          position: relative;
          z-index: 1;
        }

        .symbol {
          font-size: 4rem;
          margin-bottom: 3rem;
          opacity: 0.8;
        }

        h1 {
          font-size: 2rem;
          font-weight: 300;
          text-align: center;
          margin-bottom: 4rem;
          letter-spacing: 0.05em;
          color: #d4c5a9;
        }

        .content {
          max-width: 600px;
          line-height: 1.8;
        }

        p {
          font-size: 1rem;
          font-weight: 300;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        ul {
          list-style: none;
          padding: 0;
          margin: 2rem 0;
        }

        li {
          font-size: 0.95rem;
          font-weight: 300;
          margin-bottom: 1rem;
          opacity: 0.85;
        }

        li::before {
          content: "—";
          margin-right: 0.75rem;
        }
      `}</style>

      <div className="frame">
        <div className="frame-inner">
          <div className="container">
            <div className="symbol">☭</div>

            <h1>Capitalismo Tardio</h1>

            <div className="content">
              <p>
                A concentração de riqueza e a precarização do trabalho não são
                falhas do sistema. São suas características fundamentais.
              </p>

              <p>
                O comunismo propõe a reorganização racional da sociedade em
                benefício coletivo:
              </p>

              <ul>
                <li>Fim da exploração do trabalho</li>
                <li>Acesso universal à educação, saúde e moradia</li>
                <li>Planejamento democrático da economia</li>
                <li>Produção sustentável baseada em necessidades reais</li>
                <li>Distribuição equitativa de riqueza</li>
              </ul>

              <p>
                A questão não é se o capitalismo vai colapsar, mas se
                conseguiremos construir uma alternativa a tempo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
