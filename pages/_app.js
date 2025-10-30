import '../styles.css';

export default function App({ Component, pageProps }) {
  return (
    <div className="app">
      <aside className="sidebar">
        <h2>Base Bomberos</h2>
        <nav>
          <a href="/">Inicio</a>
          <a href="/importar">Importar</a>
          <a href="/bomberos">Listado</a>
          <a href="/jerarquias">Jerarquías</a>
          <a href="/ajustes">Ajustes</a>
        </nav>
      </aside>
      <main className="content">
        <Component {...pageProps} />
      </main>
    </div>
  );
}


