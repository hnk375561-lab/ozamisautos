# Ozamis Autos y Motos — demo web

Demo estática, no oficial, preparada exclusivamente para Ozamis Autos y Motos, con domicilio público informado en Av. San Martín Sur 1123, Godoy Cruz, Mendoza.

## Generación y validación

- `npm run build`: genera las páginas públicas desde `data/dealership.json`.
- `npm test`: comprueba identidad, rutas principales, noindex y ausencia de la marca anterior.
- `npm run dev`: servidor local de vista previa.

La demo permanece con `noindex` y bloquea rastreo. No se incluye inventario como vigente: los vehículos y precios de ambos dossiers son capturas históricas y requieren confirmación. Horarios, redes sociales exactas y correo también están pendientes de confirmación.

## Criterios para cargar unidades

Cada ficha debe incorporar únicamente campos confirmados y disponibles para esa unidad: marca, modelo, versión, año, kilometraje, condición, combustible, motor, transmisión, tracción, potencia/equipamiento, precio y moneda, gastos adicionales, fuente, fecha de revisión y estado de stock. Los campos faltantes se omiten; no se infieren desde el nombre de modelo ni la URL de un filtro.

Separar precio, entrega/anticipo, capital financiado y cuotas indicativas. Los simuladores no equivalen a ofertas comerciales; no publicar tasa cero, cuotas o campañas sin confirmación documentada. Registrar permuta por menor/mayor por unidad, sin generalizar. No solicitar DNI/CUIT en esta demo.

## Fuentes

Las referencias públicas, incluidas las fichas individuales del dossier complementario, están en `data/sources.json`. Son capturas de anuncios y no prueban disponibilidad vigente.


`data/historical-listings.json` conserva una selección estructurada de anuncios y simulaciones del dossier complementario. Es un archivo interno de investigación, marcado `publicar: false` y no consumido por el generador del catálogo. No copiar sus precios, cuotas ni estados al catálogo sin confirmar cada unidad.
