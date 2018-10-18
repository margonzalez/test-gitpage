import { shape, string, any, arrayOf, func, number, node } from 'prop-types';

export const locationPropTypes = shape({
  pathname: string.isRequired,
  state: any, // eslint-disable-line react/forbid-prop-types
  search: string
});

export const cardActionsTypes = {
  header: shape({
    title: string,
    subtitle: string,
    menu: arrayOf(
      shape({
        name: string,
        onPress: func
      })
    )
  }),
  footer: arrayOf(
    shape({
      name: string,
      onPress: func
    })
  )
};

export const stepType = shape({
  order: number,
  component: func,
  props: shape({
    options: arrayOf(
      shape({
        id: number,
        label: string,
        icon: node
      })
    )
  })
});
