# Data Dashboard
Este proyecto consistió en crear un Dashboard según las especificaciones de los clientes.
Para afrontar este trabajo ambas hicimos un sketch con lápiz y papel para poder mostrar las ideas a la compañera, finalmente se creó un mockup para visualizar mejor el trabajo.
Se entrevistaron a los clientes y comenzó la realización del dashboard.

![alt text](https://i.imgur.com/hJR17cn.jpg)

### Procedimiento de realización de Data Dashboard Index.Html
+  Realización de Sketch, para tener la idea de lo que se deseaba realizar.
+ Definición del Documento.
+ Declaración de los Link a utilizar como: la dirección del archivo css, iconos de font awesome y fuentes de google fonts, ChartJs (para los gráficos)
+ Creación de la etiqueta header, dentreo de esta esta la etiqueta  Nav para realizar el menú inicio de la barras de navegación y barra de navegación principal (arriba), menú dropdown, menú dropdown del año, grupo y turno países e idioma, se colocaron iconos y etiquetas.
+ Barra de navegación secundaria.
+ Creación de Gráficos.
+Fieldset de pag estudiantes (filtra alumnas) 
+ Se creo el contenedor data estudiantes
+ Botones atrás adelante


### Procedimiento de realización de Data Dashboard APP.js
+ Se realizaron las funciones necesarias para poder obtener la data suministrada a través del json.
+ En el caso de SCL 2017-2 daba muchos errores por falta de información no entregada por el cliente, por ello para poder llevar a cabo el trabajo, se decidió utilizar una parte con funciones y otra sacar las cuentas a lápiz, papel y calculadora para realizar los gráficos dinámicos y poder entregar el proyecto.
+ Se inicia la realización de los gráficos a través del DOM conjuntamente con ChartJs
+ Inicio funciones alumnas scl2017II, alumnas inscritas SCL 2017 II (enrollment)
+ Desarrollo de función que achica la barra de navegación secundaria.
+ Dropdown de países, idioma, turno, generación y sedes al hacer click.
+ Se crean párrafos por medio del DOM para ingresar información a los primeros tres div de la parte superior de la página.
+ Muestra el home con los gráficos
+ Oculta el home para mostrar las estudiantes.

## Sobre el cliente

En Laboratoria, las Training Managers (TMs) hacen un gran trabajo al analizar la mayor cantidad de datos posibles respecto al desempeño de las estudiantes para apoyarlas en su aprendizaje. Para revisar esta data, las TMs, normalmente, tienen que revisar muchos documentos de excel (Google Spreadsheets) que están localizados en distintas carpetas y ubicaciones. Muchas veces pierden tiempo localizando estos documentos y ejecutando fórmulas para obtener los datos que revisan.

Para poder optimizar su tiempo, las TMs han solicitado que construyamos una herramienta web donde puedan ver estos datos fácil y rápidamente. Y nos comentaron que estos son los datos que revisan normalmente:

* El total de estudiantes presentes por sede y generación.
* El porcentaje de deserción de estudiantes.
* La cantidad de estudiantes que superan la meta de puntos en promedio de todos los sprints cursados. La meta de puntos es 70% del total de puntos.
* El porcentaje que representa el dato anterior en relación al total de estudiantes.
* El Net Promoter Score (NPS) promedio de los sprints cursados. El NPS se calcula, en base a la encuesta que las estudiantes responden al respecto de la recomendación que darían de Laboratoria, bajo la siguiente fórmula:

[Promoters] = [Respuestas 9 o 10] / [Total respuestas] * 100
[Passive] = [Respuestas 7 u 8] / [Total respuestas] * 100
[Detractors] = [Respuestas entre 1 y 6] / [Total respuestas] * 100

[NPS] = [Promoters] - [Detractors]
* La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos técnicos en promedio y por sprint.
* La cantidad y el porcentaje que representa el total de estudiantes que superan la meta de puntos de HSE en promedio y por sprint.
* El porcentaje de estudiantes satisfechas con la experiencia de Laboratoria.
* La puntuación promedio de l@s profesores.
* La puntuación promedio de l@s jedi masters.
Con esa información y con la base de datos que nos facilitaron pudimos crear este diseño. Sin embargo, creemos que tú podrías proponer algún cambio a este diseño que pueda mejorar la experiencia de las TMs.

## ¿Qué se requiere?

La definición del diseño
Implementación del data dashboard usando html, css y js.

## ¿Cómo empezar?

Debes realizar un fork de este repositorio.

Luego deberás clonar tu fork en tu máquina. Recuerda que el comando a usar es git clone y su estructura normalmente se ve así:

git clone https://github.com/<nombre-de-usuario>/data-dashboard.git

## Adicionales

En Laboratoria (y sobre todo las TMs) somos adictos a la representación gráfica de los datos y como muestra el diseño, sería ideal poder mostrar los datos procesados en un gráfico como el diseño propone u otra alternativa.

Nota: En la etapa de diseño de la experiencia del producto, nos dimos cuenta que Google Charts podría ser una opción para desarrollar estos gráficos, pero no es la única que se puede usar :smiley:.

Además, la proactividad (siempre de las TMs :joy:) hace que el siguiente requerimiento adicional sea muy útil:

Tener un botón que permita indicar que una estudiante ha salido del Bootcamp y alterar los totales afectados por este cambio.
