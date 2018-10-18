import React from 'react';

const styles = {
  leftIcon: {
    color: 'inherit'
  }
};

const links = logout => [
  {
    text: 'Configuración',
    // icon: <FaCogs style={styles.leftIcon} />,
    items: [
      { text: 'Chatbots', link: '/chatbots' }
      /* {text: 'Apariencia',link: '/apariencia'},
            {text: 'Tips',  link: '/tips'},
            {text: 'Banners',  link: '/banners'}*/
    ]
  },
  /* {
        text: 'Atención al cliente',
        icon: <FaHeadPhones style={styles.leftIcon}/>,
        items: [
            {text: 'Gestión de notificaciones', link: '/perfil'},
            {text: 'Video Chat',    link: '/videochat'}
        ]
    },
    {
        text: 'Analytics',
        icon: <FaBarChart style={styles.leftIcon}/>,
        items: [
            {text: 'Usuarios y descargas',link: '/adopcion'},
            {text: 'Indicadores de uso',link: '/actividad'},
            {text: 'Transacción',link: '/transaccion'},
            {text: 'Beneficios estimado',link: '/beneficios'}
        ]
    },
    {text: 'Social',link: '/social', icon: <FaPowerOff style={styles.leftIcon}/>},*/
  {
    text: 'Salir',
    link: '',
    // icon: <FaPowerOff style={styles.leftIcon} />,
    onClick: logout
  }
];

export default links;
