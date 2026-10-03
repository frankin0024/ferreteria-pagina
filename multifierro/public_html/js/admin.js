// Cambiar pestañas del panel
function verTab(tabName) {
  document.querySelectorAll('.tab-content').forEach(tab => tab.style.display = 'none');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(`tab-${tabName}`).style.display = 'block';
  event.target.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const formLogin = document.getElementById('form-login');
  const secLogin = document.getElementById('sec-login');
  const secPanel = document.getElementById('sec-panel');
  const btnLogout = document.getElementById('btn-logout');

  // Iniciar Sesión (Simulación)
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = document.getElementById('usuario').value.trim();
    const pass = document.getElementById('password').value.trim();

    if (user === 'admin' && pass === '1234') {
      secLogin.style.display = 'none';
      secPanel.style.display = 'block';
      document.getElementById('login-error').textContent = '';
    } else {
      document.getElementById('login-error').textContent = 'Credenciales incorrectas (Usa: admin / 1234)';
    }
  });

  // Cerrar Sesión
  btnLogout.addEventListener('click', () => {
    secPanel.style.display = 'none';
    secLogin.style.display = 'block';
    formLogin.reset();
  });

  // Agregar / Actualizar Producto
  const formProducto = document.getElementById('form-producto');
  const tbodyProductos = document.getElementById('tbody-productos');

  formProducto.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('prod-nombre').value;
    const precio = parseFloat(document.getElementById('prod-precio').value).toFixed(2);
    const cat = document.getElementById('prod-categoria').value;
    const imgUrl = document.getElementById('prod-imagen-url').value;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td><img src="${imgUrl}" class="img-preview" alt="${nombre}"></td>
      <td><strong>${nombre}</strong></td>
      <td>S/ ${precio}</td>
      <td>${cat}</td>
      <td><button class="btn-delete" onclick="this.closest('tr').remove()">Eliminar</button></td>
    `;

    tbodyProductos.appendChild(row);
    formProducto.reset();
  });

  // Registrar Proveedor
  const formProveedor = document.getElementById('form-proveedor');
  const tbodyProveedores = document.getElementById('tbody-proveedores');
  const selectProveedor = document.getElementById('prod-proveedor');

  formProveedor.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('prov-nombre').value;
    const ruc = document.getElementById('prov-ruc').value;
    const contacto = document.getElementById('prov-contacto').value;
    const tel = document.getElementById('prov-telefono').value;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ruc}</td>
      <td><strong>${nombre}</strong></td>
      <td>${contacto || '-'}</td>
      <td>${tel || '-'}</td>
    `;
    tbodyProveedores.appendChild(row);

    // Agregar al selector de la lista de proveedores del producto
    const option = document.createElement('option');
    option.value = nombre;
    option.textContent = nombre;
    selectProveedor.appendChild(option);

    formProveedor.reset();
  });
});