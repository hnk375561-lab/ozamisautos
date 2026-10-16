import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=(p)=>fs.readFileSync(path.join(root,p),'utf8');
const data=JSON.parse(read('data/dealership.json'));
const vehicles=JSON.parse(read('data/vehicles.json'));
const historical=JSON.parse(read('data/historical-listings.json'));
const errors=[];
if(data.identity?.tradeName!=='Ozamis Autos y Motos')errors.push('Nombre comercial debe ser Ozamis Autos y Motos');
if(data.location?.city!=='Godoy Cruz'||data.location?.province!=='Mendoza')errors.push('Ubicación inesperada');
if(data.contact?.whatsApp!=='5492615618888')errors.push('WhatsApp inesperado');
if(!Array.isArray(vehicles.autos))errors.push('data/vehicles.json debe incluir un array autos');
if(!Array.isArray(historical.unidades)||historical.unidades.some((x)=>x.publicar!==false||x.stockConfirmado!==false))errors.push('Las referencias históricas deben permanecer marcadas no publicables y sin stock confirmado');
for(const p of ['index.html','privacidad.html','reserva.html','404.html']){
 const html=read(p);
 if(/Horizonte Automotores|Grupo Almafuerte|María Grande|Entre Ríos/i.test(html))errors.push(`${p} conserva contenido de la marca anterior`);
 if(!html.includes('Ozamis'))errors.push(`${p} no menciona Ozamis`);
}
const home=read('index.html');
if(!home.includes('No publicamos “tasa cero”')||!home.includes('simuladores de cuotas son estimaciones'))errors.push('La página principal debe explicar que los simuladores no son una oferta comercial');
if(!read('privacidad.html').includes('No solicita DNI, CUIT'))errors.push('La página de privacidad debe aclarar que no se solicitan datos crediticios');
if(fs.existsSync(path.join(root,'robots.txt'))&&!read('robots.txt').includes('Disallow: /'))errors.push('La demo debe seguir bloqueando indexación');
if(errors.length){console.error(errors.join('\n'));process.exit(1)}
console.log('OK: demo Ozamis validada; páginas no oficiales/noindex y sin contenido de la concesionaria anterior.');
