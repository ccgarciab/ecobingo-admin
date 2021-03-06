
let defs = new Map([["B1", [["Siembra un árbol:"], [" 22 árboles suplen la demanda de oxígeno de una persona"]]],
  ["B2", [["Separar en la fuente:"], [" Clasificar los residuos sólidos en su origen facilita su manejo y aprovechamiento"]]],
  ["B3", [["Ahorra agua:"], [" Cierra el grifo mientras te afeitas o te lavas los dientes"]]],
  ["B4", [["Reciclar:"], [" Reincorporar residuos en procesos productivos como materia prima para crear nuevos productos"]]],
  ["B5", [["Laguna La Calderona:"], [" Espejo de agua de 12,2 hectáreas ubicada en el municipio de Ciénega"]]],
  ["B6", [["CESAM:"], [" Centro de Servicios Ambientales de CORPOCHIVOR en Garagoa"]]],
  ["B7", [["Embalse la esmeralda:"], [" Lago artificial que proporciona potencial hidráulico a la central hidroeléctrica de Chivor"]]],
  ["B8", [["Ahorra energía:"], [" Desconecta los aparatos eléctricos que no estés utilizando"]]],
  ["B9", [["Turismo sostenible:"], [" Protege la integridad ambiental, social, económica, y cultural."]]],
  ["B10", [["C.A.V.R:"], [" Centro de Atención Valoración y Rehabilitación de Fauna Silvestre."]]],
  ["B11", [["Conflicto fauna:"], [" interacción negativa entre las actividades humanas y la fauna silvestre"]]],
  ["B12", [["D.R.M.I.:"], [" Distrito Regional de Manejo Integrado, Categoría de protección otorgada a un ecosistema."]]],
  ["B13", [["Cuchilla Negra y Guanaque:"], [" Ecosistema bosque alto andino, ubicada en Chivor, Campohermoso, Macanal y Santa María."]]],
  ["B14", [["Cuchilla San Cayetano:"], [" Ecosistema bosque alto andino, ubicada en Guayatá, Somondoco, Almeida y Chivor."]]],
  ["B15", [["Cuchilla El Varal:"], [" Surte el 100% del acueducto municipal de Macanal."]]],
  ["I16", [["Oso Andino:"], [" Se encuentra en los ecosistemas de San Cayetano y Mamapacha y Bijagual."]]],
  ["I17", [["Águila Crestada:"], [" Se encuentra entre los ecosistemas de Cuchillas negra, Guanaque y San Cayetano."]]],
  ["I18", [["Periquillo Aliamarillo:"], [" Se encuentra en los ecosistemas de Mamapacha y Bijagual, Cuchilla El Varal y Cuchillas Negra y Guanaque."]]],
  ["I19", [["AVIVATE:"], [" Red de Avistamiento de aves de la jurisdicción de CORPOCHIVOR."]]],
  ["I20", [["PRAE:"], [" Proyecto Ambiental Escolar que desarrollan las instituciones educativas de la jurisdicción."]]],
  ["I21", [["PROCEDA:"], [" Proyecto Ciudadano de Educación Ambiental, fomentado por la comunidad"]]],
  ["I22", [["CIDEA:"], [" Comité Interinstitucional de Educación Ambiental de cada municipio"]]],
  ["I23", [["Participación Ciudadana:"], [" Proceso que involucra las comunidades en el desarrollo de actividades de interés social."]]],
  ["I24", [["CLUBES CORPOCHIVATOS:"], [" Grupos de niños y jóvenes líderes ambientales de las instituciones educativas de la jurisdicción de CORPOCHIVOR"]]],
  ["I25", [["Cultura Ambiental:"], [" Cambia tus malos hábitos ambientales y protege los recursos naturales"]]],
  ["I26", [["Gobernanza Forestal:"], [" Participación de la comunidad en la gestión del recurso forestal."]]],
  ["I27", [["ERSA:"], [" Esquema de Retribución por Servicios Ambientales."]]],
  ["I28", [["PSA:"], [" Pago por Servicios Ambientales."]]],
  ["I29", [["REDD+:"], [" mecanismo internacional que busca la Reducción de Emisiones de gases efecto invernadero provenientes de la Deforestación y Degradación del Bosque."]]],
  ["I30", [["Economía circular:"], [" Repensar, reutilizar, reparar, restaurar, remanufacturar, reducir, re-proponer, reciclar y recuperar materiales y productos de un proceso."]]],
  ["N31", [["Concesión de Aguas:"], [" Permiso para obtener el derecho al aprovechamiento de las aguas Superficiales y Subterráneas"]]],
  ["N32", ["ICA: ", "Índice de Calidad del Agua."]],
  ["N33", [["POMCA:"], [" Plan de Ordenación y Manejo de la Cuenca Hidrográfica."]]],
  ["N34", [["Cuenca Hidrográfica:"], [" Territorio cuyas aguas fluyen todas hacia un mismo río, lago o mar."]]],
  ["N35", [["PUEAA:"], [" Programa de Uso Eficiente y Ahorro del Agua. Herramienta enfocada a la optimización del uso del recurso hídrico."]]],
  ["N36", [["POT:"], [" Plan de Ordenamiento Territorial."]]],
  ["N37", [["Licencia Ambiental:"], [" Autorización que otorga la Autoridad Ambiental para la ejecución de un proyecto, obra o actividad que pueda ocasionar deterioro grave a los recursos naturales renovables"]]],
  ["N38", [["PSMV:"], [" Plan de Saneamiento y Manejo de Vertimientos."]]],
  ["N39", [["Permisos de aprovechamiento Forestal:"], [" Permiso que concede la Autoridad Ambiental como derecho a aprovechar bosques naturales (únicos, persistentes o domésticos) ubicados en terrenos de dominio público o privado."]]],
  ["N40", [["Incendio Forestal:"], [" Fuego que se propaga sin control por la cobertura vegetal, causando graves problemas a los ecosistemas"]]],
  ["N41", [["Permiso de vertimientos:"], [" Permiso que la Autoridad Ambiental otorga para la descarga de aguas residuales a un cuerpo de agua."]]],
  ["N42", [["Trámite Ambiental:"], [" Proceso que se adelanta ante la Autoridad Ambiental, con el objetivo de obtener un aprovechamiento de los recursos naturales renovables y/o movilización de los mismos."]]],
  ["N43", [["Problemática ambiental:"], [" Desequilibrio ambiental que afecta negativamente a los recursos naturales"]]],
  ["N44", [["Agroambiental:"], [" Articulación de técnicas agrícolas con la preservación de los recursos naturales."]]],
  ["N45", [["Cuenca Río Garagoa:"], [" Abarca municipios de las provincias de Centro, Márquez, Neira y Oriente"]]],
  ["G46", [["Cuenca Río Lengupá:"], [" Presente en los municipios de San Luis de Gaceno, Santa María, Campohermoso, Macanal, Garagoa, Chinavita y Ramiriquí"]]],
  ["G47", [["Cuenca Río Upia:"], [" En la jurisdicción de CORPOCHIVOR está presente en el municipio de San Luis de Gaceno."]]],
  ["G48", [["Cuenca Río Guavio:"], [" En la jurisdicción de CORPOCHIVOR está presente en los municipios de Guayatá, Almeida, Chivor, San Luis de Gaceno y Santa María."]]],
  ["G49", [["PRAU:"], [" Proyectos Ambientales Universitarios, para promover la educación ambiental."]]],
  ["G50", [["Red hidroclimática:"], [" Monitoreo de condiciones hídricas, climáticas, precipitaciones, alertas y eventos del territorio"]]],
  ["G51", [["Complejo de Páramo de Chingaza:"], [" Tiene una extensión de 424,73 hectáreas, presente en los municipios de Guayatá, Almeida y Chivor en la jurisdicción de CORPOCHIVOR."]]],
  ["G52", [["Complejo de Páramo de Rabanal:"], [" Provisiona de recurso hídrico a las provincias de Centro y Márquez y aporta agua a una población estimada de 300.000 habitantes"]]],
  ["G53", [["Complejo de Páramo Altiplano Cundiboyacense:"], [" Ecosistema paramuno, con menor cobertura en la Jurisdicción de CORPOCHIVOR."]]],
  ["G54", [["Complejo de Páramo Tota-Bijagual-Mamapacha:"], [" Corredor biológico en zonas de páramo y bosque altoandino y hábitat de especies en peligro de extinción."]]],
  ["G55", [["Laguna Verde:"], [" Humedal natural ubicado en DRMI páramo Rabanal, municipio de Ventaquemada"]]],
  ["G56", [["Negocio verde:"], [" Producción sostenible de bienes o servicios."]]],
  ["G57", [["Cuchilla Mesa Alta:"], [" Ubicada en los municipios de Tibaná y Nuevo Colón, entre los 2450 y los 2950 msnm."]]],
  ["G58", [["Humedal:"], [" Superficie húmeda, hábitat de diversidad biológica"]]],
  ["G59", [["Recurso hídrico:"], [" Cuerpos de agua que existen en el planeta, necesitamos el agua ¡Cuidémosla!"]]],
  ["G60", [["Cambio climático:"], [" Alteración del clima, causado por las actividades humanas"]]],
  ["O61", [["Gestión del riesgo:"], [" Conocimiento, reducción y manejo de posibles desastres"]]],
  ["O62", [["Desarrollo sostenible:"], [" Satisface las necesidades del ser humano en el presente sin afectar las futuras generaciones"]]],
  ["O63", [["Permiso ambiental:"], [" Autorización que otorga la autoridad para ejecutar determinada actividad o proyecto"]]],
  ["O64", [["PGIRS:"], [" Plan de Gestión Integral de Residuos Sólidos"]]],
  ["O65", [["PQRS:"], [" Peticiones, Quejas, Reclamos y Solicitudes que realizan los usuarios"]]],
  ["O66", [["Infracción Ambiental:"], [" Toda aquella acción u omisión que constituya violación de las normas contenidas en el Código de Recursos Naturales Renovables."]]],
  ["O67", [["Fauna:"], [" Conjunto de especies animales que habitan una región geográfica."]]],
  ["O68", [["Flora:"], [" Conjunto de especies de plantas que se encuentran en una región geográfica"]]],
  ["O69", [["Deforestación:"], [" Disminución de la cobertura boscosa por acción del ser humano."]]],
  ["O70", [["Servicios ecosistémicos:"], [" Todos aquellos recursos naturales necesarios para subsistir que nos ofrece la naturaleza."]]],
  ["O71", [["Energías renovables:"], [" Se obtienen a partir de fuentes naturales que producen energía"]]],
  ["O72", [["Biodiversidad:"], [" Variedad de organismos vivos que se encuentran en un espacio determinado."]]],
  ["O73", [["Tasa por uso de aguas:"], [" Cobro que se realiza a todos los usuarios del recurso hídrico."]]],
  ["O74", [["Tasa retributiva:"], [" Cobro que se realiza por la contaminación por vertimientos a cuerpos de agua"]]],
  ["O75", [["Páramo de Cristales, Castillejo o Guachaneque:"], [" Ecosistema bosque alto andino y páramo, ubicado en los municipios de Turmequé, Úmbita, Pachavita y La Capilla"]]],
  ["", ["", ""]]]);
  
export {defs};
