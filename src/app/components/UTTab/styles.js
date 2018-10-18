import Colors from 'scss/_colors.scss';

export const style = {
  tabsRoot: {
    minHeight: 0,
    border: `1px solid ${Colors.disabledGray}`
  },
  tabRoot: {
    fontFamily: 'Nunito',
    backgroundColor: Colors.white,
    height: 38,
    transition: `all 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
    willChange: 'left, width',
    '&:hover:not($selected)': {
      backgroundColor: Colors.lightGray,
      transition: 'background-color 0.75s ease'
    },
    '&$selected': {
      color: Colors.white
    }
  },
  selected: {
    backgroundColor: Colors.lightBlue
  },
  indicator: {
    backgroundColor: Colors.transparent
  }
};
