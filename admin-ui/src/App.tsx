import AdminUI from "@glue42/server-admin-ui";
import '@glue42/theme';
import '@glue42/theme/dist/packages/rc-select.css';
import "@glue42/server-admin-ui/dist/src/styles/index.css";
import "@ag-grid-community/core/dist/styles/ag-grid.css";

// Some configs
const serverBase = "http://localhost:4356/api";
const base = "";

function App() {
  console.log(`hello - ${serverBase}, ${base}`);

  return (
    <AdminUI
      agGridLicKey="<AG_GRID_LIC_KEY>"
      apiURL={serverBase}
      baseName={base}
      theme="dark"
      auth="basic"
      users={{ canAdd: true, havePasswords: true }}
    />
  );
}

export default App;
