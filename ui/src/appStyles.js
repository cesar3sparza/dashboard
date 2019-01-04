const appStyles = {
  main: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    backgroundColor: 'lightblue'
  },
  app: {
    backgroundColor: 'lightblue'
  },
  weatherApp: {
    gridColumnStart: 1,
    gridColumnEnd: 2,
    padding: '10rem'
  },
  todoApp: {
    gridColumnStart: 2,
    gridColumnEnd: 3,
    padding: '10rem'
  },
  nestApp: {
    gridColumnStart: 1,
    gridColumnEnd: 3,
    display: 'grid',
    gridTemplateColumns: 'auto auto auto',
    h2: {
      gridColumnStart: 1,
      gridColumnEnd: 4
    }
  },
  nestCameras: {
    display: 'inlineGrid'
  }
};

export default appStyles;