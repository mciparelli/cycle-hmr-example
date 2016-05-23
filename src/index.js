import { div, button } from '@cycle/dom';

const view = count =>
  div('.counter', [
    div('.count', `Count: ${count}`),
    button('.subtract', 'Subtract'),
    button('.add', 'Add')
  ])
;

export default ({ DOM }) => {
  const addReducer = count => count + 1;
  const removeReducer = count => count - 1;

  const add$ = DOM
    .select('.add')
    .events('click')
    .mapTo(addReducer);

  const subtract$ = DOM
    .select('.subtract')
    .events('click')
    .mapTo(removeReducer);

  const count$ = add$.merge(subtract$).fold((count, reducer) => reducer(count), 0);

  return {
    DOM: count$.map(view)
  };
}
