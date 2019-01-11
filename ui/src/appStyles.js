const appStyles = {
  main: {
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    backgroundColor: '#545a5a',
    color: 'white'
  },
  app: {
    backgroundColor: 'lightblue'
  },
  appH2:{
    backgroundColor: 'cadetblue',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    margin: 0,
    textAlign: 'center'
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
  toDoItems: {
    cursor: 'pointer'
  },
  reloadTasks: {
    color: 'cadetblue',
    cursor: 'pointer',
    position: 'relative',
    top: -45,
    left: 80
  },
  ul: {
    height: '10rem',
    overflow: 'overlay',
    color: '#bdbdbd'
  },
  nestApp: {
    alignCenter: 'center',
    display: 'grid',
    gridColumnStart: 1,
    gridColumnEnd: 3,
    gridTemplateColumns: 'auto auto auto',
    h2: {
      backgroundColor: 'cadetblue',
      gridColumnStart: 1,
      gridColumnEnd: 4,
      textAlign: 'center',
      textTransform: 'uppercase'
    },
    marginBottom: 50
  },
  nestCameras: {
    display: 'inlineGrid'
  },
  camsH4: {
    color: 'white'
  }
};

export default appStyles;