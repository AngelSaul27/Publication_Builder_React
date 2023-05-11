# Sistema de Publicaciones
Un constructor de publicaciones es una herramienta que permite crear contenido para publicar en un sitios web. Este constructor incluye funciones para diseñar y personalizar el aspecto del contenido, agregar texto, imágenes, videos y otros elementos multimedia.  Para el desarrolo de este sistema se utiliza React que es una biblioteca de código abierto creada por Facebook que se utiliza para construir interfaces de usuario (UI) en la web. Con React, puedes crear componentes reutilizables que te permiten construir aplicaciones escalables y fáciles de mantener.
# Primeros Pasos (Dependencias) 📕

Para el desarrollo de este sitio web se utilizo la Bibloteca de código abierto React. Create React App es una forma oficial de crear aplicaciones React de una sola página. Ofrece una configuración de compilación moderna sin configuración.

```powershell
npx create-react-app PublicationBuilder
cd PublicationBuilder
npm start
```

En el directorio del proyecto, podemos ejecutar

npm start : Ejecuta la aplicación en el modo de desarrollo. Abre http://localhost:3000 para verla en el navegador.

npm test : Inicia el ejecutor de pruebas en el modo de observación interactivo. Consulte la sección sobre ejecución de pruebas para obtener más información. 

npm run build : Compila la aplicación para producción en la carpeta de compilación. Agrupa correctamente React en modo de producción y optimiza la compilación para obtener el mejor rendimiento.

## Taildwincss

Tailwind CSS es un framework de CSS de código abierto para el diseño de páginas web. La principal característica de esta biblioteca es que, a diferencia de otras como Bootstrap, no genera una serie de clases predefinidas para elementos como botones o tablas. 

Instala tailwindcss a través de npm, y luego ejecuta el comando init para generar tu archivo tailwind.config.js.

```bash
npm install -D tailwindcss
npx tailwindcss init
```

Añade las rutas a todos tus archivos de plantilla en tu archivo  **`tailwind.config.js`**.

```jsx
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Añade las directivas **`@tailwind`** para cada una de las capas de Tailwind a tu archivo **`./src/index.css`**.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

<aside>
🚧 Create React App no admite configuraciones PostCSS personalizadas y es incompatible con muchas herramientas importantes del ecosistema PostCSS, como `postcss-import`. Recomendamos encarecidamente utilizar Vite, Parcel, Next.js o Remix en lugar de Create React App. Proporcionan una experiencia de desarrollador equivalente o mejor pero con más flexibilidad, dándote más control sobre cómo se configuran Tailwinds

</aside>

### Identificadores únicos - Uuid

En React, una manera común de crear identificadores únicos para los atributos **`data-block-id`** es utilizando la biblioteca **`uuid`**. Esta biblioteca facilita la creación de identificadores únicos de manera simple y confiable.

```powershell
npm install uuid
```

### Typpy.js

Tippy.js es la solución completa de información sobre herramientas, ventana emergente, menú desplegable y menú para la web, con tecnología de Popper.

## Esquemas de Bloques

### Listas Numeradas

```jsx
<div data-block-id={uuidv4()} className="flex items-start">
	<OptionsBlock />
  <div data-block="root" type="lista-numerada" className="text-white">
   <div className="list-decimal w-full flex items-center">
      <li></li>
	    <div contentEditable="true" placeholder="Escibe aquí."></div>
	  </div>
	</div>
</div>
```

### Textos

```jsx
<div data-block-id={uuidv4()} className="flex items-start">
  <OptionsBlock />
	<div data-block="root" type="text" className="text-white">
	  <div contentEditable="true" placeholder="Escibe aquí."></div>
	</div>
</div>
```

## Funciones del Sistema
