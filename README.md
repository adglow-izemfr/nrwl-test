# Research

Aplicación web para buscar información sobre librerías y herramientas de desarrollo

## 🎯 Objetivos

- Programar con la última tecnología Angular
- Probar herramientas _no tan comunes todavía_ como Nx, Jest, strict mode...
- Explorar opciones de tu interés
- Esto es una practica para ti.
- La funcionalidad no es crítica.

## 📋 Requerimientos técnicos

- Usar un mono repositorio multi proyecto (una app y múltiples librerías) con Nx
- Emplear el patrón _Container presenter_ y la detección de cambios _OnPush_
- Usar capacidades observables del router.
- Controlar el estado con un gestor propio o usar uno que conozcas (_Akita, NgRx, MiniRx_...)
- Usar formularios reactivos con validaciones y controles personalizados (_Control Value Accessor_).
- Extraer responsabilidad común a directivas, templates, pipes e interceptores

## ✨ Funcionalidad esperada

- [ ] Consultar un tema, un paquete o un repositorio en GitHub, en NPM y StackOverflow.

- [ ] Realizar búsquedas específicas por rangos de fechas cuando el API lo permita

- [ ] Permitir ordenar la respuesta por algún criterio

- [ ] Muestra la información que te parezca más adecuada

- [ ] Usa el framework CSS que prefieras.

## 🧰 Recursos

Usar las APIs de estos servicios

[GitHub](https://docs.github.com/en/rest)

[NpmJS](https://github.com/npm/registry/blob/master/docs/download-counts.md)

[StackOverflow](https://api.stackexchange.com/docs)

### Ejemplos de APIs:

```bash
curl 'https://api.github.com/search/repositories?q=angular&per_page=10'

curl 'https://registry.npmjs.org/-/v1/search?text=angular&size=5'

curl 'https://api.npmjs.org/downloads/point/last-week/@angular/cli'

curl 'https://api.npmjs.org/downloads/point/last-month/@angular/cli'

curl 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&tagged=angular&site=stackoverflow'
```

## 🎁 Sugerencias

Instala las **extensiones** recomendadas en `vscode\extensions.json`

Ejecuta los **scripts** _poco a poco_

Sigue los **ejemplos** vistos en el curso

Familiarízate con los **nuevos tipos** de componentes

> Explora y diviértete, aquí puedes!
