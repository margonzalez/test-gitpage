import i18next from 'i18next';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

i18next.init({
  lng: 'es',
  initImmediate: false
});

i18next.addResources('es', 'Commons', {
  accept: 'Aceptar',
  cancel: 'Cancelar',
  select: 'Seleccionar',
  back: 'Volver',
  name: 'Nombre',
  type: 'Tipo',
  status: 'Estado',
  address: 'Dirección',
  return: 'Volver',
  modify: 'Modificar',
  confirm: 'Confirmar',
  next: 'Siguiente',
  loading: 'Cargando',
  yes: 'Si',
  no: 'No',
  save: 'Guardar'
});

i18next.addResources('es', 'Map', {
  button: 'Localizacion'
});

requireAll(require.context('..', true, /i18n[\w]*\.js$/));
