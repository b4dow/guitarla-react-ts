## 📝 Descripción

GuitarLA ofrece un catálogo de modelos de guitarra, un carrito de compras dinámico y un blog de artículos técnicos. La experiencia de usuario es fluida gracias a la recarga en caliente de Vite y al diseño mobile-first.

## 🚀 Características principales

- **Catálogo de productos**: listado paginado de guitarras con vistas detalladas.
- **Carrito de compras**: añadir, editar cantidad y eliminar ítems antes de la compra.
- **Persistencia**: datos del carrito almacenados en localStorage.
- **Despliegue continuo**: actualizaciones automáticas vía Vercel.

## 🛠️ Tecnologías

- **React**: librería de UI basada en componentes y hooks para construir interfaces declarativas citeturn1search0.

- **useReducer**: hook que traslada la lógica de actualización de estado a una función pura, ideal para estados complejos citeturn1search0.

- **TypeScript**: superset de JavaScript con tipado estático, mejorando la robustez y el autocompletado citeturn2search0.

- **Vite**: bundler ultrarrápido con HMR para un ciclo de desarrollo eficiente citeturn1search2.

- **React Hook Form**: gestión y validación de formularios con mínimo re-renderizado citeturn1search4.

## ⚙️ Instalación

1. Clonar el repositorio:

   ```bash
   git clone https://github.com/b4dow/guitarla-react-alpha.git
   cd guitarla-react-ts
   ```

2. Instalar dependencias:

   ```bash
   npm install
   ```

3. Iniciar servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Compilar para producción:

   ```bash
   npm run build
   npm run preview
   ```

## 🌐 Despliegue

La aplicación se integra con Vercel para despliegue continuo. Cada push a la rama principal dispara una compilación y publicación automática, aprovechando la CDN global de Vercel para una entrega rápida del contenido citeturn1search17.

## 📂 Estructura del proyecto

```
guitarla-react-ts/
├── public/            # Activos estáticos
├── src/
│   ├── components/    # Componentes reutilizables
│   ├── reducers/ # Configuración de Context y Reducers
│   ├── App.tsx        # Componente raíz
│   └── main.tsx       # Punto de entrada
├── tsconfig.json      # Configuración de TypeScript
├── vite.config.ts     # Configuración de Vite
└── package.json
```

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Para proponer cambios:

1. Haz un fork del repositorio.
2. Crea una rama con tu feature o fix (`git checkout -b feature/nombre-feature`).
3. Realiza commits descriptivos.
4. Abre un pull request detallando los cambios.

## 📄 Licencia

Este proyecto está bajo la licencia MIT.
