import { ChildAsFC } from './Child';

const Parent = () => {
  return <ChildAsFC
  color="red"
  onClick={() => console.log('Clicked')}>
    coucou
  </ChildAsFC>;
};

export default Parent;
